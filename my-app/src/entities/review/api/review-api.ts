import { apiClient } from '@/shared/api/ApiClient';
import type { Review, ReviewResponse } from '@/entities/review/model/types';

class ReviewApi {
    async getReview(): Promise<Review[]> {
        const request = await apiClient.get<ReviewResponse>('/api/reviews');
        return request.data.items;
    }
}

export const reviewAPI = new ReviewApi();
