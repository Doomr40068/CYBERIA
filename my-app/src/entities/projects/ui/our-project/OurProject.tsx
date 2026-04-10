'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Image from 'next/image';
import { ButtonMore } from '@/features/load-more-projects/ui/ButtonMore';
import { useProjects } from '@/entities/projects/model/useProjects';

export function OurProject() {
    const { projects, loadMore, hasMore, isLoading, error } = useProjects();

    if (error) {
        return (
            <div className="flex flex-col items-center mb-30">
                <h1 className="text-center text-[40px] font-bold !mb-12">Наши проекты</h1>
                <div className="text-red-500 text-center p-8">Ошибка: {error}</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mb-30">
            <h1 className="text-center text-[40px] font-bold !mb-12"> Наши проекты </h1>
            <Tabs defaultValue="webservices" className="w-full">
                <TabsList className="font-['Wix_Madefor_Text'] text-[15px] gap-3 bg-transparent flex flex-nowrap w-full overflow-x-auto">
                    <TabsTrigger
                        value="webservices"
                        className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6 !py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
                    >
                        Веб-сервисы
                    </TabsTrigger>
                    <TabsTrigger
                        value="crm"
                        className="
                      hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6 !py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
                    >
                        CRM-системы
                    </TabsTrigger>
                    <TabsTrigger
                        value="eshop"
                        className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6 !py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
                    >
                        Интернет-магазины
                    </TabsTrigger>
                    <TabsTrigger
                        value="corporate"
                        className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6 !py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
                    >
                        Корпоративные сайты
                    </TabsTrigger>
                    <TabsTrigger
                        value="marketplace"
                        className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6 !py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
                    >
                        Агрегаторы, маркетплейсы
                    </TabsTrigger>
                    <TabsTrigger
                        value="logic"
                        className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6 !py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
                    >
                        Логические сервисы
                    </TabsTrigger>
                    <TabsTrigger
                        value="else_project"
                        className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-6!py-2.5
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
              "
                    >
                        Другие проекты
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="webservices" className="mt-6">
                    <div className="grid grid-cols-2 gap-5">
                        {projects.map((el) => (
                            <div key={el.id} className="flex flex-col gap-4">
                                <Image
                                    className="rounded-4xl w-full h-full object-cover"
                                    src={el.image?.original_url}
                                    alt={el.title || 'Project'}
                                    width={300}
                                    height={280}
                                    loading="lazy"
                                />
                                <div>
                                    <h1 className="font-bold text-xl">{el.title}</h1>
                                    <h3 className="text-gray-600">{el.description}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ButtonMore onClick={loadMore} isLoading={isLoading} hasMore={hasMore} />
                </TabsContent>

                <TabsContent value="crm" className="!mt-6">
                    <div className="text-center !p-8">Контент CRM скоро появится</div>
                </TabsContent>
                <TabsContent value="eshop" className="!mt-6">
                    <div className="text-center !p-8">Контент магазинов скоро появится</div>
                </TabsContent>
                <TabsContent value="corporate" className="!mt-6">
                    <div className="text-center !p-8">
                        Контент корпоративных сайтов скоро появится
                    </div>
                </TabsContent>
                <TabsContent value="marketplace" className="!mt-6">
                    <div className="text-center !p-8">
                        OZON и другие маркетплейсы скоро появятся
                    </div>
                </TabsContent>
                <TabsContent value="logic" className="!mt-6">
                    <div className="text-center !p-8">Логические сервисы скоро появятся</div>
                </TabsContent>
                <TabsContent value="else_project" className="!mt-6">
                    <div className="text-center !p-8">Другие наши проекты скоро появятся</div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
