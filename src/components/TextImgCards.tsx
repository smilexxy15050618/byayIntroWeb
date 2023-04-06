import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../constants/style';
import { DescImgCol } from './clew/descImg';
import { DataVisualWrapper } from './product';
import { DescCol } from './workPhone/DescContentNew';

const TextImgCardsWrapper = styled.div<{ textWidth?: number; textSize: number }>`
  .title {
    width: ${props => (props.textWidth ? `${props.textWidth}px` : 'unset')};
    font-weight: 500;
    ${media.phone`
      width: 242px;
      font-size: 20px;
      line-height: 28px;
    `}
  }
  .p-wrapper > p {
    font-size: ${props => (props.textSize ? `${props.textSize}px` : '18px')};
    line-height: 36px;
    width: ${props => (props.textWidth ? `${props.textWidth}px` : 'unset')};
  }
`;

interface TextImgCardsProps {
  cardList: {
    title: string;
    descList: string[];
    img: string;
  }[];
  reverse?: boolean;
  textWidth?: number;
  textSize?: number;
}

export const TextImgCards = (props: TextImgCardsProps) => {
  const { cardList, reverse, textWidth, textSize } = props;

  return (
    <TextImgCardsWrapper textWidth={textWidth} textSize={textSize}>
      {cardList.map((card, index) => (
        <DataVisualWrapper odd={index % 2 !== Number(!!reverse)}>
          <Container>
            <Row className="data-visual-wrapper">
              {index % 2 !== Number(!!reverse) && (
                <DescImgCol lg={14} md={14} sm={24}>
                  <img src={card.img} alt="" />
                </DescImgCol>
              )}
              <DescCol lg={10} md={10} sm={24}>
                <h3 className="title">{card.title}</h3>
                <Visible md lg xl xxl xxxl>
                  <div className="p-wrapper">
                    {card.descList.map(desc => (
                      <p>{desc}</p>
                    ))}
                  </div>
                </Visible>
              </DescCol>
              {index % 2 === Number(!!reverse) && (
                <DescImgCol lg={14} md={14} sm={24}>
                  <img src={card.img} alt="" />
                </DescImgCol>
              )}
            </Row>
          </Container>
        </DataVisualWrapper>
      ))}
    </TextImgCardsWrapper>
  );
};
