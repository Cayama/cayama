import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { MyFooter, FooterContainer, CopyrightContainer } from './styles';
import { Copyright } from '../../components/copyRight';
import { MultiLinkSimpleAccordion, MultiLinkComplexAccordion } from '../../components/accordion';

const arrtest1 = [
  {
    color: 'inherit',
    href: 'https://www.cayama.com.br/',
    text: 'Cayama Marketplace',
    variant: 'body2',
  }
];

const arrtest3 = [
  { name:'Jafet', links: [
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
  ]},
  { name:'Jafet2', links: [
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    }
  ]},
  { name:'Jafet3', links: [
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
  ]},
  { name:'Jafet3', links: [
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
    {
      color: 'inherit',
      href: 'https://www.cayama.com.br/',
      text: 'Cayama Marketplace',
      variant: 'body2',
    },
  ]},
];

function Footer({ children }) {
  return (
    <MyFooter>
      <MultiLinkComplexAccordion linkArray={arrtest3} inverted={false}/>
      <FooterContainer>
        <Typography variant="body1">Together we can go far beyond.</Typography>
        <Copyright />
      </FooterContainer>
    </MyFooter>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer;
