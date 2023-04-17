import * as React from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
// import ByRatioBox from '../common/ByRatioBox';

const ByRatioBox =  styled.div<{ backgroundImage?: string }>`;
  margin-top: 140px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .title{
    padding-top: 80px;
    padding-bottom: 50px;
    font-size: 40px;
    font-weight: normal;
    letter-spacing: 0px;
    line-height: 48px;
    text-align: center;
  }
`;

const CourseList = styled.div`;
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
  transition: all 0.3s ease-in-out;
  .status {
    width: 40px;
    height: 4px;
    opacity: 0;
    border-radius: 3px;
    background: rgba(0, 200, 189, 1);
    transition: all 0.3s ease-in-out;
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
  background: #3153d4;
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
    time: '2016.10.01',
    desc: '百应（杭州数心网络科技有限公司）成立',
  },
  {
    time: '2016.10.15',
    desc: '入驻浙江省梦想小镇',
  },
  {
    time: '2016.12.31',
    desc: '荣获浙江省政府天使梦想基金',
  },
  {
    time: '2017.01.06',
    desc: '成为阿里云金牌合作伙伴',
  },
  {
    time: '2017.01.15',
    desc: '阿米巴数千万天使轮融资',
  },
  {
    time: '2017.06.01',
    desc: '成为阿里云ET城市大脑战略合作伙伴',
  },
  {
    time: '2017.09.19',
    desc: '入选2017年杭州市科技型初创企业培育工程名单（雏鹰计划）',
  },
  {
    time: '2017.09.22',
    desc: '荣获阿里巴巴诸神之战全球创客大赛优秀项目奖',
  },
  {
    time: '2017.12.25',
    desc: '获政府扶植入选为“杭州市高新技术企业”',
  },
  {
    time: '2018.04',
    desc: '阿里云生态科技先锋ITP',
  },
  {
    time: '2018.05.01',
    desc: '阿米巴资本6000万Pre-A轮融资',
  },
  {
    time: '2018.08',
    desc: '新四板挂牌上市',
  },
  {
    time: '2019.05.05',
    desc: '获光信资本领投1.2亿元A轮融资',
  },
  {
    time: '2019.06.25',
    desc: '获恒生电子、信雅达亿元级战略投资',
  },
  {
    time: '2019.07',
    desc: '成为UCloud战略合作伙伴',
  },
  {
    time: '2019.08',
    desc: '成为华为云生态战略合作伙伴',
  },
  {
    time: '2020.02',
    desc: '智能疫情通知回访系统助力全民战“疫”',
  },
  {
    time: '2020.06',
    desc: '入选2020杭州准独角兽企业',
  },
  {
    time: '2020.07',
    desc: '获中国信通院  企业级SaaS可信云认证',
  },
  {
    time: '2020.10',
    desc: '入选腾讯SaaS加速器 共创数智未来生态',
  },
  {
    time: '2020.10',
    desc: '斩获2020数字中国数字政务赛道亚军',
  },
  {
    time: '2021.02',
    desc: '获余杭区准鲲鹏企业认定',
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
      hoverIndex: 1,
    });
  };
  render() {
    const { clientWidth, activeIndex, translateX, hoverIndex } = this.state;
    const courseList  = COURSE_TIME;
    const { backgroundImage } = this.props;
    if (!courseList.length) {
      return null;
    }
    return (
      <ByRatioBox id="DevelopHistory" width="100%" calcHeight={() => 'calc(60% - 293px)'} backgroundImage={backgroundImage}>
        <div className="title">发展历程</div>
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