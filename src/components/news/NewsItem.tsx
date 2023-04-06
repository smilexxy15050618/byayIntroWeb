import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import * as dayjs from 'dayjs';
import { NewsType } from '../../../pages/news';
import Link from 'next/link';
import { media } from '../../constants/style';

const NewsItemContainer = styled.div`
  padding: 10px 0;
  display: flex;
  width: 100%;
  cursor: pointer;
  ${media.phone`
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
  `}
`;

const NewsItemCover = styled.div<{ backgroundImage?: string }>`
  flex-shrink: 0;
  width: 170px;
  ${media.phone`
    width: 90vw;
    height: calc(90vw / 4 * 3);
    margin-top: 20px;
  `}
  height: 170px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #eaeaea;
`;

const NewsItemIntro = styled.div`
  margin-left: 60px;
  ${media.phone`
    margin-left: 0px;
    width: 90%;
  `}
  h4 {
    text-align: justify;
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: 500;
    color: rgba(13, 25, 36, 1);
    line-height: 25px;
  }
  h6 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 21px;
  }
`;

export interface INewsItem {
  id: number;
  coverImgUrl?: string;
  title?: string;
  type: number;
  createdAt?: string;
  description?: string;
  originalLink: string;
  originalName: string;
}

interface INewsItemProps {
  news: INewsItem;
}

const NewsItem: React.SFC<INewsItemProps> = ({
  news: { id, coverImgUrl, title, type, createdAt, description, originalLink, originalName },
}) => (
  <Link href={type !== NewsType.媒体报道 ? `/newsDetail/${id}` : originalLink}>
    <a
      style={{ textDecoration: 'none' }}
      href={type !== NewsType.媒体报道 ? `/newsDetail/${id}` : originalLink}
      target="_blank"
      rel="noreferrer">
      <NewsItemContainer className="news-item">
        <NewsItemCover backgroundImage={coverImgUrl} />
        <NewsItemIntro>
          <h4>{title}</h4>
          <h6>
            {NewsType.媒体报道 === type ? originalName : NewsType[type]} | {dayjs(createdAt).format('YYYY年MM月DD日')}
          </h6>
          <p>{description}</p>
        </NewsItemIntro>
      </NewsItemContainer>
    </a>
  </Link>
);

export default NewsItem;
