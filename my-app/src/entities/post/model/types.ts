import type { Pagination } from '@/shared/types/common';

export interface Author {
    id: number;
    last_name: string;
    first_name: string;
    image: string;
    positions: string[];
}

export interface Tag {
    id: number;
    name: string;
    posts_count?: number;
}

export interface Posts {
    id: number;
    title: string;
    description: string;
    slug: string;
    image_preview: string;
    is_popular: number;
    is_news: number;
    published_at: number;
    authors: Author;
    tags: Tag[];
}

export interface PostsResponse {
    message: string;
    data: {
        pagination: Pagination;
        items: Posts[];
    };
}
