// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    //Using Resend (recommended for Vercel)
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Bryant Crisp Campaign <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL || 'voteforbryantcrisp@gmail.com'],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">New Contact Form Submission</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from the Bryant Crisp for Gibsonville Mayor campaign website.
            </p>
          </div>
        `,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      throw new Error(`Resend API error: ${resendResponse.status}`);
    }

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    
    // More specific error messages for debugging
    if (error.message.includes('Resend API error')) {
      return res.status(500).json({ 
        message: 'Email service error', 
        details: error.message 
      });
    }
    
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({ 
        message: 'Email service not configured', 
        details: 'RESEND_API_KEY is missing' 
      });
    }
    
    return res.status(500).json({ 
      message: 'Error sending email',
      details: error.message 
    });
  }
} 