import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../constants/style';
import { cssSwitch } from '../../lib/utils';
// 将bool转为对应的值或数组
function boolToValue<T>(bool: boolean | boolean[], trueVal: T, falseVal: T): T | T[] {
  if (bool === null || bool === undefined) return null;
  if (typeof bool !== 'boolean') {
    return bool.map(item => (item ? trueVal : falseVal));
  }
  return bool ? trueVal : falseVal;
}
const TitleDeco = styled.div<{ needDecoration: boolean | boolean[]; isLeft: boolean }>`
  ${props => cssSwitch(boolToValue(props.needDecoration, 'block', 'none'), 'display', ['block', 'block'], true)}
  width: 64px;
  height: 6px;
  background: ${props => `linear-gradient(${props.isLeft ? 90 : 270}deg, rgba(156, 187, 255, 0) 0%, #8aa2ff 100%)`};
  margin: 32px;
  ${props => (props.isLeft ? 'margin-left: 0' : 'margin-right: 0')};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  line-height: 68px;

  ${media.phone`
    font-size: 24px;
    line-height: 40px;
  `}
`;
const Desc = styled.div<{ descBottom: string | string[] }>`
  margin-top: 16px;
  ${props => cssSwitch(props.descBottom, 'margin-bottom', ['0px', '0px'], false)}
  color: rgba(0, 0, 0, 0.65);
  text-align: center;

  font-size: 28px;
  font-weight: 300;
  line-height: 46px;
  letter-spacing: 6px;

  @media (max-width: 768px) {
    margin-top: 0px;
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 2px;
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
  title: string | ReactNode;
  desc?: string;
  needDecoration?: boolean | boolean[];
  descBottom?: string | string[];
}

const RawByDescFontLight: FC<IProps> = ({ className, title, desc, children, needDecoration = true, descBottom }) => {
  return (
    <div className={className}>
      <Title>
        <TitleDeco needDecoration={needDecoration} isLeft={true} />
        {title}
        <TitleDeco needDecoration={needDecoration} isLeft={false} />
      </Title>
      {desc && (
        <Desc descBottom={descBottom} className="desc">
          {desc}
        </Desc>
      )}
      <>{children}</>
    </div>
  );
};

export interface IByDescFontLightProps extends IProps {
  padding?: string | string[];
  background?: string | string[];
}
/**
 * 样式支持传入数组['大屏样式','小屏样式']
 * @param children : 模块内容
 * @param title : 主标题
 * @param desc ?: 副标题(不存在时title无margin-bottom)
 * @param padding ?: 容器内边距 60px 20px xs: 40px 20px
 * @param background ?: 背景图片/颜色 Theme.Background
 * @param needDecoration ?: 需要左右横条装饰 true
 * @param descBottom ?: 副标题下边距 0px string
 */
const ByDescFontLight = styled(RawByDescFontLight)<IByDescFontLightProps>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${props => cssSwitch(props.background, 'background', ['transparent', 'transparent'])}
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-repeat: no-repeat;
  }
  ${props => cssSwitch(props.padding, 'padding', ['60px 20px', '40px 20px'], false)}
`;
export default ByDescFontLight;
