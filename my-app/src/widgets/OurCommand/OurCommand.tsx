import Image from 'next/image';

export function OurCommand() {
    return (
        <div className="!py-10 !px-20 lg:flex-row flex flex-col items-center text-center justify-center lg:gap-10 rounded-4xl bg-gradient-to-bl from-[#08158A] via-[#1A2ABE] via-[#2D41F9] via-[#8793FC] to-[#F0F1FF]">
            <div className="lg:w-2/5">
                <h1 className="font-bold !mb-5 text-white text-6xl">Наша команда</h1>
                <h3 className="text-white lg:w-3/5 w-full font-['Wix_Madefor_Text'] text-2xl font-light ">
                    Благодаря многолетнему опыту мы гибко используем современные методологии
                    разработки — Scrum, Agile, Lean, Kanban, применяя и адаптируя их под нужды
                    проекта
                </h3>
                <button
                    type="button"
                    className="text-white font-['Wix_Madefor_Text'] bg-black rounded-3xl !mt-5 !px-7 !py-3 text-sm"
                >
                    Подробнее
                </button>
                <div className="grid grid-cols-2 grid-rows-2 !mt-14 gap-16">
                    <div>
                        <h3
                            className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#6CA7FF] to-[#2D41F9] 
                           bg-clip-text text-transparent "
                        >
                            40
                        </h3>
                        <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            штатных сотрудников:аналитики, дизайнеры, разработчики, тестировщики,
                            девопсы
                        </h3>
                    </div>
                    <div>
                        <h3
                            className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#8B61E5] to-[#6720FF] 
                           bg-clip-text text-transparent "
                        >
                            15
                        </h3>
                        <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            лет — опыт работы топ-менеджеров компании в разработке
                        </h3>
                    </div>
                    <div>
                        <h3
                            className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#8B61E5] to-[#6720FF] 
                           bg-clip-text text-transparent "
                        >
                            5
                        </h3>
                        <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            лет на рынке разработки
                        </h3>
                    </div>
                    <div>
                        <h3
                            className="text-7xl 
                           font-bold bg-gradient-to-br
                           from-[#6CA7FF] to-[#2D41F9] 
                           bg-clip-text text-transparent "
                        >
                            90
                        </h3>
                        <h3 className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            реализованных проектов
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex lg:w-2/6 md:5/6 w-full flex-col lg:-mb-35 justify-center">
                <div className="flex justify-end z-30 !-mb-10">
                    <Image
                        src="/20240626-MKXO6518_resized 2.png"
                        alt="Контакты"
                        width={300}
                        height={250}
                    />
                </div>

                <div>
                    <Image
                        src="/20240626-MKXO6218_resized 2.png"
                        alt="Контакты"
                        width={400}
                        height={400}
                    />
                </div>

                <div className="flex justify-end !-mt-25">
                    <Image
                        className=""
                        src="/20240626-MKXO6247_resized 2.png"
                        alt="Контакты"
                        width={300}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
}
