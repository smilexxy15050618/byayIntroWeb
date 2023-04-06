import Axios from 'axios';
import { NextFunctionComponent } from 'next';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';
import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { BASE_URL, BigTitle, CustomerCaseTitle, Desc, TextArea } from '../src/components/common/BannerTextElements';
import BannerWhite from '../src/components/common/BannerWhite';
import { Layout } from '../src/components/Layout';
import { NewsItem } from '../src/components/news';
import { INewsItem } from '../src/components/news/NewsItem';
import { media } from '../src/constants/style';
import { HOST_ENUM } from '../src/lib/utils';

const BACKGOURND_XS = 'https://cdn.byai.com/static/official-website/home/news.png';
const BANNER = `${BASE_URL}news.png`;
const BANNER_XS = `${BASE_URL}news-xs.png`;
const { Container: TabContainer, Content: TabContent, Pane: TabPane } = Tab;
const { Link: NavLink } = Nav;

enum NavTab {
  媒体报道 = 'MEDIA_REPORT',
  产品更新 = 'BY_NEWS',
}

export enum NewsType {
  '媒体报道' = 1,
  '产品更新',
  '行业动态',
  '领导关怀',
  '品牌合作',
}

const NavTabList = ['媒体报道', '产品更新'];
const Wrapper = styled.div`
  background: rgba(255, 255, 255, 1);
  .news-item {
    border-bottom: 1px solid #eee;
  }
  .tab-pane {
    a:last-child {
      background: #333;
      .news-item {
        border-bottom: none;
      }
    }
  }
`;

const StyledNavItem = styled(Nav)`
  .nav-link {
    margin-right: 60px;
    padding: 10px 0;
    color: rgba(102, 102, 102, 1);
    ${media.phone`
      margin-right: 0px;
      width: 36vw;
      text-align: center;
    `}
    &:hover {
      color: rgba(49, 83, 212, 1);
    }
    &.active {
      color: rgba(49, 83, 212, 1);
      font-weight: 500;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 3px;
        right: 3px;
        height: 2px;
        background: rgba(49, 83, 212, 1);
      }
    }
  }
`;

const StyledPagination = styled(Pagination)`
  margin-top: 30px;
  margin-bottom: 50px;
  margin-left: 0;
  .rc-pagination-item,
  .rc-pagination-prev,
  .rc-pagination-next,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    transition: all 0.3s ease-in-out;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid rgba(238, 238, 238, 1);
    border-radius: 50%;
    font-size: 18px;
    &:focus {
      outline: none;
    }
    a {
      color: rgba(153, 153, 153, 1);
      &:after {
        margin-top: -2px !important;
      }
    }
    &:hover {
      background: rgba(49, 83, 212, 1);
      box-shadow: 0px 13px 20px 0px rgba(49, 83, 212, 0.15);
      border: none;
      a {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .rc-pagination-prev,
  .rc-pagination-next {
    > a {
      font-size: 28px;
      text-align: center;
    }
  }
  .rc-pagination-item-active {
    background: rgba(49, 83, 212, 1);
    box-shadow: 0px 13px 20px 0px rgba(49, 83, 212, 0.15);
    border: none;
    a {
      color: rgba(255, 255, 255, 1);
    }
  }
  .rc-pagination-jump-prev:hover:after,
  .rc-pagination-jump-next:hover:after {
    color: rgba(255, 255, 255, 1);
  }
`;

const NavRow = styled(Row)`
  font-size: 1.8rem;
  margin-top: 30px;
  ${media.phone`
    justify-content: center !important;
  `}
`;

const PageSize = 10;

interface INewsProps {
  newsList: INewsItem[];
  hostType?: HOST_ENUM;
}
const News: NextFunctionComponent<INewsProps> = ({ newsList = [], hostType = HOST_ENUM.HOST }) => {
  const BY_NEWS = newsList.filter(item => item.type !== NewsType.媒体报道);
  const MEDIA_REPORT = newsList.filter(item => item.type === NewsType.媒体报道);
  const NEWS = {
    BY_NEWS,
    MEDIA_REPORT,
  };

  const [eventKey, setEventKey] = React.useState(NavTab.媒体报道);
  const [page, setPage] = React.useState(1);

  function onNavSelect(eventKey) {
    setPage(1);
    setEventKey(eventKey);
  }

  function onPaginationChange(page) {
    setPage(page);
  }

  const NEWS_LIST = NEWS[eventKey].slice((page - 1) * PageSize, page * PageSize);

  return (
    <Layout hostType={hostType} headPlaceholder={[false, '#FFFFFF']}>
      {(visible, setVisible) => (
        <Wrapper>
          <BannerWhite
            minWidthPC="1075px"
            background={[`#F9FAFF`, '#FFFFFF']}
            pcImgs={[
              {
                src: BANNER,
                style: { width: 600, top: 0, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={BANNER_XS}>
            <TextArea spaces={['20px 48px', '8px 32px']}>
              <Hidden xs sm>
                <CustomerCaseTitle>以数智化驱动新商业文明</CustomerCaseTitle>
                <Desc width="548px">
                  百应科技将AI、大数据技术带入千行百业全方位助力企业数智化转型升级，打造数字营销增长新引擎
                </Desc>
              </Hidden>
              <Visible xs sm>
                <BigTitle>
                  以数智化
                  <br />
                  驱动新商业文明
                </BigTitle>
              </Visible>
            </TextArea>
          </BannerWhite>
          {/* <Banner
            title={<>
              <Hidden xs sm>
              以数智化驱动新商业文明
              </Hidden>
              <Hidden lg xl>
                <Row>
                  <Col sm={24}>以数智化驱动新商业文明</Col>
                </Row>
              </Hidden>
            </>}
            desc="百应致力于成为人工智能+大数据服务领域的行业领军者"
            text=""
            backgroundImage="//cdn.byai.com/static/official-website/home/news-bg.svg"
            mobileBackgroundImage={BACKGOURND_XS}
            onBtnClick={() =>
              window.open('https://www.lagou.com/gongsi/154789.html')
            }
          /> */}
          <Container>
            <Row>
              <Col lg={24}>
                <TabContainer defaultActiveKey={NavTab.媒体报道}>
                  <NavRow>
                    <Nav activeKey={eventKey} onSelect={onNavSelect}>
                      {NavTabList.map(item => (
                        <StyledNavItem key={Nav[item]}>
                          <NavLink eventKey={NavTab[item]}>{item}</NavLink>
                        </StyledNavItem>
                      ))}
                    </Nav>
                  </NavRow>
                  <Row
                    style={{
                      marginTop: 20,
                    }}>
                    <TabContent>
                      {NavTabList.map(item => (
                        <TabPane eventKey={NavTab[item]}>
                          {NEWS_LIST.map(item => (
                            <NewsItem key={item.id} news={item} />
                          ))}
                        </TabPane>
                      ))}
                    </TabContent>
                  </Row>
                  {!!NEWS[eventKey].length && (
                    <Row justify="center">
                      <StyledPagination
                        current={page}
                        pageSize={PageSize}
                        total={NEWS[eventKey].length}
                        onChange={onPaginationChange}
                        showLessItems={true}
                      />
                    </Row>
                  )}
                </TabContainer>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      )}
    </Layout>
  );
};

News.getInitialProps = async () => {
  let newsList: INewsItem[] = [];
  try {
    // 测试环境接口崩了，暂时直接链到线上(线上接口允许跨域)
    newsList = (await Axios.get(`https://www.byai.com/intro/news/all`)).data;
    newsList = Array.isArray(newsList) ? newsList : [];
  } catch (error) {
    console.log({ error });
  }
  return {
    newsList,
  };
};

export default News;
