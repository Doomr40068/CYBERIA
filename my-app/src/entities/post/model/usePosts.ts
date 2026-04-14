'use client';
import { useState, useEffect } from 'react';
import { Posts } from '@/entities/post/model/types';
import { postsAPI } from '@/entities/post/api/PostApi';

export function usePosts() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const data = await postsAPI.getPosts();
                setPosts(data);
            } catch {
                setError('Failed');
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);
    return { posts, isLoading, error };
}
