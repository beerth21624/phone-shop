'use client';
import React from 'react';
import { ChevronRight, Apple } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface StatProps {
    value: string;
    label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
    <div className="text-center w-full sm:w-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{value}</h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">{label}</p>
    </div>
);

const HeroSection: React.FC = () => {
    const router = useRouter();

    return (
        <section className="relative bg-gradient-to-r from-gray-900 to-black py-16 sm:py-24 md:py-40 overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <Apple className="text-white w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 md:mb-8" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                    iPhone มือสอง <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        คุณภาพเยี่ยม ราคาคุ้มค่า
                    </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto">
                    เลือกซื้อ iPhone รุ่นที่คุณต้องการในราคาที่เอื้อมถึง พร้อมรับประกันจาก BB Phone
                    ด้วยประสบการณ์กว่า 10 ปี เรามั่นใจในคุณภาพทุกเครื่องที่ส่งมอบ
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                        className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                        onClick={() => router.push('/iphone')}
                    >
                        ดู iPhone ทั้งหมด
                        <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button
                        className="bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                        onClick={() => router.push('/buy-back')}
                    >
                        ประเมินราคาเครื่องเก่า
                    </button>
                </div>
            </div>

            <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Stat value="10,000+" label="เครื่องที่จำหน่ายแล้ว" />
                <Stat value="99%" label="ลูกค้าพึงพอใจ" />
                <Stat value="6 เดือน" label="รับประกันทุกเครื่อง" />
            </div>
        </section>
    );
};

export default HeroSection;