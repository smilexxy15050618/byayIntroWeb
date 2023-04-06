import styled from 'styled-components';
import { media } from '../../../../constants/style';

export const CaseListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -30px;

  width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  @media (max-width: 768px) {
    width: 90%;
  }

  /* background: #FFFFFF; */
  > * {
    margin-bottom: 30px;
  }

  ${media.phone`
    justify-content: center;
  `}
`;
