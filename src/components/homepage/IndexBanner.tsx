import { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const Container = styled.div`
  max-width: 1200px;
`;

const RawFirstBanner: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <div></div>
    </div>
  );
};

export type IFirstBannerProps = IProps;
const FirstBanner = styled(RawFirstBanner)<IFirstBannerProps>`
  width: 100vw;
  height: 100vh;
  background: url('https://cdn.byai.com/static/intro/img/footer/one-to-one.png') no-repeat 0 0/100px 100px;
  background-position: bottom 50px left 0px;
  transition: 10s;
  :hover {
    background-position: bottom 600px left 0px;
  }
`;
export default FirstBanner;
