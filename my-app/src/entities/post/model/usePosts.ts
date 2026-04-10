'use client';
import { useState, useEffect } from 'react';
import { Posts } from '@/entities/post/model/types';
import { postsAPI } from '@/entities/post/api/PostApi';

export function usePosts() {
    const [projects, setProjects] = useState<Posts[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const data = await postsAPI.getPosts();
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
