import { LabelColor } from './components/case-box';

export enum CaseLabelColor {
  BLUE,
  YELLOW,
  RED,
  GREEN,
  BLUE_GREEN,
}

export const caseLabelColorMapper: Record<CaseLabelColor, LabelColor> = {
  [CaseLabelColor.BLUE]: {
    color: '#1890FF',
    bgColor: '#E6F7FF',
  },
  [CaseLabelColor.YELLOW]: {
    color: '#FAAD14',
    bgColor: '#FFFBE6',
  },
  [CaseLabelColor.RED]: {
    color: '#FF4D4F',
    bgColor: '#FFF1F0',
  },
  [CaseLabelColor.GREEN]: {
    color: '#52C41A',
    bgColor: '#F6FFED',
  },
  [CaseLabelColor.BLUE_GREEN]: {
    color: '#00C8BD',
    bgColor: '#E0FFF3',
  },
};

export enum LabelText {
  education = '教 育',
  manufacturing = '制造业',
  finance = '金 融',
  affairs = '政 务',
  eCommerce = '电 商',
}

export const labelTextColorMapper: Record<LabelText, CaseLabelColor> = {
  [LabelText.education]: CaseLabelColor.BLUE,
  [LabelText.manufacturing]: CaseLabelColor.GREEN,
  [LabelText.finance]: CaseLabelColor.YELLOW,
  [LabelText.affairs]: CaseLabelColor.RED,
  [LabelText.eCommerce]: CaseLabelColor.BLUE_GREEN,
};

/**
 * 获取标签文本对应的颜色
 * @param label 标签文本
 */
export const getColorForLabelText = (label: LabelText) => caseLabelColorMapper[labelTextColorMapper[label]];
