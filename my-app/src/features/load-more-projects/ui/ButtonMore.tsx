'use client';
import { Button } from '@/shared/ui';

interface ButtonMoreProps {
    onClick: () => void;
    isLoading: boolean;
    hasMore: boolean;
}

export function ButtonMore({ onClick, isLoading, hasMore }: ButtonMoreProps) {
    if (!hasMore) {
        return (
            <Button
                variant="default"
                size="default"
                className=' text-2xl !px-10 !py-6 !mt-7 font-["Wix_Madefor_Text"]'
            >
                Элементов больше нет
            </Button>
        );
    }

    return (
        <div className="flex justify-center mt-8">
            <Button
                type="button"
                onClick={onClick}
                disabled={isLoading}
                className="
                    hover:bg-gradient-to-r 
                    from-[#2D41F9] 
                    via-[#9E70FF] 
                    to-[#36CFFF]
                    hover:text-white
                    !m-7
                    !px-10 
                    text-2xl
                    !py-6
                    rounded-full
                    bg-[#EDEEFF]
                    text-black
                    transition-all 
                    duration-500
                    font-['Wix_Madefor_Text']
                "
            >
                {isLoading ? 'Загрузка...' : 'Загрузить ещё'}
            </Button>
        </div>
    );
}
