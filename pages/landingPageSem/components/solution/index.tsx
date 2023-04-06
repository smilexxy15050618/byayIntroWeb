import React from 'react';
import * as SC from './styled';
const Solution = () => {
  return (
    <SC.SolutionContainer>
      <div className="content">
        <div className="left">
          <div className="desc">
            <div>百应电商AI</div>
            <div>私域增长解决方案</div>
          </div>
          <div className="cardList">
            <div className="card">
              <span className="title">私域加粉必备工具</span>
              <span className="card-desc">15%-38%加粉转化率</span>
            </div>
            <div className="card-line" />
            <div className="card">
              <span className="title">超短周期跑赢ROI</span>
              <span className="card-desc">精细化运营为转化提效</span>
            </div>
            <div className="card-line" />
            <div className="card">
              <span className="title">上千家TOP品牌都在用</span>
              <span className="card-desc">构建百万级私域流量池</span>
            </div>
          </div>
          <a className="button" href="/form?formType=1&origin=ecommerce">
            立即免费体验
          </a>
        </div>
        <div className="right"></div>
      </div>
    </SC.SolutionContainer>
  );
};

export default Solution;
