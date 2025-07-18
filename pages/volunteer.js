//pages/volunteer.js
import Image from 'next/image';

export default function Volunteer() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-blue-900 text-white h-[50vh] flex items-center justify-center pt-16" role="banner" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
        <Image
          src="/images/BCMain.png"
          alt="Volunteer for Bryant Crisp"
          fill
          className="object-cover object-top"
          style={{ objectPosition: 'center 20%' }}
          priority
        />
        <div className="relative z-20 px-4 text-center">
          <div className="mb-6">
            <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-2 tracking-tight">
              <span className="text-yellow-400">Volunteer</span>
              <br />
              <span className="text-white">for Bryant Crisp</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-2"></div>
            <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100 text-gray-800" aria-labelledby="volunteer-form-heading">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 id="volunteer-form-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-6">Sign Up to Volunteer</h2>
          <p className="text-center mb-8 text-gray-700 font-political">We need your help! Fill out the form below to join Bryant's campaign as a volunteer. Choose how you'd like to get involved and we'll be in touch soon.</p>
          {/* Replace the src below with Bryant's actual Google Form embed link when ready */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfDUMMYFORMURL/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Volunteer Form"
              className="w-full min-h-[600px]"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
