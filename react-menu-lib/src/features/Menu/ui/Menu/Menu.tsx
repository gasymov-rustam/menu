import { MenuButton, Menu as MenuLib } from '@szhsin/react-menu';
import { memo } from 'react';
import { menuItems } from '../../../../shared/assets';
import { Submenu } from '../Submenu';

export const Menu = memo(() => {
  return (
    <MenuLib menuButton={<MenuButton>Open menu</MenuButton>}>
      <Submenu items={menuItems} />
    </MenuLib>
  );
});
