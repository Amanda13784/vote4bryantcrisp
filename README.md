# vote4bryantcrisp
Mayoral Campaign static Next.js/ React website, using Tailwind. 

## Contact Form Email Setup

To enable the contact form to send emails, you must set up email credentials in a `.env.local` file in the project root. The form will not send emails until these are configured.

Add the following variables to your `.env.local` file:

```
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_SECURE=true_or_false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_TO_EMAIL=bryant@email.com
```

Replace the values with your actual SMTP provider details and Bryant's email address. After updating, restart the development server. 

## Volunteer Form Setup

The Volunteer page (`pages/volunteer.js`) currently uses a placeholder embedded Google Form. When Bryant is ready, create a Google Form with the required fields (Name, Email, Phone, Volunteering Preference) and copy the embed link from Google Forms.

**To update the form:**
1. Replace the `src` attribute in the `<iframe>` in `pages/volunteer.js` with Bryant's actual Google Form embed link.
2. This will allow all volunteer responses to be collected in Bryant's Google account for easy access and management. 
