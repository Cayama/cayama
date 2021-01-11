import Link from '../../infra/components/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CopyrightContainer } from './styles';

function Copyright() {
  return (
    <CopyrightContainer>
      <Typography variant="body2" color="textSecondary" align="center">Copyright ©</Typography>
      <Link color="inherit" href="https://cayama.com.br/">
        Cayama Marketplace
      </Link>
      <Typography variant="body2" color="textSecondary" align="center">
        {`${new Date().getFullYear()}.`}
      </Typography>
    </CopyrightContainer>
  );
}

export { Copyright };
