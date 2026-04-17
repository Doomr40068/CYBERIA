'use client';

import Image from 'next/image';
import { RiTelegram2Fill } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import Link from 'next/link';

export function ContactsBanner() {
    const contacts = useContactsContext();
    if (!contacts) return null;
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));
    return (
        <div className="flex lg:flex-row flex-col-reverse justify-center rounded-4xl gap-5 !p-10 !my-24 !mx-5 bg-[#6ECCFF] bg-gradient-to-r from-[#70D0FF] to-[#2D41F9] ">
            <div className=" flex justify-center items-center">
                <Image
                    src="/20240626-MKXO6218_resized 2.png"
                    alt="Контакты"
                    width={400}
                    height={300}
                />
            </div>
            <div className="text-white lg:w-6/12 lg:items-start items-center flex flex-col justify-center ">
                <p className="text-3xl lg:text-5xl w-full lg:text-left text-center font-medium text-white">
                    Обсудим ваш проект?
                </p>
                <p className="!my-5 w-10/12 text-2xl lg:text-left text-center font-['Wix_Madefor_Text'] ">
                    Сформируем четкий план реализации проекта в кратчайшие сроки и в рамках вашего
                    бюджета
                </p>
                <div className="flex gap-1 ">
                    <p className="!mr-2 font-['Wix_Madefor_Text'] text-2xl ">Обсудить проект</p>
                    <div className="flex items-center gap-2.5 text-3xl">
                        <Link href={contactsMap.telegram} target="_blank" rel="noopener noreferrer">
                            <RiTelegram2Fill className="fill-white border-1 !p-1.5 hover:fill-white hover:border-transparent border-white rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                        </Link>
                        <Link href={contactsMap.whatsapp} target="_blank" rel="noopener noreferrer">
                            <IoLogoWhatsapp className="fill-white border-1 !p-1.5 hover:fill-white hover:border-transparent border-white rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                        </Link>
                        <Link href={contactsMap.vk} target="_blank" rel="noopener noreferrer">
                            <BiLogoVk className="fill-white border-1 !p-1.5 hover:fill-white hover:border-transparent border-white rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
