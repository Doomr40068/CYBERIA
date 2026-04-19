import Link from 'next/link';

export function NavigationBlockBurger() {
    return (
        <nav className="flex flex-col gap-6 text-lg font-medium">
            <Link href="/projects" className="hover:text-blue-600">
                Проекты
            </Link>
            <Link href="/services" className="hover:text-blue-600">
                Услуги
            </Link>
            <Link href="/about" className="hover:text-blue-600">
                О компании
            </Link>
            <Link href="/career" className="hover:text-blue-600">
                Карьера
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
                Блог
            </Link>
            <Link href="/news" className="hover:text-blue-600">
                Новости
            </Link>
            <Link href="/contacts" className="hover:text-blue-600">
                Контакты
            </Link>
        </nav>
    );
}
