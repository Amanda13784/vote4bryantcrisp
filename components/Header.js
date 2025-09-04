import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-900/95 text-white shadow-md border-b-2 border-blue-800 sticky top-0 z-50">
            <div className="container mx-auto px-2 sm:px-4 flex flex-col sm:flex-row justify-between items-center py-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-traditional font-bold tracking-wide mb-2 sm:mb-0">
                    Vote <span className="text-yellow-400">Bryant Crisp</span>
                </h1>
                <nav className="flex gap-2 sm:gap-4 md:gap-6 overflow-x-auto w-full sm:w-auto">
                    <Link href="/" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors whitespace-nowrap">Home</Link>
                    <Link href="/about" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors whitespace-nowrap">About</Link>
                    <Link href="/issues" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors whitespace-nowrap">Issues</Link>
                    <Link href="/early-voting" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors whitespace-nowrap">Early Voting</Link>
                    <Link href="/contact" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors whitespace-nowrap">Contact</Link>
                    <Link href="/donate" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors whitespace-nowrap">Donate</Link>
                    <Link href="/volunteer" className="font-political px-2 sm:px-4 py-2 rounded hover:bg-blue-800 hover:text-yellow-400 transition-colors whitespace-nowrap">Volunteer</Link>
                </nav>
            </div>
        </header>
    )
}
