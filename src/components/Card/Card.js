import { handleSubscribing } from 'redux/tweets/tweetsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubscriptions } from 'redux/tweets/selectors';
import { useState } from 'react';
import { changeFollowers } from 'redux/tweets/operations';
import { LogoSvg } from 'images/SvgImages';
import boy from 'images/boy.png';

import {
  CardBox,
  UserPhotoWrapper,
  Backdrop,
  UserPhoto,
  PartTop,
  PartBottom,
  Tweets,
  Followers,
  Button,
  DefaultPhoto,
} from './Card.styled';

export const Card = ({ id, props }) => {
  const { avatar, tweets, followers } = props;
  const [value, setValue] = useState(followers);

  const dispatch = useDispatch();
  const subscriptions = useSelector(selectSubscriptions);
  const isSubscribe = subscriptions.includes(id);

  const handleClick = () => {
    dispatch(handleSubscribing(id));
    if (!isSubscribe) {
      setValue(value + 1);
      dispatch(changeFollowers({ followers: value + 1, id }));
      return;
    }
    setValue(value - 1);
    dispatch(changeFollowers({ followers: value - 1, id }));
  };

  const formatedTweets = new Intl.NumberFormat('en-US').format(tweets);
  const formatedValue = new Intl.NumberFormat('en-US').format(value);

  return (
    <CardBox>
      <PartTop>
        <LogoSvg />
      </PartTop>

      <UserPhotoWrapper>
        <Backdrop>
          {avatar ? (
            <UserPhoto src={avatar} alt="User photo" />
          ) : (
            <DefaultPhoto>
              <UserPhoto src={boy} alt="User photo" />
            </DefaultPhoto>
          )}
        </Backdrop>
      </UserPhotoWrapper>

      <PartBottom>
        <Tweets>{formatedTweets} Tweets</Tweets>
        <Followers>{formatedValue} Followers</Followers>
        <Button type="button" onClick={handleClick} isSubscribe={isSubscribe}>
          {isSubscribe ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </PartBottom>
    </CardBox>
  );
};
