import styled from 'styled-components';
export interface ITriangleProps {
  collapse: boolean;
}
const TriangleIcon = styled.div<ITriangleProps>`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 5px 0 5px;
  color: black;
  border-radius: 1px;
  border-color: currentColor transparent transparent transparent;
  transform-origin: 50% 50% 0;
  transform: rotate(${props => (props.collapse ? '180deg' : '0')});
  position: relative;
  :hover {
    /* border-color: #000000  transparent transparent transparent; */
  }
  transition: all 0.3s ease-in-out;
`;

export default TriangleIcon;
