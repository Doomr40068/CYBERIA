import { Posts } from '@/entities/post/model/types';
import Image from 'next/image';

interface NewsProps {
    news: Posts[];
}

export function News({ news }: NewsProps) {
    return (
        <div className="bg-[#EDEEFF] !p-8 rounded-4xl flex flex-col items-center">
            <h2 className="text-center text-4xl font-bold !mb-12 ">Новости</h2>
            <div className="grid w-full gap-8 lg:grid-cols-3 grid-cols-1">
                {news.map((item) => (
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
                                {item.published_at}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
