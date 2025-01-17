'use client';
import React, { useState } from 'react';
import { CheckCircle, ChevronRight, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TabButton = ({ label, isActive, onClick }: {
    label: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <button
        className={`px-4 py-2 rounded-full mr-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${isActive
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        onClick={onClick}
    >
        {label}
    </button>
);

const IPhoneCard = ({ model, price, image, features, rating }: {
    model: string;
    price: string;
    image: string;
    features: string[];
    rating: number;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-gray-900 p-4 sm:p-6 rounded-3xl border border-gray-800 transition-all duration-300 hover:border-blue-500 overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img src={image} alt={model} className="w-full h-40 sm:h-56 object-cover mb-4 rounded-2xl" />
                <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center">
                        ดูรายละเอียด
                        <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                </div>
            </div>
            <h3 className="text-base sm:text-xl font-semibold mb-2 text-white">{model}</h3>
            <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill={i < rating ? 'currentColor' : 'none'} />
                ))}
                <span className="text-gray-400 text-xs sm:text-sm ml-2">({rating}.0)</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-blue-400 mb-4">{price}</p>
            <ul className="text-xs sm:text-sm text-gray-400">
                {features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const IPhoneShowcase = () => {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState('all');

    const iphones = [
        {
            model: "iPhone 12 Pro",
            price: "฿19,900",
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            features: ['จอ 6.1" Super Retina XDR', 'กล้องหลัง 12MP x3', 'ความจุ 128GB'],
            rating: 5,
            category: 'pro'
        },
        {
            model: "iPhone 13",
            price: "฿22,900",
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            features: ['จอ 6.1" Super Retina XDR', 'กล้องหลัง 12MP x2', 'ความจุ 128GB'],
            rating: 4,
            category: 'standard'
        },
        {
            model: "iPhone 11",
            price: "฿14,900",
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            features: ['จอ 6.1" Liquid Retina HD', 'กล้องหลัง 12MP x2', 'ความจุ 64GB'],
            rating: 4,
            category: 'standard'
        },
        {
            model: "iPhone XR",
            price: "฿9,900",
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            features: ['จอ 6.1" Liquid Retina HD', 'กล้องหลัง 12MP', 'ความจุ 64GB'],
            rating: 3,
            category: 'standard'
        }
    ];

    const filteredIPhones = activeTab === 'all' ? iphones : iphones.filter(iphone => iphone.category === activeTab);

    return (
        <section className="py-12 sm:py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 text-white">iPhone มือสองยอดนิยม</h2>
                <p className="text-base sm:text-xl text-center mb-8 sm:mb-12 text-gray-400 max-w-3xl mx-auto">
                    เลือกจาก iPhone รุ่นยอดนิยมของเรา ทุกเครื่องผ่านการตรวจสอบคุณภาพและพร้อมใช้งานทันที
                </p>
                <div className="flex flex-wrap justify-center mb-8 sm:mb-12">
                    <TabButton label="ทั้งหมด" isActive={activeTab === 'all'} onClick={() => setActiveTab('all')} />
                    <TabButton label="Pro Series" isActive={activeTab === 'pro'} onClick={() => setActiveTab('pro')} />
                    <TabButton label="Standard Series" isActive={activeTab === 'standard'} onClick={() => setActiveTab('standard')} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                    {filteredIPhones.map((iphone, index) => (
                        <IPhoneCard key={index} {...iphone} />
                    ))}
                </div>
                <div className="text-center mt-8 sm:mt-12">
                    <button className="bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center mx-auto"
                    onClick={() => router.push('/iphone')}>
                        ดู iPhone ทั้งหมด
                        <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IPhoneShowcase;