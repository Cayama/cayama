import Link from '../../infra/components/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CopyrightContainer } from './styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <CopyrightContainer>
        {'Copyright ©'}
        <Link color="inherit" href="https://cayama.com.br/">
          Cayama Marketplace
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </CopyrightContainer>
    </Typography>
  );
}

export { Copyright };
