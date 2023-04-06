import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 25%;
  margin-bottom: 60px;
  box-sizing: border-box;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 30px auto;
  height: 100px;
`;

const Name = styled.div`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const FunctionalItem = ({ iconUrl, name }) => {
  return (
    <Wrapper>
      <Image src={iconUrl} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default FunctionalItem;
