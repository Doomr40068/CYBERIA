'use client';

import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import { FaWhatsapp } from 'react-icons/fa6';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';

export default function MainHeader() {
    const contacts = useContactsContext();
    if (!contacts) return null;
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));

    return (
        <header className="flex items-center justify-between !px-5 !mb-5 font-semibold  ">
            <h2 className="text-2xl font-bold">КИБЕРИЯ</h2>

            <nav className="hidden lg:text-sm md:text-sm md:flex gap-2.5">
                <Link
                    href="/projects"
                    className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
                >
                    Проекты
                </Link>
                <Link
                    href="/projects"
                    className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
                >
                    Услуги
                </Link>
                <Link
                    href="/projects"
                    className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
                >
                    О компании
                </Link>
                <Link
                    href="/projects"
                    className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
                >
                    Карьера
                </Link>
                <Link
                    href="/projects"
                    className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
                >
                    Блог
                </Link>
                <Link
                    href="/projects"
                    className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
                >
                    Новости
                </Link>
                <Link
                    href="/projects"
                    className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
                >
                    Контакты
                </Link>
            </nav>

            <div className="flex gap-4 items-center">
                <div className=" hidden md:flex items-center gap-2.5 text-2xl">
                    <Link href={contactsMap.telegram} target="_blank" rel="noopener noreferrer">
                        <RiTelegramLine className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </Link>
                    <Link href={contactsMap.whatsapp} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </Link>
                    <Link href={contactsMap.vk} target="_blank" rel="noopener noreferrer">
                        <BiLogoVk className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                    </Link>
                </div>
            </div>

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
                            <Menu size={28} className="text-black" />
                        </div>
                    </div>
                </SheetTrigger>

                <SheetContent side="right" className="bg-[#2D41F9] !max-w-none text-white !w-full">
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
                                <p className="text-2xl text-white font-bold">{contactsMap.phone}</p>
                                <p className="text-2xl text-white font-bold">{contactsMap.email}</p>
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
    );
}
