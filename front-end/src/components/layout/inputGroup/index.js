import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const FirstNameInput = ({ setFirstName }) => {
  return (
    <TextField
    autoComplete="fname"
    name="firstName"
    variant="outlined"
    required
    fullWidth
    id="firstName"
    label="Nome"
    autoFocus
    onChange={(e) => setFirstName(e.target.value)}
    />
  );
};

const LastNameInput = ({ setLastName }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      id="lastName"
      label="Sobrenome"
      name="lastName"
      autoComplete="lname"
      onChange={(e) => setLastName(e.target.value)}
    />
  );
};

const CpfInput = ({ setCpf }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="cpf"
      label="CPF"
      type="text"
      id="cpf"
      onChange={(e) => setCpf(e.target.value)}
    />
  );
};

const BirthDateInput = ({ className, formControlLabel, setBirthday }) => {
  return (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      name="birthDate"
      defaultValue="2001-05-24"
      className={className}
      InputLabelProps={{
        shrink: true,formControlLabel
      }}
      onChange={(e) => setBirthday(e.target.value)}
    />
  );
};

const EmailInput = ({ setEmail }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      id="email"
      label="Email"
      name="email"
      autoComplete="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};

const PasswordInput = ({ setPassword }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      onChange={(e) => setPassword(e.target.value)}
    />
  );
};

const ConfirmPasswordInput = ({ setConfirmPassword }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="confirmPassword"
      label="Confirme o password"
      type="password"
      id="confirmPassword"
      autoComplete="current-password"
      onChange={(e) => setConfirmPassword(e.target.value)}
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

const StoreNameInput = () => {
  return (
    <TextField
      autoComplete="fname"
      name="storeName"
      variant="outlined"
      required
      fullWidth
      id="storeName"
      label="Nome da loja"
      autoFocus
    />
  );
};

const CnpjInput = () => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="cnpj"
      label="CNPJ"
      type="text"
      id="cnpj"
    />
  );
};

export {
  FirstNameInput,
  LastNameInput,
  CpfInput,
  BirthDateInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
  SwitchInput,
  StoreNameInput,
  CnpjInput,
};
