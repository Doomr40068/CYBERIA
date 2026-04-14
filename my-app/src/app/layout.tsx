import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import '@/app/globals.css';
import { Header, Footer } from '@/entities/contact';
import { contactAPI } from '@/entities/contact/api/ContactsApi';
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
