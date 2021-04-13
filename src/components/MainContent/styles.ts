import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width: 80%;
  max-width: 1080px;
  @media screen and (max-width: 992px) {
    width: 100%;
}
    #video{
      border:none;
      border-radius:10px;
    }
`;

export const VideoDetails = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`
export const VideoDetailsLeft = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:18px;
`
export const VideoDetailsRigth = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  color:#fff;
  font-size:10pt;
  justify-content:space-around;
  #logo{
    color:#a02228;
  } 
`

export const VideoTitle = styled.span`
  color:#fff;
`
export const VideoButtonContainer = styled.div`
  display: flex;
  align-items:center;
  padding: 10px 10px;
`
export const VideoViews = styled.span`
  color: #6f7677;
  font-size:10pt;
  margin-top:8px;
`
export const VideoDetailsRigthText = styled.span`
margin-left:5px;

`

export const VideoLikeText = styled.span`
  color:#a02228;
  margin-left:5px;
`
export const VideoContainer = styled.div`
  #video{
    width: 100%;
    min-height: 440px;
    max-width: 1080px;
  }
  @media screen and (max-width: 500px) {
   
    #video{
      height:auto;
      min-height:200px;
  }
}

`

export const ChannelDetails = styled.div`
  margin-top:40px;
  border-top:.5px solid #263135;
  padding:20px 5px;
  
`
export const ChannelDetailsHeader = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  margin-bottom:20px;
`
export const ChannelName = styled.span`
  color:#fff;
  font-weight:bold;
`
export const ChannelImage = styled.img`
  width:40px;
  border-radius:8px;
`
export const ChannelSubscribersContainer = styled.span`
  display:flex;
  flex-direction:column;
  margin-left:10px;
  justify-content:space-between;
`
export const ChannelSubscribers = styled.span`
  color:#74777d;
  font-size:10pt;
`

export const SubscribeButton = styled.button`
  background:none;
  border: 2px solid #9a2128;
  border-radius:8px;
  padding:10px 10px;
  cursor: pointer;
`
export const SubscribeButtonText = styled.span`
  font-weight:bold;
  color:#fff;
`
export const VideoDescription = styled.span`
  color:#fff;
  font-size:10pt;
`

export const Profile = styled.div`
  display:flex;
  flex-direction:row;
`