'use client';

import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa6';
import { Menu } from 'lucide-react';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';

interface StickyHeaderProps {
    show: boolean;
}

export default function StickyHeader({ show }: StickyHeaderProps) {
    const contacts = useContactsContext();
    if (!contacts) return null;
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));
    return (
        <div
            className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 
        ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
        >
            <header className="bg-[#0B0D20] rounded-b-[15px] text-white flex items-center justify-between !p-5">
                <h2 className="text-xl font-bold">КИБЕРИЯ</h2>

                <nav className="flex space-x-4 hidden md:flex text-sm gap-2.5 ">
                    <Link
                        className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent"
                        href={''}
                    >
                        Проекты
                    </Link>
                    <Link
                        className=" text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent"
                        href={''}
                    >
                        Услуги
                    </Link>
                    <Link
                        className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent"
                        href={''}
                    >
                        О компании
                    </Link>
                    <Link
                        className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent"
                        href={''}
                    >
                        Карьера
                    </Link>
                    <Link
                        className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent"
                        href={''}
                    >
                        Блог
                    </Link>
                    <Link
                        className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent"
                        href={''}
                    >
                        Новости
                    </Link>
                    <Link
                        className="text-white hover:bg-gradient-to-r from-[#2d41f9] via-[#9e70ff] to-[#36cfff] bg-clip-text text-transparent"
                        href={''}
                    >
                        Контакты
                    </Link>
                </nav>

                <ul className="hidden md:flex items-center gap-2.5 text-2xl">
                    <Link href={contactsMap.telegram} target="_blank" rel="noopener noreferrer">
                        <RiTelegramLine className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </Link>
                    <Link href={contactsMap.whatsapp} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </Link>
                    <Link href={contactsMap.vk} target="_blank" rel="noopener noreferrer">
                        <BiLogoVk className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </Link>
                </ul>

                <Sheet>
                    <SheetTrigger asChild>
                        <div className="md:hidden p-2 -mr-2">
                            <div className="flex gap-1.5">
                                <Link
                                    href={contactsMap.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <RiTelegramLine className="text-3xl" />
                                </Link>
                                <Menu size={28} className="text-white" />
                            </div>
                        </div>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="bg-[#2D41F9] !max-w-none text-white !w-full"
                    >
                        <div className="flex flex-col gap-8 mt-10">
                            <div className="bg-white rounded-2xl text-black mb-1.5 !mt-9 !mx-4 !p-5 ">
                                <nav className="flex flex-col gap-6 text-lg font-medium">
                                    <Link href="/projects" className="hover:text-blue-600">
                                        Проекты
                                    </Link>
                                    <Link href="/services" className="hover:text-blue-600">
                                        Услуги
                                    </Link>
                                    <Link href="/about" className="hover:text-blue-600">
                                        О компании
                                    </Link>
                                    <Link href="/career" className="hover:text-blue-600">
                                        Карьера
                                    </Link>
                                    <Link href="/blog" className="hover:text-blue-600">
                                        Блог
                                    </Link>
                                    <Link href="/news" className="hover:text-blue-600">
                                        Новости
                                    </Link>
                                    <Link href="/contacts" className="hover:text-blue-600">
                                        Контакты
                                    </Link>
                                </nav>
                            </div>

                            <div className="flex rounded-2xl !p-6 bg-black !mx-4 flex-col gap-3 mb-1.5 ">
                                <div>
                                    <p className="text-2xl text-white font-bold">
                                        {contactsMap.phone}
                                    </p>
                                    <p className="text-2xl text-white font-bold">
                                        {contactsMap.email}
                                    </p>
                                </div>
                                <div className="flex gap-1 text-3xl pt-6">
                                    <Link
                                        href={contactsMap.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiTelegramLine className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                                    </Link>
                                    <Link
                                        href={contactsMap.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaWhatsapp className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                                    </Link>
                                    <Link
                                        href={contactsMap.vk}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BiLogoVk className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                                    </Link>
                                </div>
                            </div>
                            <Button variant="burger" size="burger">
                                Обсудить проект
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}
