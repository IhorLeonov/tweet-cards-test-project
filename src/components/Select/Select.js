import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTweets, selectSubscriptions } from 'redux/tweets/selectors';
import { changeFilter } from 'redux/tweets/tweetsSlice';
import Select from 'react-select';

const options = [
  { value: 'showAll', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const subscriptions = useSelector(selectSubscriptions);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteringCards = value => {
    let arr = [];

    switch (value) {
      case null:
        arr = tweets;
        break;
      case 'showAll':
        arr = tweets;
        break;
      case 'follow':
        tweets.map(card => !subscriptions.includes(card.id) && arr.push(card));
        break;
      case 'followings':
        tweets.map(card => subscriptions.includes(card.id) && arr.push(card));
        break;
      default:
        return;
    }
    return arr;
  };

  useEffect(() => {
    dispatch(changeFilter(filteringCards(selectedOption.value)));
  }, [dispatch, filteringCards, selectedOption.value]);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};
