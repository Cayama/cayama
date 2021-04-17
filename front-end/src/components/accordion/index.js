import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { MultiLink } from '../Link';
import { ContainerColumn } from '../dataGrid';
import { LinkcontainerAccordion } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  acordionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  accordionSummary: {
    padding: 0,
    width: '60px !important',
    height: '5px !important',
  },
  icons: {
    padding: 0,
  },
}));

function SimpleAccordion({ title, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function MultiLinkSimpleAccordion({ linkArray, inverted }) {
  const classes = useStyles();

  return (
    <Accordion className={classes.acordionContainer}>
      <AccordionSummary
        className={classes.accordionSummary}
        expandIcon={(inverted) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
      </AccordionSummary>
      <AccordionDetails>
        <LinkcontainerAccordion>
          <ContainerColumn>
            <MultiLink linkArray={linkArray} />
          </ContainerColumn>
        </LinkcontainerAccordion>
      </AccordionDetails>
    </Accordion>
  );
}

function MultiLinkComplexAccordion({ linkArray, inverted }) {
  const classes = useStyles();

  return (
    <Accordion className={classes.acordionContainer}>
      <AccordionSummary
        className={classes.accordionSummary}
        expandIcon={(inverted) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
      </AccordionSummary>
      <AccordionDetails>
        <LinkcontainerAccordion>
          {linkArray.map((e, index) => (
            <ContainerColumn key={index}>
              <h4 variant='body1' color='primary'>{e.name}</h4>
              <MultiLink linkArray={e.links} />
            </ContainerColumn>
          ))}
        </LinkcontainerAccordion>
      </AccordionDetails>
    </Accordion>
  );
}

export { SimpleAccordion, MultiLinkSimpleAccordion, MultiLinkComplexAccordion };
