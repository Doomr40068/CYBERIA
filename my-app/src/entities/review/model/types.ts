import type { Image, Pagination } from '@/shared/types/common';

export interface Review {
    id: number;
    fio: string;
    position: string;
    content: string;
    document: string;
    image: Image;
    project: ProjectReview;
}

export interface ProjectReview {
    id: number;
    title: string;
    description: string;
    price: number;
    time: string;
    image: Image;
    image_mobile: Image;
    video_cover: Image;
    link: string;
    is_big: boolean;
}

export interface ReviewResponse {
    message: string;
    data: {
        pagination: Pagination;
        items: Review[];
    };
}
