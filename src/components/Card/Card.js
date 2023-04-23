import { handleSubscribing } from 'redux/tweets/tweetsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubscriptions } from 'redux/tweets/selectors';
import { useState } from 'react';
import { changeFollowers } from 'redux/tweets/operations';

export const Card = ({ id, props }) => {
  const { user, tweets, followers } = props;
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
    <li>
      <div>
        <img src="" alt="" />
      </div>
      <p>user: {user}</p>
      <p>tweets: {tweets}</p>
      <p>followers: {value}</p>
      <button type="button" onClick={handleClick}>
        {isSubscribe ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </li>
  );
};
