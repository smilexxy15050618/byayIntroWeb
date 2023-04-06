import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';
import { HeaderContainer } from './styled';

interface headerProps {
  isDelBg: boolean;
}
const Header: FC<headerProps> = ({ isDelBg }) => {
  return (
    <HeaderContainer isDelBg={isDelBg}>
      <div
        className="logo"
        onClick={() => {
          window.location.href = '/';
        }}
      />
      <div className="desc">全域数智化业务增长引擎</div>
    </HeaderContainer>
  );
};

export default Header;
