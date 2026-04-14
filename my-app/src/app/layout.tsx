import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/entities/contact/ui/header/Index';
import { contactAPI } from '@/entities/contact/api/ContactsApi';
import Footer from '@/entities/contact/ui/footer/Footer';
import { ContactProvider } from '@/entities/contact/model/ContactContext';

const unboundedSemiBold = Unbounded({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Киберия',
    description: 'Сайт от студента',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const contacts = await contactAPI.getContact();
    return (
        <html lang="ru" className={unboundedSemiBold.className}>
            <body className="!p-5">
                <ContactProvider contacts={contacts}>
                    <Header />
                    {children}
                    <Footer />
                </ContactProvider>
            </body>
        </html>
    );
}
