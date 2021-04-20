import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { userDataAction } from '../../../redux/action/userDataAction';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
import { handleUseRef } from '../../../utils/index';
import {
  StoreNameInput,
  CnpjInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
  CustomInputWithUseRef
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

export default function SignUpStore() {
  const classes = useStyles();
  const [registerError, setRegisterError] = useState('');
  // const [storeName, setStoreName] = useState('');
  // const [cnpj, setCnpj] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const storeName = useRef('');
  const cnpj = useRef('');
  const email = useRef('');
  const password = useRef('');
  const confirmPassword = useRef('');
  // const newsAcceptance = useRef(false);
  const [newsAcceptance, setNewsAcceptance] = useState(false);

  
  const [privacyAndTerms, setPrivacyAndTerms] = useState(false);

  const history = useRouter();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!privacyAndTerms) return setRegisterError('Faltou aceitar os termos =)')
    return axios
      .post(process.env.NEXT_PUBLIC_API_URL_STORE_REGISTER, {
        storeName: storeName.current,
        cnpj: cnpj.current,
        email: email.current,
        password: password.current,
        confirmPassword: confirmPassword.current,
        newsAcceptance: newsAcceptance.current,
        privacyAndTerms: privacyAndTerms.current,
      })
      .then((res) => {
        console.log('1')
        if (!res) return setLoginError('Sem conexação')
        localStorage.setItem('token', res.data.token);
        console.log(res)
        dispatch(userDataAction(res.data.userData))
        return history.push('/');
      })
      .catch(({ response }) => {
        console.log('2')
        console.log(response)
        if (!response) return setRegisterError('Sem conexação');
        setRegisterError(response.data.err.message);
      })
  }
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
          {registerError ? <div>{registerError}</div> : null}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <CustomInputWithUseRef name="storeName" id="storeName" label="Nome da Loja" setInput={handleUseRef} defaultValue={storeName.current} fieldToUseRef={storeName}/>
                {/* <StoreNameInput setStoreName={setStoreName} /> */}
              </Grid>
              <Grid item xs={12} sm={6}>
              <CustomInputWithUseRef name="cnpj" id="cnpj" label="CNPJ" setInput={handleUseRef} defaultValue={cnpj.current} fieldToUseRef={cnpj}/>
                {/* <CnpjInput setCnpj={setCnpj} /> */}
              </Grid>
              <Grid item xs={12}>
                <CustomInputWithUseRef name="email" id="email" label="Email" setInput={handleUseRef} defaultValue={email.current} fieldToUseRef={email}/>
                {/* <EmailInput setEmail={setEmail} /> */}
              </Grid>
              <Grid item xs={12}>
              <CustomInputWithUseRef name="password" id="password" label="Password" setInput={handleUseRef} defaultValue={password.current} fieldToUseRef={password}/>
                {/* <PasswordInput setPassword={setPassword} /> */}
              </Grid>
              <Grid item xs={12}>
                <CustomInputWithUseRef name="confirmPassword" id="confirmPassword" label="Confirme o password" setInput={handleUseRef} defaultValue={confirmPassword.current} fieldToUseRef={confirmPassword}/>
                {/* <ConfirmPasswordInput setConfirmPassword={setConfirmPassword} /> */}
              </Grid>
              <Grid item xs={12}>
                <MoreInfoCheckBox setNewsAcceptance={setNewsAcceptance} checked={newsAcceptance} />
                <PrivacyPolicyCheckBox setPrivacyAndTerms={setPrivacyAndTerms} checked={privacyAndTerms} />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={!privacyAndTerms}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => handleRegister(e)}
            >
              Cadastre
            </Button>
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
