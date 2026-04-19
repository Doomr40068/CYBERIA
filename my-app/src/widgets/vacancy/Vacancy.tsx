import { Button } from '@/shared/ui';
import Link from 'next/link';

export function Vacancy() {
    return (
        <div className="!mt-5 !px-2">
            <div className="bg-gradient-to-br from-[#060B82] to-[#0B0D20] rounded-3xl overflow-hidden">
                <div className="!px-10 !py-3 !mt-11 items-center flex flex-col justify-center">
                    <h1 className="text-white text-3xl md:text-4xl text-center lg:text-5xl font-bold leading-tight">
                        Мы всегда ищем новые таланты в нашу команду
                    </h1>

                    <div className="!mt-10 gap-10 lg:gap-16 flex flex-col items-center md:items-end ">
                        <div className="text-white lg:w-1/2 ">
                            <p className="text-[15px] font-['Wix_Madefor_Text'] md:text-base leading-relaxed text-white/90">
                                Работая в нашей команде, каждый день ты будешь делать и узнавать
                                что-то новое и интересное. Крутые знакомства, долгосрочные проекты и
                                необычные задачи — то, что ждет тебя в Киберии.
                            </p>

                            <div className="!mt-8 flex lg:flex-row flex-col font-['Wix_Madefor_Text'] items-center gap-4">
                                <Button variant="vacancy" size="vacancy">
                                    Подробнее
                                </Button>
                                <Link
                                    href="https://barnaul.hh.ru/"
                                    className="text-white/80 hover:text-white underline underline-offset-4 self-center text-sm"
                                >
                                    Вакансии на hh.ru
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="!mt-10">
                        <div className="flex flex-wrap justify-center gap-6 !pb-5">
                            <div className="bg-white w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] rounded-2xl shadow-xl flex flex-col">
                                <div className="flex flex-col h-[120px] sm:h-[140px] md:h-[160px]">
                                    <div className="flex-1 bg-gradient-to-br from-cyan-200 to-blue-500 rounded-t-xl flex items-center justify-center text-xs sm:text-sm">
                                        Backend img
                                    </div>
                                    <div className="flex-1 bg-black text-white flex items-center justify-center text-xs sm:text-sm">
                                        Text Backend
                                    </div>
                                </div>

                                <div className="!px-3 !py-4 flex flex-col justify-between flex-1">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-none">
                                        Back
                                        <br />
                                        end-
                                    </h2>
                                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
                                        разработчик
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] rounded-2xl shadow-xl flex flex-col-reverse">
                                <div className="flex flex-col-reverse h-[120px] sm:h-[140px] md:h-[160px]">
                                    <div className="flex-1 bg-gradient-to-br from-purple-500 to-blue-600 rounded-b-xl flex items-center justify-center text-white text-xs sm:text-sm">
                                        Frontend img
                                    </div>
                                    <div className="flex-1 bg-black text-white flex items-center justify-center text-xs sm:text-sm">
                                        Text Frontend
                                    </div>
                                </div>

                                <div className="!px-3 !py-4 flex flex-col justify-between flex-1">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-none">
                                        Front
                                        <br />
                                        end-
                                    </h2>
                                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                                        разработчик
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
