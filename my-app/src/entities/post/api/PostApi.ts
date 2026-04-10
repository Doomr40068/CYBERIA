import { apiclient } from '@/shared/api/ApiClient';
import { Posts, PostsResponse } from '@/entities/post/model/types';

class PostsApi {
    async getPosts(): Promise<Posts[]> {
        const request = await apiclient.get<PostsResponse>('/api/posts');
        return request.data.items;
    }
}

export const postsAPI = new PostsApi();
