import type { Image, Pagination } from '@/shared/types/Common';

export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    price: number;
    time: string;
    image: Image;
    image_mobile: Image;
    video_cover: Image;
    link: string;
    is_big: boolean;
    is_case: boolean;
}

export interface ProjectCategory {
    id: number;
    name: string;
}

export interface ProjectCategoryResponse {
    message: string;
    data: ProjectCategory[];
}

export interface ProjectResponse {
    message: string;
    data: {
        pagination: Pagination;
        items: Project[];
    };
}
