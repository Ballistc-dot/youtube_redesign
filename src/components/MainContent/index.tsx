import React from 'react';
import { CreateNewFolderOutlined, FavoriteBorderOutlined } from '@material-ui/icons'
import {
  Container,
  VideoTitle,
  VideoDetails,
  VideoViews,
  VideoDetailsLeft,
  VideoDetailsRigth,
  VideoDetailsRigthText,
  VideoLikeText,
  VideoButtonContainer,
  VideoContainer,
  ChannelDetails,
  ChannelDetailsHeader,
  ChannelImage,
  ChannelName,
  ChannelSubscribersContainer,
  ChannelSubscribers,
  SubscribeButton,
  Profile,
  SubscribeButtonText,
  VideoDescription
} from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <VideoContainer>
        <iframe id="video" width="700" height="430" src="https://www.youtube.com/embed/3nocNDQOWQQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <VideoDetails>
          <VideoDetailsLeft>
            <VideoTitle>AirwaveMusicTV: End Of The Year Mix 2020</VideoTitle>
            <VideoViews>949.710 views</VideoViews>
          </VideoDetailsLeft>
          <VideoDetailsRigth>
            <VideoButtonContainer>
              <CreateNewFolderOutlined />
              <VideoDetailsRigthText>Save</VideoDetailsRigthText>
            </VideoButtonContainer>
            <VideoButtonContainer>
              <FavoriteBorderOutlined id="logo" />
              <VideoLikeText>11k</VideoLikeText>
            </VideoButtonContainer>
          </VideoDetailsRigth>
        </VideoDetails>
      </VideoContainer>
      <ChannelDetails>
        <ChannelDetailsHeader>
          <Profile>
            <ChannelImage src="https://i.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ" />
            <ChannelSubscribersContainer>
              <ChannelName>Google</ChannelName>
              <ChannelSubscribers>999.290 subscribers</ChannelSubscribers>
            </ChannelSubscribersContainer>

          </Profile>
          <SubscribeButton><SubscribeButtonText>Subscribe</SubscribeButtonText></SubscribeButton>
        </ChannelDetailsHeader>
        <VideoDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </VideoDescription>
      </ChannelDetails>
    </Container>
  )
}

export default MainContent;