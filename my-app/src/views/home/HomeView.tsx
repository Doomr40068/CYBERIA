import type { Award } from '@/entities/award/model/types';
import { BannerBlock } from '@/widgets/Banner/BannerBlock';
import { OurProject } from '@/entities/projects/ui/our-project/OurProject';
import { OurCommand } from '@/widgets/OurCommand/OurCommand';
import { ReviewCarousel } from '@/entities/review/ui/ReviewCarousel';
import { ContactsBanner } from '@/widgets/ContactsBanner/ContactsBanner';
import { News } from '@/entities/post/ui/news/News';
import { Vacantion } from '@/widgets/Vacancy/Vacancy';
import { AwardsCompany } from '@/entities/award/ui/awards-company/AwardsCompany';
import { Review } from '@/entities/review/model/types';
import { Posts } from '@/entities/post/model/types';
import { Contacts } from '@/entities/contact/model/types';

interface HomeClientProps {
    awards: Award[];
    review: Review[];
    news: Posts[];
    contacts: Contacts[];
}

export function HomeView({ awards, contacts, review, news }: HomeClientProps) {
    return (
        <main>
            <BannerBlock contacts={contacts} />
            <AwardsCompany awards={awards} />
            <OurProject />
            <OurCommand />
            <div className="!mt-[100px]">
                <h2 className="text-center text-4xl font-bold !mb-12">Нам доверяют</h2>
                <ReviewCarousel review={review} />
            </div>
            <ContactsBanner contacts={contacts} />
            <News news={news} />
            <Vacantion />
        </main>
    );
}
