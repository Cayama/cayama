import React from 'react';
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CustomInputWithUseRef, CustomInputWithUseState } from '../layout/inputGroup';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import {
  CardContainer,
  CardContent,
  AllPromoCards,
  BriefingContainer,
  ActionsContainer,
  ShippingTitle,
  SuccessMessageCardContainer,
  CheckIconContainer,
  SuccessMessageCardContent,
  SuccessMessageCardLinks,
  ButtonContainer,
  AnnouncementIconContent,
  AnnouncementTitleH2,
  IconOnlyCardContainer,
  CustomCard,
  CardWithSearchInputContainer,
  CustomCardContent,
  InputButtonContainer,
  InputContainer,
  CustomCategoryCardContainer,
  CategoryCardContent,
} from './styles';
import Link from '../../infra/components/link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    height: '8vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
      <Hidden>
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
      </Hidden>
      <Hidden>
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
      </Hidden>
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

const useStylesProduct = makeStyles({
  productCardroot: {
    width: '46vw',
    maxWidth: 230,
    maxHeight: 250,
    margin: '1vw 1vw 1vh 1vw',
  },
  media: {
    height: 140,
  },
});

const ProductCard = ({
  productData: {
    productName, price, shipping, category, productsImgUrls,
  },
  storeName,
}) => {
  const classes = useStylesProduct();
  const productNameLink = productName.replaceAll(' ', '-').toLowerCase();

  return (
    <Card className={classes.productCardroot}>
        <Link href={`/${category.toLowerCase()}/${productNameLink}/${storeName}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={productsImgUrls[0]}
              title={productName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                R$ {price}
              </Typography>
              {shipping ? 'Frete Grátis' : null}
              <Typography variant="body1" color="textSecondary" component="p">
                {productName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

const useStylesShipping = makeStyles({
  shippingCardroot: {
    width: '46vw',
    maxWidth: 230,
    margin: '0 1vw 1vh 1vw',
    padding: 5,
  },
  shippingMedia: {
    height: 110,
  },
});

const ShippingCard = ({ src, shippingName, authorizationRoute, briefing }) => {
  const classes = useStylesShipping();
  // const shippingNameLink = shippingName.replaceAll(' ', '-').toLowerCase();

  return (
    <Card className={classes.shippingCardroot}>
      <Link href={`/settings/shippings/${shippingName}`}>
        <CardActionArea>
          <CardMedia
            className={classes.shippingMedia}
            image={src}
            title={shippingName}
          />
          <CardContent>
            <ShippingTitle>
              {shippingName}
            </ShippingTitle>
            <BriefingContainer>
              {briefing}
            </BriefingContainer>
          </CardContent>
        </CardActionArea>
      </Link>
      <ActionsContainer>
        <Link href={authorizationRoute}>
          <Button className={classes.shippingButtons} variant="contained" size="small" color="primary">
            Autorizar
          </Button>
        </Link>
        <Hidden mdDown>
          <Link href={`/settings/shippings/${shippingName}`}>
            <Button size="small" color="primary">
              Saiba Mais
            </Button>
          </Link>
        </Hidden>
      </ActionsContainer>
    </Card>
  );
}

const SuccessMessageCard = ({ messages }) => {
  const timeOut = setTimeout(() => {
    Router.reload(window.location.pathname);
  }, 5000)

  const addNewProduct = (path) => {
    clearTimeout(timeOut);
    Router.push(path)
  }

  const initialPage = (path) => {
    clearTimeout(timeOut);
    Router.push(path)
  }
  return (
    <SuccessMessageCardContainer>
      <SuccessMessageCardContent>
        <CheckIconContainer>
          <CheckCircleIcon fontSize="inherit" htmlColor="green" />
        </CheckIconContainer>
        {messages}
      </SuccessMessageCardContent>
      <SuccessMessageCardLinks>
        <ButtonContainer>
          <Button onClick={() => addNewProduct("/settings/anuncie")} color="primary" variant="contained">Novo Produto</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={() => initialPage("/")} color="secondary" variant="contained">Página Principal</Button>
        </ButtonContainer>
      </SuccessMessageCardLinks>
    </SuccessMessageCardContainer>
  );
}

const ErrorMessageCard = ({ messages }) => {
  return (
  <div>{messages.map(({ context: { key } }) => (<div key={key}>{key}</div>))}</div>
  );
}

const useStylesIconCardOnly = makeStyles({
  root: {
    width: '46vw',
    maxWidth: 190,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    zIndex: 11,
  }
});

const IconOnlyCard = ({ icon, title, href }) => {
  const classes = useStylesIconCardOnly();
  return (
    <IconOnlyCardContainer className={classes.container}>
      <Link href={href}>
        <Card className={classes.root} variant="outlined">
          <AnnouncementIconContent>
            {icon}
          </AnnouncementIconContent>
          <AnnouncementTitleH2>{title}</AnnouncementTitleH2>
        </Card>
      </Link>
    </IconOnlyCardContainer>
  );
}

const CardWithSearchCategoryInput = ({ setInput, defaultValue, fieldToUseRef, onClick }) => {
  return (
    <CardWithSearchInputContainer>
      <CustomCard>
        <CustomCardContent>
          <h2>Nome do produto</h2>
          <InputButtonContainer>
            <InputContainer>
              <CustomInputWithUseRef
                name="searchProductCategory"
                id="searchProductCategory"
                setInput={setInput}
                defaultValue={defaultValue}
                fieldToUseRef={fieldToUseRef}
                label="Nome do produto"
              />
            </InputContainer>
            <Button onClick={onClick} variant="contained" style={{ backgroundColor: '#1A8FE3', color: 'white' }}>
              Começar
            </Button>
          </InputButtonContainer>
        </CustomCardContent>
      </CustomCard>
    </CardWithSearchInputContainer>
  )
}

const CategoriesCard = ({ categoryName, typeOfAnnouncement, path }) => {
  return (
    <Link href={`/register/${typeOfAnnouncement}/${path}?category=${categoryName}`}>
      <CustomCard>
        <CustomCategoryCardContainer>
          <CategoryCardContent>
            <h3>{categoryName}</h3>
            <ArrowForwardIosIcon />
          </CategoryCardContent>
        </CustomCategoryCardContainer>
      </CustomCard>
    </Link>
  )
}


export {
  PromoCard,
  ProductCard,
  ShippingCard,
  SuccessMessageCard,
  ErrorMessageCard,
  IconOnlyCard,
  CardWithSearchCategoryInput,
  CategoriesCard,
};
