'use client';

import { useState, useEffect } from 'react';
import { awardAPI } from '@/entities/award/api/AwardsApi';
import type { Award } from '@/entities/award/model/types';

export function useAwards() {
    const [awards, setAwards] = useState<Award[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAwards = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await awardAPI.getAwards();
                setAwards(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch awards');
            } finally {
                setIsLoading(false);
            }
        };
        fetchAwards();
    }, []);

    return { awards, isLoading, error };
}
