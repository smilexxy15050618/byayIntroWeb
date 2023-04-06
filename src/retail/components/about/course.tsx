import * as React from 'react';
import { Col } from 'react-grid-system';
import styled, { css } from 'styled-components';
import ByRatioBox from '../../../components/common/ByRatioBox';

const CourseCol = styled(Col)<{ active?: boolean }>`
    padding: 150px 75px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 431px;
    transform: ${props => (props.active ? 'translateY(-50px)' : 'translateY(0px)')};
    transition: all 0.3s ease-in-out;
    ${props =>
      props.active &&
      css`
        background-color: #3153d4;
      `};
    .status {
        position: relative;
        top: -60px;
        width: 34px;
        height: 4px;
        background: rgba(84,196,197,1);
        border-radius: 2px;
        
    }
    .time {
        font-size: 36px;
        font-weight: 300;
        color: ${props => (props.active ? '#54C4C5' : '#3153D4')}
        line-height: 50px;
    }
    .desc {
        padding: 0 30px;
        margin-top: 5px;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 24px;
        text-align: center;
    }
`;

const CourseList = styled.div`
  overflow-x: hidden;
  margin-bottom: 20px;
`;

const CourseListInner = styled.div<{ width: number; translateX: number }>`
  width: ${props => `${props.width}px`};
  display: flex;
  flex-wrap: no-wrap;
  transition: all 0.3s ease-in-out;
  transform: ${props => `translateX(${props.translateX}px)`};
`;

const CourseItem = styled.div<{ width: number; active?: boolean }>`
  padding-top: ${props => `${(props.width * 150) / 289 || 150}px`};
  padding-left: 50px;
  padding-right: 50px;
  width: 0;
  width: ${props => `${props.width || 289}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${props => `${(props.width * 431) / 289 || 431}px`};
  transition: all 0.3s ease-in-out;
  .status {
    position: relative;
    top: ${props => `-${(props.width * 60) / 289 || 60}px`};
    width: 34px;
    height: 4px;
    background: rgba(84, 196, 197, 1);
    border-radius: 2px;
    opacity: 0;
  }
  .time {
    font-size: 36px;
    font-weight: 200;
    color: #728ca7;
    line-height: 50px;
  }
  .desc {
    padding: 0 20px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #f66600;
    line-height: 24px;
    text-align: center;
  }
`;

const HoverBox = styled.div<{ width: number; left: number }>`
  position: absolute;
  left: ${props => `${props.left || 0}px`};
  top: 0px;
  width: ${props => `${props.width || 289}px`};
  height: ${props => `${(props.width * 431) / 289 || 431}px`};
  background: #f66600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => `${(props.width * 150) / 289 || 150}px`};
  padding-left: 50px;
  padding-right: 50px;
  transition: all 0.3s ease-in-out;
  .status {
    position: relative;
    top: ${props => `-${(props.width * 60) / 289 || 60}px`};
    width: 34px;
    height: 4px;
    background: rgba(84, 196, 197, 1);
    border-radius: 2px;
  }
  .time {
    font-size: 36px;
    font-weight: 300;
    color: #54c4c5;
    line-height: 50px;
  }
  .desc {
    padding: 0 20px;
    margin-top: 8px;
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
  color: #3153d4;
  opacity: ${props => (props.disable ? 0.3142 : 1)};
  .status {
    opacity: 1;
  }
  .time {
    color: #54c4c5;
  }
`;

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

class Course extends React.Component<ICourseProps, ICourseState> {
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
    const { courseList } = this.props;
    if (activeIndex <= 0) return;
    this.setState({
      activeIndex: activeIndex - 1,
      translateX: translateX + clientWidth / 5,
    });
  };
  handleRight = () => {
    const { clientWidth, activeIndex, translateX } = this.state;
    const { courseList } = this.props;
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
    const { courseList } = this.props;
    if (!courseList.length) {
      return null;
    }
    return (
      <ByRatioBox width="100%" calcHeight={() => 'calc(60% - 293px)'}>
        <CourseList onMouseLeave={this.handleCourseLeave}>
          <CourseListInner width={(clientWidth / 5) * courseList.length} translateX={translateX}>
            {courseList.map((item, index) => (
              <CourseItem
                width={clientWidth / 5}
                active={index === activeIndex}
                key={index}
                onMouseEnter={e => this.handleCourseItemHover(e, index)}
                onMouseLeave={e => this.handleCourseItemHover(e, index)}>
                <i className="status"></i>
                <span className="time">{item.time}</span>
                <span className="desc">{item.desc}</span>
              </CourseItem>
            ))}
            {hoverIndex !== -1 && (
              <HoverBox width={clientWidth / 5} left={(hoverIndex * clientWidth) / 5}>
                <i className="status"></i>
                <span className="time">{courseList[hoverIndex].time}</span>
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

export default Course;
