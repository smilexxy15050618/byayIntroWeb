import React, { VFC } from 'react';
import * as SC from './styled';
interface BannerMobileProps {
  title: string;
  subTitle: string;
  buttonFont: string;
  buttonUrl: string;
  imgUrl: string;
}
const BannerMobile: VFC<BannerMobileProps> = ({
  title,
  subTitle,
  buttonFont = '和我们的顾问聊聊 >>',
  buttonUrl,
  imgUrl,
}) => {
  return (
    <SC.BannerMobileWrapper>
      <SC.DescContent>
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </SC.DescContent>
      <SC.ButtonWrapper onClick={() => window.open(buttonUrl)}>{buttonFont}</SC.ButtonWrapper>
      <SC.ImgWrapper>
        <img src={imgUrl} alt="" />
      </SC.ImgWrapper>
    </SC.BannerMobileWrapper>
  );
};

export default BannerMobile;
