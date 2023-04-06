import styled from 'styled-components';
import { retailUrl } from '../../../lib/utils';

export const NewsWrapper = styled.div`
  a:hover{
    text-decoration: none;
  }
  img{
    width: 600px;
    height: 400px;
  }
  .news-title {
    margin-top: 95px;
    text-align: center;
    height: 64px;
    font-size: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2B2B2B;
    line-height: 64px;
  }
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    .title{
      margin: 48px 0px 32px;
      height: 32px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2B2B2B;
      line-height: 32px;
    }
    .left{
      &:hover{
        cursor: pointer;
      }
      position: relative;
      width: 600px;
      height: 400px;
      background-image: url("https://cdn.byai.com/static/intro/img/retail/retail-news-index-1.jpeg");
      .overlay{
        width: 600px;
        height: 95px;
        position: absolute;
        background: #2B2B2B;
        opacity: 0.5;
        bottom: 0px;
      }
      .description{
        padding: 15px 31px 24px 24px;
        position: absolute;
        bottom: 0px;
        width: 600px;
        height: 95px;
        .content-title{
          height: 32px;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 32px;
        }
        .content-description{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 545px;
          height: 24px;
          font-size: 14px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #FFFFFF;
          line-height: 24px;
        }
      }
    }
    .latest{
      margin-left: 40px;
      width: 600px;
      .news-items{
        height: 400px;
        .news-item{
          border-bottom: 1px solid #E8E8E8;
          &:hover{
            cursor: pointer;
          }
          .news-item-title{
            margin-top: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 540px;
            height: 32px;
            font-size: 18px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #F66600;
            line-height: 32px;
          }
          .news-item-description{
            padding-bottom: 26px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 545px;
            font-size: 14px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: #8F8F8F;
            line-height: 24px;
          }
        }
      }
    }
    }
  }
`;
const news = [
  {
    link: 'www.baidu.com',
    title: 'hello',
    description: 'this is a baidu',
  },
];
export interface INewsItem {
  link: string;
  title: string;
  description: string;
}
const NewsPanel = ({ data }) => {
  return (
    <NewsWrapper>
      <div className="news-title">新闻资讯</div>
      <div className="content">
        <div className="recommend">
          <div className="title">新闻资讯</div>
          <a href={retailUrl('/anews?id=631ef42d088942001018eab9')}>
            <div className="left">
              <div className="overlay"></div>
              <div className="description">
                <div className="content-title">会员争夺成零售行业核心战场，百应科技AI外呼拉高ROI天花板</div>
                <div className="content-description">
                  在零售行业数字化转型的阶段，会员的争夺是核心战场。据中国百货商业协会统计的 51 家 A 股上市零售企业 2021
                  年报数据显示：其中有出具【会员数据】的企业共计 29 家，2020 年为 22 家，2017~2019
                  皆在17家左右；可见自2020年开始，零售企业对会员的重规程度大幅提高。
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="latest">
          <div className="title">行业动态</div>
          <div className="news-items">
            {data.map(item => (
              <a href={item.link} className="news-item">
                <div className="news-item-title">{item.title}</div>
                <div className="news-item-description">{item.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </NewsWrapper>
  );
};
export default NewsPanel;
