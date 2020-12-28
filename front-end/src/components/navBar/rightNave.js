import { DropdownButton } from '../layout/buttonGroup';
import NavBarSettings from './navBarSettings/index';
import { Ul } from './styles';

const RightNav = () => {
  return (
    <Ul>
      <li>
        <DropdownButton DropdownOptions={NavBarSettings} />
      </li>
      <li>
        About Us
      </li>
      <li>
        Contact Us
      </li>
    </Ul>
  );
};

export default RightNav;
