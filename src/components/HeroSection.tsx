'use client';
import React from 'react';
import { ChevronRight, Apple } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface StatProps {
    value: string;
    label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
    <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{value}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{label}</p>
    </div>
);

const HeroSection: React.FC = () => {
    const router = useRouter();

    return (
        <section className="relative bg-gradient-to-r from-gray-900 to-black py-12 sm:py-24 md:py-40 overflow-hidden min-h-screen    flex flex-col justify-center">
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <Apple className="text-white w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                    iPhone มือสอง <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        คุณภาพเยี่ยม ราคาคุ้มค่า
                    </span>
                </h2>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto">
                    เลือกซื้อ iPhone รุ่นที่คุณต้องการในราคาที่เอื้อมถึง พร้อมรับประกันจาก BB Phone
                    ด้วยประสบการณ์กว่า 10 ปี เรามั่นใจในคุณภาพทุกเครื่องที่ส่งมอบ
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    onClick={() => router.push('/iphone')}>
                        ดู iPhone ทั้งหมด
                        <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                        onClick={() => router.push('/buy-back')}>

                        ประเมินราคาเครื่องเก่า
                    </button>
                </div>
            </div>

            <div className="mt-12 sm:mt-16 flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <Stat value="10,000+" label="เครื่องที่จำหน่ายแล้ว" />
                <Stat value="99%" label="ลูกค้าพึงพอใจ" />
                <Stat value="6 เดือน" label="รับประกันทุกเครื่อง" />
            </div>

        </section>
    );
};

export default HeroSection;