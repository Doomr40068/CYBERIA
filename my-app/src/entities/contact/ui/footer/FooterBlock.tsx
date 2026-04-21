'use client';

import { SocialMedia } from '@/entities/contact/ui/social-media';
import { useContactsContext } from '@/entities/contact/model/ContactContext';
import { NavigationBlock } from '@/widgets/navigation';
import { Wix_Madefor_Text } from 'next/font/google';

const wixMadefor = Wix_Madefor_Text({
    weight: ['400', '500', '600'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export function FooterBlock() {
    const contacts = useContactsContext();
    const c = Object.fromEntries(contacts.map((item) => [item.key, item.value]));

    return (
        <footer className={`bg-white w-full !pt-16 pb-10 ${wixMadefor.className}`}>
            <div className=" mx-auto px-5 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-0">
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                        <h2 className="text-4xl font-bold tracking-tighter mb-6">КИБЕРИЯ</h2>
                        <p className="text-sm text-gray-600 text-center lg:text-left max-w-sm"></p>
                    </div>

                    <div className="lg:col-span-5 flex flex-col order-3 !mb-5 lg:order-2 lg:items-center">
                        <NavigationBlock className="flex-col text-center" />
                    </div>

                    <div className="lg:col-span-3 flex flex-col gap-2 items-center lg:order-3 order-2 lg:items-end">
                        <div className="space-y-1 flex flex-col gap-2 text-center lg:text-right">
                            <p className="text-2xl font-semibold text-gray-900">{c.phone}</p>
                            <p className="text-xl text-gray-600 font-medium">{c.email}</p>
                            <p className="text-sm text-gray-600">{c.address}</p>
                        </div>

                        <SocialMedia />
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 md:border-t-0 md:mt-16 md:pt-0 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div className="md:text-left w-72">
                        © 2026 ООО «Киберия», номер в реестре аккредитованных IT-компаний: 53278
                    </div>
                    <div className="hover:text-gray-900 cursor-pointer transition-colors text-center">
                        Реквизиты компании
                    </div>
                    <div>Политика конфиденциальности</div>
                </div>
            </div>
        </footer>
    );
}
