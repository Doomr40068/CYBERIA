'use client';

import Image from 'next/image';
import { SocialMedia } from '@/entities/contact/ui/social-media';

export function ContactsBanner() {
    return (
        <div
            id="contacts"
            className="flex lg:flex-row flex-col-reverse justify-center rounded-4xl gap-5 !p-10 !my-24 !mx-5 bg-[#6ECCFF] bg-gradient-to-r from-[#70D0FF] to-[#2D41F9] "
        >
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
                    <SocialMedia IconsclassName="fill-white border-white " />
                </div>
            </div>
        </div>
    );
}
