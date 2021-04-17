import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { MyFooter, FooterContainer, CopyrightContainer } from './styles';
import { Copyright } from '../../components/copyRight';
import { MultiLinkSimpleAccordion, MultiLinkComplexAccordion } from '../../components/accordion';

const arrayFooter = [
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
        href: 'https://www.cayama.com.br/7',
        text: 'Fale Conosco',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/8',
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
        href: 'https://www.cayama.com.br/9',
        text: 'Cool stuff',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/10',
        text: 'Team stuff',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/11',
        text: 'Developer stuff',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/12',
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
        href: 'https://www.cayama.com.br/13',
        text: 'Resource',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/14',
        text: 'Resource name',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/15',
        text: 'Another resource',
        variant: 'body2',
      },
      {
        color: 'inherit',
        href: 'https://www.cayama.com.br/16',
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
      <MultiLinkComplexAccordion linkArray={arrayFooter} inverted={false}/>
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
