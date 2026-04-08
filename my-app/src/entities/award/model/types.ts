import type { Image } from '@/shared/types/common';
import type { Project } from '@/entities/projects/model/types';

export interface Award {
    id: number;
    title: string;
    description: string;
    award_image: Image;
    award_icon: Image;
    project: Project;
}

export interface AwardResponse {
    message: string;
    data: {
        awards: Award[];
    };
}
