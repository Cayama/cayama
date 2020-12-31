import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


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
  setInfluencerRegister,
  influencerRegister,
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
          onChange={({ target: { value } }) => setInfluencerRegister({
            ...influencerRegister, socialMediaName: value
          })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="social-media">Rede Social Principal</InputLabel>
          <Select
            labelId="social-media"
            id="social-media"
            name='socialMedia'
            onChange={({ target: { value } }) => setInfluencerRegister({
              ...influencerRegister, socialMedia: value
            })}
          >
            <MenuItem value={'Instagram'}>Instagram</MenuItem>
            <MenuItem value={'YouTube'}>YouTube</MenuItem>
            <MenuItem value={'TikTok'}>TikTok</MenuItem>
            <MenuItem value={'Twitter'}>Twitter</MenuItem>
            <MenuItem value={'Facebook'}>Facebook</MenuItem>
            <MenuItem value={'Outra'}>Outra</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="contentType">Conteúdo</InputLabel>
          <Select
            labelId="contentType"
            id="contentType"
            name='contentType'
            onChange={({ target: { value } }) => setInfluencerRegister({
              ...influencerRegister, contentType: value
            })}
          >
            <MenuItem value={'Moda'}>Moda</MenuItem>
            <MenuItem value={'Moda Fitness'}>Moda Fitness</MenuItem>
            <MenuItem value={'Maquiagem'}>Maquiagem</MenuItem>
            <MenuItem value={'Beleza'}>Beleza</MenuItem>
            <MenuItem value={'Life Style'}>Life Style</MenuItem>
            <MenuItem value={'Saúde'}>Saúde</MenuItem>
            <MenuItem value={'Outra'}>Outra</MenuItem>
          </Select>
        </FormControl>
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
          onChange={({ target: { value } }) => setInfluencerRegister({
            ...influencerRegister, influencerLink: value
          })}
        />
      </Grid>
    </Grid>
  );
};

export default InfluencerRegisterOptions;
