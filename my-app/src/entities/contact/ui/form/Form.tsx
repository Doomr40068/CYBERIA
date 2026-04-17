'use client';

import { useState } from 'react';
import { useContactsContext } from '@/entities/contact';
import { Button } from '@/shared/ui';
import Link from 'next/link';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import { BiLogoVk } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiTelegram2Fill } from 'react-icons/ri';
import { feedbackApi } from './types';

export default function Form() {
    const contacts = useContactsContext();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    if (!contacts) return null;

    const contactsMap = Object.fromEntries(contacts.map((item) => [item.kay, item.value]));

    const handleSubmit = async () => {
        const newErrors: typeof errors = {};

        if (!name.trim()) newErrors.name = true;
        if (!phone.trim()) newErrors.phone = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            await feedbackApi.send({
                name,
                phone,
                comment,
            });

            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    if (status) {
        return (
            <div className="flex items-center justify-center ">
                <div className="bg-white !p-10 w-full justify-center h-80 rounded-3xl text-center flex flex-col items-center gap-4">
                    {status === 'success' ? (
                        <>
                            <IoCheckmarkSharp className="border-2 w-14 h-14 !p-3 border-blue-500 rounded-full" />
                            <h2 className="text-2xl font-bold">Спасибо, заявка отправлена</h2>
                            <p className="text-gray-600">Мы скоро с вами свяжемся</p>
                        </>
                    ) : (
                        <>
                            <RxCross1 className="border-2 w-14 h-14 !p-3 border-red-500 rounded-full" />
                            <h2 className="text-2xl font-bold">Ошибка отправки</h2>
                            <p className="text-gray-600">Попробуйте позже</p>
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col text-black">
            <div className="bg-white flex !w-full !h-full flex-col gap-5 !p-6 rounded-none lg:rounded-t-3xl">
                <h2 className="text-4xl font-bold !mb-4">Обсудить проект</h2>
                <p className='font-["Wix_Madefor_Text"] lg:text-sm text-[18px] '>
                    Оставьте свои контактные данные,
                    <br /> и мы свяжемся с вами в ближайшее время{' '}
                </p>
                <div className=" font-['Wix_Madefor_Text'] lg:text-sm text-[18px] flex-col lg:flex-row flex gap-5 !mb-4">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Имя"
                        className={`border !p-3 rounded-xl w-full ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />

                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Телефон"
                        className={`border !p-3 rounded-xl w-full ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                </div>

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Комментарий"
                    className="border font-['Wix_Madefor_Text'] lg:text-sm text-[18px] border-gray-300 !p-3 rounded-xl w-full !mb-4"
                />

                <div className=" font-['Wix_Madefor_Text'] flex flex-col lg:flex-row gap-10">
                    <Button
                        onClick={handleSubmit}
                        className="w-full lg:w-auto text-[18px]"
                        variant="default"
                        size="default"
                        type="button"
                    >
                        Отправить
                    </Button>
                    <p className="lg:text-sm text-[18px] ">
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных и
                        соглашаетесь с политикой конфиденциальности
                    </p>
                </div>
            </div>

            <div className="bg-[#2D41F9] rounded-none lg:h-auto gap-5 flex-col lg:flex-row h-1/4 font-['Wix_Madefor_Text'] !p-6 lg:rounded-b-3xl flex text-white">
                <p className="!mr-5 text-[18px] lg:text-sm lg:w-full w-2/4 ">
                    Или свяжитесь с нами через мессенджеры
                </p>

                <div className="flex gap-1 text-3xl">
                    <Link href={contactsMap.telegram} target="_blank" rel="noopener noreferrer">
                        <RiTelegram2Fill className="fill-white border-1 !p-1.5 border-white rounded-3xl  transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                    </Link>
                    <Link href={contactsMap.whatsapp} target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className="fill-white border-1 !p-1.5 border-white rounded-3xl  transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                    </Link>
                    <Link href={contactsMap.vk} target="_blank" rel="noopener noreferrer">
                        <BiLogoVk className="fill-white border-1 !p-1.5 border-white rounded-3xl  transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
