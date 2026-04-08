'use client';
import { useState, useEffect } from 'react';
import { Contacts } from '@/entities/contact/model/types';
import { contactAPI } from '@/entities/contact/api/contacts-api';

export function useContact() {
    const [projects, setProjects] = useState<Contacts[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const data = await contactAPI.getContact();
                setProjects(data);
            } catch (err) {
                setError('Failed');
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);
    return { projects, isLoading, error };
}
