import Link from 'next/link';
import clsx from 'clsx';

type Props = {
    className?: string;
};

export function NavigationBlock({ className }: Props) {
    return (
        <nav className={clsx('hidden lg:text-sm md:text-sm md:flex gap-2.5', className)}>
            <Link
                href="#projects"
                className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
            >
                Проекты
            </Link>
            <Link
                href="#services"
                className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
            >
                Услуги
            </Link>
            <Link
                href="#about"
                className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
            >
                О компании
            </Link>
            <Link
                href="#career"
                className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
            >
                Карьера
            </Link>
            <Link
                href="#blog"
                className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
            >
                Блог
            </Link>
            <Link
                href="#news"
                className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
            >
                Новости
            </Link>
            <Link
                href="#contacts"
                className="hover:bg-gradient-to-r hover:from-[#2D41F9] hover:via-[#9E70FF] hover:to-[#36CFFF] hover:bg-clip-text hover:text-transparent cursor-pointer"
            >
                Контакты
            </Link>
        </nav>
    );
}
