import { useTranslation } from 'react-i18next';
import { FiChevronDown } from "react-icons/fi";
import styled from 'styled-components';
import React, { Fragment } from 'react';

import { Container, Content, BaseButton } from '../styles';
import LogoEmurgo from '../assets/svg/EMURGOTEST-logo.svg';

const headerStyles = {
  position: 'absolute',
  top: 0,
  padding: '25px 100px 0px 100px'
}

const Logo = () => (
  <img alt='logo' src={LogoEmurgo} />
)

const Button = styled(BaseButton)(({ key }) => ({
  marginRight: key !== 'lang' ? 30 : 0,
}))

const ButtonContent = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const Buttons = () => {
  const { t, i18n }: any = useTranslation();
  const languages = [{ key: 'en', label: 'Eng' }, { key: 'ja', label: 'Ja' }];
  const languageLabel = languages.find(lang => lang.key === i18n.language)?.label
  const actions = [
    { id: 'about', },
    { id: 'blog', },
    { id: 'contact'},
    { id: 'lang'},
  ]

  return (
    <Fragment>
      {actions.map(({ id }) => (
        <Button key={id}>
          {id === 'lang' ? (
            <ButtonContent>
              {languageLabel} {<FiChevronDown style={{ fontSize: 25, marginLeft: 5 }} />}
            </ButtonContent>
          ): t(`header.${[id]}`)}
          </Button>
      ))}
    </Fragment>
  )
}

const Header = () => (
  <Content {...headerStyles}>
    <Container width='100%' justify='space-between' alignItems='center'>
      <Content>
        <Logo />
      </Content>
      <Content>
        <Container justify="flex-end">
          <Content width="auto">
            <Buttons />
          </Content>
        </Container>
      </Content>
    </Container>
  </Content>
)

export default Header;