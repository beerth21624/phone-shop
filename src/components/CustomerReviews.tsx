'use client';
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
        <div className="bg-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:bg-gray-750">
            <div className="flex flex-col sm:flex-row items-center mb-4">
                <img src={image} alt={name} className="w-16 h-16 rounded-full mb-2 sm:mb-0 sm:mr-4 object-cover" />
                <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{name}</h3>
                    <div className="flex items-center justify-center sm:justify-start">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                fill={i < rating ? 'currentColor' : 'none'}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Quote className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 mb-2 mx-auto sm:mx-0" />
            <p className="text-gray-300 italic text-sm sm:text-base">{review}</p>
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
        // ... (other reviews remain the same)
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-white">เสียงจากลูกค้าของเรา</h2>
                <p className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-10 md:mb-12 text-gray-400 max-w-3xl mx-auto">
                    ความพึงพอใจของลูกค้าคือเป้าหมายสูงสุดของเรา ลองดูว่าลูกค้าของเรารู้สึกอย่างไรกับบริการของ BB Phone
                </p>

                <div className="relative px-8 sm:px-12">
                    <div className="flex justify-center">
                        <ReviewCard {...reviews[currentReview]} />
                    </div>

                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-1 sm:p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-1 sm:p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                </div>

                <div className="flex justify-center mt-6 sm:mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 ${index === currentReview ? 'bg-blue-500' : 'bg-gray-600'
                                }`}
                        />
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-10 md:mt-12">
                    <a
                        href="#all-reviews"
                        className="inline-flex items-center bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                    >
                        ดูรีวิวทั้งหมด
                        <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;