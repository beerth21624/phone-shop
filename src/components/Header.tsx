import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`py-4 sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center space-x-8">
                        <h1 className="text-2xl font-bold text-white">BB Phone</h1>
                        <ul className="hidden md:flex space-x-6">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">หน้าหลัก</a></li>
                            <li><a href="/iphone" className="text-gray-300 hover:text-white transition-colors duration-300">iPhone มือสอง</a></li>
                            <li><a href="/buy-back" className="text-gray-300 hover:text-white transition-colors duration-300">รับซื้อ</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">ติดต่อเรา</a></li>
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ค้นหา iPhone"
                                className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                        <button className="text-white hover:text-blue-500 transition-colors duration-300">
                            <ShoppingBag className="w-6 h-6" />
                        </button>
                        <button className="text-white hover:text-blue-500 transition-colors duration-300">
                            <User className="w-6 h-6" />
                        </button>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 mt-4">
                    <ul className="py-4 px-4 space-y-4">
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block">หน้าหลัก</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block">iPhone มือสอง</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block">รับซื้อ</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block">ติดต่อเรา</a></li>
                    </ul>
                    <div className="py-4 px-4 space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ค้นหา iPhone"
                                className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                        <div className="flex justify-between">
                            <button className="text-white hover:text-blue-500 transition-colors duration-300 flex items-center">
                                <ShoppingBag className="w-6 h-6 mr-2" />
                                <span>ตะกร้าสินค้า</span>
                            </button>
                            <button className="text-white hover:text-blue-500 transition-colors duration-300 flex items-center">
                                <User className="w-6 h-6 mr-2" />
                                <span>บัญชีของฉัน</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;