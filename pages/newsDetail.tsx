import Axios from 'axios';
import { NextFunctionComponent } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../src/components/Layout';
import VoiceFooter from '../src/components/order/footer';
import { media } from '../src/constants/style';
import './wechat.css';

interface INewsDetailProps {
  prev: Prev | null;
  current: {
    id: number;
    userId: number;
    type: number;
    title: string;
    description: string;
    coverImgUrl: string;
    originalName: string;
    originalLink: string;
    markdownContent: string;
    htmlContent: string;
    createdAt: string;
    updatedAt: string;
  };
  next: Prev | null;
}

interface Prev {
  title: string;
  id: number;
}

const NewsWrapper = styled.div`
  .by-breadcrumb {
    display: flex;
    padding: 30px 0 0;
    align-items: center;
    ${media.phone`
      padding: 30px 0 0 16px !important;
    `}
    a {
      font-size: 14px;
      color: rgba(13, 25, 36, 1);
    }
    .next {
      margin: 0 8px;
    }
  }
  .news-title {
    font-size: 26px;
    text-align: justify;
    color: rgba(13, 25, 36, 1);
    line-height: 1.5;
    border-bottom: none;
    margin: 30px auto 16px;
    ${media.phone`
      font-size: 22px;
      padding: 0 16px;
    `}
  }
  .news-link {
    display: block;
    padding: 30px 0 60px;
    font-size: 14px;
    color: rgba(13, 25, 36, 1);
    line-height: 21px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &.next {
      text-align: right;
    }
  }
  .rich_media_content {
    padding: 0 16px;
    visibility: visible !important;
    iframe {
      display: block;
      width: 80vw;
      height: calc(80vw / 16 * 9);
      margin: 0 auto;
    }
    audio {
      display: block;
      margin: 0 auto;
    }
  }
`;

const NewsDetail: NextFunctionComponent<INewsDetailProps> = ({ prev, current, next }) => (
  <Layout>
    {(visible, setVisible) => (
      <NewsWrapper>
        <Container>
          <Row style={{ marginTop: 86 }}>
            <Col className="by-breadcrumb">
              <Link href="/">首页</Link>
              <div className="next">{'>'}</div>
              <Link href="/news">新闻</Link>
              <div className="next">{'>'}</div>
              <Link>产品更新</Link>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col align="center" xl={24} lg={24} md={24} xs={24}>
              <h1 className="news-title">{current.title}</h1>
            </Col>
            <Col align="center" xl={24} lg={24} md={24} xs={24}>
              <div dangerouslySetInnerHTML={{ __html: current.htmlContent }} />
            </Col>
          </Row>
          <Visible md lg xl xxl xxxl>
            <Row>
              <Col xl={10} lg={10} md={10} xs={24}>
                {prev && (
                  <Link href={`/newsDetail/${prev.id}`}>
                    <a className="news-link prev">上一篇：{prev.title}</a>
                  </Link>
                )}
              </Col>
              <Col offset={{ xl: 4, lg: 4, md: 4 }} xl={10} lg={10} md={10} xs={24}>
                {next && (
                  <Link href={`/newsDetail/${next.id}`}>
                    <a className="news-link next">下一篇：{next.title}</a>
                  </Link>
                )}
              </Col>
            </Row>
          </Visible>
        </Container>
        <VoiceFooter
          title="百应，让奇迹正在发生，让改变从现在开始"
          mTitle1="百应，让奇迹正在发生"
          mTitle2="让改变从现在开始"
          btn="免费体验"
          img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
          onBtnClick={() => setVisible(true)}
        />
      </NewsWrapper>
    )}
  </Layout>
);

NewsDetail.getInitialProps = async ({ query: { id } }) =>
  // 测试环境接口崩了，暂时直接链到线上(线上接口允许跨域)
  await Axios.get(`https://www.byai.com/intro/news/detail/${id}`).then(({ data }) => data);

export default NewsDetail;
