'use client';
import { useState, useEffect } from 'react';
import { Contact } from '@/entities/contact/model/types';
import { contactAPI } from '@/entities/contact/api/ContactsApi';

export function useContact() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setIsLoading(true);
                const data = await contactAPI.getContact();
                setContacts(data);
            } catch {
                setError('Failed');
            } finally {
                setIsLoading(false);
            }
        };
        fetchContacts();
    }, []);
    return { contacts, isLoading, error };
}
