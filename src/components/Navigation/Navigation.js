import { NavLink } from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </nav>
  );
};
