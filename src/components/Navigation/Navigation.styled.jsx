import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-weight: 900;
  color: #ebd8ff;

  &.active {
    color: #5cd3a8;
  }
`;
