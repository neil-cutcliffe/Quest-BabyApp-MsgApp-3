/**********************************************************************
 *
 *   Responsiveness hook generated by Quest
 *
 *   Responsive Logic for the component goes in this hook
 *   If you want to customize the min/max values for the breakpoints, open the component on Quest Editor.
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

const useAuthentication5ResponsiveSize = () => {
  const [variant, setVariant] = React.useState('ScreenDesktop');

  React.useEffect(() => {
    const handlerScreenMobile = (e) =>
      setVariant((size) => (e.matches ? 'ScreenMobile' : size));

    const ScreenMobileSize = window.matchMedia('(max-width: 908px)');
    setVariant((size) => (ScreenMobileSize.matches ? 'ScreenMobile' : size));
    ScreenMobileSize.addEventListener('change', handlerScreenMobile);

    const handlerScreenDesktop = (e) =>
      setVariant((size) => (e.matches ? 'ScreenDesktop' : size));

    const ScreenDesktopSize = window.matchMedia('(min-width: 909px)');
    setVariant((size) => (ScreenDesktopSize.matches ? 'ScreenDesktop' : size));
    ScreenDesktopSize.addEventListener('change', handlerScreenDesktop);
  }, []);

  return variant;
};

export default useAuthentication5ResponsiveSize;
