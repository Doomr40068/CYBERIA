'use client';

interface ButtonMoreProps {
    onClick: () => void;
    isLoading: boolean;
    hasMore: boolean;
}

export function ButtonMore({ onClick, isLoading, hasMore }: ButtonMoreProps) {
    if (!hasMore) return null;

    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={onClick}
                disabled={isLoading}
                className="
                    hover:bg-gradient-to-r 
                    from-[#2D41F9] 
                    via-[#9E70FF] 
                    to-[#36CFFF]
                    hover:text-white
                    !m-5
                    !px-8 
                    !py-3
                    rounded-full
                    bg-[#EDEEFF]
                    text-black
                    transition-all 
                    duration-500
                "
            >
                {isLoading ? 'Загрузка...' : 'Загрузить ещё'}
            </button>
        </div>
    );
}
