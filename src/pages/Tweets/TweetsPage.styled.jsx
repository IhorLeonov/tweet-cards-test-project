import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Tools = styled.span`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 15px;
  font-weight: 700;
  color: #471ca9;

  &:hover {
    color: #5cd3a8;
  }
`;

export const Info = styled.div`
  margin-right: 20px;
  font-weight: 700;
  color: #471ca9;
`;

export const Wrap = styled.span`
  color: #5cd3a8;
`;
