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
  const [followersValue, setFollowersValue] = useState(followers);

  const dispatch = useDispatch();
  const subscriptions = useSelector(selectSubscriptions);
  const isSubscribe = subscriptions.includes(id);

  const handleClick = () => {
    dispatch(handleSubscribing(id));
    if (!isSubscribe) {
      setFollowersValue(followersValue + 1);
      dispatch(changeFollowers({ followers: followersValue + 1, id }));
      return;
    }
    setFollowersValue(followersValue - 1);
    dispatch(changeFollowers({ followers: followersValue - 1, id }));
  };

  const formatedTweets = new Intl.NumberFormat('en-US').format(tweets);
  const formatedFollowersValue = new Intl.NumberFormat('en-US').format(
    followersValue
  );

  return (
    <CardBox>
      <PartTop>
        <LogoSvg />
      </PartTop>

      <UserPhotoWrapper>
        <Backdrop>
          {avatar ? (
            <UserPhoto src={avatar} alt="User photo" width="63" height="63" />
          ) : (
            <DefaultPhoto>
              <UserPhoto src={boy} alt="User photo" width="63" height="63" />
            </DefaultPhoto>
          )}
        </Backdrop>
      </UserPhotoWrapper>

      <PartBottom>
        <Tweets>{formatedTweets} Tweets</Tweets>
        <Followers>{formatedFollowersValue} Followers</Followers>
        <Button type="button" onClick={handleClick} isSubscribe={isSubscribe}>
          {isSubscribe ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </PartBottom>
    </CardBox>
  );
};
