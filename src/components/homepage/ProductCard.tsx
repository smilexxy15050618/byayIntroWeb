import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

interface ProductItemProps {
  name: string;
  englishName: string;
  icon: string;
}

interface ProductCardProps {
  name: string;
  englishName: string;
  background: string;
  list: ProductItemProps[];
}

const ProductItemWrapper = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
  background: #fff;
  .iconfont {
    font-size: 34px;
    margin: 0 30px;
  }
  .content {
    flex: 1;
    font-size: 14px;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
    div {
      &:first-child {
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        line-height: 20px;
        font-weight: 300;
      }
      &:last-child {
        font-size: 16px;
        font-weight: 500;
        color: rgba(13, 25, 36, 1);
        line-height: 22px;
        font-weight: 400;
      }
    }
  }
`;

const ProductItem: React.SFC<ProductItemProps> = ({ name, englishName, icon }) => (
  <ProductItemWrapper>
    <div className={'iconfont ' + icon} />
    <div className="content">
      <div>{englishName}</div>
      <div>{name}</div>
    </div>
  </ProductItemWrapper>
);

const ProductCardWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  ${media.phone`
    margin: 16px auto 0 auto;
  `}
  &:first-child {
    margin-top: 0;
  }
  .header {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    span {
      &:first-child {
        font-size: 16px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      &:last-child {
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
      }
    }
  }
  .product-list {
    > div {
      border-bottom: 1px solid #eee;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const LargeProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px dashed rgba(49, 83, 212, 1);
  .header {
    height: 68px;
    display: flex;
    align-items: center;
    padding-left: 100px;
    background: rgba(49, 83, 212, 1);
    border-radius: 4px 4px 0px 0px;
    span {
      &:first-child {
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        margin-right: 18px;
      }
      &:last-child {
        font-size: 16px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
    }
  }
  .product-list {
    display: flex;
    padding: 40px 70px;
    justify-content: space-between;

    > div {
      width: 300px;
      box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
    }
  }
`;

export const ProductCard: React.SFC<ProductCardProps> = ({ name, englishName, background, list }) => (
  <ProductCardWrapper>
    <div className="header" style={{ backgroundImage: `url(${background})` }}>
      <span>{englishName}</span>
      <span>{name}</span>
    </div>
    <div className="product-list">
      {list.map(item => (
        <ProductItem key={item.name} {...item} />
      ))}
    </div>
  </ProductCardWrapper>
);

export const LargeProductCard: React.SFC<ProductCardProps> = ({ name, englishName, background, list }) => (
  <LargeProductCardWrapper>
    <div className="header">
      <span>{name}</span>
      <span>{englishName}</span>
    </div>
    <div className="product-list">
      {list.map(item => (
        <ProductItem key={item.name} {...item} />
      ))}
    </div>
  </LargeProductCardWrapper>
);
