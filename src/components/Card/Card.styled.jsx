import styled from 'styled-components';

export const CardBox = styled.li`
  width: 380px;
  height: 460px;
  margin-bottom: 20px;

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
  height: 214px;
`;

export const Rectangle = styled.div`
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const PartBottom = styled.div`
  text-align: center;
  /* height: 238px; */
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 26px;

  width: 196px;
  height: 50px;

  border: none;
  background: ${props => (props.isSubscribe ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  cursor: pointer;
`;
