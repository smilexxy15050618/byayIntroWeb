import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';
import { HeaderContainer } from './styled';

const HeaderMobile: FC = () => {
  return (
    <HeaderContainer>
      <div className="logo" />
      <div className="desc">全域数智化业务增长引擎</div>
    </HeaderContainer>
  );
};

export default HeaderMobile;
