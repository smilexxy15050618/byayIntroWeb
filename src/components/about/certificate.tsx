import classNames from 'classnames';
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';

const CERTIFICATE_LIST = [
  {
    image: '//cdn.byai.com/static/official-website/technology/high-tech-organization.jpg',
    name: '计算机软件著作权登记证书',
    border: true,
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng6.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng7.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng8.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng9.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng1.png',
    // name: '计算机软件著作权登记证书'
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng2.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng3.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng4.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng5.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng10.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng11.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng12.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng13.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng14.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng15.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng16.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng17.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng18.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng19.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng20.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng21.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng22.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng23.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng24.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng25.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng26.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng27.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng28.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng29.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: '//cdn.byai.com/static/official-website/technology/zheng30.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      '//cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/12%E3%80%81%E5%8F%AF%E4%BF%A1%E4%BA%91.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      '//cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/16%E3%80%81%E6%9C%80%E4%BD%B3%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E7%A7%91%E6%8A%80%E6%9C%8D%E5%8A%A1%E5%95%86.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/2020%E7%88%B1%E5%88%86%E6%9E%90%C2%B7%E4%B8%AD%E5%9B%BD%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E5%8E%82%E5%95%86%E5%85%A8%E6%99%AF%E6%8A%A5%E5%91%8A.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image: 'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/20220805-170326.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/20%E3%80%81%E4%BF%A1%E7%94%A8%E7%AD%89%E7%BA%A73A%EF%BC%88%E6%96%B0%EF%BC%89.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/21%E3%80%812020%E6%B5%99%E6%B1%9F%E8%BD%AF%E4%BB%B6%E6%A0%B8%E5%BF%83%E7%AB%9E%E4%BA%89%E5%8A%9B%E4%BC%81%E4%B8%9A.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image: 'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/image.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/middle_img_v2_28c0e540-fcd2-4694-943f-5af5b5fa7a2g.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/middle_img_v2_3b8f07b6-7439-4aa1-84a9-c0d820102f7g.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/middle_img_v2_5310d8a9-34e2-437e-8cb5-504fb806349g.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/middle_img_v2_8a61ac31-84d8-4b21-a7a8-1fba12aaee5g.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/middle_img_v2_daeded12-9ef9-4bc3-86bf-4102826c231g.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/middle_img_v2_eed7c091-1916-403c-8e2f-f7eac947d95g.jpg',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/wecom-temp-0d1c1063aa3d78fe0776f895d32f3827.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/wecom-temp-8094d70e64f9f74e116a65d6ef791ff3.png',
    name: '计算机软件著作权登记证书',
  },
  {
    image:
      'https://cdn.byai.com/static/intro/img/retail/about/about-baiying/certificate/%E4%B8%9A%E5%8A%A1%E8%BF%9E%E7%BB%AD%E6%80%A7%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AE%A4%E8%AF%81%E8%AF%81%E4%B9%A6.jpg',
    name: '计算机软件著作权登记证书',
  },
];

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

const Certificate: React.SFC<ICertificateProps> = ({ certificateList = CERTIFICATE_LIST, limit = 5 }) => {
  const computedList = certificateList.reduce((prev, curr, currIndex) => {
    if (currIndex % limit === 0) {
      return [...prev, [curr]];
    } else {
      prev[prev.length - 1].push(curr);
      return prev;
    }
  }, []);

  return (
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
                      <img src={certificate.image} alt="" />
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
  );
};

export default Certificate;
