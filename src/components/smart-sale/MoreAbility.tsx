import React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';
import { TitleLayout } from './TitleLayout';

const MoreAbilityWrapper = styled.div<{ width: number; type: number }>`
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  .more-ability-content {
    width: ${props => (props.width ? `${props.width}px` : '1140px')};
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 120px;
      height: 110px;
      font-size: 18px;
      margin: 0 35px 80px 35px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        margin: 0;
      }
    }
  }
  ${media.phone`
    width: 100vw; 
    padding-bottom: 2.67vw;
    background-color: #f8f9fb;
    padding-top: 50px;
    .more-ability-content {
      width: 100vw;
    }
    .more-ability-content>div {
      width: 20vw;
      height: 14.67vw;
      font-size: 2.4vw;
      margin: 0 0 10.67vw;
      img {
        width: 7.3vw;
        height: 7.3vw;
      }
    }
  `}
  @media screen and (max-width: 768px) {
    .more-ability-content {
      width: ${props => (props.type === 3 ? '90vw' : '100vw')};
      margin: 0 auto;
    }

    .more-ability-content > div {
      width: ${props => (props.type === 3 ? '30vw' : '20vw')};
      font-size: ${props => (props.type === 3 ? '3.33vw' : '2.4vw')};
      img {
        width: ${props => (props.type === 3 ? '10.67vw' : '7.3vw')};
        height: ${props => (props.type === 3 ? '10.67vw' : '7.3vw')};
        margin-bottom: ${props => (props.type === 3 ? '3.4vw' : '0')};
      }
    }
  }
`;

interface MoreAbilityProps {
  abilityList: {
    src: string;
    desc: string;
  }[];
  width?: number;
  title?: boolean;
  style?: React.CSSProperties;
  type?: number;
}

export const MoreAbility = (props: MoreAbilityProps) => {
  const { abilityList, width, title, style, type } = props;

  return (
    <MoreAbilityWrapper width={width} style={style} type={type}>
      <TitleLayout title={title !== false ? '更多功能' : ''}>
        <div className="more-ability-content">
          {abilityList.map(ability => (
            <div className="ability-card">
              <img src={ability.src} alt={ability.desc} />
              <span>{ability.desc}</span>
            </div>
          ))}
        </div>
      </TitleLayout>
    </MoreAbilityWrapper>
  );
};
