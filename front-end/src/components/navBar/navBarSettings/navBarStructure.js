import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';

const navBarStructure = [
  {
    name: 'Minha Conta',
    url: '/settings/profile',
    icon: <HomeOutlinedIcon />
  },
  {
    name: 'Compras',
    url: '/settings/compras',
    icon: <LocalMallOutlinedIcon />,
  },
  {
    name: 'Ofertas',
    url: '/settings/ofertas',
    icon: <LoyaltyOutlinedIcon />,
  },
  {
    name: 'Vender',
    url: '/settings/anuncie',
    icon: <StorefrontOutlinedIcon />,
  },
  {
    name: 'Influencer',
    url: '/settings/influencer',
    icon: <PhoneIphoneOutlinedIcon />,
  },
];

export default navBarStructure;
