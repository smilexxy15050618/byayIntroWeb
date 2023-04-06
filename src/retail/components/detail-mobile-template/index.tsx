import React, { VFC } from 'react';
import * as SC from './styled';
const methodDisplayBgImgObj = {
  1: 'https://cdn.byai.com/static/oss-script/9644188f681c150b4a99b1b3d071ed9d.png',
  2: 'https://cdn.byai.com/static/oss-script/55ce2194572e9057022004499b7d9fed.png',
};
interface DetailMobileTemplateProps {
  topImg: {
    img: string;
    titleList: string[];
  };
  brandIntroduction: {
    title: string;
    desc: string;
  };
  target: {
    title: string;
    msgList: {
      icon: string;
      title: string;
      descList: string[];
    }[];
  };
  methodDisplay: {
    title: string;
    msgList: {
      title: string;
      descList: string[];
    }[];
  };
  finalEffect: {
    title: string;
    img: string;
    descInfo: {
      countList: {
        title: string;
        count: string;
        suffix: string;
      }[];
      descFontList?: string[];
    };
  };
  customerTestimonials: {
    title: string;
    desc: string;
  };
}
const DetailMobileTemplate: VFC<DetailMobileTemplateProps> = data => {
  return (
    <SC.DetailMobileTemplateWrapper>
      <div className="top-content">
        <SC.TopBgImgWrapper bgImg={data.topImg.img} titleLength={data.topImg.titleList.length}>
          {data.topImg.titleList.map(title => (
            <span key={title}>{title}</span>
          ))}
        </SC.TopBgImgWrapper>
        <SC.BrandIntroductionWrapper>
          <div className="brand-Introduction-content">
            <div className="brand-intro-title">{data.brandIntroduction.title}</div>
            <div className="brand-intro-desc">{data.brandIntroduction.desc}</div>
          </div>
        </SC.BrandIntroductionWrapper>
      </div>
      <SC.TargetWrapper>
        <div className="target-title">{data.target.title}</div>
        <div className="target-card-list">
          {data.target.msgList.map(msg => {
            return (
              <div key={msg.title} className="target-card-item">
                <div className="target-card-item-title">
                  <div className="target-card-item-title-icon">
                    <img src={msg.icon} alt="" />
                  </div>
                  <div className="target-card-item-title-font">{msg.title}</div>
                </div>
                <div className="green-block" />
                <div className="target-card-item-desc">
                  {msg.descList.map(desc => (
                    <span key={desc}>{desc}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SC.TargetWrapper>
      <SC.MethodDisplayWrapper>
        <div className="method-display-title">{data.methodDisplay.title}</div>
        <div className="method-display-card-list">
          {data.methodDisplay.msgList.map((msg, index) => {
            return (
              <div key={msg.title} className="method-display-card-item">
                <div className="method-display-card-bg">
                  <img src={methodDisplayBgImgObj[index + 1]} alt="" />
                </div>
                <div className="method-display-card-item-title">{msg.title}</div>
                <div className="method-display-card-item-descList">
                  {msg.descList.map(desc => (
                    <div key={desc} className="method-display-card-item-desc">
                      <SC.CircleBox bgImg="https://cdn.byai.com/static/oss-script/252a4a51ef947145b066cba73b41c433.png" />
                      <div className="method-display-card-item-desc-font">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SC.MethodDisplayWrapper>
      <SC.FinalEffectWrapper>
        <div className="final-effect-title">{data.finalEffect.title}</div>
        <div className="final-effect-img">
          <img src={data.finalEffect.img} alt="" />
        </div>
        <div className="final-effect-desc">
          <div className="final-effect-desc-count-list">
            {data.finalEffect.descInfo.countList.map(countInfo => {
              return (
                <div key={countInfo.count} className="final-effect-desc-count-item">
                  <div className="final-effect-desc-count-item-title">{countInfo.title}</div>
                  <div className="final-effect-desc-count-item-desc">
                    <div className="final-effect-desc-count-item-desc-count">{countInfo.count}</div>
                    <div className="final-effect-desc-count-item-desc-suffix">{countInfo.suffix}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {data.finalEffect.descInfo.descFontList && (
            <div className="final-effect-desc-font-list">
              {data.finalEffect.descInfo.descFontList.map(font => (
                <span key={font}>{font}</span>
              ))}
            </div>
          )}
        </div>
      </SC.FinalEffectWrapper>
      <SC.CustomerTestimonialsWrapper>
        <div className="customer-testimonials-content">
          <div className="customer-testimonials-img" />
          <div className="customer-testimonials-title">{data.customerTestimonials.title}</div>
          <div className="customer-testimonials-desc">{data.customerTestimonials.desc}</div>
        </div>
      </SC.CustomerTestimonialsWrapper>
    </SC.DetailMobileTemplateWrapper>
  );
};

export default DetailMobileTemplate;
