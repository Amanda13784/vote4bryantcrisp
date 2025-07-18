//pages/donate.js
import Image from 'next/image';

export default function Donate() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-blue-900 text-white h-[50vh] flex items-center justify-center pt-16" role="banner" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
        <Image
          src="/images/BCMain.png"
          alt="Donate to Bryant Crisp"
          fill
          className="object-cover object-top"
          style={{ objectPosition: 'center 20%' }}
          priority
        />
        <div className="relative z-20 px-4 text-center">
          <div className="mb-6">
            <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-2 tracking-tight">
              <span className="text-yellow-400">Donate</span>
              <br />
              <span className="text-white">to Bryant Crisp</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-2"></div>
            <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100 text-gray-800" aria-labelledby="donate-section-heading">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 id="donate-section-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-6">Support the Campaign</h2>
          <p className="text-center mb-8 text-gray-700 font-political">Your contribution helps us reach more voters and build a better Gibsonville. Thank you for your support!</p>
          {/* Replace the href below with Bryant's actual ActBlue donation link or embed code when ready */}
          <div className="flex justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-blue-900 font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-yellow-400 transition-colors"
            >
              Donate via ActBlue
            </a>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section id="cta" className="py-12 sm:py-16 bg-blue-900 text-white text-center" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-traditional font-semibold mb-4">Ready to Make a Difference?</h2>
          <p className="text-base sm:text-lg mb-6 font-political">Stand with Bryant to build a stronger Gibsonville.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-200 transition-colors inline-block">Contact Us</a>
            <a href="/donate" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block">Donate</a>
            <a href="/volunteer" className="bg-blue-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors inline-block">Volunteer</a>
          </div>
        </div>
      </section>
    </main>
  );
}
