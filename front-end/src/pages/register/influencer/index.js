import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { InfluencerPrimarySocialMedia, InfluencerContentType } from '../../../components/influencerInput';
import { handleUseRef } from '../../../utils/index';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: '95%',
  },
  formControlLabel: {
    margin: 0,
    padding: 0,
  }
}));

const InfluencerRegisterOptions = ({
  socialMedia,
  contentType,
  socialMediaName,
  influencerLink,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          className={classes.textField}
          variant="outlined"
          required
          fullWidth
          name="socialMediaName"
          label="Nome do Perfil"
          type="text"
          id="socialMediaName"
          onChange={({ target: { value } }) => handleUseRef(socialMediaName, value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfluencerPrimarySocialMedia fieldToUseRef={socialMedia} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfluencerContentType fieldToUseRef={contentType} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          className={classes.textField}
          variant="outlined"
          required
          fullWidth
          name="influencerLink"
          label="Seu Link"
          type="text"
          id="influencerLink"
          onChange={({ target: { value } }) => handleUseRef(influencerLink, value)}
        />
      </Grid>
    </Grid>
  );
};

export default InfluencerRegisterOptions;
