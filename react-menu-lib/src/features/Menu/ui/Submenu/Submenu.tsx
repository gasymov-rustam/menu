import { MenuItem, SubMenu } from '@szhsin/react-menu';
import { IMenuItems } from '../../../../shared/types';

export const Submenu = ({ items }: { items: IMenuItems[] }) => {
  return (
    <>
      {items.map((item, idx) => {
        const { title, submenu } = item;
        if (submenu) {
          return (
            <SubMenu label={title} key={title + idx}>
              <Submenu items={submenu} />
            </SubMenu>
          );
        }

        return <MenuItem key={title + idx}>{title}</MenuItem>;
      })}
    </>
  );
};
