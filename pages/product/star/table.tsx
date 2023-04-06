import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: flex; */
`;

const Tier = styled.div`
  display: flex;
`;

const TierTitle = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-image: src('https://cdn.byai.com/static/intro/img/star/table.png');
  background-position: bottom;
  background-color: white;
  padding: 0 18px;
`;

const TierItemTitle = styled.div`
  text-align: center;
`;

const Label = styled.div<{ width?: string }>`
  width: ${props => (props.width ? props.width : '90px')};
  background-color: #e2eafc;
  color: #3153d4;
  font-size: 12px;
  text-align: center;
`;

const TierItem = styled.div`
  border: 1px solid rgba(217, 217, 217, 0.5);
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TierItemWrapper = styled.div<{ width?: string }>`
  width: ${props => (props.width ? props.width : '90px')};
`;

const TierContent = styled.div`
  display: flex;
  flex: 1;
`;

export const SolutionTable = () => {
  return <Wrapper></Wrapper>;
};
