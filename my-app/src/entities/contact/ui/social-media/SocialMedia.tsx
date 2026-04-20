import Link from 'next/link';
import { BiLogoVk } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiTelegram2Fill } from 'react-icons/ri';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import clsx from 'clsx';

type Props = {
    className?: string;
    IconsclassName?: string;
};

export function SocialMedia({ className, IconsclassName }: Props) {
    const contacts = useContactsContext();
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.key, item.value]));
    if (!contactsMap) return [];
    return (
        <div className={clsx('flex gap-4 items-center', className)}>
            <div className=" flex items-center gap-2.5 text-4xl">
                <Link href={contactsMap.telegram} target="_blank" rel="noopener noreferrer">
                    <RiTelegram2Fill
                        className={clsx(
                            'fill-black border-1 !p-1.5 hover:fill-white hover:border-transparent border-black rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110',
                            IconsclassName
                        )}
                    />
                </Link>
                <Link href={contactsMap.whatsapp} target="_blank" rel="noopener noreferrer">
                    <IoLogoWhatsapp
                        className={clsx(
                            'fill-black border-1 !p-1.5 hover:fill-white hover:border-transparent border-black rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110',
                            IconsclassName
                        )}
                    />
                </Link>
                <Link href={contactsMap.vk} target="_blank" rel="noopener noreferrer">
                    <BiLogoVk
                        className={clsx(
                            'fill-black border-1 !p-1.5 hover:fill-white hover:border-transparent border-black rounded-3xl transition-all duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110',
                            IconsclassName
                        )}
                    />
                </Link>
            </div>
        </div>
    );
}
