import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa6';
import { Contacts } from '@/entities/contact/model/types';
import Link from 'next/link';
import { Wix_Madefor_Text } from 'next/font/google';

const wixMadefor = Wix_Madefor_Text({
    weight: ['400', '500', '600'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

interface FooterProps {
    contacts: Contacts[];
}

export default function Footer({ contacts }: FooterProps) {
    const c = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));

    return (
        <footer className={`bg-white w-full !pt-16 pb-10 ${wixMadefor.className}`}>
            <div className=" mx-auto px-5 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0">
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                        <h1 className="text-4xl font-bold tracking-tighter mb-6">КИБЕРИЯ</h1>
                        <p className="text-sm text-gray-600 text-center lg:text-left max-w-sm"></p>
                    </div>

                    <div className="lg:col-span-5 flex flex-col order-3 !mb-5 lg:order-2 lg:items-center">
                        <ul className="space-y-5 text-[15px] text-gray-600 text-center ">
                            <li>
                                <Link
                                    href="/projects"
                                    className="hover:text-black transition-colors"
                                >
                                    Проекты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="hover:text-black transition-colors"
                                >
                                    Услуги
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-black transition-colors">
                                    О компании
                                </Link>
                            </li>
                            <li>
                                <Link href="/career" className="hover:text-black transition-colors">
                                    Карьера
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-black transition-colors">
                                    Блог
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:text-black transition-colors">
                                    Новости
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacts"
                                    className="hover:text-black transition-colors"
                                >
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 flex flex-col gap-2 items-center lg:order-3 order-2 lg:items-end">
                        <div className="space-y-1 flex flex-col gap-2 text-center lg:text-right">
                            <p className="text-2xl font-semibold text-gray-900">{c.phone}</p>
                            <p className="text-xl text-gray-600 font-medium">{c.email}</p>
                            <p className="text-sm text-gray-600">{c.address}</p>
                        </div>

                        <div className="flex gap-2 text-3xl !mb-2 ">
                            <a
                                href={c.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <RiTelegramLine />
                            </a>
                            <a
                                href={c.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-[#25D366] transition-colors"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href={c.vk}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-[#0077FF] transition-colors"
                            >
                                <BiLogoVk />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 md:border-t-0 md:mt-16 md:pt-0 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div className="md:text-left w-[290px] ">
                        © 2026 ООО «Киберия», номер в реестре аккредитованных IT-компаний: 53278
                    </div>
                    <div className="hover:text-gray-900 cursor-pointer transition-colors text-center">
                        Реквизиты компании
                    </div>
                    <div>Политика конфиденциальности</div>
                </div>
            </div>
        </footer>
    );
}
