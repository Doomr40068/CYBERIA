import { Button } from '@/shared/ui';
import Image from 'next/image';

export function OurCommand() {
    return (
        <div className="!py-10 !px-20 lg:flex-row flex flex-col items-center text-center justify-center lg:gap-10 rounded-4xl bg-gradient-to-bl from-[#08158A] via-[#1A2ABE] via-[#2D41F9] via-[#8793FC] to-[#F0F1FF]">
            <div className="lg:w-2/5">
                <div className=" flex flex-col lg:items-start items-center">
                    <h2 id="about" className="font-bold !mb-5 lg:text-left text-white text-6xl">
                        Наша команда
                    </h2>
                    <p className="text-white lg:w-3/5 lg:text-left w-full !mb-6 font-['Wix_Madefor_Text'] text-2xl font-light ">
                        Благодаря многолетнему опыту мы гибко используем современные методологии
                        разработки — Scrum, Agile, Lean, Kanban, применяя и адаптируя их под нужды
                        проекта
                    </p>
                    <Button
                        variant="default"
                        className="!px-10 font-['Wix_Madefor_Text']"
                        size="default"
                    >
                        Подробнее
                    </Button>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 lg:text-left !mt-14 gap-16">
                    <div>
                        <p
                            className="text-8xl 
                           font-bold bg-gradient-to-br
                           from-[#6CA7FF] to-[#2D41F9] 
                           bg-clip-text text-transparent "
                        >
                            40
                        </p>
                        <p className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            штатных сотрудников:аналитики, дизайнеры, разработчики, тестировщики,
                            девопсы
                        </p>
                    </div>
                    <div>
                        <p
                            className="text-8xl 
                           font-bold bg-gradient-to-br
                           from-[#8B61E5] to-[#6720FF] 
                           bg-clip-text text-transparent "
                        >
                            15
                        </p>
                        <p className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            лет — опыт работы топ-менеджеров компании в разработке
                        </p>
                    </div>
                    <div>
                        <p
                            className="text-8xl 
                           font-bold bg-gradient-to-br
                           from-[#8B61E5] to-[#6720FF] 
                           bg-clip-text text-transparent "
                        >
                            5
                        </p>
                        <p className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            лет на рынке разработки
                        </p>
                    </div>
                    <div>
                        <p
                            className="text-8xl 
                           font-bold bg-gradient-to-br
                           from-[#6CA7FF] to-[#2D41F9] 
                           bg-clip-text text-transparent "
                        >
                            90
                        </p>
                        <p className="font-['Wix_Madefor_Text'] leading-none font-bold ">
                            реализованных проектов
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex lg:w-2/6 md:5/6 w-full flex-col lg:-mb-35 justify-center">
                <div className="flex justify-end z-30 !-mb-10">
                    <Image src="/TheCommand.png" alt="Контакты" width={300} height={250} />
                </div>

                <div>
                    <Image src="/SmartMan.png" alt="Контакты" width={400} height={400} />
                </div>

                <div className="flex justify-end !-mt-25">
                    <Image className="" src="/Girl.png" alt="Контакты" width={300} height={250} />
                </div>
            </div>
        </div>
    );
}
