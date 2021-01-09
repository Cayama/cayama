import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '../../../infra/components/link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Copyright } from '../../../components/copyRight';
import SimplerHeader from '../../../patterns/header/simplerHeader';
import Box from '@material-ui/core/Box';
import { MoreInfoCheckBox, PrivacyPolicyCheckBox } from '../../../components/checkbox';
import { SubmitFormButton } from '../../../components/layout/buttonGroup';
import {
  StoreNameInput,
  CnpjInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput
} from '../../../components/layout/inputGroup'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '95%',
  },
  footer: {
    padding: '2vw',
    backgroundColor: '#EAEDED',
  },
}));

export default function SignUpUser() {
  const classes = useStyles();

  return (
    <div>
      <SimplerHeader />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Preencha com os dados da sua empresa
          </Typography>
          <Link href='/register'>Registre uma conta pessoal</Link>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StoreNameInput />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CnpjInput />
              </Grid>
              <Grid item xs={12}>
                <EmailInput />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput />
              </Grid>
              <Grid item xs={12}>
                <ConfirmPasswordInput />
              </Grid>
              <Grid item xs={12}>
                <MoreInfoCheckBox />
                <PrivacyPolicyCheckBox />
              </Grid>
            </Grid>
            <SubmitFormButton
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastre
            </SubmitFormButton>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Já tem uma conta? Entre
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Box className={classes.footer} mt={3}>
        <Copyright />
      </Box>
    </div>
  );
}
