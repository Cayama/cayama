import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 150,
  },
}));

const DropDownStoreCategorySelect = ({ dropDownArray, handleChange, selectorName, fieldToUseRef }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="dropDownSelector">{selectorName}</InputLabel>
      <Select
        labelId="dropDownSelector"
        id="dropDownSelector"
        onChange={(e) => handleChange(fieldToUseRef, e.target.value)}
      >
        {dropDownArray.map((element, index) => (
          <MenuItem key={index} value={element.linkText}>{element.linkText}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
};

export {
  DropDownStoreCategorySelect,
}
