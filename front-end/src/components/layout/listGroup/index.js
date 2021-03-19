import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ListItemContainer } from './styles';
import { cleanUser } from '../../../utils/index';

const iconChooser = {
  inboxIcon: <InboxIcon />,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '150%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function NavBarDropDown({ onClick, navBarStructure, firstName }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useRouter();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {navBarStructure.map(({ url, name, icon }) => (
          <div key={name}>
            <ListItemLink onClick={onClick} href={url}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemLink>
            <Divider />
          </div>
        ))}
        {firstName ?
          (
            <div>
              <ListItemLink onClick={() => {
                cleanUser(dispatch, history, '/');
                if (onClick) return onClick();
              }}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary='Sair' />
              </ListItemLink>
            </div>
          )
          :
          null
        }
      </List>
    </div>
  );
};

const ListItemContent = ({ children, onClick }) => {
  return (
    <div>
        <ListItemContainer onClick={onClick}>
          {children}
        </ListItemContainer>
        <Divider />
    </div>
  );
}

export { NavBarDropDown, ListItemContent };
