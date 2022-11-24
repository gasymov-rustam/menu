import { memo, useCallback, useState } from 'react';
import { IMenuItem } from '../../../../shared/types';
import cn from 'classnames';
import cls from './MenuComponent.module.css';
import { MenuHeader } from '../MenuHeader';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

interface MenuComponentProps {
  className?: string;
  items: IMenuItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const MenuComponent = memo((props: MenuComponentProps) => {
  const { className = '', isMenuOpen, setIsMenuOpen, items } = props;
  const [level, setLevel] = useState(1);
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[][]>([items]);

  const selectLevel = useCallback(
    (level: number, menu?: IMenuItem[]) => () => {
      if (!menu) {
        return;
      }

      setLevel(level);
      setCurrentMenu((prev) => {
        prev[level] = menu;

        return prev;
      });
    },
    []
  );

  const backLevel = useCallback(
    () => () => {
      setLevel((prev) => prev - 1);

      setCurrentMenu((prev) => {
        prev[level] = [];

        return prev;
      });
    },
    [level]
  );

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setLevel(1);
  }, [setIsMenuOpen]);

  return (
    <nav className={cn(cls.menu, className)}>
      <div className={cn(cls.cover, { [cls.coverShow]: isMenuOpen })} onClick={closeMenu} />

      <ul className={cn(cls.mobileMenuBox, { [cls.mobileMenuBoxShow]: isMenuOpen })}>
        <MenuHeader level={level} setIsMenuOpen={closeMenu} setLevel={backLevel} />

        <div
          className={cls.level}
          style={{ transform: `translateX(calc((-100% * ${level - 1}) - (24px * ${level - 1})))` }}
        >
          {currentMenu?.map((item, i) => (
            <li key={`${item[i]?.name} ${i}`}>
              {item.map((child, idx) => (
                <div key={`${child?.name} ${idx}`}>
                  {child?.children && (
                    <button className={cls.item} onClick={selectLevel(level + 1, child.children)}>
                      {child?.name} <MdOutlineArrowForwardIos className={cls.forward} />
                    </button>
                  )}

                  {child?.link && (
                    <a href={child?.link} className={cls.item} aria-current='page'>
                      {child?.name}
                    </a>
                  )}
                </div>
              ))}
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
});
