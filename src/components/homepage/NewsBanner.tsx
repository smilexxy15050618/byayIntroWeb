import * as React from 'react';
import { Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

interface NewsBannerProps {
  title: string;
  newsList: { title: string; href: string }[];
  titleImg?: string;
}
interface NewsBannerState {
  activeIndex: number;
}

const NEWS_TITLE_BG = 'https://cdn.byai.com/static/official-website/home/news-circle.svg';

const NewsBannerWrapper = styled.div`
  height: 100px;
  border-bottom: 1px solid #eee;
  ${media.phone`
    height: 50px !important;
    padding: 0 16px;
    .news-title {
      margin-left: 12px !important;
      span {
        width: 28px !important;
        height: 28px !important;
        font-size: 12px !important;
        line-height: 1.2 !important;
        border-right: none !important;
        padding-right: 0 !important;
      }
    }
    .more {
      font-size: 12px !important;
    }
    .news-list a {
      font-size: 12px !important;
    }
  `}
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  .banner-wrapper {
    display: flex;
    align-items: center !important;
  }
  .news-title {
    display: inline-flex;
    align-items: center;
    span {
      position: relative;
      width: 34px;
      height: 34px;
      font-family: STHeitiTC-Medium;
      font-size: 16px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 20px;
      border-right: 1px solid rgba(102, 102, 102, 1);
      padding-right: 26px;
      box-sizing: content-box;
      img {
        position: absolute;
        width: 41px;
        height: 27px;
        top: -5px;
        left: -10px;
      }
    }
  }
  .news-wrapper {
    position: relative;
    height: 34px;
    width: 100%;
    overflow: hidden;
    flex: 1;
    .news-list {
      position: absolute;
      top: 0;
      width: 100%;
      height: 34px;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      a {
        height: 34px;
        overflow: hidden;
        display: block;
        padding: 0 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        font-family: STHeitiTC-Medium;
        font-weight: 500;
        color: rgba(13, 25, 36, 1);
        line-height: 34px;
        text-decoration: none;
      }
    }
  }
  .more {
    display: inline-flex;
    width: fit-content;
    justify-content: flex-end;
    font-size: 16px;
    color: rgba(49, 83, 212, 1);
    line-height: 22px;
    cursor: pointer;
    .iconfont {
      margin-left: 4px;
    }
  }
`;

export class NewsBanner extends React.Component<NewsBannerProps, NewsBannerState> {
  state: NewsBannerState = {
    activeIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(({ activeIndex }, { newsList }) => ({
        activeIndex: activeIndex === newsList.length - 1 ? 0 : activeIndex + 1,
      }));
    }, 3000);
  }

  render() {
    const { title, newsList, titleImg } = this.props;
    const { activeIndex } = this.state;
    return (
      <NewsBannerWrapper>
        <Container>
          <Row className="banner-wrapper">
            <div className="news-title">
              <span>
                {title}
                <img src={titleImg ? titleImg : NEWS_TITLE_BG} alt="" />
              </span>
            </div>
            <div className="news-wrapper">
              <div className="news-list" style={{ transform: `translateY(-${34 * activeIndex}px)` }}>
                {newsList.map((item, index) => (
                  <a href={item.href} key={index} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            {/* www.byai.com -> www.byai.com/news */}
            {/* ds.byai.com -> ds.byai.com/news(document.byai.com/news) */}
            <a href={'/news'}>
              <div className="more">
                查看全部
                <i className="iconfont iconxiaoxiangyoujiantou" />
              </div>
            </a>
          </Row>
        </Container>
      </NewsBannerWrapper>
    );
  }
}
