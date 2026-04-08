import Image from 'next/image';
import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';

export function ContactsBanner() {
    return (
        <div className="flex rounded-4xl gap-[20] !pt-[45] !px-[40] !mt-[120] !mb-[100] bg-[#6ECCFF] bg-gradient-to-r from-[#70D0FF] to-[#2D41F9] ">
            <Image
                className="!w-[30%]"
                src="https://avatars.mds.yandex.net/i?id=47d1a0286b5c698e131ab46dee8fdbfe1f323178-5322230-images-thumbs&n=13"
                alt="Реклама"
                width={400}
                height={300}
            />
            <div className="text-white ">
                <h1 className="text-[30px] font-medium text-white">Обсудим ваш проект?</h1>
                <h4 className="text-[16px] !my-[20px] font-['Wix_Madefor_Text'] ">
                    Сформируем четкий план реализации проекта <br />в кратчайшие сроки и в рамках
                    вашего бюджета
                </h4>
                <div className="flex gap-1 ">
                    <h4 className="!mr-2 font-['Wix_Madefor_Text'] text-[18px] ">
                        Обсудить проект
                    </h4>
                    <RiTelegramLine className="telegram-icon text-[30px] !fill-white " />
                    <BiLogoVk className="telegram-icon text-[30px] !fill-white" />
                </div>
            </div>
        </div>
    );
}
