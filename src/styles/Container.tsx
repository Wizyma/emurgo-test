import styled from 'styled-components';

const Container = styled.div<any>(({ children, direction = 'row', justify = 'center', alignItems, width = 'auto', container = true, ...props }) => ({
  flexWrap: 'nowrap',
  width,
  height: 'auto',
  display: 'flex',
  justifyContent: justify,
  alignItems,
  boxSizing: 'border-box',
  minWidth: 0,
  flexDirection: direction,
  ...props,
}));

export default Container;
