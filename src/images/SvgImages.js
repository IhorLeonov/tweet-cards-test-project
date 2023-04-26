import { HandySvg } from 'handy-svg';
import logo from 'images/logo.svg';

export const LogoSvg = () => (
  <HandySvg
    style={{ marginLeft: 20, marginTop: 20 }}
    src={logo}
    width="76"
    height="22"
  />
);
