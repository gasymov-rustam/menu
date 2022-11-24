import { memo } from 'react';
import { menuItems } from '../../shared/assets';
import { Header } from '../../widgets/Header';

import cls from './Layout.module.css';

interface LayoutProps {
  className?: string;
}

export const Layout = memo((props: LayoutProps) => {
  const { className = '' } = props;

  return (
    <div>
      <Header items={menuItems} />
    </div>
  );
});
