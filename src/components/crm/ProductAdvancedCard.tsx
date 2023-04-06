import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';
import Box from '../Box';

export const ProductCard = styled.div`
  width: 384px;
  height: 402px;
  padding: 50px 0 0;
  color: #333;
  background: #ffffff;
  box-shadow: 0px 12px 32px 0px rgba(3, 43, 183, 0.08);
  border-radius: 14px;
  transition: all 0.2s;
  margin-right: 24px;

  ${media.phone`
    margin-bottom: 24px;
  `}

  @media (min-width: 768px) {
    &:hover {
      transform: translateY(-22px);
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin: 0;
  }
`;
type IProps = {
  img: string;
  title: string;
  desc: (string | React.ReactNode)[];
};
const ProductAdvancedCard: FC<IProps> = ({ title, desc, img }) => {
  return (
    <ProductCard>
      <Box display="flex" alignItems="center" justifyContent="center">
        <img src={img} />
      </Box>
      <Box fontSize="24px" fontWeight="500" lineHeight="32px" mt={4} mb={3} textAlign="center" className="title">
        {title}
      </Box>
      <Box>
        {desc.map((it, idx) => (
          <Box
            fontSize="16px"
            lineHeight="24px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={idx === desc.length - 1 ? 0 : 2}
            className="desc"
            px="21px"
            textAlign="center"
            key={idx}>
            {it}
          </Box>
        ))}
      </Box>
    </ProductCard>
  );
};

export { ProductAdvancedCard };
