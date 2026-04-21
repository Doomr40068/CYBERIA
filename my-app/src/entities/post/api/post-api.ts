import { apiClient } from '@/shared/api/ApiClient';
import { Posts, PostsResponse } from '@/entities/post/model/types';

class PostsApi {
    async getPosts(): Promise<Posts[]> {
        const request = await apiClient.get<PostsResponse>('/api/posts');
        return request.data.items;
    }
    async getPostsPaginated(page: number = 1, per_page: number = 6) {
        const result = await apiClient.get<PostsResponse>('/api/posts', { page, per_page });
        return result;
    }
}

export const postsAPI = new PostsApi();
