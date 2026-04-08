import { awardAPI } from '@/entities/award/api/awards-api';
import { postsAPI } from '@/entities/post/api/post-api';
import { reviewAPI } from '@/entities/review/api/review-api';
import { HomeView } from '@/views/home/HomeView';

export default async function HomePage() {
    const awards = await awardAPI.getAwards();
    const posts = await postsAPI.getPosts();
    const review = await reviewAPI.getReview();
    return <HomeView awards={awards} review={review} news={posts} />;
}
