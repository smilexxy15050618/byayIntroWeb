import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Box from '../../../src/components/Box';

const Wrap = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(47, 130, 248, 0.15);
  margin: 60px auto 0;
  width: 1140px;
  .solution-wrap {
    height: 470px;
    background: rgba(248, 249, 251, 1);
    .swiper-wrap {
      display: flex;
      width: 1140px;
      margin: 0 auto;
      .left-nav {
        .left-item {
          width: 300px;
          height: 135px;
          color: rgba(49, 83, 212, 1);
          background: #f9fbff;
          font-size: 24px;
          font-weight: 500;
          display: flex;
          align-items: center;
          padding-left: 100px;
          justify-content: left;
          transition: all 0.3s ease-in-out;
          cursor: default;
          svg {
            margin-right: 8px;
          }
          &::before {
            content: '';
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 0 0;
            border-color: transparent transparent transparent rgba(49, 83, 212, 1);
          }
        }
        .active {
          height: 200px;
          position: relative;
          color: #fff;
          background: rgba(49, 83, 212, 1);
          box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
          &::before {
            border-width: 16px 0 16px 16px;
          }
        }
      }
      .hover-right-desc {
        height: 470px;
        background-color: #fff;
        overflow: hidden;
        .right-item {
          padding-top: 50px;
          padding-right: 75px;
          padding-left: 75px;
          height: 470px;
        }
      }
    }
  }
`;

interface Message {
  title: string;
  content: ReactNode;
}

export interface ISceneItem {
  title: string;
  imgUrl: ReactNode;
  message: Message[];
}

const HoverChange: React.FC<{ dataSource: ISceneItem[] }> = ({ dataSource }) => {
  const [active, setActive] = useState(1);
  const changeActiveSolution = index => {
    const scroll = document.querySelector('.hover-right-desc');
    setActive(index);
    scroll.scrollTop = (index - 1) * 470;
  };
  return (
    <Wrap>
      <div className="solution-wrap">
        <div className="swiper-wrap">
          <div className="left-nav">
            {dataSource.map((item, index) => {
              return (
                <div
                  className={`left-item ${active === index + 1 && 'active'}`}
                  onMouseEnter={() => changeActiveSolution(index + 1)}>
                  {item.imgUrl}
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="hover-right-desc">
            {dataSource.map(item => (
              <div className="right-item">
                {item.message.map(message => {
                  return (
                    <Box mb={5}>
                      <Box as="h5" color="#364AD8" fontSize={20} mt={0} mb={2}>
                        {message.title}
                      </Box>
                      <Box lineHeight="30px" fontSize={18}>
                        {message.content}
                      </Box>
                    </Box>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default HoverChange;
