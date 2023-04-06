import styled from 'styled-components';

export const DetailMobileTemplateWrapper = styled.div`
  .top-content {
    width: 100%;
    position: relative;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TopBgImgWrapper = styled.div<{ bgImg: string; titleLength: number }>`
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 305px;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  text-align: center;
  padding-top: ${props => (props.titleLength === 2 ? '92px' : '74px')};
  span {
    display: block;
  }
`;
export const BrandIntroductionWrapper = styled.div`
  background: #ffffff;
  width: 100%;
  height: 168px;
  display: flex;
  justify-content: center;
  .brand-Introduction-content {
    background: #ffffff;
    position: absolute;
    bottom: 0;
    height: 196px;
    width: 343px;
    box-shadow: 0px 4px 16px 0px rgba(128, 131, 141, 0.1);
    border-radius: 8px;
    padding: 16px;
    .brand-intro-title {
      height: 28px;
      font-size: 20px;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 28px;
      margin-bottom: 8px;
    }
    .brand-intro-desc {
      font-size: 14px;
      font-weight: 300;
      color: rgba(43, 43, 43, 0.85);
      line-height: 24px;
    }
  }
`;
export const TargetWrapper = styled.div`
  padding: 40px 0;
  background: #ffffff;
  text-align: center;
  .target-title {
    height: 28px;
    font-size: 20px;
    font-weight: 500;
    color: #2b2b2b;
    line-height: 28px;
    margin-bottom: 32px;
  }
  .target-card-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .target-card-item {
      width: 338px;
      height: 161px;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #f66600;
      padding: 24px 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
      .target-card-item-title {
        display: flex;
        .target-card-item-title-icon {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
        .target-card-item-title-font {
          height: 20px;
          font-size: 16px;
          font-weight: 600;
          color: #2b2b2b;
          line-height: 20px;
        }
      }
      .green-block {
        width: 26px;
        height: 4px;
        background: #00c8bd;
        margin: 16px 0;
      }
      .target-card-item-desc {
        font-size: 18px;
        font-weight: 500;
        color: #f66600;
        line-height: 28px;
        span {
          display: block;
        }
      }
    }
  }
`;
export const MethodDisplayWrapper = styled.div`
  text-align: center;
  background: #f9fbfc;
  padding: 40px 0;
  .method-display-title {
    height: 28px;
    font-size: 20px;
    font-weight: 500;
    color: #2b2b2b;
    line-height: 28px;
    margin-bottom: 34px;
  }
  .method-display-card-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    .method-display-card-item {
      &:last-child {
        margin-bottom: 0;
      }
      text-align: left;
      padding: 40px 14px 34px 10px;
      width: 348px;
      background: #ffffff;
      box-shadow: 0px 4px 16px 0px rgba(128, 131, 141, 0.1);
      border-radius: 10px;
      margin-bottom: 16px;
      position: relative;
      .method-display-card-bg {
        position: absolute;
        width: 97px;
        height: 88px;
        top: 4px;
        left: 8px;
      }
      .method-display-card-item-title {
        height: 24px;
        font-size: 16px;
        font-weight: 600;
        color: #f66600;
        line-height: 24px;
        margin-bottom: 24px;
      }
      .method-display-card-item-descList {
        .method-display-card-item-desc {
          display: flex;
          margin-bottom: 16px;
          &:last-child {
            margin-bottom: 0;
          }
          .method-display-card-item-desc-font {
            font-size: 14px;
            font-weight: 400;
            color: #2b2b2b;
            line-height: 20px;
            width: 296px;
          }
        }
      }
    }
  }
`;
export const FinalEffectWrapper = styled.div`
  background: #ffffff;
  padding-top: 60px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .final-effect-title {
    text-align: center;
    height: 28px;
    font-size: 20px;
    font-weight: 500;
    color: #2b2b2b;
    line-height: 28px;
  }
  .final-effect-img {
    width: 375px;
    height: 208px;
    background: #ffffff;
  }
  .final-effect-desc {
    width: 343px;
    background: #ffffff;
    padding: 24px 22px;
    box-shadow: 0px 5px 31px 0px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    .final-effect-desc-count-list {
      display: flex;
      justify-content: space-around;
      .final-effect-desc-count-item {
        text-align: center;
        .final-effect-desc-count-item-title {
          font-size: 14px;
          font-weight: 400;
          color: #2b2b2b;
          line-height: 21px;
          padding-bottom: 8px;
        }
        .final-effect-desc-count-item-desc {
          .final-effect-desc-count-item-desc-count {
            font-size: 24px;
            font-weight: 500;
            color: #f66600;
            line-height: 24px;
          }
        }
      }
    }
    .final-effect-desc-font-list {
      padding-top: 24px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(43, 43, 43, 0.65);
      line-height: 20px;
      span {
        display: block;
        text-align: center;
      }
    }
  }
`;
export const CustomerTestimonialsWrapper = styled.div`
  background: #f9fbfc;
  width: 100%;
  padding-top: 32px;
  display: flex;
  justify-content: center;
  .customer-testimonials-content {
    width: 343px;
    background: #ffffff;
    box-shadow: 0px 5px 31px 0px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    position: relative;
    margin-bottom: 40px;
    padding: 32px 24px;
    .customer-testimonials-img {
      position: absolute;
      top: 32px;
      left: 16px;
      background-image: url('https://cdn.byai.com/static/oss-script/4aff7a13aff4c66e2254cfb686ceb287.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 98px;
      height: 75px;
    }
    .customer-testimonials-title {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 28px;
      margin-bottom: 24px;
    }
    .customer-testimonials-desc {
      width: 295px;
      font-size: 14px;
      font-weight: 300;
      color: #2b2b2b;
      line-height: 25px;
    }
  }
`;

export const CircleBox = styled.div<{ bgImg: string }>`
  width: 18px;
  height: 18px;
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: contain;
  margin-right: 8px;
`;
