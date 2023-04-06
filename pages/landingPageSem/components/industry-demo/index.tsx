import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import * as SC from './styled';

const CAROUSEL_CONTAINER_LIST = [
  {
    imgBg: SC.foodBgImg,
    title: '食品类目.私域引流场景',
    contentList: ['寻找新品体验官', '精准引流加微'],
    buttonUrl: '',
    video: SC.foodVideo,
    open: '/form?formType=1&origin=ecommerce',
  },
  {
    imgBg: SC.makeupsBg,
    title: '美妆行业.活动通知场景',
    contentList: ['精准人群+丰富礼券', '高效大促通知'],
    buttonUrl: '',
    video: SC.makeupsVideo,
    open: '/form?formType=1&origin=ecommerce',
  },
  {
    imgBg: SC.petBg,
    title: '宠物类目.私域引流场景',
    contentList: ['免费宠粮+健康顾问', '轻松转化加微'],
    buttonUrl: '',
    video: SC.petVideo,
    open: '/form?formType=1&origin=ecommerce',
  },
];

const IndustryDemo = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (type: 'pre' | 'next' | 'click', num?: number) => {
    const myVideo = document.getElementsByTagName('video')[index];
    myVideo.currentTime = 0;
    myVideo.pause();
    if (type === 'pre') {
      if (index === 0) {
        setIndex(2);
      } else {
        setIndex(index - 1);
      }
    }
    if (type === 'next') {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
    if (type === 'click') {
      setIndex(num);
    }
  };
  return (
    <SC.IndustryDemoContainer>
      <div className="content">
        <div className="sub-title">构建私域增长第一步</div>
        <div className="title">百应，开启精细化私域加粉</div>
        <SC.ContentContainer>
          <ListGroup>
            <ListGroup.Item className={index === 0 ? 'item-active' : ''} onClick={() => handleSelect('click', 0)}>
              <div className="title-img">
                <img src={SC.foodImg} alt="" width="100%" />
              </div>
              食品行业
            </ListGroup.Item>
            <ListGroup.Item className={index === 1 ? 'item-active' : ''} onClick={() => handleSelect('click', 1)}>
              <div className="title-img">
                <img src={SC.makeups} alt="" width="100%" />
              </div>
              美妆行业
            </ListGroup.Item>
            <ListGroup.Item className={index === 2 ? 'item-active' : ''} onClick={() => handleSelect('click', 2)}>
              <div className="title-img">
                <img src={SC.pet} alt="" width="100%" />
              </div>
              宠物行业
            </ListGroup.Item>
          </ListGroup>
          <SC.CarouselContainer activeIndex={index} indicators={false} controls={false} fade={true}>
            {CAROUSEL_CONTAINER_LIST.map(item => (
              <SC.CarouselContainer.Item key={item.title}>
                <img className="d-block w-100 img-bg" src={item.imgBg} alt="Third slide" />
                <div className="caption-content">
                  <div className="left">
                    <div className="font">
                      <div className="font-title">{item.title}</div>
                      {item.contentList.length && (
                        <div className="content-list">
                          {item.contentList.map(i => (
                            <div key={`${i}`}>{i}</div>
                          ))}
                        </div>
                      )}
                    </div>
                    <a className="button" href={item.open}>
                      立即免费体验
                    </a>
                  </div>
                  <div className="right">
                    <SC.VideoContainer controls src={item.video} />
                    <div className="options">
                      <SC.preIcon onClick={() => handleSelect('pre')}>
                        <div className="content" />
                      </SC.preIcon>
                      <SC.nextIcon onClick={() => handleSelect('next')}>
                        <div className="content" />
                      </SC.nextIcon>
                    </div>
                  </div>
                </div>
              </SC.CarouselContainer.Item>
            ))}
          </SC.CarouselContainer>
        </SC.ContentContainer>
      </div>
    </SC.IndustryDemoContainer>
  );
};

export default IndustryDemo;
