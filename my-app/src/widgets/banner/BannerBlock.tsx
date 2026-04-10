import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa6';
import Image from 'next/image';
import { Contacts } from '@/entities/contact/model/types';

interface ContactsProps {
    contacts: Contacts[];
}

export function BannerBlock({ contacts }: ContactsProps) {
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));

    return (
        <div
            className="
            rounded-4xl
            !px-14 !py-10
            text-white
            !mb-20 lg:!mb-28
            bg-gradient-to-r from-[#2d41f9] to-[#1b2793]
            flex flex-col lg:flex-row
            items-center
            gap-8 lg:gap-0
            justify-between
        "
        >
            {/* ЛЕВАЯ ЧАСТЬ */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Разрабатываем сложные IT продукты:
                    <br />
                    e-com, веб-сервисы, ИИ
                </h1>
                <div className="flex flex-col-reverse gap-4 lg:gap-6">
                    <div className="flex flex-col gap-3">
                        <button
                            type="button"
                            className="bg-black rounded-4xl text-sm !py-2 !px-3.5 w-fit"
                        >
                            Обсудить проект
                        </button>

                        <div className="flex items-center gap-2.5 text-4xl">
                            <a href={contactsMap.telegram} target="_blank" aria-label="Telegram">
                                <RiTelegramLine className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                            </a>
                            <a href={contactsMap.whatsapp} target="_blank" aria-label="Whatsapp">
                                <FaWhatsapp className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                            </a>
                            <a href={contactsMap.vk} target="_blank" aria-label="VK">
                                <BiLogoVk className="fill-black transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    <div
                        className="
                            !mt-4
                            text-white
                            flex
                            bg-black/80
                            gap-4
                            !py-2 !px-4
                            rounded-3xl
                            items-center
                            rotate-[-3deg]
                            w-fit
                        "
                    >
                        <div>
                            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#2d41f9] to-[#9acbff] bg-clip-text text-transparent">
                                23
                            </h3>
                            <h3>место</h3>
                        </div>

                        <h4 className="text-sm">Разработка решений на базе ИИ</h4>
                    </div>
                </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div className="w-full lg:w-1/2 max-h-96 flex justify-center">
                <Image
                    className="
                        w-[220px]
                        sm:w-[260px]
                        lg:w-full
                        h-auto
                        object-contain
                    "
                    src="/20240626-MKXO6518_resized 2.png"
                    alt="картинка"
                    width={300}
                    height={100}
                />
            </div>
        </div>
    );
}
