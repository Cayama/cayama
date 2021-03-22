import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
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
      // InputLabelProps={{
      //   shrink: true,formControlLabel
      // }}
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

const StoreNameInput = ({ setStoreName }) => {
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
      onChange={(e) => setStoreName(e.target.value)}
    />
  );
};

const CnpjInput = ({ setCnpj }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="cnpj"
      label="CNPJ"
      type="text"
      id="cnpj"
      onChange={(e) => setCnpj(e.target.value)}
    />
  );
};

const ProductNameInput = ({ setProductName }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="name"
      label="Nome do produto"
      type="text"
      id="name"
      onChange={(e) => setProductName(e.target.value)}
    />
  );
};

const ProductColorInput = ({ setProductColor }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="color"
      label="Cores do produto"
      type="text"
      id="color"
      onChange={(e) => setProductColor(e.target.value)}
    />
  );
};

const ProductBrandInput = ({ setProductBrand }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      name="brand"
      label="Marca"
      type="text"
      id="brand"
      onChange={(e) => setProductBrand(e.target.value)}
    />
  );
};

const ProductDescriptionInput = ({ setDescription }) => {
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
      onChange={(e) => setDescription(e.target.value)}
    />
  );
};

const CustomInput = ({ name, id, setInput, input, label }) => {
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
  ProductNameInput,
  ProductColorInput,
  ProductBrandInput,
  ProductDescriptionInput,
  CustomInput,
  PriceInput,
};
