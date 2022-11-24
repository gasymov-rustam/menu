import { memo } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import cn from 'classnames';
import cls from './MenuHeader.module.css';

interface MenuHeaderProps {
  className?: string;
  level: number;
  setIsMenuOpen: () => void;
  setLevel: () => () => void;
}

export const MenuHeader = memo((props: MenuHeaderProps) => {
  const { className = '', level, setIsMenuOpen, setLevel } = props;

  return (
    <div className={cls.header}>
      {level > 1 && (
        <button className={cls.closeBtn} onClick={setLevel()}>
          <IoArrowBack className={cls.close} />
        </button>
      )}

      {level === 1 && <div className={cls.bgBtn}>Menu</div>}

      <button className={cn(cls.closeBtn, className)} onClick={setIsMenuOpen}>
        <AiOutlineClose className={cls.close} />
      </button>
    </div>
  );
});
