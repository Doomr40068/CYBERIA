'use client';

import Image from 'next/image';
import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa6';
import { useContactsContext } from '@/entities/contact/model/ContactContext';

export function ContactsBanner() {
    const contacts = useContactsContext();

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
                <h1 className="text-3xl lg:text-5xl w-full lg:text-left text-center font-medium text-white">
                    Обсудим ваш проект?
                </h1>
                <h4 className="!my-5 w-10/12 text-2xl lg:text-left text-center font-['Wix_Madefor_Text'] ">
                    Сформируем четкий план реализации проекта в кратчайшие сроки и в рамках вашего
                    бюджета
                </h4>
                <div className="flex gap-1 ">
                    <h4 className="!mr-2 font-['Wix_Madefor_Text'] text-2xl ">Обсудить проект</h4>
                    <div className="flex items-center gap-2.5 text-3xl">
                        <a href={contactsMap.telegram} target="_blank" aria-label="Telegram">
                            <RiTelegramLine className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                        </a>
                        <a href={contactsMap.whatsapp} target="_blank" aria-label="Whatsapp">
                            <FaWhatsapp className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                        </a>
                        <a href={contactsMap.vk} target="_blank" aria-label="VK">
                            <BiLogoVk className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
