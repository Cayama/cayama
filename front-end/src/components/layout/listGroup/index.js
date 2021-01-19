import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

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

function SimpleList({ onClick, navBarStructure }) {
  const classes = useStyles();

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
      </List>
    </div>
  );
}

export { SimpleList };
