'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Image from 'next/image';
import { ButtonMore } from '@/features/load-more-projects/ui/ButtonMore';
import { useProjects } from '@/entities/projects/model/useProjects';

export function OurProject() {
    const { projects, categories, loadMore, hasMore, isLoading, error } = useProjects();

    if (isLoading) {
        return (
            <div className="flex flex-col items-center !mb-30">
                <h2 className="text-center !text-4x1 font-bold !mb-12">Наши проекты</h2>
                <div className="text-center !p-8">Идёт загрузка</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center !mb-30">
                <h2 className="text-center !text-4x1 font-bold !mb-12">Наши проекты</h2>
                <div className="text-red-500 text-center !p-8">Ошибка: {error}</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center !mb-30">
            <h2 className="text-center text-4xl font-bold !mb-12"> Наши проекты </h2>
            <Tabs defaultValue={categories[0]?.id?.toString()} className="w-full">
                <TabsList
                    onWheel={(e) => {
                        e.preventDefault();
                        e.currentTarget.scrollLeft += e.deltaY;
                    }}
                    className="font-['Wix_Madefor_Text'] overscroll-contain snap-start !scroll-pl-10 !max-w-full !h-auto !py-10 text-sm bg-transparent flex overflow-x-auto overflow-y-hidden gap-2 snap-x snap-mandatory no-scrollbar "
                >
                    {categories.map((cat) => (
                        <TabsTrigger
                            key={cat.id}
                            value={String(cat.id)}
                            className="
                    hover:bg-gradient-to-r from-[#2D41F9] via-[#9E70FF] to-[#36CFFF]
                    hover:!text-white
                    !px-10 !py-3.5
                    text-2xl
                    rounded-full
                    !bg-[#EDEEFF]
                    !text-black
                    transition-all duration-500
                    shrink-0
              "
                        >
                            {cat.name}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {categories.map((cat) => (
                    <TabsContent key={cat.id} value={String(cat.id)} className="!mt-6">
                        <h2 className="text-center !mb-10 text-4xl">{cat.name}</h2>
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
                                        <h3 className="font-bold text-xl">{el.title}</h3>
                                        <p className="text-gray-600">{el.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <ButtonMore onClick={loadMore} isLoading={isLoading} hasMore={hasMore} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
