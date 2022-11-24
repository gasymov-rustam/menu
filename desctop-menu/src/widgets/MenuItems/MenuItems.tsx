import { memo, useEffect, useRef, useState } from 'react';
import { IMenuItems } from '../../shared/types';
import { Dropdown } from '../Dropdown';

import cls from './MenuItems.module.css';

interface MenuItemsProps {
  className?: string;
  items: IMenuItems;
  level: number;
}

export const MenuItems = memo((props: MenuItemsProps) => {
  const { className = '', items, level } = props;
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef() as any;

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  return (
    <li
      className={cls['menu-items']}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items?.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {level > 0 ? <span>&raquo;</span> : <span className='arrow' />}
          </button>

          <Dropdown submenus={items.submenu} open={dropdown} level={level} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
});
