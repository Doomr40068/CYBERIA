'use client';

import Image from 'next/image';
import { ButtonMore } from '@/features/load-more-projects/ui/ButtonMore';
import { usePosts } from '@/entities/post/model/usePosts';

export function News() {
    const { posts, loadMore, isLoading, hasMore, error } = usePosts();

    if (isLoading && posts.length === 0) {
        return (
            <div>
                <h2 className="text-center items-center !mb-30">Новости</h2>
                <div className="text-4xl text-center !p-8"> Загрузка </div>
            </div>
        );
    }
    if (error) {
        return (
            <div>
                <h2 className="text-center items-center !mb-30">Новости</h2>
                <div className="text-red-500 text-4xl text-center !p-8"> Ошибка {error} </div>
            </div>
        );
    }

    return (
        <div className="bg-[#EDEEFF] !p-8 rounded-4xl flex flex-col items-center">
            <h2 id="news" className="text-center text-4xl font-bold !mb-12 ">
                Новости
            </h2>
            <div className="grid w-full gap-8 lg:grid-cols-3 grid-cols-1">
                {posts.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white !p-5 rounded-4xl gap-5 flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="w-full h-72 overflow-hidden rounded-4xl">
                                <Image
                                    src={item.image_preview}
                                    alt={item.title}
                                    width={388}
                                    height={288}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold lg:text-3xl text-2xl  ">{item.title}</h3>
                            <p className="font-['Wix_Madefor_Text'] font-medium text-[18px]">
                                {item.description}
                            </p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <p>📅</p>
                            <p className="text-[#6F7998] text-[14px] font-['Wix_Madefor_Text']">
                                {item.published_at
                                    ? new Date(item.published_at).toLocaleDateString('ru-RU')
                                    : '—'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <ButtonMore onClick={loadMore} isLoading={isLoading} hasMore={hasMore} />
        </div>
    );
}
