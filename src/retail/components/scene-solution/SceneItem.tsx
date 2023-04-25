import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { AngleRight } from '../../../components/accordion/AngleRight';

export interface SceneItemProps {
  data: any;
  tabIndex: number;
  onJumpClick: () => void;
}

export const SceneItem: FC<SceneItemProps> = ({ data, tabIndex, onJumpClick }) => {
  const { imageSrc, videoSrc, videoName, detailList } = data;
  const isAudio = videoSrc && videoSrc.endsWith('mp3');
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoStatus, setVideoStatus] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveIndex(0);
    setVideoStatus(0);
  }, [tabIndex]);

  const handleCarouselChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="scene-item">
      {videoName ? (
        <div className="video-wrapper">
          <div
            className={classNames('poster', {
              playing: videoStatus === 1,
              ['show-bg']: videoStatus === 2,
            })}>
            <div className="poster-title">{videoName}</div>
            <div
              onClick={() => {
                setVideoStatus(isAudio ? 2 : 1);
                if (videoRef.current) {
                  videoRef.current.play();
                }
              }}
              className="poster-player">
              <img
                width={20}
                height={20}
                src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E6%92%AD%E6%94%BE.svg"
              />
              立即播放
            </div>
          </div>
          <video src={videoSrc} controls={true} ref={videoRef}>
            <source />
          </video>
        </div>
      ) : (
        <div className="image-wrapper">
          <img src={imageSrc} />
        </div>
      )}
      <div className="text-wrapper">
        <Carousel
          controls={false}
          indicators={false}
          interval={null}
          activeIndex={activeIndex}
          onSelect={handleCarouselChange}>
          {(detailList || []).map(({ title, desc, descDirection, btnName, bigDescFlag }) => {
            const isVer = descDirection === 'ver';
            return (
              <Carousel.Item>
                <div className="text-title">{title}</div>
                {descDirection && Array.isArray(desc) ? (
                  <div className="desc-wrapper">
                    {desc.map(({ title, content, content2 }, idx) => (
                      <div
                        className={classNames('desc-item', {
                          'desc-item-hor': !isVer,
                          'no-border': idx === desc.length - 1 || idx === desc.length - 2,
                        })}>
                        <div className="desc-item-title">{title}</div>
                        <div className="desc-item-content">{content}</div>
                        <div className="desc-item-content2">{content2}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={classNames('text-desc', {
                      ['large-text']: bigDescFlag,
                    })}>
                    {desc}
                  </div>
                )}
                <div className={classNames('text-btn', { hidden: !btnName })} onClick={onJumpClick}>
                  {btnName}
                  <AngleRight />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="custom-carousel-indicators">
          {(detailList || []).map((item, index) => (
            <div
              className={classNames('indicators-item', {
                active: index === activeIndex,
              })}
              onClick={() => handleCarouselChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
