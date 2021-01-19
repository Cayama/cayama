import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const MoreInfoCheckBox = ({ setNewsAcceptance, checked }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => setNewsAcceptance(!checked)}
          value="allowExtraEmails"
          color="primary"
        />
      }
      label="Quero receber informações, propagandas e novidades via email."
    />
  );
};

const PrivacyPolicyCheckBox = ({ setPrivacyAndTerms, checked }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => setPrivacyAndTerms(!checked)}
          value="privacyPolicy"
          color="primary"
        />
      }
      label={
        <div>
          <span>Concordo com as </span>
          <a href={"/privacy-policy"}>políticas de privacidade</a>
          <span> e com os </span>
          <a href={"/terms-of-use"}>termos de uso</a>
          <span> da Cayama </span>
        </div>
      }
    />
  );
};

export { MoreInfoCheckBox, PrivacyPolicyCheckBox };
