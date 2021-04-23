import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MoneyOffOutlinedIcon from '@material-ui/icons/MoneyOffOutlined';

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
    icon: <MoneyOffOutlinedIcon />,
  },
  {
    name: 'Vender',
    url: '/settings/anuncie',
    icon: <LoyaltyOutlinedIcon />,
  },
  {
    name: 'Minha Loja',
    url: '/settings/store-profile',
    icon: <StorefrontOutlinedIcon />
  },
  {
    name: 'Influencer',
    url: '/settings/influencer',
    icon: <PhoneIphoneOutlinedIcon />,
  },
];

export default navBarStructure;
