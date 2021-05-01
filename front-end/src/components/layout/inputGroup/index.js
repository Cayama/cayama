import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const BirthDateInput = ({ className, formControlLabel, setBirthday }) => {
  return (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      name="birthDate"
      defaultValue="2001-05-24"
      className={className}
      // InputLabelProps={{
      //   shrink: true,formControlLabel
      // }}
      onChange={(e) => setBirthday(e.target.value)}
    />
  );
};

const SwitchInput = ({ checked, onChange, name, label }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={() => onChange(!checked)}
          name={name}
        />}
      label={label}
    />
  );
};

const ProductDescriptionInput = ({ setDescription, defaultValue, fieldToUseRef }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      multiline
      rows={10}
      name="description"
      label="Descrição"
      type="text"
      id="description"
      defaultValue={defaultValue}
      onChange={(e) => setDescription(fieldToUseRef, e.target.value)}
    />
  );
};

const CustomInputWithUseRef = ({ name, id, setInput, defaultValue, label, disabled = false, fieldToUseRef }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name={name}
      label={label}
      type="text"
      id={id}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={(e) => setInput(fieldToUseRef, e.target.value)}
    />
  );
};

const CustomInputWithUseState = ({ name, id, setInput, input, label, disabled = false }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name={name}
      label={label}
      type="text"
      id={id}
      value={input}
      disabled={disabled}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

const PriceInput = ({ value, setPrice, label }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="price"
      label={label}
      type="text"
      id="price"
      value={value}
      onChange={(e) => setPrice(e.target.value)}
    />
  );
}

const DisabledInput = ({ label, value }) => {
  return (
    <TextField
      disabled
      id="outlined-disabled"
      label={label}
      defaultValue={value}
      variant="outlined"
      fullWidth
    />
  );
}

export {
  BirthDateInput,
  SwitchInput,
  ProductDescriptionInput,
  CustomInputWithUseRef,
  PriceInput,
  DisabledInput,
  CustomInputWithUseState,
};
