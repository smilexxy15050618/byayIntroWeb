import React, { useState } from 'react';
import * as SC from './styled';

const IndustryMobileDemo = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (num: number) => {
    const myVideo = document.getElementsByTagName('video')[index];
    if (myVideo) {
      myVideo.currentTime = 0;
      myVideo.pause();
    }
    setIndex(num);
  };
  return (
    <SC.IndustryDemoContainer>
      <div className="arrow"></div>
      <div className="sub-title">构建私域增长第一步</div>
      <div className="title">百应AI，开启精细化私域加粉</div>
      <div className="button-group">
        <SC.ButtonContainer className={index === 0 ? 'active' : ''} url={SC.foodImg} onClick={() => handleClick(0)}>
          <div className="img" />
          食品行业
        </SC.ButtonContainer>
        <SC.ButtonContainer url={SC.makeups} className={index === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
          <div className="img" />
          美妆行业
        </SC.ButtonContainer>
      </div>
      <div className="video">
        {index === 0 ? (
          <video
            controls
            src={SC.foodVideo}
            poster="https://cdn.byai.com/static/oss-script/77cdd1b368335a412c4552789efa69b8.png"
          />
        ) : (
          <video
            controls
            src={SC.makeupsVideo}
            poster="https://cdn.byai.com/static/oss-script/efb6725f0b9ad0f9abc52e8da2cdaac9.png"
          />
        )}
      </div>
      {index === 0 ? (
        <div className="desc">
          <div className="title">食品类目.私域引流场景</div>
          <div className="sub-title">
            <div className="desc">
              <div className="round">
                <div className="small-round" />
              </div>
              寻找新品体验官
            </div>
            <div className="desc">
              <div className="round">
                <div className="small-round" />
              </div>
              精准引流加微
            </div>
          </div>
        </div>
      ) : (
        <div className="desc">
          <div className="title">美妆行业.活动通知场景</div>
          <div className="sub-title">
            <div className="desc">
              <div className="round">
                <div className="small-round" />
              </div>
              精准人群+丰富礼券
            </div>
            <div className="desc">
              <div className="round">
                <div className="small-round" />
              </div>
              高效大促通知
            </div>
          </div>
        </div>
      )}
      <div className="button" onClick={() => window.open('/form?formType=1&origin=ecommerce')}>
        立即免费体验
      </div>
    </SC.IndustryDemoContainer>
  );
};

export default IndustryMobileDemo;
