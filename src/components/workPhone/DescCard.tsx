import AngleRight from '@indata/icon/lib/direction/AngleRight';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const DescCard = styled.div`
  padding: 100px 0;
  .bottom-shadow {
    width: 80%;
    height: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    background: url('https://cdn.byai.com/static/intro/img/workphone/descCard/shadow.png') no-repeat center center
      transparent;
    background-size: cover;
    opacity: 0;
    transition: all 0.3s;
    ${media.phone`
      display: none;
    `}
  }
  .desc-card-col:hover .bottom-shadow {
    opacity: 1;
  }
  .row {
    ${media.phone`
      flex-direction: column;
    `}
  }
`;

const DescCardItem = styled.div<{ cover: string; mobileCover?: string }>`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: translateY(-20px);
  }
  ${media.phone`
    &:hover {
      transform: none;
    }
  `}
  ${media.phone`
    height: 124px;
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    `}
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    width: 80%;
    height: 100%;
    ${media.phone`
      width: 90%; 
    `}
    .content {
      width: 100%;
      height: 100%;
      padding: 32px 24px 0 24px;
      position: relative;
      .title {
        font-size: 24px;
        color: #fff;
      }
      .desc {
        margin-top: 17px;
        p {
          color: #afbde2;
          font-size: 14px;
        }
      }
      button {
        width: 104px;
        height: 32px;
        border-radius: 16px;
        background: #2f82f8;
        border: none;
        color: #fff;
        font-size: 14px;
        position: absolute;
        left: 24px;
        bottom: 51px;
        transition: all 0.3s ease-in-out 0s;
        .icon {
          transform: translateY(-2px);
          transition: all 0.3s;
        }
      }
    }
  }
  .cover {
    background-image: url(${props => props.cover});
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

interface DescCardProps {
  cardList: {
    cover: string;
    mobileCover?: string;
    title: string;
    desc: string[];
    path: string;
  }[];
}

export default (props: DescCardProps) => {
  const { cardList } = props;
  return (
    <DescCard>
      <Container>
        <Row justify="center" className="row">
          {cardList.map(item => {
            return (
              <Col lg={8} md={12} sm={24} xs={24} className="desc-card-col">
                <DescCardItem cover={item.cover} mobileCover={item.mobileCover} className="desc-card-item">
                  <div className="wrapper">
                    <Visible md lg xl xxl xxxl>
                      <div
                        className="cover"
                        style={{
                          backgroundImage: `url(${item.cover})`,
                        }}
                      />
                    </Visible>
                    <Visible sm xs>
                      <div
                        className="cover"
                        style={{
                          backgroundImage: `url(${item.mobileCover ? item.mobileCover : item.cover})`,
                        }}
                      />
                    </Visible>

                    <div className="content">
                      <div className="title">{item.title}</div>
                      <Visible md lg xl xxl xxxl>
                        <div className="desc">
                          {item.desc.map((descItem, index) => {
                            return <p key={index}>{descItem}</p>;
                          })}
                        </div>
                        <button className="btn" onClick={() => (location.href = item.path)}>
                          了解更多{' '}
                          <i className="icon">
                            <AngleRight />
                          </i>
                        </button>
                      </Visible>
                      <Visible sm xs>
                        <Link href={item.path}>
                          <a style={{ color: '#2F82F8', marginTop: '20px' }}>
                            <span>
                              了解更多 <i>{'>'}</i>
                            </span>
                          </a>
                        </Link>
                      </Visible>
                    </div>
                  </div>
                </DescCardItem>
                <Visible md lg xl xxl xxxl>
                  <div className="bottom-shadow"></div>
                </Visible>
              </Col>
            );
          })}
        </Row>
      </Container>
    </DescCard>
  );
};
