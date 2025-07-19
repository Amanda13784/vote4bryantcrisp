//pages/index.js

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white h-[60vh] flex items-center justify-center pt-16" role="banner" aria-labelledby="hero-heading">
                <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
                <Image
                    src="/images/BCGibsonville.png"
                    alt="Bryant Crisp - Candidate for Mayor"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 px-4 text-center">
                    <div className="mb-6">
                        <h1 id="hero-heading" className="font-traditional font-bold tracking-wide flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">Bryant Crisp</div>
                            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic font-extralight">for Mayor</div>
                        </h1>
                    </div>
                    <p className="text-base sm:text-lg md:text-2xl mb-6 max-w-2xl mx-auto font-political">Leadership. Integrity. Progress.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="/donate" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block" aria-label="Donate to Bryant Crisp's campaign">Donate</a>
                        <a href="/volunteer" className="bg-blue-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors inline-block" aria-label="Volunteer for Bryant Crisp's campaign">Volunteer</a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-20 bg-white text-gray-800" aria-labelledby="about-heading">
                <div className="container mx-auto px-4">
                    <h2 id="about-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-6 sm:mb-8">Meet Bryant Crisp</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-base sm:text-lg leading-relaxed mb-6 font-political">
                                Bryant was born and raised in Burlington, NC. He is a proud graduate
                                of Cummings High School. He later attended NC A&T State University
                                where he studied psychology. Bryant has worked in the healthcare 
                                field for 15 years, and currently works as an Organizer and Political Consultant, 
                                as well as a mentor in the community. Bryant is also a devoted father to four sons 
                                and four daughters.  He is well equipped and ready to fight for the people of 
                                Gibsonville as your next Mayor. 
                                </p>
                            </div>
                            <div className="relative">
                                <Image
                                    src="/images/BCProfile.jpg"
                                    alt="Bryant Crisp in Gibsonville"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facebook Feed Section */}
            <section id="facebook-feed" className="py-12 sm:py-16 md:py-20 bg-white text-gray-800" aria-labelledby="facebook-feed-heading">
                <div className="container mx-auto px-4">
                    <h2 id="facebook-feed-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-8">Campaign Facebook Feed</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
                        {/* Facebook Feed Left */}
                        <div className="flex justify-center md:justify-start">
                            <div className="w-full max-w-[500px]">
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FBryant-Crisp-for-Gibsonville-Mayor-61578349430825%2F&tabs=timeline%2C%20events&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                                    width="100%"
                                    height="600"
                                    style={{ border: 'none', overflow: 'hidden', display: 'block', width: '100%' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title="Facebook Feed"
                                ></iframe>
                            </div>
                        </div>
                        {/* Right Side: Quote, Image, and CTA */}
                        <div className="flex flex-col justify-center items-center text-center md:text-left md:items-start space-y-4 mt-8 md:mt-0">
                            <blockquote className="font-political italic text-lg text-blue-900 border-l-4 border-blue-900 pl-4">
                                "Stay connected with the campaign and see the latest updates, events, and community highlights on our Facebook page!"
                            </blockquote>
                            <Image
                                src="/images/BCWall.jpg"
                                alt="Campaign Sit down Logo"
                                width={500}
                                height={600}
                            />
                            <a
                                href="https://www.facebook.com/p/Bryant-Crisp-for-Gibsonville-Mayor-61578349430825/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition-colors inline-block"
                            >
                                Follow on Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="volunteer" className="py-12 sm:py-16 bg-blue-900 text-white text-center" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4">
                    <h2 id="cta-heading" className="text-2xl sm:text-3xl font-traditional font-semibold mb-4">Get Involved</h2>
                    <p className="mb-6 text-base sm:text-lg font-political">Join our team and help us make a better tomorrow.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                          href="/contact"
                          className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors inline-block"
                          aria-label="Contact us to get involved with the campaign">
                            Contact Us
                        </Link>
                        <Link
                          href="/donate"
                          className="bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors inline-block"
                          aria-label="Donate to Bryant Crisp's campaign">
                            Donate
                        </Link>
                        <Link
                          href="/volunteer"
                          className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors inline-block"
                          aria-label="Volunteer for Bryant Crisp's campaign">
                            Volunteer
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}