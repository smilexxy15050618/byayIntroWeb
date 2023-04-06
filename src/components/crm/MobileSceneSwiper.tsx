import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Box from '../Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SceneListItem } from './SceneCarousel';

type IProps = {
  data: SceneListItem[];
};

const Process = styled.div<{ width: string }>`
  height: 100%;
  background: #e7e7fb;
  position: absolute;
  left: 0;
  width: ${props => props.width};
  transition: all 0.3s ease-in-out;
`;

const ImgWrap = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  img {
    margin: 0;
  }
`;
const MobileSceneSwiper: FC<IProps> = ({ data }) => {
  const [innerActiveKey, setInnerActiveKey] = useState(0);
  const pagination = !innerActiveKey
    ? data.length
    : innerActiveKey > data.length
    ? innerActiveKey - data.length
    : innerActiveKey;

  return (
    <>
      <Swiper
        className="swiper-container"
        onSlideChange={({ activeIndex }) => {
          setInnerActiveKey(activeIndex);
        }}
        loop>
        {data.map(({ caption, title, desc, mobileImg, mobileDesc }, idx) => (
          <SwiperSlide key={caption}>
            <Box fontSize="20px" fontWeight="500" lineHeight="28px" width="100%" color="#fff" textAlign="center" my={3}>
              {caption}
            </Box>
            <Box
              width="100%"
              height="354px"
              borderRadius="8px"
              box-shadow="0px 7px 13px 0px rgba(29, 58, 158, 0.16)"
              bgcolor="#fff"
              p="20px 16px 16px"
              boxSizing="border-box"
              display="flex"
              flexDirection="column">
              <Box fontSize="16px" fontWeight="500" lineHeight="22px" color="#202640" mb={1}>
                {title}
              </Box>
              {(mobileDesc || desc).map((it, idx) => (
                <Box color="#666B80" fontSize="12px" lineHeight="20px" key={idx}>
                  {it}
                </Box>
              ))}
              <ImgWrap>
                <Box
                  height="90%"
                  maxHeight="200px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="#EEF0FD"
                  borderRadius="8px">
                  <img src={mobileImg} />
                </Box>
              </ImgWrap>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box width="328px" margin="0 auto" height="3px" bgcolor="rgba(231,231,251,0.1)" position="relative">
        <Process width={`${(pagination / data.length) * 100}%`} />
      </Box>
      <Box display="flex" justifyContent="center" mt={0.5} color="rgba(255,255,255,0.32)">
        <Box>{pagination}</Box>
        <Box mx={0.5}>/</Box>
        <Box>{data.length}</Box>
      </Box>
    </>
  );
};

export { MobileSceneSwiper };
