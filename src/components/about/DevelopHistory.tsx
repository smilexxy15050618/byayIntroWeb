import React, { CSSProperties, FC, useEffect, useRef, useState} from 'react';
import styled, { css } from 'styled-components';

const ByRatioBox =  styled.div<{ backgroundImage?: string }>`;
  padding-top: 139px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 80px;
  .title{
    padding-top: 80px;
    padding-bottom: 50px;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    text-align: center;
    color:rgba(26,26,26,1);
    
  }
`;

const CourseList = styled.div`;
  width: 100%;
  overflow: hidden;
`;

const CourseListInner = styled.div<{ width: number; translateX: number }>`
  width: ${props => `${props.width}px`};
  display: flex;
  flex-wrap: no-wrap;
  transition: all 0.3s ease-in-out;
  transform: ${props => `translateX(${props.translateX}px)`};
`;

const CourseItem = styled.div<{ width: number; active?: boolean }>`
  padding-top: ${props => `${(props.width * 145) / 288 || 150}px`};
  width: ${props => `${props.width || 288}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${props => `${(props.width * 368) / 288 || 368}px`};
  padding-left: 50px;
  padding-right: 50px;
  transition: all 0.3s ease-in-out;
  .status {
    width: 40px;
    height: 4px;
    opacity: 0;
    border-radius: 3px;
    background: rgba(0, 200, 189, 1);
  }
  .time {
    position: relative;
    top: 0;
    font-size: 32px;
    font-weight: 200;
    color: rgba(90, 90, 90, 1);
    line-height: 50px;
  }
  .desc {
    padding: 0 20px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(90, 90, 90, 1);
    line-height: 32px;
    text-align: center;
  }
`;

const HoverBox = styled.div<{ width: number; left: number }>`
  position: absolute;
  left: ${props => `${props.left || 0}px`};
  width: ${props => `${props.width || 288}px`};
  height: ${props => `${(props.width * 368) / 288 || 368}px`};
  background: #2B58F9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => `${(props.width * 150) / 288 || 150}px`};
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  .status {
    width: 40px;
    height: 4px;
    border-radius: 3px;
    background: rgba(0, 200, 189, 1);
    opacity: 1;
  }
  .time {
    position: relative;
    top: ${props => `-${(props.width * 60) / 420 || 60}px`};
    font-size: 36px;
    font-weight: 300;
    color: #ffffff;
    line-height: 50px;
    transition: all 0.5s ease-in-out;
  }
  .desc {
    padding: 0 20px;
    margin-top: 32px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    text-align: center;
  }
`;

const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitchBtn = styled.i<{ disable: boolean }>`
  margin: 0 35px;
  font-size: 60px;
  color:  rgba(43, 88, 249, 1);
  opacity: ${props => (props.disable ? 0.3142 : 1)};
  cursor: pointer;
`;

const COURSE_TIME = [
  {
    time: '2023.04',
    desc: '发布“智能用户运营平台”，对话式AI产品全线升级',
  },
  {
    time: '2023.03',
    desc: '成为“新华网元宇宙及AIGC创新联盟”成员',
  },
  {
    time: '2023.01',
    desc: '获评「AI中国」2022最佳人工智能企业TOP30',
  },
  {
    time: '2022.12',
    desc: '入选2022中国企业数智化创新TOP50',
  },
  {
    time: '2022.10',
    desc: '入选《国家人工智能创新应用先导区“智赋百景”》',
  },
  {
    time: '2022.06',
    desc: '获评腾讯智慧零售“千域计划年度认证合作伙伴”',
  },
  {
    time: '2022.04',
    desc: '通过全球软件领域最高级别CMMI5认证',
  },
  {
    time: '2022.03',
    desc: '入选浙江省2021年度人工智能典型应用场景',
  },
  {
    time: '2021.12',
    desc: '获评浙江省高新技术企业研究开发中心<br />荣获2021年浙江省软件核心竞争力企业',
  },
  {
    time: '2021.06',
    desc: '入选杭州市重点建设人工智能应用场景',
  },
  {
    time: '2021.04',
    desc: '连续2年荣登杭州准独角兽榜单',
  },
  {
    time: '2021.03',
    desc: '获余杭区首批准鲲鹏企业认定',
  },
  {
    time: '2021.01',
    desc: '与华为签约合作，聚力共建全场景智慧',
  },
  {
    time: '2020.10',
    desc: '入选国际权威机构IDC《2020中国对话式人工智能厂商评估》报告，“Major Player-主要厂商”象限第一梯队',
  },
  {
    time: '2020.09',
    desc: '成立百应-杭州电子科技大学人工智能联合研发中心入选腾讯SaaS加速器，生态共创驱动数字化升级',
  },
  {
    time: '2020.07',
    desc: '获中国信通院企业级SaaS可信云认证',
  },
  {
    time: '2020.06',
    desc: '入选2020杭州准独角兽企业',
  },
  {
    time: '2020.05',
    desc: '打造杭州社保“易窗”智能服务平台上线',
  },
  {
    time: '2020.04',
    desc: '发布「智能疫情通知回访」系统，支持全国复工复产',
  },
  {
    time: '2019.12',
    desc: '荣获“国家高新技术企业”认定',
  },
  {
    time: '2019.08',
    desc: '成为华为云生态战略合作伙伴',
  },
  {
    time: '2019.07',
    desc: '成为UCloud战略合作伙伴',
  },
  {
    time: '2019.06',
    desc: '获恒生电子、信雅达亿元级战略投资',
  },
  {
    time: '2019.05',
    desc: '获光信资本领投1.2亿元A轮融资',
  },
  {
    time: '2019.02',
    desc: '企业客户突破25000家',
  },
  {
    time: '2018.08',
    desc: '成为信雅达战略合作伙伴',
  },
  {
    time: '2018.06',
    desc: '成为恒生电子智慧金融合作伙伴',
  },
  {
    time: '2018.05',
    desc: '获阿米巴资本6000万Pre-A轮融资',
  },
  {
    time: '2018.04',
    desc: '成为阿里云生态科技先锋ITP、今日头条独家AI语音供应商、腾讯头条AI语音供应商',
  },
  {
    time: '2017.08',
    desc: '发布智能联络中心（AICC）产品',
  },
  {
    time: '2017.06',
    desc: '成为阿里云ET城市大脑战略合作伙伴',
  },
  {
    time: '2017.01',
    desc: '成为阿里云金牌合作伙伴',
  },
  {
    time: '2016.09',
    desc: '百应科技成立',
  },
];

interface ICourseItem {
  time: string;
  desc: string;
}

interface ICourseProps {
  courseList: ICourseItem[];
}

interface ICourseState {
  activeIndex: number;
  translateX: number;
  clientWidth: number;
  hoverIndex: number;
}

class DevelopHistory extends React.Component<ICourseProps, ICourseState> {
  state = {
    activeIndex: 0,
    translateX: 0,
    clientWidth: 0,
    hoverIndex: 0,
  };
  componentDidMount() {
    this.setState({
      clientWidth: document.documentElement.clientWidth || document.body.clientWidth,
    });
    window.addEventListener('resize', this.updateClientWidth);

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateClientWidth);
  }

  updateClientWidth = () => {
    this.setState({
      clientWidth: document.documentElement.clientWidth || document.body.clientWidth,
    });
  };

  handleLeft = () => {
    const { clientWidth, activeIndex, translateX } = this.state;
    const courseList = COURSE_TIME;
    if (activeIndex <= 0) return;
    this.setState({
      activeIndex: activeIndex - 1,
      translateX: translateX + clientWidth / 5,
    });
  };

  handleRight = () => {
    const { clientWidth, activeIndex, translateX } = this.state;
    const courseList = COURSE_TIME;
    if (activeIndex >= courseList.length - 5) return;
    this.setState({
      activeIndex: activeIndex + 1,
      translateX: translateX - clientWidth / 5,
    });
  };

  handleCourseItemHover = (e, index) => {
    if (e.type === 'mouseenter') {
      this.setState({
        hoverIndex: index,
      });
    } else {
      this.setState({
        hoverIndex: index,
      });
    }
  };
  
  handleCourseLeave = () => {
    this.setState({
      hoverIndex: -1,
    });
  };

  render() {
    const { clientWidth, activeIndex, translateX, hoverIndex } = this.state;
    const courseList  = COURSE_TIME;
    const { backgroundImage, indexTab } = this.props;
    if (!courseList.length) {
      return null;
    }

    return (
      <ByRatioBox width="100%" calcHeight={() => 'calc(60% - 293px)'} backgroundImage={backgroundImage} style={{marginTop: indexTab == 2 ? /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) ? '0' : '256px' : '0' }}>
        <div className="title" id="DevelopHistory">发展历程</div>
        <CourseList onMouseLeave={this.handleCourseLeave}>
          <CourseListInner width={(clientWidth / 5) * courseList.length} translateX={translateX}>
            {courseList.map((item, index) => (
              <CourseItem
                width={clientWidth / 5}
                active={index === activeIndex}
                key={index}
                onMouseEnter={e => this.handleCourseItemHover(e, index)}
                onMouseLeave={e => this.handleCourseItemHover(e, index)}>
                <span className="time">{item.time}</span>
                <i className="status"></i>
                <span className="desc">{item.desc}</span>
              </CourseItem>
            ))}
            {hoverIndex !== -1 && (
              <HoverBox width={clientWidth / 5} left={(hoverIndex * clientWidth) / 5}>
                <span className="time">{courseList[hoverIndex].time}</span>
                <i className="status"></i>
                <span className="desc">{courseList[hoverIndex].desc}</span>
              </HoverBox>
            )}
          </CourseListInner>
        </CourseList>
        <Switch>
          <SwitchBtn disable={activeIndex <= 0} className="iconfont iconzuo-dajiantou" onClick={this.handleLeft} />
          <SwitchBtn
            disable={activeIndex >= courseList.length - 5}
            className="iconfont iconyou-dajiantou"
            onClick={this.handleRight}
          />
        </Switch>
      </ByRatioBox>
    );
  }
}

export default DevelopHistory;