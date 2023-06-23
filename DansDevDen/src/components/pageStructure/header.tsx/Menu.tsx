import { useEffect, useState } from 'react';
import { BREAKPOINT_MD } from '../../core/styles';
import { P } from '../../core/typography';
import Icon from '../../icons/Icon';

export const Menu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <P>
      {windowWidth < BREAKPOINT_MD ? <Icon id="menu" height={40} width={40} /> : 'Expanded menu'}
    </P>
  );
};
