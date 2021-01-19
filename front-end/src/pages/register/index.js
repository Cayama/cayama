import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { userDataAction } from '../../redux/action/userDataAction';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '../../infra/components/link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Copyright } from '../../components/copyRight';
import SimplerHeader from '../../patterns/header/simplerHeader';
import Box from '@material-ui/core/Box';
import InfluencerRegisterOptions from './influencer/index';
import { MoreInfoCheckBox, PrivacyPolicyCheckBox } from '../../components/checkbox';
import { SubmitFormButton } from '../../components/layout/buttonGroup';
import {
  FirstNameInput,
  LastNameInput,
  CpfInput,
  BirthDateInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
  SwitchInput,
} from '../../components/layout/inputGroup';

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
  const [isInfluencer, setIsInfluencer] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newsAcceptance, setNewsAcceptance] = useState(false);
  const [privacyAndTerms, setPrivacyAndTerms] = useState(false);

  const [influencerRegister, setInfluencerRegister] = useState({
    socialMedia: '',
    contentType: '',
    socialMediaName: '',
    influencerLink: '',
  });

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
            Preencha com seus dados pessoais
          </Typography>
          <Link href='/register/store'>Registre uma empresa</Link>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FirstNameInput setFirstName={setFirstName}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LastNameInput setLastName={setLastName}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CpfInput setCpf={setCpf} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <BirthDateInput setBirthday={setBirthday} className={classes.textField} formControlLabel={FormControlLabel} />
              </Grid>
              <Grid item xs={12}>
                <EmailInput setEmail={setEmail} />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput setPassword={setPassword} />
              </Grid>
              <Grid item xs={12}>
                <ConfirmPasswordInput setConfirmPassword={setConfirmPassword} />
              </Grid>
              {isInfluencer ?
                <InfluencerRegisterOptions
                  setInfluencerRegister={setInfluencerRegister}
                  influencerRegister={influencerRegister}
                />
                :
                null
              }
              <Grid item xs={12}>
                <SwitchInput
                  checked={isInfluencer}
                  onChange={setIsInfluencer}
                  name="isInfluencer"
                  label="Influencer"
                />
              </Grid>
              <Grid item xs={12}>
                <MoreInfoCheckBox checked={newsAcceptance} setNewsAcceptance={setNewsAcceptance} />
                <PrivacyPolicyCheckBox checked={privacyAndTerms} setPrivacyAndTerms={setPrivacyAndTerms} />
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
