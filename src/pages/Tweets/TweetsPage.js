import { CardList } from 'components/CardList/CardList';
import { Tools, BackButton, Info, Wrap } from './TweetsPage.styled';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectSubscriptions } from 'redux/tweets/selectors';

const TweetsPage = () => {
  const following = useSelector(selectSubscriptions);

  return (
    <>
      <Tools>
        <BackButton to="/">
          {<MdOutlineArrowBackIosNew style={{ marginRight: 10 }} />}Back
        </BackButton>
        {following.length > 0 && (
          <Info>
            <Wrap>{following.length}</Wrap> Following
          </Info>
        )}
      </Tools>
      <CardList />
    </>
  );
};

export default TweetsPage;
