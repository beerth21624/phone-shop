'use client';
import React, { useState } from 'react';
import { CheckCircle, DollarSign, Smartphone, ArrowRight, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';

interface ProcessStepProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="bg-blue-500 rounded-full p-4 mb-4">
            <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

interface SelectFieldProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full bg-gray-800 text-white rounded-md py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">เลือก{label}</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
    </div>
);

interface FormData {
    model: string;
    storage: string;
    condition: string;
}

const BuybackPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        model: '',
        storage: '',
        condition: ''
    });

    const handleInputChange = (field: keyof FormData) => (value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted:', formData);
        // You would typically send this data to your backend for processing
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
            <Header />

            <main className="container mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8 text-center">รับซื้อ iPhone ของคุณ</h1>

                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-center">กระบวนการรับซื้อของเรา</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProcessStep
                            icon={Smartphone}
                            title="ส่งข้อมูลเครื่อง"
                            description="กรอกข้อมูล iPhone ของคุณในแบบฟอร์มด้านล่าง"
                        />
                        <ProcessStep
                            icon={DollarSign}
                            title="รับการประเมินราคา"
                            description="เราจะประเมินราคาเบื้องต้นให้คุณทันที"
                        />
                        <ProcessStep
                            icon={CheckCircle}
                            title="นำเครื่องมาตรวจสอบ"
                            description="นำ iPhone มาที่ร้านเพื่อตรวจสอบและรับเงินสด"
                        />
                    </div>
                </section>

                <section className="bg-gray-900 rounded-3xl p-8 mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-center">ประเมินราคา iPhone ของคุณ</h2>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <SelectField
                            label="รุ่น iPhone"
                            options={['iPhone 12', 'iPhone 12 Pro', 'iPhone 11', 'iPhone XR']}
                            value={formData.model}
                            onChange={handleInputChange('model')}
                        />
                        <SelectField
                            label="ความจุ"
                            options={['64GB', '128GB', '256GB', '512GB']}
                            value={formData.storage}
                            onChange={handleInputChange('storage')}
                        />
                        <SelectField
                            label="สภาพเครื่อง"
                            options={['สภาพดีมาก', 'สภาพดี', 'สภาพปานกลาง', 'สภาพแย่']}
                            value={formData.condition}
                            onChange={handleInputChange('condition')}
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 mt-6 flex items-center justify-center"
                        >
                            ประเมินราคาทันที
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </form>
                </section>

                <section className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">ทำไมต้องเลือกขาย iPhone กับเรา?</h2>
                    <ul className="text-left max-w-2xl mx-auto">
                        <li className="flex items-start mb-4">
                            <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                            <span>ราคารับซื้อที่ยุติธรรมและแข่งขันได้</span>
                        </li>
                        <li className="flex items-start mb-4">
                            <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                            <span>กระบวนการรวดเร็ว ได้รับเงินทันที</span>
                        </li>
                        <li className="flex items-start mb-4">
                            <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                            <span>ทีมงานมืออาชีพ พร้อมให้คำปรึกษา</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                            <span>รับประกันการลบข้อมูลส่วนตัวทั้งหมด</span>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default BuybackPage;