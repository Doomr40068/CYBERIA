'use client';

import { Card, CardContent } from '@/shared/ui';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import Image from 'next/image';
import { Review } from '@/entities/review/model/types';
import { Button } from '@/shared/ui';

interface ReviewCarouselProps {
    review: Review[];
}

export function ReviewCarousel({ review = [] }: ReviewCarouselProps) {
    if (!review.length) {
        return <div className="text-center !py-10">Нет элементов</div>;
    }

    return (
        <Carousel
            id="services"
            opts={{
                align: 'start',
            }}
            className="w-full"
        >
            <CarouselContent>
                {review.map((item) => (
                    <CarouselItem key={item.id} className="basis-[100%] lg:basis-1/3">
                        <div>
                            <Card className="bg-[#EDEEFF] !p-8 !mx-5 ">
                                <CardContent className="flex h-96 flex-col items-center justify-center">
                                    <div className=" w-full flex justify-between !mb-5">
                                        <h3 className="text-2xl font-bold w-3/5 ">
                                            {item.project.title}
                                        </h3>
                                        <Button
                                            aria-label="Переход на проект"
                                            variant="review"
                                            size="review"
                                        >
                                            📃
                                        </Button>
                                    </div>
                                    <div className="bg-white rounded-3xl flex flex-col justify-between !p-4 h-full w-full ">
                                        <p className="text-2xl font-['Wix_Madefor_Text'] font-semibold">
                                            {item.content}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                className="!w-12 !h-12 text-black rounded-full object-cover"
                                                src={item.image?.original_url ?? '/avatar.png'}
                                                alt="Ava"
                                                width={100}
                                                height={100}
                                            />
                                            <div className="leading-4">
                                                <p className="font-semibold text-sm text-[#2D41F9]">
                                                    {item.fio}
                                                </p>
                                                <p className="font-['Wix_Madefor_Text'] text-sm">
                                                    {item.position}
                                                </p>
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
