import React, { CSSProperties, FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import ByContainer from '../common/ByContainer';
import { Horizon } from '../common/LinearLayout';
import Box from '../Box';
interface DynamicImg {
  src: string;
  style: CSSProperties;
  className?: string[];
  background?: string | string[]; // [pcBg, mobileBg]
}
interface IProps {
  className?: string;
  children?: ReactNode;
  pcImgs: DynamicImg[];
  mobileImg: string;
  title: string | ReactNode;
  textOne: string;
  textTwo?: string;
  imgFirst?: boolean;
  padding?: string | string[];
  background?: string | string[];
  height?: string;
  id?: string;
}

const Img = styled.img`
  /* flex: 1; */
  width: auto;
  height: auto;
  width: 45%;
  margin-bottom: 0px;
`;

const ImgArea = styled.div < { imgFirst?: boolean } > `
  position: absolute;
  top: 0;
  bottom: 0;
  width: 680px;
  ${props =>
    props.imgFirst &&
    css`
      right: 520px;
    `}
  ${props =>
    !props.imgFirst &&
    css`
      left: 520px;
    `}
  img {
    position: absolute;
    margin: 0;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: none;
  width: 480px;
  height: 100%;
  > div:nth-child(n + 2):nth-last-child(2) {
    margin-top: 22px;
    margin-bottom: 6px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 56px;
  color: rgba(0, 0, 0, 0.8);
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.8);
`;

const TextTwo = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
`;

const ImgXs = styled.img`
  width: 100%;
  margin: 16px 0 0;
`;

const commonClassName = ['animate__animated', 'wow', 'animate__ahead_500ms'];

const RawFeatureIntroduce: FC<IProps> = ({
  className,
  pcImgs,
  mobileImg,
  title,
  textOne,
  textTwo,
  imgFirst = false,
  padding,
  background,
  height,
  id
}) => {
  return (
    <>
    <ByContainer
      height={height}
      padding={padding || ['142px 0px', '']}
      maxWidthPc="1200px"
      background={background}
      className={className}>
      <Horizon reverse={imgFirst} justify="space-between" style={{ position: 'relative' }}>
        <TextArea>
          <Title>{title}</Title>
          <Text>{textOne}</Text>
          {textTwo && <TextTwo>{textTwo}</TextTwo>}
        </TextArea>
        <ImgArea imgFirst={imgFirst}>
          {pcImgs.map(({ className = [], ...rest }, i) => {
            const cls = [...commonClassName, ...className].join(' ');
            return <Box as="img" {...rest} className={cls} minWidth={rest.style.width} key={i} />;
          })}
        </ImgArea>
      </Horizon>
    </ByContainer>
    </>
  );
};

export type IFeatureIntroduceProps = IProps;
/**
 * @param img 图片 string|jsx
 * @param title 标题
 * @param textOne 第一段文字
 * @param textTwo 第二段文字
 * @param imgFirst 图片是否在前
 * @param background 背景图/颜色
 */
const FeatureIntroduce = styled(RawFeatureIntroduce) < IFeatureIntroduceProps > ``;
export default FeatureIntroduce;
