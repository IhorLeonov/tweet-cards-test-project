import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'constants/GlobalStyle';

export const Tools = styled.span`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-right: 25px;
  font-weight: 700;
  color: #471ca9;

  &:hover {
    color: #5cd3a8;
  }
`;

export const Info = styled.div`
  margin-right: 15px;
  font-weight: 700;
  color: #471ca9;
`;

export const Wrap = styled.span`
  color: #5cd3a8;
  margin-right: 5px;
`;

export const LoadMoreBtn = styled(Button)`
  position: relative;
  margin-top: 30px;
  padding: 14px 20px;
  height: 40px;
  width: 165px;

  font-weight: 500;
  font-size: 16px;

  color: #5736a3;
  background: #ebd8ff;
  border: 1px solid #5736a3;
  box-shadow: none;

  &:hover {
    background: #5cd3a8;
    color: #373737;
  }

  &:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #d6d5d5;
    color: #0b0909;
  }
`;
