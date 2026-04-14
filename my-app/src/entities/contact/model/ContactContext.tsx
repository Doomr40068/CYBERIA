'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Contacts } from '@/entities/contact/model/types';

const ContactContext = createContext<Contacts[] | null>(null);

export const useContactsContext = () => {
    const context = useContext(ContactContext);

    return context;
};

type Props = {
    children: ReactNode;
    contacts: Contacts[];
};

export const ContactProvider = ({ children, contacts }: Props) => {
    return <ContactContext.Provider value={contacts}>{children}</ContactContext.Provider>;
};
