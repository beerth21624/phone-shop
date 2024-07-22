'use client';
import React, { useState } from 'react';
import { ChevronDown, Search, Star, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';

interface IPhone {
    model: string;
    price: string;
    image: string;
    features: string[];
    rating: number;
}

interface FilterDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

interface IPhoneCardProps extends IPhone { }

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => (
    <div className="relative w-full mb-2">
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full appearance-none bg-gray-800 text-white py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="">{label}</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
);

const IPhoneCard: React.FC<IPhoneCardProps> = ({ model, price, image, features, rating }) => (
    <div className="bg-gray-900 p-4 rounded-3xl border border-gray-800 transition-all duration-300 hover:border-blue-500 overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl">
        <img src={image} alt={model} className="w-full h-32 object-cover mb-4 rounded-2xl" />
        <h3 className="text-base font-semibold mb-2 text-white">{model}</h3>
        <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill={i < rating ? 'currentColor' : 'none'} />
            ))}
            <span className="text-gray-400 text-xs ml-2">({rating}.0)</span>
        </div>
        <p className="text-lg font-bold text-blue-400 mb-4">{price}</p>
        <ul className="text-xs text-gray-400">
            {features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center mb-1">
                    <CheckCircle className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    
    </div>
);

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center items-center space-x-1 mt-8">
        {[...Array(totalPages)].map((_, index) => (
            <button
                key={index}
                onClick={() => onPageChange(index + 1)}
                className={`px-2 py-1 rounded-full text-sm ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
            >
                {index + 1}
            </button>
        ))}
    </div>
);

const AllIPhonesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [modelFilter, setModelFilter] = useState<string>('');
    const [priceFilter, setPriceFilter] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    const iphones: IPhone[] = [
        { model: "iPhone 12 Pro", price: "฿19,900", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", features: ['จอ 6.1" Super Retina XDR', 'กล้องหลัง 12MP x3', 'ความจุ 128GB'], rating: 5 },
        { model: "iPhone 13", price: "฿22,900", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", features: ['จอ 6.1" Super Retina XDR', 'กล้องหลัง 12MP x2', 'ความจุ 128GB'], rating: 4 },
        { model: "iPhone 11", price: "฿14,900", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", features: ['จอ 6.1" Liquid Retina HD', 'กล้องหลัง 12MP x2', 'ความจุ 64GB'], rating: 4 },
        { model: "iPhone XR", price: "฿9,900", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", features: ['จอ 6.1" Liquid Retina HD', 'กล้องหลัง 12MP', 'ความจุ 64GB'], rating: 3 },
    ];

    const filteredIPhones = iphones.filter((iphone) =>
        iphone.model.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (modelFilter === '' || iphone.model.includes(modelFilter)) &&
        (priceFilter === '' || iphone.price.includes(priceFilter))
    );

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-8">iPhone ทั้งหมด</h1>

                <div className="flex flex-col mb-8">
                    <div className="w-full mb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ค้นหา iPhone"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <FilterDropdown
                            label="เลือกรุ่น"
                            options={['iPhone 12', 'iPhone 13', 'iPhone 11', 'iPhone XR']}
                            value={modelFilter}
                            onChange={setModelFilter}
                        />
                        <FilterDropdown
                            label="ช่วงราคา"
                            options={['0 - 10,000', '10,001 - 20,000', '20,001 - 30,000']}
                            value={priceFilter}
                            onChange={setPriceFilter}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredIPhones.map((iphone, index) => (
                        <IPhoneCard key={index} {...iphone} />
                    ))}
                </div>

                <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
            </main>
        </div>
    );
};

export default AllIPhonesPage;