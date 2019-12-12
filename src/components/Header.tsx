import { useTranslation } from 'react-i18next';
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom';
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
  <Link to='/'>
    <img alt='logo' src={LogoEmurgo} />
  </Link>
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
    { id: 'about', path: '/about' },
    { id: 'blog', path: '/blog' },
    { id: 'contact', path: '/contact' },
    { id: 'lang'},
  ]

  return (
    <Fragment>
      {actions.map(({ id, path }) => {
        if(id === 'lang') {
          return (
            <Button>
              <ButtonContent>
                {languageLabel} {<FiChevronDown style={{ fontSize: 25, marginLeft: 5 }} />}
              </ButtonContent>
            </Button>
          )
        }
        
        return (
          <Link to={path || '/'}>
            <Button key={id}>
              {t(`header.${[id]}`)}
            </Button>
          </Link>
        )
      })}
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