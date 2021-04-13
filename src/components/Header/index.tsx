import React from 'react';
import { MicNoneOutlined, AddBoxOutlined, AppsOutlined, NotificationsNoneOutlined } from '@material-ui/icons'
import { Container, HeaderLeft, SearchInput, HeaderRight, HeaderRightItem, ProfileImage } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderLeft>
        <MicNoneOutlined id="icon" />
        <SearchInput placeholder="Type to search">
        </SearchInput>
      </HeaderLeft>
      <HeaderRight>
        <HeaderRightItem>
          <AddBoxOutlined />
        </HeaderRightItem>
        <HeaderRightItem>
          < AppsOutlined />
        </HeaderRightItem>
        <HeaderRightItem>
          <NotificationsNoneOutlined />
        </HeaderRightItem>
        <HeaderRightItem>
          <ProfileImage src="https://i.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ" />
        </HeaderRightItem>
      </HeaderRight>
    </Container>
  )
}

export default Header;