import { media } from '../../../src/constants/style';

import styled from 'styled-components';
import { Col } from 'react-grid-system';

const DescImgColNew = styled(Col)`
  display: flex;
  align-items: center;
  img {
    width: 30vw;
    margin-left: -30px;
    height: 507px;
    width: 580px;
    ${media.phone`
      width: 90vw;
      height: auto;
      margin-bottom: 20px;
      margin-top: 20px;
      margin-left: 0px;
      h3 {
        font-size: 20px;
      }
    `}
  }
`;

export default DescImgColNew;
