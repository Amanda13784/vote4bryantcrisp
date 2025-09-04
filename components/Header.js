import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-blue-900/95 text-white shadow-md border-b-2 border-blue-800 sticky top-0 z-50">
            <div className="container mx-auto px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center py-4">
                <div className="flex justify-between items-center w-full sm:w-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-traditional font-bold tracking-wide">
                        Vote <span className="text-yellow-400">Bryant Crisp</span>
                    </h1>
                    
                    <button
                        onClick={toggleMenu}
                        className="sm:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>

                <nav className="hidden sm:flex gap-2 sm:gap-4 md:gap-6">
                    <Link href="/" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors">Home</Link>
                    <Link href="/about" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors">About</Link>
                    <Link href="/issues" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors">Issues</Link>
                    <Link href="/early-voting" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors">Early Voting</Link>
                    <Link href="/contact" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors">Contact</Link>
                    <Link href="/donate" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors">Donate</Link>
                    <Link href="/volunteer" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors">Volunteer</Link>
                </nav>

                <nav className={`sm:hidden w-full mt-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="flex flex-col space-y-2 bg-blue-800 rounded-lg p-4">
                        <Link href="/" className="font-political px-4 py-3 rounded hover:bg-blue-700 hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="font-political px-4 py-3 rounded hover:bg-blue-700 hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/issues" className="font-political px-4 py-3 rounded hover:bg-blue-700 hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Issues</Link>
                        <Link href="/early-voting" className="font-political px-4 py-3 rounded hover:bg-blue-700 hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Early Voting</Link>
                        <Link href="/contact" className="font-political px-4 py-3 rounded hover:bg-blue-700 hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <Link href="/donate" className="font-political px-4 py-3 rounded hover:bg-blue-700 hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Donate</Link>
                        <Link href="/volunteer" className="font-political px-4 py-3 rounded hover:bg-blue-700 hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Volunteer</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
