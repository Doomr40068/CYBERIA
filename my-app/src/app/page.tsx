import { awardAPI } from '@/entities/award/api/AwardsApi';
import { reviewAPI } from '@/entities/review/api/ReviewApi';
import { HomeView } from '@/views/home/HomeView';

export default async function HomePage() {
    const [awards, review] = await Promise.all([
        awardAPI.getAwards().catch(() => []),
        reviewAPI.getReview().catch(() => []),
    ]);

    return <HomeView awards={awards} review={review} />;
}
