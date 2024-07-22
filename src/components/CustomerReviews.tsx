import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface ReviewCardProps {
    name: string;
    review: string;
    rating: number;
    image: string;
}

const ReviewCard = ({ name, review, rating, image }: ReviewCardProps) => {
    return (
        <div className="bg-gray-800 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:bg-gray-750">
            <div className="flex items-center mb-4">
                <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                <div>
                    <h3 className="text-xl font-semibold text-white">{name}</h3>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                fill={i < rating ? 'currentColor' : 'none'}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Quote className="text-blue-400 w-8 h-8 mb-2" />
            <p className="text-gray-300 italic">{review}</p>
        </div>
    );
};

const CustomerReviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            name: "คุณสมชาย",
            review: "บริการดีมาก iPhone ที่ซื้อมาใช้งานได้ดีเหมือนใหม่เลยครับ ประทับใจมากกับการบริการหลังการขาย ทีมงานใส่ใจลูกค้าจริงๆ",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "คุณสมหญิง",
            review: "ราคาถูกกว่าที่อื่นมาก แถมยังได้รับประกันด้วย คุ้มค่ามากๆ ค่ะ ได้เครื่องสภาพดีเกินคาด แนะนำให้เพื่อนๆ มาอุดหนุนแล้วค่ะ",
            rating: 4,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "คุณมานะ",
            review: "ทีมซ่อมบำรุงให้บริการเยี่ยมมาก แก้ปัญหาได้รวดเร็ว ให้คำแนะนำดีมาก ทำให้ใช้งาน iPhone ได้คุ้มค่ามากขึ้น",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "คุณวิภา",
            review: "ประทับใจกับความซื่อสัตย์ของร้าน เคยทำ iPhone ตกหล่น ทางร้านซ่อมให้ฟรีโดยไม่คิดเงิน ทั้งที่การรับประกันหมดไปแล้ว",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">เสียงจากลูกค้าของเรา</h2>
                <p className="text-xl text-center mb-12 text-gray-400 max-w-3xl mx-auto">
                    ความพึงพอใจของลูกค้าคือเป้าหมายสูงสุดของเรา ลองดูว่าลูกค้าของเรารู้สึกอย่างไรกับบริการของ BB Phone
                </p>

                <div className="relative">
                    <div className="flex justify-center">
                        <ReviewCard {...reviews[currentReview]} />
                    </div>

                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex justify-center mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-3 h-3 rounded-full mx-1 ${index === currentReview ? 'bg-blue-500' : 'bg-gray-600'
                                }`}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#all-reviews"
                        className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                    >
                        ดูรีวิวทั้งหมด
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;