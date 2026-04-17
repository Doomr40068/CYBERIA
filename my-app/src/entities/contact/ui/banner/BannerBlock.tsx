'use client';

import { RiTelegram2Fill } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import Image from 'next/image';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import { FromDialog } from '@/features/open-forms/FormDialog';

export function BannerBlock() {
    const contacts = useContactsContext();
    if (!contacts) return null;
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
            <div className="w-full lg:w-1/2">
                <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Разрабатываем сложные IT продукты:
                    <br />
                    e-com, веб-сервисы, ИИ
                </h2>
                <div className="flex flex-col-reverse gap-4 lg:gap-6">
                    <div className="flex flex-col font-['Wix_Madefor_Text'] gap-3">
                        <FromDialog>
                            <Button
                                type="button"
                                variant="default"
                                className="lg:text-[18px] lg:!px-6 lg:!py-5.5 font-medium "
                                size="default"
                            >
                                Обсудить проект
                            </Button>
                        </FromDialog>

                        <div className="flex items-center gap-2.5 text-3xl">
                            <Link
                                href={contactsMap.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiTelegram2Fill className="fill-white bg-black !p-1.5 rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                            </Link>
                            <Link
                                href={contactsMap.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoWhatsapp className="fill-white bg-black !p-1.5 rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                            </Link>
                            <Link href={contactsMap.vk} target="_blank" rel="noopener noreferrer">
                                <BiLogoVk className="fill-white bg-black !p-1.5 rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                            </Link>
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

                        <p className="text-sm">Разработка решений на базе ИИ</p>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 max-h-96 flex justify-center">
                <Image
                    className="
                        w-56
                        sm:w-64
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
