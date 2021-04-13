import { Switch } from '@material-ui/core';
import React from 'react';

import { AutoPlayButtonContainer, AutoPlayButtonText, Container, VideoContainer } from './styles';
import VideoCard from '../VideoCard'

const SideBar: React.FC = () => {
  return (
    <Container>
      <AutoPlayButtonContainer>
        <AutoPlayButtonText>Autoplay</AutoPlayButtonText>
        <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
      </AutoPlayButtonContainer>
      <VideoContainer>
        <VideoCard
          title="The Cranberries - Zombie (Lost Sky Remix)"
          channel_image="https://yt3.ggpht.com/ytc/AAUvwngKiigHWdJuS6T8StECwcJDCU1RCi_7k9KWWiZRww=s68-c-k-c0x00ffffff-no-rj"
          channel_subscribers="10m"

          image="https://i.ytimg.com/an_webp/9MMZetYAJTw/mqdefault_6s.webp?du=3000&sqp=CIyT0YMG&rs=AOn4CLCHqXGE6Vhn4mwwTmvQO1tAojiD2Q"
          channel_name="trap nation"
        />
        <VideoCard
          title="The Cranberries - Zombie (Lost Sky Remix)"
          channel_image="https://i.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ"
          channel_subscribers="10m"

          image="https://i.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ"
          channel_name="trap nation"
        />
        <VideoCard
          title="The Cranberries - Zombie (Lost Sky Remix)"
          channel_image="https://i.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ"
          channel_subscribers="10m"

          image="https://i.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ"
          channel_name="trap nation"
        />

      </VideoContainer>
    </Container>
  )
}

export default SideBar;