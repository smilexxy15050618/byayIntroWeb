import React, { CSSProperties, FC } from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import Box from './Box';
import { ReasonCard } from './partner';
import { IReasonCardProps } from './partner/ReasonCard';

export type IProps = {
  list: IReasonCardProps[];
  img: string | { src: string; mobileSrc?: string; mobileStyle?: CSSProperties; pcStyle?: CSSProperties };
  processMobileList?: (list: IReasonCardProps[]) => IReasonCardProps[];
};
const RingImgComp: FC<IProps> = ({ list, img, processMobileList = list => list }) => {
  const imgSrc = typeof img === 'string' ? img : img.src;
  const mobileImgSrc = (typeof img === 'string' ? img : img.mobileSrc) || imgSrc;
  const { mobileStyle = {}, pcStyle = {} } = typeof img === 'string' ? {} : img;

  return (
    <>
      <Visible md lg xl xxl xxxl>
        <Container style={{ marginBottom: '100px', minWidth: '1000px' }}>
          <Row>
            <Col md={7}>
              {list.slice(0, 2).map((it, idx) => (
                <ReasonCard {...it} size="sm" key={idx} />
              ))}
            </Col>
            <Col md={10} style={{ width: '100%', height: '100%' }}>
              <img src={imgSrc} style={pcStyle} />
            </Col>
            <Col md={7}>
              {list.slice(2, 4).map((it, idx) => (
                <ReasonCard {...it} size="sm" key={idx} />
              ))}
            </Col>
          </Row>
        </Container>
      </Visible>
      <Visible xs sm>
        <Box width="100vw" textAlign="center">
          <img src={mobileImgSrc} style={{ height: '330px', ...mobileStyle }} />
        </Box>
        <Box pb="40px">
          <Box display="flex" justifyContent="space-evenly" my={2}>
            {processMobileList(list)
              .slice(0, 2)
              .map((it, idx) => (
                <ReasonCard {...it} size="xs" key={idx} />
              ))}
          </Box>
          <Box display="flex" justifyContent="space-evenly" mt={2}>
            {processMobileList(list)
              .slice(2, 4)
              .map((it, idx) => (
                <ReasonCard {...it} size="xs" key={idx} />
              ))}
          </Box>
        </Box>
      </Visible>
    </>
  );
};

export { RingImgComp };
