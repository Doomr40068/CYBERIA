'use client';
import { useState, useEffect } from 'react';
import { Review } from '@/entities/review/model/types';
import { reviewAPI } from '@/entities/review/api/ReviewApi';

export function useReview() {
    const [review, setReview] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                setIsLoading(true);
                const data = await reviewAPI.getReview();
                setReview(data);
            } catch {
                setError('Failed');
            } finally {
                setIsLoading(false);
            }
        };
        fetchReview();
    }, []);
    return { review, isLoading, error };
}
