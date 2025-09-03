//pages/early-voting.js

import Image from 'next/image';
import Link from 'next/link';

export default function EarlyVoting() {
    const votingLocations = [
        {
            name: "Old County Courthouse",
            address: "301 W. Market St., First Floor, Room 108",
            city: "Greensboro, NC 27401",
            room: "Old Courthouse - Coleman Conference Room",
            schedule: [
                { date: "Thursday, October 16, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Friday, October 17, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Monday, October 20, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Tuesday, October 21, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Wednesday, October 22, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Thursday, October 23, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Friday, October 24, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Monday, October 27, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Tuesday, October 28, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Wednesday, October 29, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Thursday, October 30, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Friday, October 31, 2025", time: "8 a.m. to 5 p.m." },
                { date: "Saturday, November 1, 2025", time: "8 a.m. to 3 p.m." }
            ]
        },
        {
            name: "Brown Recreational Center",
            address: "302 E. Vandalia Road",
            city: "Greensboro, NC 27410",
            schedule: [
                { date: "Thursday, October 23, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 24, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, October 25, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Sunday, October 26, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Monday, October 27, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Tuesday, October 28, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Wednesday, October 29, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Thursday, October 30, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 31, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, November 1, 2025", time: "8 a.m. to 3 p.m." }
            ]
        },
        {
            name: "Bur-Mil Park Clubhouse",
            address: "5834 Bur-Mill Club Road",
            city: "Greensboro, NC 27410",
            schedule: [
                { date: "Thursday, October 23, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 24, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, October 25, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Sunday, October 26, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Monday, October 27, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Tuesday, October 28, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Wednesday, October 29, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Thursday, October 30, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 31, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, November 1, 2025", time: "8 a.m. to 3 p.m." }
            ]
        },
        {
            name: "Greensboro Complex Special Events Center",
            address: "1921 W Gate City Blvd.",
            city: "Greensboro, NC 27403",
            note: "Look for signs that direct you to the voting location.",
            schedule: [
                { date: "Thursday, October 23, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 24, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, October 25, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Sunday, October 26, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Monday, October 27, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Tuesday, October 28, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Wednesday, October 29, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Thursday, October 30, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 31, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, November 1, 2025", time: "8 a.m. to 3 p.m." }
            ]
        },
        {
            name: "Town of Jamestown, NC Town Hall",
            address: "301 E. Main St.",
            city: "Jamestown, NC 27282",
            schedule: [
                { date: "Thursday, October 23, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 24, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, October 25, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Sunday, October 26, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Monday, October 27, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Tuesday, October 28, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Wednesday, October 29, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Thursday, October 30, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 31, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, November 1, 2025", time: "8 a.m. to 3 p.m." }
            ]
        },
        {
            name: "Lewis Recreation Center",
            address: "3110 Forest Lawn Drive",
            city: "Greensboro, NC 27455",
            schedule: [
                { date: "Thursday, October 23, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 24, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, October 25, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Sunday, October 26, 2025", time: "10 a.m. to 2 p.m." },
                { date: "Monday, October 27, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Tuesday, October 28, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Wednesday, October 29, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Thursday, October 30, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Friday, October 31, 2025", time: "10 a.m. to 6 p.m." },
                { date: "Saturday, November 1, 2025", time: "8 a.m. to 3 p.m." }
            ]
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-16 sm:py-20" role="banner" aria-labelledby="early-voting-heading">
                <div className="container mx-auto px-4 text-center">
                    <h1 id="early-voting-heading" className="text-3xl sm:text-4xl md:text-5xl font-traditional font-bold mb-4">
                        Early Voting Information
                    </h1>
                    <p className="text-lg sm:text-xl font-political max-w-3xl mx-auto">
                        Early voting for the November 4, 2025, Municipal General Election begins Thursday, October 16, 2025, and ends Saturday, November 1, 2025.
                    </p>
                </div>
            </section>

            {/* Important Information */}
            <section className="py-8 bg-yellow-50 border-b-4 border-yellow-400">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl font-traditional font-semibold text-blue-900 mb-4">
                            Important Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-semibold text-blue-900 mb-2">Voter ID Required</h3>
                                <p className="text-gray-700">Voters will be asked to show identification. Visit the <a href="https://www.ncsbe.gov/voting/voter-id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NC Board of Elections</a> for more information about voter IDs.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-semibold text-blue-900 mb-2">Questions?</h3>
                                <p className="text-gray-700">Please call <a href="tel:336-641-3836" className="text-blue-600 hover:underline font-semibold">336-641-3836</a> if you have any questions about early voting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Voting Locations */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-traditional font-semibold text-center mb-8 text-gray-800">
                        Early Voting Locations and Schedules
                    </h2>
                    
                    <div className="max-w-6xl mx-auto space-y-8">
                        {votingLocations.map((location, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                                <div className="bg-blue-900 text-white p-6">
                                    <h3 className="text-xl sm:text-2xl font-traditional font-semibold mb-2">
                                        {location.name}
                                    </h3>
                                    <div className="text-blue-100">
                                        <p className="font-semibold">{location.address}</p>
                                        <p>{location.city}</p>
                                        {location.room && <p className="text-sm mt-1">{location.room}</p>}
                                        {location.note && <p className="text-sm mt-2 italic">{location.note}</p>}
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Voting Schedule</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-300">
                                            <thead>
                                                <tr className="bg-gray-200">
                                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {location.schedule.map((schedule, scheduleIndex) => (
                                                    <tr key={scheduleIndex} className="hover:bg-gray-100">
                                                        <td className="border border-gray-300 px-4 py-2">{schedule.date}</td>
                                                        <td className="border border-gray-300 px-4 py-2 font-medium text-blue-900">{schedule.time}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-blue-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-traditional font-semibold mb-4">
                        Ready to Make Your Voice Heard?
                    </h2>
                    <p className="mb-6 text-lg font-political max-w-2xl mx-auto">
                        Early voting makes it convenient to cast your ballot. Don't wait until Election Day!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/volunteer"
                            className="bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors inline-block"
                            aria-label="Volunteer for Bryant Crisp's campaign">
                            Volunteer
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors inline-block"
                            aria-label="Contact us for more information">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
