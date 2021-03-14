import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { userDataAction } from '../../redux/action/userDataAction';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '../../infra/components/link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Copyright } from '../../components/copyRight';
import SimplerHeader from '../../patterns/header/simplerHeader';
import Paper from '@material-ui/core/Paper';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: '5vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '70vh',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  footer: {
    backgroundColor: '#EAEDED',
    paddingTop: '1vw'
  },
  links: {
    lineHeight: 1.6,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useRouter();
  const dispatch = useDispatch();

  const submitLogin = (e) => {
    e.preventDefault();
    return axios
      .post(process.env.NEXT_PUBLIC_API_URL_LOGIN, {
        email,
        password,
      })
      .then((res) => {
        if (!res) return setLoginError('Sem conexação')
        localStorage.setItem('token', res.data.token);
        console.log(res)
        dispatch(userDataAction(res.data.userData))
        return history.push('/');
      })
      .catch(({ response }) => {
        console.log(response)
        if (!response) return setLoginError('Sem conexação');
        setLoginError(response.data.err.message);
      })
  }

  return (
    <div>
      <SimplerHeader />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => submitLogin(e)}
            >
              Entrar
            </Button>
            <Grid container>
              <div className={classes.links}>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Não tem uma conta? Cadastre-se"}
                  </Link>
                </Grid>
              </div>
            </Grid>
          </form>
          {loginError ? <div>{loginError}</div> : null}
        </Paper>
      </Container>
      <Box className={classes.footer} mt={3}>
        <Copyright />
      </Box>
    </div>
  );
}
