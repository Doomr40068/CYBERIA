'use client';

import { RiTelegram2Fill } from 'react-icons/ri';
import { Menu } from 'lucide-react';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui';
import Link from 'next/link';
import { Button } from '@/shared/ui';
import { FormDialog } from '@/features/open-forms/FormDialog';
import { NavigationBlock } from '@/widgets/navigation';
import { NavigationBlockBurger } from '@/widgets/navigation';
import { SocialMedia, SocialMediaBurger } from '@/entities/contact/ui/social-media';

interface StickyHeaderProps {
    show: boolean;
}

export function StickyHeader({ show }: StickyHeaderProps) {
    const contacts = useContactsContext();
    if (!contacts || contacts.length === 0) return null;
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.key, item.value]));
    return (
        <div
            className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 
        ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
        >
            <header className="bg-[#0B0D20] rounded-b-[15px] text-white flex items-center justify-between !p-5">
                <h2 className="text-xl font-bold">КИБЕРИЯ</h2>

                <NavigationBlock className="!text-white" />

                <SocialMedia
                    className="hidden md:flex "
                    IconsclassName="!fill-white border-white"
                />

                <Sheet>
                    <SheetTrigger asChild>
                        <div className="md:hidden p-2 -mr-2">
                            <div className="flex text-4xl шеу gap-1.5">
                                <Link
                                    href={contactsMap.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <RiTelegram2Fill className="fill-white  border-1 !p-1.5 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] duration-1000 hover:scale-110 border-white rounded-3xl  " />
                                </Link>
                                <Menu size={28} className="text-white text-4xl" />
                            </div>
                        </div>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="bg-[#2D41F9] !max-w-none text-white !w-full"
                    >
                        <div className="flex flex-col gap-8 mt-10">
                            <div className="bg-white rounded-2xl text-black mb-1.5 !mt-9 !mx-4 !p-5 ">
                                <NavigationBlockBurger />
                            </div>
                            <SocialMediaBurger />
                            <FormDialog>
                                <Button variant="burger" size="burger">
                                    Обсудить проект
                                </Button>
                            </FormDialog>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}
