import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 403px;
    transition: transform 0.3s ease-in-out;
    background: #ffffff;
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
    &:hover {
      transform: translateY(-20px);
    }
  }
  h3 {
    margin-top: 75px;
    font-size: 26px;
    font-weight: 300;
    color: #0d1924;
  }
  h6 {
    font-size: 16px;
    font-weight: 400;
    color: #0d1924;
  }
`;

const Icon = styled.div<{ icon?: string }>`
  width: 90px;
  height: 90px;
  background-image: ${props => `url(${props.icon})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

interface IGuaranteeProps {
  icon: string;
  title: string;
  desc: string;
}

const Guarantee: React.SFC<IGuaranteeProps> = ({ icon, title, desc }) => (
  <Wrap>
    <div>
      <Icon icon={icon} />
      <h3>{title}</h3>
      <h6>{desc}</h6>
    </div>
  </Wrap>
);

export default Guarantee;
