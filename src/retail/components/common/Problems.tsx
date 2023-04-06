import React, { FC } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

interface IContent {
  title: string[];
  desc: string;
}
interface IProps {
  contentList: IContent[];
  width?: string;
}

const Wrapper = styled.div<{ width: string }>`
  background: #ffffff;
  padding: 0 ${calWidthAndHeight(120)};
  display: flex;
  justify-content: space-between;
  text-align: left;

  .problem-item {
    width: ${props => (props.width ? calWidthAndHeight(+props.width) : calWidthAndHeight(282))};
    box-shadow: 0px ${calWidthAndHeight(4)} ${calWidthAndHeight(16)} 0px rgba(128, 131, 141, 0.1);
    border-radius: ${calWidthAndHeight(8)};
    padding: ${calWidthAndHeight(32)} ${calWidthAndHeight(16)} ${calWidthAndHeight(54)};
    line-height: ${calWidthAndHeight(24)};

    .problem-item-title {
      font-size: ${calWidthAndHeight(18)};
      font-weight: 600;
      color: #f66600;
    }

    .bottom-line {
      width: ${calWidthAndHeight(26)};
      height: ${calWidthAndHeight(4)};
      background: #f66600;
      margin: ${calWidthAndHeight(16)} 0 ${calWidthAndHeight(24)};
    }

    .problem-item-desc {
      font-size: ${calWidthAndHeight(14)};
      color: rgba(0, 0, 0, 0.65);
      line-height: ${calWidthAndHeight(24)};
    }

    &:hover {
      border: 1px solid #f66600;
      padding: ${calWidthAndHeight(32)} ${calWidthAndHeight(16)} ${calWidthAndHeight(52)};

      .problem-item-title {
        color: #f66600;
      }

      .problem-item-desc {
        color: #2b2b2b;
      }

      .bottom-line {
        background: #00c8bd;
      }
    }
  }
  @media (max-width: 768px) {
    background: #ffffff;
    display: block;
    padding: 0 ${calWidthAndHeight(24)};
    text-align: left;

    .problem-item {
      width: 100%;
      padding: ${calWidthAndHeight(16)} ${calWidthAndHeight(24)};

      .problem-item-title {
        font-size: ${calWidthAndHeight(16)};
        font-weight: 600;
        color: #2b2b2b;
      }

      .bottom-line {
        height: ${calWidthAndHeight(2)};
        background: #f66600;
        margin: ${calWidthAndHeight(8)} 0 ${calWidthAndHeight(8)};
      }

      &:hover {
        border: 1px solid #f66600;
        padding: ${calWidthAndHeight(16)} ${calWidthAndHeight(24)};
      }

      & + .problem-item {
        margin-top: ${calWidthAndHeight(16)};
      }
    }
  }
`;

const Problems: FC<IProps> = ({ contentList, width }) => {
  return (
    <Wrapper width={width}>
      {contentList.map(item => (
        <div className="problem-item">
          <Visible md lg xl xxl xxxl>
            {item.title.map(subItem => (
              <div className="problem-item-title ">{subItem}</div>
            ))}
          </Visible>
          <Visible xs sm>
            <div className="problem-item-title ">{`${item.title[0]} ${item.title[1]}`}</div>
          </Visible>

          <div className="bottom-line "></div>
          <div className="problem-item-desc ">{item.desc}</div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Problems;
