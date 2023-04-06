import { Fork } from '@indata/icon-byai';
import Link from 'next/link';
import { FC, ReactNode, useState } from 'react';
import { Col, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import ByProgressSwiper from '../../components/common/ByProgressSwiper';
import { useScaleRate } from '../../lib/hooks-utils';
import { calWidthAndHeight } from '../../lib/utils';
import AIEmployeeCard from './HotCard';
const BASE_URL = `https://cdn.byai.com/static/intro/img/index/version2021/ai-employee`;
const BG = `${BASE_URL}/bg.png`;
const BG_XS = `${BASE_URL}/bg-xs.png`;
const PC_INFOS = [
  {
    title: '《私域2.0：全域新趋势白皮书》',
    desc: '2022年全新重磅发布，抢先了解',
    src: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_new_1.png',
    background: 'rgba(246, 102, 0, 0.06)',
    // url: 'https://ds.byai.com/detail/news/62d685488ffc20001e8ab22c',
    action: '免费领取 >>',
    special: true,
    hotPopoverBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_bg.png',
    hotPopoverLogoBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_logo.png',
    hotPopoverCommonBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_common.png',
    hotPopoverTitle: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_title_1.png',
    hotPopoverIconBg:
      'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_icon_bg_1.png',
    hotPopoverHeadBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_head.png',
    hotPopoverMainTitle: 'Hi，我是您的专属增长顾问',
    hotPopoverSubTitle: '随时为您在线解答',
    hotPopoverContent: '免费领《私域2.0：全域新趋势白皮书》',
    hotPopoverCode: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_code_1.png',
    position: 'left',
  },
  {
    title: '立即领取5000元新用户优惠券',
    desc: '咨询可享，限电商零售行业',
    src: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_new_2.png',
    background: 'rgba(246, 102, 0, 0.06)',
    showNewIcon: true,
    action: '立即咨询 >>',
    hotPopoverBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_bg.png',
    hotPopoverLogoBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_logo.png',
    hotPopoverCommonBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_common.png',
    hotPopoverTitle: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_title_2.png',
    hotPopoverIconBg:
      'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_icon_bg_2.png',
    hotPopoverDesc: ['咨询可享，限电商零售行业', '活动结束时间：2022年10月30号'],
    hotPopoverHeadBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_head.png',
    hotPopoverMainTitle: 'Hi，我是您的专属增长顾问',
    hotPopoverSubTitle: '随时为您在线解答',
    hotPopoverContent: '免费领5000元新用户优惠券',
    hotPopoverCode: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_code_2.png',
    position: 'middle',
  },
  {
    title: '免费领取私域运营资料包',
    desc: '抢先开启私域增长',
    src: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_new_3.png',
    background: 'rgba(246, 102, 0, 0.06)',
    // url: 'https://ds.byai.com/detail/news/6281f8957da374001ebd2ef0',
    action: '立即学习 >>',
    hotPopoverBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_bg.png',
    hotPopoverLogoBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_logo.png',
    hotPopoverCommonBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_common.png',
    hotPopoverTitle: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_title_3.png',
    hotPopoverIconBg:
      'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_icon_bg_3.png',
    hotPopoverHeadBg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_head.png',
    hotPopoverMainTitle: 'Hi，我是您的专属增长顾问',
    hotPopoverSubTitle: '随时为您在线解答',
    hotPopoverContent: '免费领私域运营资料包',
    hotPopoverCode: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/hot_popover_code_3.png',
    position: 'right',
  },
];

const Mobile_INFOS = [
  {
    title: '荣誉资质',
    desc: '获得可信云、CMMI5等国际权威认证',
    src: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_1.png',
    hoverSrc: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_hover_1.png',
    background: 'rgba(246, 102, 0, 0.06)',
    url: 'https://ds.byai.com/detail/news/62d685488ffc20001e8ab22c',
  },
  {
    title: '免费领取白皮书',
    desc: '百应x见实联合发布《私域加粉手册》',
    src: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_2.png',
    hoverSrc: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_hover_2.png',
    background: 'rgba(246, 102, 0, 0.06)',
    showNewIcon: true,
  },
  {
    title: '提升转化',
    desc: '了解「AI外呼的三种私域加粉路径」',
    src: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_3.png',
    hoverSrc: 'https://cdn.byai.com/static/intro/img/retail/hot_icon_hover_3.png',
    background: 'rgba(246, 102, 0, 0.06)',
    url: 'https://ds.byai.com/detail/news/6281f8957da374001ebd2ef0',
  },
];

interface IProps {
  className?: string;
  children?: ReactNode;
}

const Title = styled.div`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  line-height: 68px;
  text-align: center;
`;

const Desc = styled.div`
  width: 860px;
  height: 96px;
  font-size: 16px;
  color: #000000;
  line-height: 32px;
  text-align: center;
`;
const FloatCards = styled.div<{ scale: number }>`
  position: absolute;
  top: -7.3%;
  left: 50%;
  z-index: 999;
  transform-origin: center top;
  transform: translateX(-50%) scale(${props => props.scale});
  box-shadow: 0px ${calWidthAndHeight(4)} ${calWidthAndHeight(16)} 0px rgba(128, 131, 141, 0.1);
  width: ${calWidthAndHeight(1200)};
  height: ${calWidthAndHeight(229)};
  padding: ${calWidthAndHeight(24)} ${calWidthAndHeight(12)} ${calWidthAndHeight(12)};
  background: #ffffff;
  border-radius: ${calWidthAndHeight(10)};
  .cards {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: ${calWidthAndHeight(344)};
    height: ${calWidthAndHeight(120)};
    padding: ${calWidthAndHeight(16)};
    border-radius: ${calWidthAndHeight(6)};
  }
`;
const FindHotSpot = styled.div`
  position: relative;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #f66600;
  line-height: 2.4rem;
  cursor: pointer;
  .icon {
    position: absolute;
    top: 0;
    left: calc(50% + 5rem);
    transition: all 0.2s;
    margin-left: 0.4rem;
  }
  .font {
    display: inline-block;
  }
  .font:hover {
    .icon {
      transition: all 0.2s;
      margin-left: 1rem;
    }
    color: #f68100;
  }
`;

const WhiteBook = styled.div`
  width: ${calWidthAndHeight(184)};
  background: #f66600;
  padding: ${calWidthAndHeight(8)} 0;
  box-shadow: 0px ${calWidthAndHeight(2)} ${calWidthAndHeight(12)} 0px rgba(0, 0, 0, 0.1);
  border-radius: ${calWidthAndHeight(10)};
  text-align: center;
  position: absolute;
  left: 50%;
  top: ${calWidthAndHeight(0)};
  transform: translate(-50%, -100%);
  z-index: 999;
  color: #ffffff;
  font-size: ${calWidthAndHeight(16)};
  line-height: ${calWidthAndHeight(22)};

  .qr_code {
    width: ${calWidthAndHeight(140)};
    height: ${calWidthAndHeight(140)};
    margin: ${calWidthAndHeight(8)} 0;
    background: #ffffff;
    border-radius: ${calWidthAndHeight(6)};
  }
`;

const HotPopover = styled.div<any>`
  position: fixed;
  width: ${calWidthAndHeight(840)};
  height: ${calWidthAndHeight(480)};
  top: calc(50vh + ${props => props.scrollY || 0}px);
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%) scale(0.8);
  z-index: 99999;

  .hot-popover-close {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    color: #f66600;
    line-height: 24px;
    right: 8px;
    cursor: pointer;
    &:hover {
      color: #f68100;
    }
  }
  .hot-popover-left {
    height: 100%;
    width: ${calWidthAndHeight(480)};
    background: url(${props => props.hotPopoverBg}) no-repeat;
    background-size: contain;
    padding: ${calWidthAndHeight(20)};
    .hot-popover-top {
      display: flex;
      .hot-popover-logo {
        width: ${calWidthAndHeight(80)};
        height: ${calWidthAndHeight(24)};
        background: url(${props => props.hotPopoverLogoBg}) no-repeat;
        background-size: cover;
      }
      .hot-popover-result {
        height: ${calWidthAndHeight(24)};
        width: ${calWidthAndHeight(154)};
        margin-left: ${calWidthAndHeight(18)};
        background: url(${props => props.hotPopoverCommonBg}) no-repeat;
        background-size: cover;
      }
    }
    .hot-popover-title {
      width: ${calWidthAndHeight(368)};
      height: ${calWidthAndHeight(68)};
      margin: 0 auto;
      background: url(${props => props.hotPopoverTitle}) no-repeat;
      background-size: contain;
      background-position-x: center;
      margin-top: ${calWidthAndHeight(24)};
    }
    .hot-popover-icon {
      width: ${calWidthAndHeight(360)};
      height: ${calWidthAndHeight(260)};
      margin: 0 auto;
      background: url(${props => props.hotPopoverIconBg}) no-repeat;
      background-size: contain;
      background-position-x: center;
      margin-top: ${calWidthAndHeight(24)};
    }
    .hot-popover-desc {
      font-size: ${calWidthAndHeight(14)};
      font-weight: 400;
      color: #ffffff;
      line-height: ${calWidthAndHeight(22)};
      text-align: center;
    }
  }
  .hot-popover-right {
    heigth: 100%;
    width: ${calWidthAndHeight(360)};
    background: #ffffff;
    border-radius: 0 ${calWidthAndHeight(6)} ${calWidthAndHeight(6)} 0;
    padding: ${calWidthAndHeight(24)};

    .hot-popover-top {
      display: flex;
      .hot-popover-head {
        width: ${calWidthAndHeight(56)};
        height: ${calWidthAndHeight(56)};
        background: url(${props => props.hotPopoverHeadBg}) no-repeat;
        background-size: contain;
      }
      .hot-popover-title {
        font-size: ${calWidthAndHeight(18)};
        font-weight: 500;
        color: #000000;
        line-height: ${calWidthAndHeight(24)};
        margin: ${calWidthAndHeight(4)} 0 0 ${calWidthAndHeight(20)};
        .hot-popover-sub-title {
          font-size: ${calWidthAndHeight(14)};
          font-weight: 400;
          color: #6f6f6f;
        }
      }
    }

    .hot-popover-split {
      height: 1px;
      width: ${calWidthAndHeight(312)};
      background: #f6f6f6;
      margin: ${calWidthAndHeight(24)} auto 0;
    }

    .hot-popover-add-wechat {
      text-align: center;
      margin-top: ${calWidthAndHeight(8)};
      height: ${calWidthAndHeight(24)};
      font-size: ${calWidthAndHeight(14)};
      font-weight: 400;
      color: #f66600;
      line-height: ${calWidthAndHeight(24)};
    }
    .hot-popover-content {
      text-align: center;
      height: ${calWidthAndHeight(24)};
      font-size: ${calWidthAndHeight(14)};
      font-weight: 500;
      color: #f66600;
      line-height: ${calWidthAndHeight(24)};
    }
    .hot-popover-code {
      margin: ${calWidthAndHeight(16)} auto ${calWidthAndHeight(24)};
      width: ${calWidthAndHeight(164)};
      height: ${calWidthAndHeight(164)};
      background: url(${props => props.hotPopoverCode}) no-repeat;
      background-size: contain;
    }

    .hot-popover-tip {
      width: ${calWidthAndHeight(214)};
      height: ${calWidthAndHeight(40)};
      background: #f66600;
      text-align: center;
      margin: 0 auto;
      border-radius: ${calWidthAndHeight(20)};
      font-size: ${calWidthAndHeight(18)};
      color: #ffffff;
      line-height: ${calWidthAndHeight(40)};
    }

    .hot-popover-phone {
      margin: ${calWidthAndHeight(24)} auto 0;
      width: ${calWidthAndHeight(264)};
      height: ${calWidthAndHeight(24)};
      font-size: ${calWidthAndHeight(22)};
      font-weight: 500;
      color: #000000;
      line-height: ${calWidthAndHeight(24)};
    }
  }
`;
const RawHot: FC<IProps> = ({ className }) => {
  // 1264px时任然为设计稿宽度，1264以下则按 视口宽度/1264 的比例进行缩放
  const scale = useScaleRate(1264, [769, 1264]);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [selectedItem, setSelectedItem] = useState<any>({});
  const [scrollY, setScrollY] = useState<number>(0);
  return (
    <div className={className}>
      <FloatCards scale={scale}>
        <Visible md lg xl xxl xxxl>
          <Row className="cards">
            {PC_INFOS.map((item, i) => (
              <Col sm={8} key={i}>
                <AIEmployeeCard
                  {...item}
                  // onMouseEnter={() => {
                  //   if (i !== 1) return;
                  //   setVisible(true);
                  // }}
                  // onMouseleave={() => {
                  //   if (i !== 1) return;
                  //   setVisible(false);
                  // }}
                  onClick={() => {
                    if (i === selectedIndex) {
                      setVisible(!visible);
                    } else {
                      setVisible(true);
                      setSelectedIndex(i);
                      setSelectedItem(PC_INFOS[i]);
                    }
                    setScrollY(window.scrollY);
                  }}
                />
              </Col>
            ))}
          </Row>
        </Visible>
        {/* 移动端 */}
        <Visible xs sm>
          <ByProgressSwiper
            className="cards"
            noProgress={true}
            previewWidth="0px"
            contentPadding="0px"
            progressPadding="0px">
            {Mobile_INFOS.map((item, i) => {
              return (
                <AIEmployeeCard
                  {...item}
                  key={item.title}
                  // onClick={() => {
                  //   if (i !== 1) return;
                  //   setVisible(!visible);
                  // }}
                />
              );
            })}
          </ByProgressSwiper>
        </Visible>
        <Link href="/news">
          <FindHotSpot>
            {/* <div className="font">
              发现更多热点
              <div className="icon">&gt;</div>
            </div> */}
          </FindHotSpot>
        </Link>
      </FloatCards>
      {visible && (
        <HotPopover {...selectedItem} scrollY={scrollY}>
          <div
            className="hot-popover-close"
            onClick={() => {
              setVisible(false);
            }}>
            <Fork />
          </div>
          <div className="hot-popover-left">
            <div className="hot-popover-top">
              <div className="hot-popover-logo"></div>
              <div className="hot-popover-result"></div>
            </div>
            <div className="hot-popover-title"></div>
            <div className="hot-popover-icon"></div>
            {selectedItem.hotPopoverDesc &&
              selectedItem.hotPopoverDesc.length &&
              selectedItem.hotPopoverDesc.map(item => <div className="hot-popover-desc">{item}</div>)}
          </div>
          <div className="hot-popover-right">
            <div className="hot-popover-top">
              <div className="hot-popover-head"></div>
              <div className="hot-popover-title">
                <div className="hot-popover-main-title">{selectedItem.hotPopoverMainTitle}</div>
                <div className="hot-popover-sub-title">{selectedItem.hotPopoverSubTitle}</div>
              </div>
            </div>
            <div className="hot-popover-split"></div>
            <div className="hot-popover-add-wechat">- 扫码添加微信 -</div>
            <div className="hot-popover-content">{selectedItem.hotPopoverContent}</div>
            <div className="hot-popover-code"></div>
            <div className="hot-popover-tip">扫码添加 | 即刻领取</div>
            <div className="hot-popover-phone">联系电话 400-0235-100</div>
          </div>
        </HotPopover>
      )}
    </div>
  );
};

export type IHotProps = IProps;
const Hot = styled(RawHot)<IHotProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${calWidthAndHeight(148)} ${calWidthAndHeight(20)} 0;
  position: relative;
`;
export default Hot;
