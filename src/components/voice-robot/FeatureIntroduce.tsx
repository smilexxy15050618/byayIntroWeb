import React, { CSSProperties, FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import ByContainer from '../common/ByContainer';
import { Hidden, Visible } from 'react-grid-system';
import { Horizon } from '../common/LinearLayout';
import ByDesc from '../common/ByDesc';
import Box from '../Box';
import { cssSwitch } from '../../lib/utils';
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
}

const Img = styled.img`
  /* flex: 1; */
  width: auto;
  height: auto;
  width: 45%;
  margin-bottom: 0px;
`;

const ImgArea = styled.div<{ imgFirst?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  ${props =>
    props.imgFirst &&
    css`
      right: 50%;
    `}
  ${props =>
    !props.imgFirst &&
    css`
      left: 50%;
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
  width: 45%;
  height: 100%;
  > div:nth-child(n + 2):nth-last-child(2) {
    margin-bottom: 28px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  line-height: 56px;
  margin-bottom: 40px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #262626;
  line-height: 28px;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    padding: 24px 12.5% 0;
  }
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
}) => {
  return (
    <>
      <Hidden xs sm>
        <ByContainer
          height={height}
          padding={padding || ['142px 0px', '']}
          maxWidthPc="1120px"
          background={background}
          className={className}>
          <Horizon reverse={imgFirst} justify="space-between">
            <TextArea>
              <Title>{title}</Title>
              <Text>{textOne}</Text>
              {textTwo && <Text>{textTwo}</Text>}
            </TextArea>
            <ImgArea imgFirst={imgFirst}>
              {pcImgs.map(({ className = [], ...rest }, i) => {
                const cls = [...commonClassName, ...className].join(' ');
                return <Box as="img" {...rest} className={cls} minWidth={rest.style.width} key={i} />;
              })}
            </ImgArea>
          </Horizon>
        </ByContainer>
      </Hidden>
      <Visible xs sm>
        <ByDesc
          title={title}
          padding={[, '40px 0 0']}
          background={background}
          needDecoration={false}
          className={className}>
          <Text className="text-one-xs">{textOne}</Text>
          {textTwo && <Text>{textTwo}</Text>}
          <ImgXs src={mobileImg} />
        </ByDesc>
      </Visible>
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
const FeatureIntroduce = styled(RawFeatureIntroduce)<IFeatureIntroduceProps>``;
export default FeatureIntroduce;
