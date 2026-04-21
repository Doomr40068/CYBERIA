'use client';

import { RiTelegram2Fill } from 'react-icons/ri';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui';
import Link from 'next/link';
import { Button } from '@/shared/ui';
import { FormDialog } from '@/features/open-forms/FormDialog';
import { NavigationBlock } from '@/widgets/navigation';
import { NavigationBlockBurger } from '@/widgets/navigation';
import { SocialMedia, SocialMediaBurger } from '@/entities/contact/ui/social-media';

export function MainHeader() {
    const contacts = useContactsContext();
    const contactsMap = Object.fromEntries(contacts.map((item) => [item.key, item.value]));

    return (
        <header className="flex items-center justify-between !px-5 !mb-5 font-semibold  ">
            <h2 className="text-2xl font-bold">КИБЕРИЯ</h2>

            <NavigationBlock />

            <SocialMedia className="hidden md:flex " />

            <Sheet>
                <SheetTrigger asChild>
                    <div className="md:hidden p-2 -mr-2">
                        <div className="flex gap-1.5">
                            <Link
                                href={contactsMap.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiTelegram2Fill className="text-4xl border-1 !p-1.5 border-black rounded-3xl transition-all hover:fill-white duration-1000 hover:bg-gradient-to-r hover:from-[#2d41f9] hover:via-[#9e70ff] hover:to-[#36cfff] hover:scale-110  " />
                            </Link>
                            <Menu size={28} className="text-black" />
                        </div>
                    </div>
                </SheetTrigger>

                <SheetContent side="right" className="bg-[#2D41F9] !max-w-none text-white !w-full">
                    <div className="flex flex-col gap-8 mt-10">
                        <div className="bg-white rounded-2xl text-black !mb-1.5 !mt-9 !mx-4 !p-5 ">
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
    );
}
