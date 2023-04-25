import { HandySvg } from 'handy-svg';
import boy from 'images/boy.svg';
import logo from 'images/logo.svg';

export const BoySvg = () => <HandySvg src={boy} width="63" height="63" />;

export const LogoSvg = () => (
  <HandySvg
    style={{ marginLeft: 20, marginTop: 20 }}
    src={logo}
    width="76"
    height="22"
  />
);
