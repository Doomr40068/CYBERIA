import { RiTelegramLine } from 'react-icons/ri';
import { BiLogoVk } from 'react-icons/bi';

export function BannerBlock() {
    return (
        <div className=" rounded-[25px] !p-[60px] text-white !mb-[130px] bg-gradient-to-r from-[#2d41f9] to-[#1b2793] flex flex-col gap-2.5">
            <div>
                <h1 className="w-[40%] !mb-2.5 text-[22px] ">
                    Разрабатываем сложные ITпродукты: е-ком, веб-сервисы, ИИ
                </h1>
                <div className="flex gap-2.5">
                    <div className="flex flex-col gap-2.5">
                        <button className="bg-black rounded-[25px] font-['Wix_Madefor_Text'] text-[15px] !py-2 !px-3.5 ">
                            Обсудить проект
                        </button>
                        <div className="flex flex-row text-3xl">
                            <RiTelegramLine className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                            <BiLogoVk className="fill-white transition-all duration-1000 hover:fill-[url(#telegram-gradient)] hover:scale-110" />
                        </div>
                    </div>
                    <div className="text-white flex bg-black gap-5 !py-2.5 !px-5 w-[32%] rounded-[36px] items-center rotate-[355deg]">
                        <div>
                            <h3 className="text-[37px] font-bold !my-[-12px] bg-gradient-to-r from-[#2d41f9] to-[#9acbff] bg-clip-text text-transparent ">
                                23
                            </h3>
                            <h3>место</h3>
                        </div>
                        <h4>Разработка решений на базе ИИ</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
