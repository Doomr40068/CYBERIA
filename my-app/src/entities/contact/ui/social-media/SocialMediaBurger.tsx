import Link from 'next/link';
import { BiLogoVk } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiTelegram2Fill } from 'react-icons/ri';
import { useContactsContext } from '@/entities/contact/model/ContactContext';

export function SocialMediaBurger() {
    const contacts = useContactsContext();
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.key, item.value]));

    return (
        <div className="flex rounded-2xl !p-6 bg-black !mx-4 flex-col gap-3 mb-1.5 ">
            <div>
                <p className="text-2xl text-white font-bold">{contactsMap.phone}</p>
                <p className="text-2xl text-white font-bold">{contactsMap.email}</p>
            </div>
            <div className="flex gap-1 text-4xl pt-6">
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
    );
}
