//pages/contact.js
import { useState } from 'react';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-blue-900 text-white h-[50vh] flex items-center justify-center pt-16" role="banner" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
        <Image
          src="/images/BCMain.png"
          alt="Contact Bryant Crisp"
          fill
          className="object-cover object-top"
          style={{ objectPosition: 'center 20%' }}
          priority
        />
        <div className="relative z-20 px-4 text-center">
          <div className="mb-6">
            <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-2 tracking-tight">
              <span className="text-yellow-400">Contact</span>
              <br />
              <span className="text-white">Bryant Crisp</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-2"></div>
            <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100 text-gray-800" aria-labelledby="contact-form-heading">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="inline-block text-blue-900 text-3xl"><HiOutlineMail /></span>
              <h2 id="contact-form-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center">Send a Message</h2>
            </div>
            <div className="w-16 h-1 bg-yellow-400 mb-4"></div>
            <p className="text-gray-700 text-center max-w-md font-political">We’d love to hear from you! Fill out the form below and Bryant will get back to you soon.</p>
          </div>
          <div className="relative">
            <form onSubmit={handleSubmit} className="bg-white/90 border-2 border-blue-900 p-6 rounded-lg shadow-xl space-y-6 backdrop-blur-sm">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:scale-105 transition-all w-full shadow-md"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-600 text-center font-semibold">Message sent! Thank you for reaching out.</p>}
              {status === 'error' && <p className="text-red-600 text-center font-semibold">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
