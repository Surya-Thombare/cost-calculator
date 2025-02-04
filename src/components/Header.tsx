import { Calculator } from "lucide-react";
import Link from "next/link";

// components/Header.tsx
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Cost Calculator</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/cost" className="text-gray-300 hover:text-white transition-colors">
              Calculator
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header