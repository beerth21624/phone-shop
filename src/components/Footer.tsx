import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Smartphone, CreditCard, ShieldCheck } from 'lucide-react';

const FooterSection = ({ title, children }: {
    title: string,
    children: React.ReactNode
}) => (
    <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4 text-white">{title}</h4>
        {children}
    </div>
);

const FooterLink = ({ href, children }: {
    href: string,
    children: React.ReactNode
}) => (
    <a href={href} className="block text-gray-400 hover:text-white transition-colors duration-300 mb-2 text-sm sm:text-base">
        {children}
    </a>
);

const SocialLink = ({ href, icon: Icon }: {
    href: string,
    icon: React.ElementType
}) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
);

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-10 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
                    <FooterSection title="BB Phone">
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">ร้านจำหน่าย iPhone มือสองคุณภาพเยี่ยม</p>
                        <div className="flex space-x-4 mt-4">
                            <SocialLink href="#" icon={Facebook} />
                            <SocialLink href="#" icon={Instagram} />
                            <SocialLink href="#" icon={Twitter} />
                        </div>
                    </FooterSection>

                    <FooterSection title="บริการของเรา">
                        <FooterLink href="#">iPhone มือสอง</FooterLink>
                        <FooterLink href="#">รับซื้อ iPhone</FooterLink>
                        <FooterLink href="#">ซ่อม iPhone</FooterLink>
                        <FooterLink href="#">อุปกรณ์เสริม</FooterLink>
                    </FooterSection>

                    <FooterSection title="ข้อมูลเพิ่มเติม">
                        <FooterLink href="#">เกี่ยวกับเรา</FooterLink>
                        <FooterLink href="#">นโยบายความเป็นส่วนตัว</FooterLink>
                        <FooterLink href="#">เงื่อนไขการใช้บริการ</FooterLink>
                        <FooterLink href="#">คำถามที่พบบ่อย</FooterLink>
                    </FooterSection>

                    <FooterSection title="ติดต่อเรา">
                        <div className="flex items-center mb-2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0" />
                            <p className="text-gray-400 text-sm sm:text-base">123 ถนนสุขุมวิท, กรุงเทพฯ 10110</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0" />
                            <p className="text-gray-400 text-sm sm:text-base">02-123-4567</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0" />
                            <p className="text-gray-400 text-sm sm:text-base">info@bbphone.com</p>
                        </div>
                    </FooterSection>
                </div>

                <div className="border-t border-gray-800 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-500 mb-4 sm:mb-0 text-sm sm:text-base">&copy; 2024 BB Phone. สงวนลิขสิทธิ์</p>
                        <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-2 sm:mb-0">
                                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                                <span>การันตีคุณภาพ</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-2 sm:mb-0">
                                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                                <span>ชำระเงินปลอดภัย</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                                <span>รับประกัน 6 เดือน</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;