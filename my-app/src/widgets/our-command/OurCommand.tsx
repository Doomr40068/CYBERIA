export function OurCommand() {
    return (
        <div className="!py-10 !px-8 flex gap-10 rounded-4xl bg-gradient-to-bl from-[#08158A] via-[#1A2ABE] via-[#2D41F9] via-[#8793FC] to-[#F0F1FF]">
            <div className="w-[50%]">
                <h1 className="font-bold !mb-5 text-white text-6xl">Наша команда</h1>
                <h3 className="text-white text-[16px] font-light ">
                    Благодаря многолетнему опыту мы гибко используем современные методологии
                    разработки — Scrum, Agile, Lean, Kanban, применяя и адаптируя их под нужды
                    проекта
                </h3>
                <button className="text-white !mt-5 !px-7 !py-3 !text-[15px]">Подробнее</button>
                <div className="grid grid-cols-2 grid-rows-2 !mt-[60px] gap-6">
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
        </div>
    );
}
