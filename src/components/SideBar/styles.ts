import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width: 20%;
  padding:0px 40px;

@media screen and (max-width:1000px) {
    width: 90%;
}
@media screen and (max-width:670px) {
    width: 80%;
}
@media screen and (max-width:550px) {
    width: 100%;
    padding:0;
}

`;

export const AutoPlayButtonContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  background-color:#21222e;
  padding:10px 20px;
  border-radius:8px;
`

export const AutoPlayButtonText = styled.span`
  color:#fff;
`

export const VideoContainer = styled.div`
  display:flex;
  flex-direction:column;
`