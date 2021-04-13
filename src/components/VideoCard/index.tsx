import React from 'react';


import { Container, VideoChannelContainer, VideoChannelName, VideoChannelSubscriters, VideoTitle, VideoImage, VideoChannelImage } from './styles';

interface VideoProps {
  title: string
  image: string
  channel_subscribers: string
  channel_image: string
  channel_name: string
}



const VideoCard: React.FC<VideoProps> = ({ channel_image, title, image, channel_subscribers, channel_name }) => {
  return (
    <Container>
      <VideoImage src={image} />
      <VideoTitle>{title}</VideoTitle>
      <VideoChannelContainer>
        <VideoChannelImage src={channel_image} />
        <VideoChannelName>{channel_name}</VideoChannelName>
        <VideoChannelSubscriters>{channel_subscribers}</VideoChannelSubscriters>
      </VideoChannelContainer>
    </Container>
  )
}

export default VideoCard;