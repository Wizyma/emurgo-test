import styled from 'styled-components';

const Content = styled.div<any>(({ 
  children,
  ...props
}) => ({
  order: 0,
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 1,
  display: 'block',
  width: '100%',
  boxSizing: 'border-box',
  minWidth: 0,
  ...props,
}));

export default Content;
