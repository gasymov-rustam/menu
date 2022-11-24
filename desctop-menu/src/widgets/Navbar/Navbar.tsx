import { memo } from 'react';
import { IMenuItems } from '../../shared/types';
import { MenuItems } from '../MenuItems';

import cls from './Navbar.module.css';

interface NavbarProps {
  className?: string;
  items: IMenuItems[];
}

export const Navbar = memo((props: NavbarProps) => {
  const { className = '', items } = props;
  const depthLevel = 0;

  return (
    <nav>
      <ul className={cls.menus}>
        {items?.map((menu, index) => {
          return <MenuItems items={menu} key={index} level={depthLevel} />;
        })}
      </ul>
    </nav>
  );
});
