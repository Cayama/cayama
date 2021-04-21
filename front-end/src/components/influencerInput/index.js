import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { handleUseRef } from '../../utils/index';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

const InfluencerPrimarySocialMedia = ({ defaultValue = '', fieldToUseRef, disabled = false }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="social-media">Rede Social Principal</InputLabel>
      <Select
        labelId="social-media"
        id="social-media"
        name='socialMedia'
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={({ target: { value } }) => handleUseRef(fieldToUseRef, value)}
      >
        <MenuItem value={'Instagram'}>Instagram</MenuItem>
        <MenuItem value={'YouTube'}>YouTube</MenuItem>
        <MenuItem value={'TikTok'}>TikTok</MenuItem>
        <MenuItem value={'Twitter'}>Twitter</MenuItem>
        <MenuItem value={'Facebook'}>Facebook</MenuItem>
        <MenuItem value={'Outra'}>Outra</MenuItem>
      </Select>
    </FormControl>
  );
}

const InfluencerContentType = ({ defaultValue = '', fieldToUseRef, disabled = false }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="contentType">Conteúdo</InputLabel>
      <Select
        labelId="contentType"
        id="contentType"
        name='contentType'
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={({ target: { value } }) => handleUseRef(fieldToUseRef, value)}
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
  )
}

export {
  InfluencerPrimarySocialMedia,
  InfluencerContentType,
}