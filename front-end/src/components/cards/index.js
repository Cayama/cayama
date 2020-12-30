import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import { CardContainer, CardContent, AllPromoCards } from './styles';
import Link from '../../infra/components/link';

const useStyles = makeStyles({
  root: {
    height: '8vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'start',
    justifyContent: 'space-around',
    padding: '0.5vh',
  },
  title: {
    fontSize: 14,
  },
  link: {
    color: 'blue',
  },
});

function PromoCard() {
  const classes = useStyles();

  return (
    <AllPromoCards>
      <CardContainer>
        <Card className={classes.root} variant="outlined">
          <MonetizationOnOutlinedIcon fontSize="large" />
          <CardContent>
            <Typography className={classes.title} color="textPrimary">
              Comissão sempre!
            </Typography>
            <Link href='/settings/influencer'>
              <Typography variant='body2' className={classes.link}>Ver mais</Typography>
            </Link>
          </CardContent>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card className={classes.root} variant="outlined">
          <CreditCardOutlinedIcon fontSize="large" />
          <CardContent>
            <Typography className={classes.title} color="textPrimary">
              12x no cartão!
            </Typography>
            <Link href='/settings/payment-details'>
              <Typography variant='body2' className={classes.link}>Ver mais</Typography>
            </Link>
          </CardContent>
        </Card>
      </CardContainer>
      <Hidden xsDown>
        <CardContainer>
          <Card className={classes.root} variant="outlined">
            <LocalShippingOutlinedIcon fontSize="large" />
            <CardContent>
              <Typography className={classes.title} color="textPrimary">
                Entrega segura!
              </Typography>
              <Link href='/settings/shipping-details'>
                <Typography variant='body2' className={classes.link}>Ver mais</Typography>
              </Link>
            </CardContent>
          </Card>
        </CardContainer>
        <CardContainer>
          <Card className={classes.root} variant="outlined">
            <VerifiedUserOutlinedIcon fontSize="large" />
            <CardContent>
              <Typography className={classes.title} color="textPrimary">
                Segurança no pagamento!
              </Typography>
              <Link href='/settings/payment-details'>
                <Typography variant='body2' className={classes.link}>Ver mais</Typography>
              </Link>
            </CardContent>
          </Card>
        </CardContainer>
      </Hidden>
    </AllPromoCards>
  );
}

export { PromoCard };
