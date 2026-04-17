import type { Award } from '@/entities/award/model/types';
import { OurProject } from '@/entities/projects/ui/our-project';
import { ReviewCarousel } from '@/entities/review/ui';
import { News } from '@/entities/post/ui/news/News';
import { AwardsCompany } from '@/entities/award/ui/awards-company';
import { Review } from '@/entities/review/model/types';
import { OurCommand, Vacancy } from '@/widgets';
import { BannerBlock, ContactsBanner } from '@/entities/contact';

interface HomeClientProps {
    awards: Award[];
    review: Review[];
}

export function HomeView({ awards, review }: HomeClientProps) {
    return (
        <main>
            <BannerBlock />
            <AwardsCompany awards={awards} />
            <OurProject />
            <OurCommand />
            <div className="!mt-24">
                <h2 className="text-center text-4xl font-bold !mb-12">Нам доверяют</h2>
                <ReviewCarousel review={review} />
            </div>
            <ContactsBanner />
            <News />
            <Vacancy />
        </main>
    );
}
