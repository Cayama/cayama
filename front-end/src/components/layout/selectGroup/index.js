import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 120,
  },
}));

const DropDownSelect = ({ dropDownArray, handleChange, selectorName }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="dropDownSelector">{selectorName}</InputLabel>
      <Select
        labelId="dropDownSelector"
        id="dropDownSelector"
        value=''
        onChange={handleChange}
      >
        {dropDownArray.map(({ value, name }) => (
          <MenuItem value={value}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
};

export {
  DropDownSelect,
}
