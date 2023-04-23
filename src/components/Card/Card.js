import { handleSubscribing } from 'redux/tweets/tweetsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubscriptions } from 'redux/tweets/selectors';
import { useState } from 'react';
import { changeFollowers } from 'redux/tweets/operations';
import {
  CardBox,
  Rectangle,
  PartTop,
  PartBottom,
  Tweets,
  Followers,
  Button,
} from './Card.styled';

export const Card = ({ id, props }) => {
  const { tweets, followers } = props;
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

  return (
    <CardBox>
      <PartTop>
        <img src="" alt="" />
      </PartTop>
      <Rectangle></Rectangle>
      <PartBottom>
        <Tweets>{tweets} Tweets</Tweets>
        <Followers>{value} Followers</Followers>
        <Button type="button" onClick={handleClick} isSubscribe={isSubscribe}>
          {isSubscribe ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </PartBottom>
    </CardBox>
  );
};
