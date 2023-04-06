import { media } from '../../constants/style';
import styled from 'styled-components';
import { Col } from 'react-grid-system';
export const DescImgCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 507px;
    ${media.phone`
      width: 80vw;
      height: auto;
      margin-bottom: 0;
    `}
  }
`;
