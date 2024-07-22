'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';

interface ContactInfoProps {
    icon: React.ElementType;
    title: string;
    content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, title, content }) => (
    <div className="flex items-start mb-6">
        <div className="bg-blue-500 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0">
            <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
            <h3 className="text-base sm:text-lg font-semibold mb-1">{title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{content}</p>
        </div>
    </div>
);

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-3xl p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">ส่งข้อความถึงเรา</h2>
            {['name', 'email', 'phone'].map((field) => (
                <div key={field} className="mb-4">
                    <label htmlFor={field} className="block text-sm font-medium text-gray-400 mb-2">
                        {field === 'name' ? 'ชื่อ' : field === 'email' ? 'อีเมล' : 'เบอร์โทรศัพท์'}
                    </label>
                    <input
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required={field !== 'phone'}
                    />
                </div>
            ))}
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">ข้อความ</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
            >
                ส่งข้อความ
                <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </form>
    );
};

const ContactUsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
            <Header />

            <main className="container mx-auto px-4 py-8 sm:py-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">ติดต่อเรา</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">ข้อมูลการติดต่อ</h2>
                        <ContactInfo
                            icon={Phone}
                            title="โทรศัพท์"
                            content="02-123-4567"
                        />
                        <ContactInfo
                            icon={Mail}
                            title="อีเมล"
                            content="info@bbphone.com"
                        />
                        <ContactInfo
                            icon={MapPin}
                            title="ที่อยู่"
                            content="123 ถนนสุขุมวิท, แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110"
                        />
                        <ContactInfo
                            icon={Clock}
                            title="เวลาทำการ"
                            content="จันทร์ - เสาร์: 10:00 - 20:00 น. | อาทิตย์: 11:00 - 19:00 น."
                        />

                        <div className="mt-6 sm:mt-8">
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">แผนที่</h3>
                            <div className="bg-gray-700 rounded-lg overflow-hidden" style={{ height: '250px', maxHeight: '50vh' }}>
                                <img src="/api/placeholder/600/300" alt="Map" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </main>
        </div>
    );
};

export default ContactUsPage;