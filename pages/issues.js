//pages/issues.js
import React from 'react';
import Image from 'next/image';

export default function Issues() {
    return (
        <main>
            {/* Hero Banner */}
            <section className="relative bg-blue-900 text-white h-[50vh] flex items-center justify-center pt-16" role="banner" aria-labelledby="hero-heading">
                <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
                <Image
                    src="/images/BCMain.png"
                    alt="Bryant Crisp - Areas of Focus"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: 'center 20%' }}
                    priority
                />
                <div className="relative z-20 px-4 text-center">
                    <div className="mb-6">
                        <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-2 tracking-tight">
                            <span className="text-yellow-400">Areas of</span>
                            <br />
                            <span className="text-white">Focus</span>
                        </h1>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-2"></div>
                        <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
                    </div>
                </div>
            </section>

            <section id="issues" className="py-12 sm:py-16 md:py-20 bg-gray-100 text-gray-800" aria-labelledby="issues-heading">
                <div className="container mx-auto px-4">
                    <h2 id="issues-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-8 sm:mb-12">Key Issues</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" role="list">
                        {[
                            {title: "Downtown Development & Economic Growth", description: "Bryant wants to continue to drive more businesses to Gibsonville to help ensure a strong commercial tax base. This will also provide many options for our residents to utilize."},
                            {title: "Amenities", description: "Bryant wants to make sure that our parks, our downtown parking, and our roads reflect the level of excellence expected in Gibsonville."},
                            {title: "Walkability", description: "Bryant wants to make sure that there are plenty sidewalks, multi-use paths, and safe traveling lanes so that everyone can enjoy Gibsonville and be safe doing so."},
                            {title: "Completion of Capital Projects", description: "Bryant wants to make sure that capital projects such as the police station, library, Eugene Street project, and bringing a grocery store to Gibsonville are completed in a timely manner and done in a fiscally responsible manner"},                       
                        ].map((issue, i) => (
                            <article key={i} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" role="listitem">
                                <h3 className="text-lg sm:text-xl font-traditional font-semibold mb-3">{issue.title}</h3>
                                <p className="text-sm sm:text-base leading-relaxed font-political">{issue.description}</p>
                            </article>    
                        ))}
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
