import { apiClient } from '@/shared/api/ApiClient';
import type { Review, ReviewResponse } from '@/entities/review/model/types';

class ReviewApi {
    async getReview(): Promise<Review[]> {
        try {
            const request = await apiClient.get<ReviewResponse>('/api/reviews');
            return request.data.items;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}

export const reviewAPI = new ReviewApi();
