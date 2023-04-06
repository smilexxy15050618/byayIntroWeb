import { BannerContent, BannerDesc, BannerImage, BannerTitle, BannerWrapper } from './styled';

export const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <div className="animate__animated animate__slow animate__fadeInLeft">
          <BannerTitle>数智赋能 创启未来</BannerTitle>
          <BannerDesc>
            百应科技将业界领先的AI、大数据技术带入千行百业全方位引领企业数智化转型升级，打造数字营销增长新引擎
          </BannerDesc>
        </div>
        <BannerImage className="animate__animated animate__slow animate__fadeInRight">
          <img src="https://cdn.byai.com/static/intro/img/customer-case/title-right.png" />
        </BannerImage>
      </BannerContent>
    </BannerWrapper>
  );
};
