import { Award } from '@/entities/award/model/types';
import Image from 'next/image';

interface AwardsCompanyProps {
    awards: Award[];
}

export function AwardsCompany({ awards }: AwardsCompanyProps) {
    return (
        <div>
            <h1 className="text-center text-[40px] font-bold !mb-12 ">Награды студии</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                {awards &&
                    awards.map((el) => (
                        <div key={el?.id} className="flex mb-5 gap-5">
                            <Image
                                className="w-[100] h-[100] rounded-full object-cover"
                                src={el?.award_icon.original_url}
                                alt="award"
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2 className="font-bold text-2xl ">{el?.title}</h2>
                                <h3 className="font-['Wix_Madefor_Text'] text-[16] ">
                                    {el?.description}
                                </h3>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
