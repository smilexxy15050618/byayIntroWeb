import * as React from 'react';
import styled from 'styled-components';

const SOLUTION_CARD_BG = 'https://cdn.byai.com/static/official-website/service/shouji-kuai-left.png';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  > div {
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
    transition: all 0.3s ease-in-out;
  }
  .desc {
    padding-top: 30px;
    padding: 30px 50px 10px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    border-color: #3153d4;
    background-image: url(${SOLUTION_CARD_BG});
    background-color: #3153d4;
    background-repeat: repeat;
    background-size: cover;
    transition: all 0.3s ease-in-out;
    position: relative;
    h3 {
      margin-top: 20px;
      font-size: 22px;
      font-weight: 300;
      color: #ffffff;
    }
  }
`;

const SupportDescList = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 10px;
`;

const SupportDescItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
  margin-bottom: 15px;
  font-weight: 200;
  .iconfont {
    font-size: 16px;
    margin-right: 15px;
    color: #54c4c5;
  }
`;

interface ISupportMDProps {
  index: number;
  coverImage: string;
  title: string;
  descList: string[];
}

const SupportMD: React.SFC<ISupportMDProps> = ({ index, coverImage, title, descList }) => (
  <Wrap>
    <div>
      <div className="desc">
        <h3>{title}</h3>
        <SupportDescList>
          {descList.map(item => (
            <SupportDescItem key={item}>
              <i className="iconfont iconyuanquan"></i>
              <span>{item}</span>
            </SupportDescItem>
          ))}
        </SupportDescList>
      </div>
    </div>
  </Wrap>
);

export default SupportMD;
