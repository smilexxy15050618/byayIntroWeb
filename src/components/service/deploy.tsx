import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  padding: 20px 10px;
  margin-bottom: 20px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 450px;
    ${media.phone`
      height: auto;
    `}
    transition: transform .3s ease-in-out;
    background: #ffffff;
    // box-shadow: 5px 10px 30px 0px rgba(49,83,212,0.1);
    &:hover {
      transform: translateY(-20px);
    }
  }
  h3 {
    margin-top: 60px;
    font-size: 32px;
    font-weight: 400;
    color: #0d1924;
  }
  h6 {
    margin-top: 5px;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 25px;
    text-align: center;
  }
`;

const Icon = styled.div<{ icon?: string }>`
  margin-top: 50px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: ${props => `url(${props.icon})`};
  background-size: 76px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffff;
  box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
`;

interface IDeployProps {
  icon: string;
  title: string;
  desc: string;
  descSecond?: string;
}

const Deploy: React.SFC<IDeployProps> = ({ icon, title, desc, descSecond }) => (
  <Wrap>
    <div>
      <Icon icon={icon} />
      <h3>{title}</h3>
      <h6>
        {desc}
        <br />
        {descSecond}
      </h6>
    </div>
  </Wrap>
);

export default Deploy;
