import { memo, useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MenuComponent } from '../features/Menu';
import { data } from '../shared/assets';

import './styles/index.css';

export const App = memo((): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <div className='app'>
      {!isOpen && (
        <button type='button' className='menu' onClick={() => handleMenuOpen(true)}>
          <AiOutlineMenu className='menu__icon' />
        </button>
      )}

      <MenuComponent isMenuOpen={isOpen} items={data} setIsMenuOpen={handleMenuOpen} />
    </div>
  );
});
