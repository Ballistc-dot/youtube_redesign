import React from 'react';
import TabBar from '../../components/TabBar'
import Header from '../../components/Header'
import MainContent from '../../components/MainContent'
import SideBar from '../../components/SideBar'
import { Container, Main, Section } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <TabBar />
      <Main>
        <Header />
        <Section>
          <MainContent />
          <SideBar />
        </Section>
      </Main>
    </Container>
  )
}

export default Home;