import styled from 'styled-components';
import decoration from 'images/decoration.png';
import { Button as Btn } from 'constants/GlobalStyle';

export const CardBox = styled.li`
  position: relative;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const PartTop = styled.div`
  background-image: url(${decoration});
  background-repeat: no-repeat;
  background-size: 308px 168px;
  background-position: 36px 28px;
  height: 222px;

  &:after {
    position: absolute;
    top: 214px;
    left: 0;
    content: '';

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;

    min-width: 380px;
    height: 8px;
  }
`;

export const UserPhotoWrapper = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #5736a3;
  width: 80px;
  height: 80px;
  border-radius: 100px;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';

    height: 80px;
    width: 80px;

    border-radius: 100px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const UserPhoto = styled.img`
  position: absolute;
  left: 8.5px;
  top: 8.5px;
  border-radius: 50%;
  width: 63px;
  height: 63px;

  z-index: 1;
`;

export const DefaultPhoto = styled.div`
  background-color: #5736a3;
  border-radius: 100px;
  width: 63px;
  height: 63px;
  z-index: 1;
`;

export const PartBottom = styled.div`
  text-align: center;
`;

const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Tweets = styled(Paragraph)`
  margin-top: 62px;
`;

export const Followers = styled(Paragraph)`
  margin-top: 16px;
`;

export const Button = styled(Btn)`
  margin-top: 26px;
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  background: ${props => (props.isSubscribe ? '#5CD3A8' : '#EBD8FF')};
`;
