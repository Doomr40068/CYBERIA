import type { Award } from '@/entities/award/model/types';
import { BannerBlock } from '@/entities/contact/ui/banner/BannerBlock';
import { OurProject } from '@/entities/projects/ui/our-project/OurProject';
import { OurCommand } from '@/widgets/OurCommand/OurCommand';
import { ReviewCarousel } from '@/entities/review/ui/ReviewCarousel';
import { ContactsBanner } from '@/entities/contact/ui/banner/ContactsBanner';
import { News } from '@/entities/post/ui/news/News';
import { Vacancy } from '@/widgets/Vacancy/Vacancy';
import { AwardsCompany } from '@/entities/award/ui/awards-company/AwardsCompany';
import { Review } from '@/entities/review/model/types';
import { Posts } from '@/entities/post/model/types';

interface HomeClientProps {
    awards: Award[];
    review: Review[];
    news: Posts[];
}

export function HomeView({ awards, review, news }: HomeClientProps) {
    return (
        <main>
            <BannerBlock />
            <AwardsCompany awards={awards} />
            <OurProject />
            <OurCommand />
            <div className="!mt-[100px]">
                <h2 className="text-center text-4xl font-bold !mb-12">Нам доверяют</h2>
                <ReviewCarousel review={review} />
            </div>
            <ContactsBanner />
            <News news={news} />
            <Vacancy />
        </main>
    );
}
