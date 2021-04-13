import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
max-width: 220px;
@media screen and (max-width: 500px) {
  max-width: none;

    }
`;

export const VideoImage = styled.img`
    width: 220px;
    height: 140px;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom:10px;
    @media screen and (max-width: 500px) {
      width: 100%;
      height: 200px;
    }
`
export const VideoTitle = styled.span`
  color:#fff;
  font-size:11pt;
`
export const VideoChannelContainer = styled.div`
  display:flex;
  align-items:center;
  margin-top:10px;
`
export const VideoChannelName = styled.span`
  color:#8a8e91;
  font-size:10pt;
  margin-left: 5px;
`
export const VideoChannelImage = styled.img`
  width:30px;
  border-radius:50%;

`
export const VideoChannelSubscriters = styled.span`
  color:#8a8e91;
  font-size:10pt;
  margin-left: 10px;
`