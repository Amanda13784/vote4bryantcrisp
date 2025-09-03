//components/Footer.js
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <h3 className="text-xl font-traditional font-semibold mb-2">Bryant Crisp for Mayor</h3>
                    <p className="text-gray-300 text-sm">Building a stronger Gibsonville together</p>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-6 text-center">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Developer: Amanda Baker. Vote Bryant Crisp. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}