import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row, ScreenClassRender } from 'react-grid-system';
import styled from 'styled-components';

const QUOTE = '//cdn.byai.com/static/official-website/home/yinhao.png';

const CommentBannerWrapper = styled.div`
  margin-top: 30px;
  .title {
    width: fit-content;
    font-size: 24px;
    font-weight: 500;
    color: rgba(162, 177, 190, 1);
    line-height: 33px;
    padding-left: 25px;
    position: relative;
    margin-bottom: 60px;
    img {
      position: absolute;
      right: 0;
      top: -10px;
    }
  }
  .comment-item {
    margin-bottom: 60px;
    min-height: 200px;
    .comment {
      box-sizing: border-box;
      min-height: 396px;
      height: 100%;
      width: 90%;
      margin: 0 auto;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
      border-radius: 5px;
      padding: 40px;
      p {
        font-size: 14px;
        font-weight: 400;
        color: rgba(13, 25, 36, 1);
        line-height: 32px;
        text-align: justify;
        position: relative;
        padding-left: 10px;
        margin-bottom: 0;
        &:before {
          position: absolute;
          content: '“';
          top: 2px;
          left: 0px;
          font-size: 18px;
          font-family: Helvetica;
          color: rgba(50, 65, 72, 1);
          line-height: 32px;
        }
      }
    }
  }
  .banner-control {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    .iconfont {
      cursor: pointer;
      width: 50px;
      height: 50px;
      box-shadow: 0px 13px 20px 0px rgba(49, 83, 212, 0.15);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #fff;
      color: #666;
      font-size: 22px;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #fff;
        background: rgba(49, 83, 212, 1);
      }
      &:first-child {
        margin-right: 20px;
      }
    }
  }
`;

const COMMENT_LIST = [
  // {
  //   logo:
  //     '//cdn.byai.com/static/official-website/company-logo/gongshangju2copy.png',
  //   content:
  //     '以百应AI语音交互技术为基础，我们搭建了自己的咨询服务中心，渠道服务能力不断提升。目前，群众办事效率显著提升，“互联网+政务”创新模式得以印证，真正实现了“有温度的政务咨询”。'
  // },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/zhongguoliantong2copy.png',
    content: '百应是我们在人工智能领域优质的供应商，其自主研发的AI机器人非常切合我们客服接待，老客户活动通知等场景。',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/alibaba2copy.png',
    content:
      '针对广大电商卖家，百应提供了高效率的产品服务和技术能力，帮助卖家实现短期密集通知会员的需求，提高销售业绩。我们跟百应的合作是认真的！',
  },
  {
    logo: '//cdn.byai.com/static/intro/img/comment/58tongcheng.png',
    content:
      '我们经过多轮测试对比最终选择了百应科技，百应凭借高可用技术方案和高效的服务能力，从市场上20多家同类企业中脱颖而出。在合作过程中，百应产品帮助我们大幅度的提高营销效率，提升了我们整体服务水平。相信未来几年，百应必将发展得越来越好！',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1572590041527/zhongguoyinhang1%20copy.png',
    content: '选择百应是因为对其产品和技术的认可，目前和百应的合作也非常满意，相信未来双方会有更多的业务合作',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/jinritoutiao2copy.png',
    content:
      '今日头条旗下懂车帝、gogokid通过百应的人工智能技术，帮助我们进行注册线索的回访邀约，在保证服务质量的同时降低了运营成本，期待未来有更多的合作。',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/zhilianzhaopin2copy.png',
    content:
      '借助百应AI智能电话机器人的高效运作，自合作以来，智联举办的招聘专场会数量比合作前翻了不止一翻，通知到位的候选人也远远多于以往，工作效率不降反升。期待跟百应AI有更深入的合作！',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/qichezhijia2copy.png',
    content:
      '作为中国领先的汽车互联网平台，我们想为客户提供更精准的线索服务。而百应凭借着过硬的产品能力、全面专业的客户服务体系，以及精益求精的态度，最终成为我们的AI外呼项目合作伙伴！期待合作共赢！',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/dasouche2-0626copy.png',
    content:
      '大搜车与百应深度的战略合作，提供全方位的运营工具，帮助车商提高销售转化率。拥有阿里云两个MVP的百应团队，为我们提供了强大的产品支持及售后服务保障。不愧是一家踏踏实实做事，认认真真完成梦想的公司！',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/21shijibudongchan2copy.png',
    content:
      '百应是实力雄厚、值得信赖的合作伙伴。有了百应在人工智能和大数据方面的支持，我们能够为更多客户和经纪人提供更高效、智能的决策建议。相信双方必将建立起稳固持久的战略合作伙伴关系，发展越来越好。',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/xindongfang2copy.png',
    content:
      '新东方是国内领先的教育机构和平台，借助百应的人工智能技术，很好的满足了我们定时自动提醒家长和孩子准时上课的需求，节约了企业成本，提升了新东方的服务体验。',
  },
  {
    logo: '//cdn.byai.com/static/official-website/company-logo/xueersi2copy.png',
    content:
      '随着业务量不断增长，我们的渠道营销压力不断增加。最终，我们选择用百应AI外呼系统代替传统方式，节约了人力与时间成本，邀约转化率显著提升。未来，我们希望与百应在AI领域有更深入的合作！',
  },
];

export const CommentBanner = () => {
  const [bannerIndex, setBannerIndex] = React.useState(0);
  const computedList = COMMENT_LIST.reduce((prev, curr, currIndex) => {
    if (currIndex % 3 === 0) {
      return [...prev, [curr]];
    } else {
      prev[prev.length - 1].push(curr);
      return prev;
    }
  }, []);
  return (
    <ScreenClassRender
      render={size => (
        <CommentBannerWrapper>
          <Container>
            <Row>
              <Col className="title-wrapper" lg={24}>
                <div className="title">
                  <p>WHAT DO THESE ENTERPRISES</p>
                  <p>SAY ABOUT BYAI</p>
                  <img src={QUOTE} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
          <Carousel
            onSelect={index => setBannerIndex(index)}
            activeIndex={bannerIndex}
            indicators={false}
            controls={false}
            style={{ width: '100%' }}>
            {(size === 'xs' ? COMMENT_LIST.map(item => [item]) : computedList).map((item, index) => (
              <CarouselItem key={index}>
                <Container>
                  <Row>
                    {item.map(comment => (
                      <Col key={comment.content} lg={8} className="comment-item">
                        <div className="comment">
                          <img src={comment.logo} alt="" />
                          <p>{comment.content}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </CarouselItem>
            ))}
          </Carousel>
          <div className="banner-control">
            <i
              onClick={() => setBannerIndex(bannerIndex === 0 ? computedList.length - 1 : bannerIndex - 1)}
              className="iconfont iconzuo-dajiantou"
            />
            <i
              onClick={() => setBannerIndex(bannerIndex === computedList.length - 1 ? 0 : bannerIndex + 1)}
              className="iconfont iconyou-dajiantou"
            />
          </div>
        </CommentBannerWrapper>
      )}
    />
  );
};
