import { memo } from 'react';
import { IMenuItems } from '../../shared/types';
import cn from 'classnames';
import cls from './Dropdown.module.css';
import { MenuItems } from '../MenuItems';

interface DropdownProps {
  className?: string;
  open: boolean;
  level: number;
  submenus?: IMenuItems[];
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className = '', submenus, open, level } = props;
  const nextLevel = level + 1;
  console.log(level);
  return (
    <ul
      className={cn(
        cls.dropdown,
        className,
        { [cls.show]: open },
        { [cls['dropdown-submenu']]: level >= 1 }
      )}
    >
      {submenus?.map((submenu, index) => (
        <MenuItems items={submenu} key={index} level={nextLevel} />
      ))}
    </ul>
  );
});
