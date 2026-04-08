import type { Image } from '@/shared/types/common';

export interface Banners {
    id: number;
    title: string;
    description: string;
    banner_desktop: Image;
    banner_mobile: Image;
}

export interface BannersResponse {
    message: string;
    data: Banners[];
}
