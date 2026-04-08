import { Posts } from '@/entities/post/model/types';
import Image from 'next/image';

interface NewsProps {
    news: Posts[];
}

export function News({ news }: NewsProps) {
    return (
        <div className="bg-[#EDEEFF] !p-[30px] rounded-4xl flex flex-col items-center">
            <h1 className="text-center text-[40px] font-bold !mb-12 ">Новости</h1>
            <div className="grid w-full gap-8 lg:grid-cols-3 grid-cols-1">
                {news.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white !p-5 rounded-4xl gap-5 flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-[8px]">
                            <Image
                                className="w-full rounded-4xl"
                                src={item.image_preview}
                                alt={item.title}
                                width={388}
                                height={240}
                            />
                            <h3 className="font-bold lg:text-3xl text-[22px]  ">{item.title}</h3>
                            <h3 className="font-['Wix_Madefor_Text'] font-medium text-[18px]">
                                {item.description}
                            </h3>
                        </div>
                        <div className="flex gap-4 items-center">
                            <h3>📅</h3>
                            <h3 className="text-[#6F7998] text-[14px] font-['Wix_Madefor_Text']">
                                {item.published_at}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            <button className="!mt-[48px] text-[14px] rounded-[25px] font-['Wix_Madefor_Text'] !py-2 !px-4.5 text-white !bg-blue-700">
                Загрузить ещё
            </button>
        </div>
    );
}
