import { awardAPI } from '@/entities/award/api/AwardsApi';
import { contactAPI } from '@/entities/contact/api/ContactsApi';
import { postsAPI } from '@/entities/post/api/PostApi';
import { reviewAPI } from '@/entities/review/api/ReviewApi';
import { HomeView } from '@/views/home/HomeView';

export default async function HomePage() {
    const awards = await awardAPI.getAwards();
    const posts = await postsAPI.getPosts();
    const contacts = await contactAPI.getContact();
    const review = await reviewAPI.getReview();
    return <HomeView awards={awards} contacts={contacts} review={review} news={posts} />;
}
