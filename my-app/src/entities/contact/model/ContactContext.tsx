'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Contact } from '@/entities/contact/model/types';

const ContactContext = createContext<Contact[]>([]);

export const useContactsContext = () => {
    return useContext(ContactContext);
};

type Props = {
    children: ReactNode;
    contacts: Contact[];
};

export const ContactProvider = ({ children, contacts }: Props) => {
    return <ContactContext.Provider value={contacts}>{children}</ContactContext.Provider>;
};
