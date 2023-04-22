import { toggleFollow } from 'redux/tweets/tweetsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubscriptions } from 'redux/tweets/selectors';

export const Card = ({ id, otherProps }) => {
  const { user, tweets, followers } = otherProps;
  const dispatch = useDispatch();
  const subscriptions = useSelector(selectSubscriptions);

  return (
    <li>
      <div>
        <img src="" alt="" />
      </div>
      <p>{user}</p>
      <p>{tweets}</p>
      <p>{followers}</p>
      <button type="button" onClick={() => dispatch(toggleFollow(id))}>
        {subscriptions.includes(id) ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </li>
  );
};
