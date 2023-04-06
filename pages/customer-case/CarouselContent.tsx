import React from 'react';
import Box from '../../src/components/Box';
import { LogoWrapper, PeopleList, PersonName, PersonDesc, Text, Content, PersonIcon } from './styled';

const indexMap = [
  [2, 1],
  [0, 2],
  [1, 0],
];
export const CarouseLContent = ({ data, dataList, index, onClick }) => {
  const currIndexArr = indexMap[index];
  return (
    <Content>
      <LogoWrapper>
        <img src={data.logoUrl} />
      </LogoWrapper>
      <Text>{data.content}</Text>
      <Box mt="auto" mb="32px" display="flex" flexDirection="column" alignItems="center">
        <PeopleList>
          <PersonIcon src={dataList[currIndexArr[0]].personAvatarSrc} onClick={e => onClick(e, 1)} />
          <PersonIcon style={{ opacity: 1, cursor: 'default' }} src={dataList[index].personAvatarSrc} />
          <PersonIcon src={dataList[currIndexArr[1]].personAvatarSrc} onClick={e => onClick(e, -1)} />
        </PeopleList>
        <PersonName>{data.personName}</PersonName>
        <PersonDesc>{data.personDesc}</PersonDesc>
      </Box>
    </Content>
  );
};
