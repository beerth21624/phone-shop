'use client'
import React, { useState } from 'react';
import { ArrowRight, Smartphone, DollarSign, Zap } from 'lucide-react';

const TradeInStep = ({ icon, title, description }: {
    icon: React.ReactNode,
    title: string,
    description: string
}) => (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-blue-800 rounded-2xl transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-blue-300">{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white text-center">{title}</h3>
        <p className="text-sm sm:text-base text-blue-200 text-center">{description}</p>
    </div>
);

const IPhoneTradeIn: React.FC = () => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4">ต้องการขาย iPhone ของคุณ?</h2>
                    <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-200 max-w-2xl mx-auto">
                        เรารับซื้อ iPhone ทุกรุ่นในราคายุติธรรม พร้อมประเมินราคาฟรี
                        ด้วยกระบวนการที่รวดเร็วและโปร่งใส
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
                    <TradeInStep
                        icon={<Smartphone />}
                        title="ส่งข้อมูลเครื่อง"
                        description="กรอกข้อมูล iPhone ของคุณผ่านแบบฟอร์มออนไลน์ของเรา"
                    />
                    <TradeInStep
                        icon={<DollarSign />}
                        title="รับการประเมินราคา"
                        description="รับการประเมินราคาเบื้องต้นทันทีจากระบบอัตโนมัติของเรา"
                    />
                    <TradeInStep
                        icon={<Zap />}
                        title="ขายทันที"
                        description="นำ iPhone มาที่ร้านเพื่อตรวจสอบและรับเงินสดทันที"
                    />
                </div>

                <div className="text-center">
                    <button
                        className={`bg-blue-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center mx-auto ${hovered ? 'bg-blue-600 shadow-lg scale-105' : ''
                            }`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        ขาย iPhone ของคุณ
                        <ArrowRight className={`ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${hovered ? 'translate-x-1' : ''}`} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IPhoneTradeIn;