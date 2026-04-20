'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import { SocialMedia } from '@/entities/contact/ui/social-media';
import { feedbackApi } from './types';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(1, 'Введите имя'),
    phone: z.string().min(5, 'Введите телефон'),
    comment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function Form() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);
            await feedbackApi.send({
                name: data.name,
                phone: data.phone,
                comment: data.comment,
            });
            setLoading(false);

            setStatus('success');
        } catch (e) {
            console.error(e);
            setStatus('error');
        }
    };

    if (status) {
        return (
            <div className="flex items-center justify-center w-full h-full  relative">
                <div className="bg-white !p-10 rounded-3xl justify-center text-center flex flex-col items-center max-w-md w-full relative">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center gap-5">
                            <IoCheckmarkSharp className="border-2 text-black w-14 h-14 !p-3 border-blue-500 rounded-full" />
                            <h2 className="text-3xl font-bold text-black">
                                Спасибо, ваша заявка отправлена
                            </h2>
                            <p className="text-black text-2xl font-['Wix_Madefor_Text'] ">
                                В ближайшее время наш менеджер свяжется с вами
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-5">
                            <RxCross1 className="border-2 text-black w-14 h-14 !p-3 border-blue-500 rounded-full" />
                            <h2 className="text-3xl font-bold text-black">
                                Упс... Что-то пошло не так
                            </h2>
                            <p className="text-black font-['Wix_Madefor_Text'] text-2xl">
                                Повторите попытку позднее
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-black">
            <div className="bg-white flex w-full h-full flex-col gap-5 !p-6 rounded-none lg:rounded-t-3xl">
                <h2 className="text-4xl font-bold !mb-4">Обсудить проект</h2>

                <p className='font-["Wix_Madefor_Text"] lg:text-sm text-[18px]'>
                    Оставьте свои контактные данные,
                    <br /> и мы свяжемся с вами в ближайшее время
                </p>

                <div className="flex flex-col lg:flex-row gap-5 !mb-4">
                    <input
                        {...register('name')}
                        placeholder="Имя"
                        className={`border !p-3 rounded-xl w-full ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />

                    <input
                        {...register('phone')}
                        type="tel"
                        placeholder="Телефон"
                        className={`border !p-3 rounded-xl w-full ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                </div>

                <textarea
                    {...register('comment')}
                    placeholder="Комментарий"
                    className="border border-gray-300 !p-3 rounded-xl w-full !mb-4"
                />

                <div className="flex flex-col lg:flex-row gap-10">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full lg:w-auto text-[18px]"
                    >
                        {loading ? 'Отправка...' : 'Отправить'}
                    </Button>

                    <p className="lg:text-sm text-[18px]">
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных
                    </p>
                </div>
            </div>

            <div className="bg-[#2D41F9] rounded-none lg:h-auto gap-5 flex-col lg:flex-row h-1/4 !p-6 lg:rounded-b-3xl flex text-white">
                <p className="!mr-5 text-[18px] lg:text-sm lg:w-full w-2/4">
                    Или свяжитесь с нами через мессенджеры
                </p>
                <SocialMedia IconsclassName="fill-white !border-1 !border-white" />
            </div>
        </form>
    );
}
