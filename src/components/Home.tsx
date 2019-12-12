import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import React, { Fragment } from 'react';

import { Content, Container, BaseButton } from '../styles';
import bgHome from '../assets/photos/start page.jpg';
import logo from '../assets/svg/EMURGO-logo.svg';

const styles = {
  backgroundImage: `url("${bgHome}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
  padding: '80px 100px 100px 100px',
}

const Title = styled.h1({
  whiteSpace: 'pre-line',
  fontSize: 80,
  marginBottom: 30,
});

const Button = styled(BaseButton)({
  border: 'solid 1px white',
  marginRight: 10,
  padding: 15,
  minWidth: 200,
})

const Buttons = () => {
  const { t } = useTranslation();
  const actions = [
    { id: 'home.title.watch-the-video', },
    { id: 'home.title.learn-more', },
  ]

  return (
    <Fragment>
      {actions.map(({ id }) => (
        <Button key={id}>{t(id)}</Button>
      ))}
    </Fragment>
  )
}

const Home = () => {
  const { t } = useTranslation();
  const title = t('home.title.emurgo');
  const description = t('home.title.EmurgoDescription');
  const source = t('home.title.source');

  return (
    <Content {...styles}>
      <Container alignItems='center' height="100%">
        <Content>
          <Title>{title}</Title>
          <h3 style={{ fontWeight: 300, marginBottom: 30, }}>{description}</h3>
          <Container marginBottom={30} direction="row" justify="flex-start" alignItems="center">
            <Content marginRight={10} width="auto">
              <p>{source}</p>
            </Content>
            <Content width="auto">
              <img style={{ display: "flex" }} src={logo} alt="logo" />
            </Content>
          </Container>
          <Container direction="row" justify="flex-start" alignItems="center">
            <Buttons />
          </Container>
        </Content>
      </Container>
    </Content>
  )
}
export default Home;