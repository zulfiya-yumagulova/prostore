import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constans';
import Menu from './menu';
import CategoryDraw from './category-draw';
import Search from './search';

function Header() {
  return (
    <header className="w-full border">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDraw />
          <Link href="/" className="flex-start ml-4">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
