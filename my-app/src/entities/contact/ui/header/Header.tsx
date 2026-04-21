'use client';

import { useState, useEffect, useRef } from 'react';
import { StickyHeader } from '@/entities/contact/ui/header/StickyHeader';
import { MainHeader } from '@/entities/contact/ui/header/MainHeader';

export function Header() {
    const [showSticky, setShowSticky] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handlerScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
                setShowSticky(true);
            } else if (currentScrollY <= 100) {
                setShowSticky(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handlerScroll);

        return () => {
            window.removeEventListener('scroll', handlerScroll);
        };
    }, []);

    return (
        <>
            <MainHeader />
            <StickyHeader show={showSticky} />
        </>
    );
}
