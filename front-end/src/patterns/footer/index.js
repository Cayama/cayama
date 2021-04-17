import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { MyFooter, FooterContainer, CopyrightContainer } from './styles';
import { Copyright } from '../../components/copyRight';
import { MultiLinkSimpleAccordion, MultiLinkComplexAccordion } from '../../components/accordion';

const arrtest1 = [
  {
    color: 'inherit',
    href: 'https://www.cayama.com.br/4',
    text: 'Cayama Marketplace',
    variant: 'body2',
  }
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const arrtest3 = [
  { 
    name:'Empresa',
    links: [
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/5',
        text: 'Time',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/6',
        text: 'História',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/6',
        text: 'Fale Conosco',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/6',
        text: 'Localização',
        variant: 'body2',
      },
    ]
  },
  {
    name:'Features',
    links: [
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/7',
        text: 'Cool stuff',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/7',
        text: 'Team stuff',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/7',
        text: 'Developer stuff',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/7',
        text: 'Another stuff',
        variant: 'body2',
      }
    ]
  },
  { 
    name:'Recursos', 
    links: [
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/8',
        text: 'Resource',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/9',
        text: 'Resource name',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/10',
        text: 'Another resource',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/11',
        text: 'Final resource',
        variant: 'body2',
      },
    ]
  },
  {
    name:'Políticas',
    links: [
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/1',
        text: 'Política de privacidade',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/2',
        text: 'Termos de uso',
        variant: 'body2',
      },
    ]
  },
];

function Footer({ children }) {
  return (
    <MyFooter>
      <MultiLinkComplexAccordion linkArray={arrtest3} inverted={false}/>
      <FooterContainer>
        <Typography variant="body1">O melhor lugar para fazer sua venda</Typography>
        <Copyright />
      </FooterContainer>
    </MyFooter>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer;
