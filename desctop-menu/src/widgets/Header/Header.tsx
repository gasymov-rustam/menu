import { memo } from 'react';
import { IMenuItems } from '../../shared/types';
import { Navbar } from '../Navbar';

import cls from './Header.module.css';

interface HeaderProps {
  className?: string;
  items: IMenuItems[];
}

export const Header = memo((props: HeaderProps) => {
  const { className = '', items } = props;

  return (
    <header className={cls.header}>
      <div className={cls['nav-area']}>
        <a href='/' className={cls.logo}>
          Logo
        </a>
        <Navbar items={items} />
      </div>
    </header>
  );
});
