import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;

`;
export const Main = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`
export const Section = styled.div`
  display:flex;
  flex-direction:row;
  padding:40px 40px;
  @media screen and (max-width: 1000px) {
  flex-direction:column;
  padding:10px 10px;
}
`