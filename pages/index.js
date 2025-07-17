//pages/index.js

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white h-[80vh] flex items-center justify-center" role="banner" aria-labelledby="hero-heading">
                <div className="px-4 text-center">
                    <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Bryant Crisp for Mayor</h1>
                    <p className="text-base sm:text-lg md:text-2xl mb-6 max-w-2xl mx-auto">Leadership. Integrity. Progress.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#about" className="bg-white text-blue-900 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-100 transition-colors inline-block" aria-label="Learn more about Bryant Crisp">Learn More</a>
                        <a href="/donate" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block" aria-label="Donate to Bryant Crisp's campaign">Donate</a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 md:py-20 bg-white text-gray-800" aria-labelledby="about-heading">
                <div className="container mx-auto px-4">
                    <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Meet Bryant Crisp</h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    Bryant was born and raised in Burlington, NC. He is a proud graduate
                    of Cummings High School. He later attended NC A&T State University
                    where he studied psychology. Bryant has worked in the healthcare 
                    field for the last 15 years. In addition to his career achievements
                    Bryant is also a devoted single father to three sons ages 18, 11, 
                    and 2. As well as a mentor in the community. He is well equipped 
                    and ready to fight for the people of Gibsonville as your next 
                    Alderman. 
                    </p>
                </div>
            </section>

            {/* Issues Section */}
            <section id="issues" className="py-12 sm:py-16 md:py-20 bg-gray-100 text-gray-800" aria-labelledby="issues-heading">
                <div className="container mx-auto px-4">
                    <h2 id="issues-heading" className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Key Issues</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
                        {[
                            {title: "Land Use & Development", description: "Bryant wants to ensure that future growth and building is done according to the land use plan. He wants future neighborhoods to be built that are easily accessible and have the necessary amenities for families."},
                            {title: "Representation", description: "Bryant believes that Gibsonville deserves to have a Board of Alderman that more closely represents all of its residents."},
                            {title: "Senior Services", description: "Bryant will work with other board members to make sure outreach and engagement with seniors and the indigent are a priority to combat major issues such as transportation and food insecurity."},
                            {title: "Economic Growth", description: "Bryant will work to make sure that Gibsonville grows in a responsible manner that will work for all residents. This includes beautifying Gibsonville with better roads and amenities in order to attract new businesses."},                       
                            ].map((issue, i) => (
                                <article key={i} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" role="listitem">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{issue.title}</h3>
                                    <p className="text-sm sm:text-base leading-relaxed">{issue.description}</p>
                                </article>    
                            ))}
                        </div>
                    </div>
            </section>

            {/* Call to Action Section */}
            <section id="volunteer" className="py-12 sm:py-16 bg-blue-900 text-white text-center" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4">
                    <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-4">Get Involved</h2>
                    <p className="mb-6 text-base sm:text-lg">Join our team and help us make a better tomorrow.</p>
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
                    </div>
                </div>
            </section>
        </main>
    )
}