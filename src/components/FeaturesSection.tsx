import React from 'react';
import { Phone, Repeat, DollarSign, CheckCircle, ChevronRight } from 'lucide-react';

const FeatureCard = ({ icon, title, description, learnMoreLink }:{
    icon: React.ReactNode,
    title: string,
    description: string,
    learnMoreLink: string
}) => (
    <div className="bg-gray-800 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="text-4xl mb-6 text-blue-400">{icon}</div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <a
            href={learnMoreLink}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
        >
            เรียนรู้เพิ่มเติม
            <ChevronRight className="ml-2 w-4 h-4" />
        </a>
    </div>
);

const FeaturesSection:React.FC= () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">ทำไมต้องเลือก BB Phone?</h2>
                <p className="text-xl text-center mb-16 text-gray-400 max-w-3xl mx-auto">
                    เรามุ่งมั่นที่จะมอบประสบการณ์การใช้งาน iPhone มือสองที่ดีที่สุดให้กับคุณ
                    ด้วยบริการที่ครบวงจรและคุณภาพที่คุณวางใจได้
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        icon={<Phone className="text-blue-400" />}
                        title="iPhone คุณภาพเยี่ยม"
                        description="เรารับประกันว่า iPhone ทุกเครื่องผ่านการตรวจสอบคุณภาพอย่างละเอียด 30+ รายการ เพื่อความมั่นใจสูงสุดของคุณ"
                        learnMoreLink="#quality-check"
                    />
                    <FeatureCard
                        icon={<Repeat className="text-green-400" />}
                        title="รับประกัน 6 เดือน"
                        description="มั่นใจได้กับการรับประกันนาน 6 เดือนสำหรับ iPhone ทุกเครื่อง ครอบคลุมทั้งฮาร์ดแวร์และซอฟต์แวร์"
                        learnMoreLink="#warranty"
                    />
                    <FeatureCard
                        icon={<DollarSign className="text-yellow-400" />}
                        title="ราคาคุ้มค่า"
                        description="เรามี iPhone หลากหลายรุ่นในราคาที่คุณเอื้อมถึงได้ พร้อมโปรโมชั่นพิเศษและแพ็คเกจผ่อนชำระที่ยืดหยุ่น"
                        learnMoreLink="#pricing"
                    />
                    <FeatureCard
                        icon={<CheckCircle className="text-red-400" />}
                        title="บริการหลังการขาย"
                        description="เรามีทีมซ่อมมืออาชีพพร้อมให้บริการตลอด 7 วัน พร้อมบริการรับ-ส่งเครื่องฟรี และสายด่วนให้คำปรึกษา 24/7"
                        learnMoreLink="#after-sales"
                    />
                </div>
                <div className="text-center mt-16">
                    <a
                        href="#all-features"
                        className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                    >
                        ดูคุณสมบัติทั้งหมด
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;