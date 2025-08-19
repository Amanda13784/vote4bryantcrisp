//pages/about.js
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <main>
            {/* Hero Banner */}
            <section className="relative bg-blue-900 text-white h-[50vh] flex items-center justify-center pt-16" role="banner" aria-labelledby="hero-heading">
                <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
                <Image
                    src="/images/BCMain.png"
                    alt="Bryant Crisp - Community Leader"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: 'center 20%' }}
                    priority
                />
                <div className="relative z-20 px-4 text-center">
                    <div className="mb-6">
                        <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-2 tracking-tight">
                            <span className="text-yellow-400">About</span>
                            <br />
                            <span className="text-white">Bryant Crisp</span>
                        </h1>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-2"></div>
                        <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl mt-4 font-political max-w-2xl mx-auto text-yellow-100">From Hometown Roots to Community Leadership</p>
                </div>
            </section>

            {/* Engagement */}
            <section id="engagement" className="py-12 sm:py-16 md:py-20 bg-white text-gray-800" aria-labelledby="engagement-heading">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 id="engagement-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-8 sm:mb-12">Engagement with the Community</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="font-political text-base sm:text-lg leading-relaxed">
                            <p className="mb-4">Bryant Crisp has been a steadfast advocate for community empowerment
                              through active leadership and service. As Vice President of Future Alamance
                              and a member of the Land Development Plan Committee for the Town of Gibsonville,
                              he's helped shape policy and strategic planning for the area's growth. He is also a member of the BGMPO 
                              (Burlington Graham Metropolitan Planning Organization), and he is a board member of
                               ARCAP (Alamance Community Action Agency).</p>
                            <p className="mb-4">A proud member of the Alamance County branch of the NAACP, Bryant has also led civic 
                              initiatives like the "Souls to the Polls" event during the 2020 election to 
                              boost voter turnout. He has partnered with local organizations to host food 
                              drives, back-to-school events, and other community support programs.</p>
                            <p>For many years, Bryant has coached youth football, basketball, and has mentored 
                                young men - providing guidance, encouragement, and leadership to the next generation.</p>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/BCCoach.png"
                                alt="Bryant Crisp coaching youth basketball"
                                width={500}
                                height={400}
                                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            />
                            <p className="text-sm text-gray-600 mt-2 text-center italic">Bryant coaching youth basketball - 13+ years of mentoring</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why he's running */}
            <section id="why-running" className="py-12 sm:py-16 md:py-20 bg-gray-100 text-gray-800" aria-labelledby="why-running-heading">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 id="why-running-heading" className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-8 sm:mb-12">Why He's Running</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <blockquote className="bg-blue-50 p-8 rounded-lg border-l-8 border-blue-900 shadow-lg">
                                <div className="text-6xl text-blue-900 opacity-20 absolute -top-4 -left-2">"</div>
                                <div className="relative z-10">
                                    <p className="font-political text-lg sm:text-xl leading-relaxed text-gray-800 mb-6 italic">
                                        "My why is simple. I was raised by my parents to help anyone who needed it and to be a leader. 
                                        In my 4 years on the Board of Alderman in Gibsonville, I have learned a lot, and I would 
                                        like to use what I’ve learned to lead Gibsonville into the future as its’ Mayor."
                                    </p>
                                    <p className="font-political text-lg sm:text-xl leading-relaxed text-gray-800 mb-6 italic">
                                    “Gibsonville is changing like most towns and cities. I want to make sure it is accessible 
                                    to and represents all of its residents.”

                                    </p>
                                    <div className="text-right">
                                        <cite className="font-traditional font-semibold text-blue-900 text-lg">— Bryant Crisp</cite>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/BCSitdown.png"
                                alt="Bryant Crisp talking with voters."
                                width={500}
                                height={400}
                                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            />
                            <p className="text-sm text-gray-600 mt-2 text-center italic">Bryant talking with members of the community.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section id="cta" className="py-12 sm:py-16 bg-blue-900 text-white text-center" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4">
                    <h2 id="cta-heading" className="text-2xl sm:text-3xl font-traditional font-semibold mb-4">Ready to Make a Difference?</h2>
                    <p className="text-base sm:text-lg mb-6 font-political">Stand with Bryant to build a stronger Gibsonville.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-200 transition-colors inline-block">Contact Us</Link>
                        <Link href="/donate" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block">Donate</Link>
                        <Link href="/volunteer" className="bg-blue-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors inline-block">Volunteer</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}