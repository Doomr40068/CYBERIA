'use client';

import { useState, useEffect } from 'react';
import { StickyHeader } from '@/entities/contact/ui/header/StickyHeader';
import { MainHeader } from '@/entities/contact/ui/header/MainHeader';

export default function Header() {
    const [showSticky, setShowSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handlerScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                setShowSticky(true);
            } else if (currentScrollY === 0) {
                setShowSticky(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handlerScroll);
        return () => window.removeEventListener('scroll', handlerScroll);
    }, [lastScrollY]);

    return (
        <>
            <MainHeader />
            <StickyHeader show={showSticky} />
        </>
    );
}
