import { media } from '../../constants/style';
import styled from 'styled-components';
import { Col } from 'react-grid-system';

const DescImgColNew = styled(Col)`
  display: flex;
  align-items: center;
  img {
    width: 30vw;
    margin-left: -30px;
    ${media.phone`
      width: 90vw;
      margin-bottom: 20px;
      margin-top: 20px;
      margin-left: 0px;
    `}
  }
`;

export default DescImgColNew;
