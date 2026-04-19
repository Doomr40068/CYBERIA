import { Award } from '@/entities/award/model/types';
import Image from 'next/image';

interface AwardsCompanyProps {
    awards: Award[];
}

export function AwardsCompany({ awards }: AwardsCompanyProps) {
    return (
        <div id="career" className="w-full">
            <h2 className="text-center text-4xl font-bold !mb-12 ">Награды студии</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {awards &&
                    awards.map((el) => (
                        <div key={el?.id} className="flex mb-5 gap-5">
                            <Image
                                className="lg:w-44 lg:h-44 w-24 h-24 rounded-full object-cover"
                                src={el?.award_icon.original_url}
                                alt="award"
                                width={150}
                                height={150}
                            />
                            <div>
                                <h3 className="font-bold text-2xl lg:text-3xl ">{el?.title}</h3>
                                <p className="font-['Wix_Madefor_Text'] text-sm lg:text-3x1 ">
                                    {el?.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
