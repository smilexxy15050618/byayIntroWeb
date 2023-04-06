import { FC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

interface IProps {
  name: string;
  pl?: string;
  pr?: string;
  bg?: string;
  btnBg?: string[];
  style?: any;
  onClick?: () => void;
}

const Wrapper = styled.div<{ pl?: string; pr?: string; bg?: string; btnBg?: string[] }>`
  text-align: center;
  background: ${props => props.bg || '#ffffff'};
  cursor: pointer;
  // padding: 56px 0 80px;
  .bottom-btn {
    display: inline-block;
    background: ${props => (props.btnBg && props.btnBg.length && props.btnBg[0]) || 'rgba(246, 102, 0, 1)'};
    color: #ffffff;
    border-radius: 4px;
    height: ${calWidthAndHeight(48)};
    line-height: ${calWidthAndHeight(48)};
    font-size: ${calWidthAndHeight(16)};
    font-weight: 400;
    padding-left: ${props => props.pl || '24px'};
    padding-right: ${props => props.pr || '24px'};
    &:hover {
      color: ${props => (props.btnBg && props.btnBg.length ? '#ffffff' : 'rgba(246, 102, 0, 1)')};
      background: ${props => (props.btnBg && props.btnBg.length && props.btnBg[1]) || 'rgba(246, 102, 0, 1)'};
      border: ${props => (props.btnBg && props.btnBg.length ? 'none' : '1px solid rgba(246, 102, 0, 1)')};
    }
  }
`;

const CommonBottomButton: FC<IProps> = ({ name, pl, pr, bg, btnBg, onClick }) => {
  return (
    <Wrapper pl={pl} pr={pr} bg={bg} btnBg={btnBg}>
      <div
        className="bottom-btn"
        onClick={() => {
          if (onClick) {
            onClick();
          } else {
            window.open(retailUrl('/form?formType=1'));
          }
        }}>
        {name + '>>'}
      </div>
    </Wrapper>
  );
};

export default CommonBottomButton;
