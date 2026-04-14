'use client';

import { Card, CardContent } from '@/shared/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import Image from 'next/image';
import { Review } from '@/entities/review/model/types';

interface ReviewCarouselProps {
    review: Review[];
}

export function ReviewCarousel({ review = [] }: ReviewCarouselProps) {
    if (!review.length) {
        return <div className="text-center !py-10">Нет элементов</div>;
    }

    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className="w-full"
        >
            <CarouselContent>
                {review.map((item) => (
                    <CarouselItem key={item.id} className="basis-[100%] lg:basis-1/3">
                        <div className="p-1">
                            <Card className="bg-[#EDEEFF] !p-8 !mx-5 ">
                                <CardContent className="flex h-[350px] flex-col items-center justify-center">
                                    <div className=" w-full flex justify-between !mb-5">
                                        <h3 className="text-[20px]  font-bold w-3/5 ">
                                            {item.project.title}
                                        </h3>
                                        <button
                                            aria-label="Переход на проект"
                                            className=" h-15 w-15 text-2xl bg-black !p-2.5 rounded-full"
                                        >
                                            📃
                                        </button>
                                    </div>
                                    <div className="bg-white rounded-3xl flex flex-col justify-between !p-4 h-full w-full ">
                                        <h3 className="text-[22px] font-['Wix_Madefor_Text'] font-semibold">
                                            {item.content}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                className="!w-[50px] !h-[50px] text-black rounded-full object-cover"
                                                src={item.image?.original_url}
                                                alt="Ava"
                                                width={100}
                                                height={100}
                                            />
                                            <div className="leading-4">
                                                <h3 className="font-semibold text-[16px] text-[#2D41F9]">
                                                    {item.fio}
                                                </h3>
                                                <h3 className="font-['Wix_Madefor_Text'] text-[16px] ">
                                                    {item.position}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
