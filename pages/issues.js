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
                            {title: "Land Use & Development", description: "Bryant wants to ensure that future growth and building is done according to the land use plan. He wants future neighborhoods to be built that are easily accessible and have the necessary amenities for families."},
                            {title: "Representation", description: "Bryant believes that Gibsonville deserves to have a Board of Alderman that more closely represents all of its residents."},
                            {title: "Senior Services", description: "Bryant will work with other board members to make sure outreach and engagement with seniors and the indigent are a priority to combat major issues such as transportation and food insecurity."},
                            {title: "Economic Growth", description: "Bryant will work to make sure that Gibsonville grows in a responsible manner that will work for all residents. This includes beautifying Gibsonville with better roads and amenities in order to attract new businesses."},                       
                        ].map((issue, i) => (
                            <article key={i} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" role="listitem">
                                <h3 className="text-lg sm:text-xl font-traditional font-semibold mb-3">{issue.title}</h3>
                                <p className="text-sm sm:text-base leading-relaxed font-political">{issue.description}</p>
                            </article>    
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
