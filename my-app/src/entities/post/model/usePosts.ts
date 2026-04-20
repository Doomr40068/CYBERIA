'use client';
import { useState, useEffect, useCallback } from 'react';
import { Posts } from '@/entities/post/model/types';
import { postsAPI } from '@/entities/post/api/PostApi';

export function usePosts() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = useCallback(async (page: number, shouldConcat: boolean = false) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await postsAPI.getPostsPaginated(page, 6);
            const newPosts = response.data.items;
            const pagination = response.data.pagination;

            if (shouldConcat) {
                setPosts((prev) => [...prev, ...newPosts]);
            } else {
                setPosts(newPosts);
            }

            setLastPage(pagination.last_page);
            setCurrentPage(page);
        } catch (error) {
            console.error(error);
            setError('Ошибка загрузки проектов');
        } finally {
            setIsLoading(false);
            setIsInitialLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts(1, false);
    }, [fetchPosts]);

    const loadMore = useCallback(() => {
        if (!isLoading && currentPage < lastPage) {
            const nextPage = currentPage + 1;
            fetchPosts(nextPage, true);
        }
    }, [currentPage, lastPage, isLoading, fetchPosts]);

    return {
        posts,
        loadMore,
        hasMore: currentPage < lastPage,
        isLoading: isLoading || isInitialLoading,
        error,
        currentPage,
        lastPage,
    };
}
