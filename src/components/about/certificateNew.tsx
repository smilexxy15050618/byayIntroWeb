import classNames from 'classnames';
import React, { FC, useState, useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const CERTIFICATE_LIST = [
  {
    image: '/jiangzhang-3.jpg',
    name: '计算机软件著作权登记证书',
    border: true,
  },
  {
    image: '/jiangzhang-7.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-8.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-9.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-10.jpeg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-11.png',
    name: '计算机软件著作权登记证书',
  },
  // {
  //   image: '/jiangzhang-14.jpeg',
  //   name: '计算机软件著作权登记证书',
  // },
  {
    image: '/jiangzhang-14.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-15.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-16.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-17.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-18.png',
    name: '计算机软件著作权登记证书',
  },
  // {
  //   image: '/jiangzhang-40.png',
  //   name: '计算机软件著作权登记证书',
  // },
  // {
  //   image: '/jiangzhang-41.png',
  //   name: '计算机软件著作权登记证书',
  // },
  {
    image: '/jiangzhang-21.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-22.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-23.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-24.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-25.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-26.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-32.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-33.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-34.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-35.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-36.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '/jiangzhang-37.jpg',
    name: '计算机软件著作权登记证书',
  },
];

const CertifWrap = styled.div`
  display: flex;
  justify-content: center;

  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }

  .carousel-indicators{
    display: none;
  }
`
const CertificateCol = styled(Col)`
  .certificate-item {
    padding: 23px 15px;
    width: 210px;
    height: 290px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);

    &.certificate-border {
      padding: 40px 15px;
    }

    div {
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }

    &.certificate-border > div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid rgb(249, 249, 249);
      border-radius: 2px;
      padding: 1px;

      img {
        height: auto;
        margin: 0;
      }
    }
  }
  .certificate-name {
    height: 30px;
    margin-top: 15px;
    font-size: 14px;
    color: #0d1924;
    text-align: center;
  }
`;

interface CertificateItem {
  image: string;
  name: string;
}

interface ICertificateProps {
  certificateList?: CertificateItem[];
  limit?: number;
}

const CertificateNew: React.SFC<ICertificateProps> = ({ certificateList = CERTIFICATE_LIST, limit = 5 }) => {
  const computedList = certificateList.reduce((prev, curr, currIndex) => {
    if (currIndex % limit === 0) {
      return [...prev, [curr]];
    } else {
      prev[prev.length - 1].push(curr);
      return prev;
    }
  }, []);

  const myRef = useRef(null);
  useEffect(() => {
    const timer =  setInterval(()=>{
      if(myRef.current){
        clearInterval(timer);
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = myRef.current;
          new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
          })
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                controller.destroy();
            });
      }
    })
  }, [myRef]);

  return (
    <CertifWrap ref={myRef}>
    <Carousel interval={2500} style={{ width: '100%' }}>
      {computedList.map((item, index) => (
        <CarouselItem key={index}>
          <Container>
            <Row>
              {item.map((certificate, index) => (
                <CertificateCol align="center" key={index}>
                  <div
                    className={classNames('certificate-item', {
                      'certificate-border': certificate.border,
                    })}>
                    <div>
                      <img src={imgurl+certificate.image} alt="" />
                    </div>
                  </div>
                  <p className="certificate-name"></p>
                </CertificateCol>
              ))}
            </Row>
          </Container>
        </CarouselItem>
      ))}
    </Carousel>
    </CertifWrap>
  );
};

export default CertificateNew;
