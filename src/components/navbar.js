import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function dynamicProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    
  };
}
// ici on creer un objet js contenant du css qui sera appelé par chaque element
// la fonction makeStyles permet d'utiliser du js pour styler les composants
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
    backgroundColor: "#3f51b5",
    padding: "15px 0px 10px 0px",
  },
  logo: {

    color: "white",
    marginRight: theme.spacing(2),
    backgroundColor: "#3f51b5",
  },
  parentDiv: {
    alignItems: "center",
    display:"flex",
    backgroundColor: "#3f51b5",
    
  },
  buttonDiv: {
      color: "white",
      
      backgroundColor: "#3f51b5",
  },
  buttonParentDiv: {
    color: "white",
    marginRight: theme.spacing(2),
    backgroundColor: "#3f51b5",
    alignItems: "center",
    display:"flex",
}
}));
const styles= {
    hideBorder: {
      boxShadow: "none",
      marginLeft: "20vh",
    },
  };

// Navbar is the exported component
const Navbar = ({titles}) => {
    // useStyles: it is a hook, which allows you to consume the styles of your application in a simple, clean, and efficient way
  const classes = useStyles();
  // useState est un hook intégré qui peut être importé depuis le package react. Il vous permet d'ajouter un état à vos composants fonctionnels
  // setValue est une méthode qui sera appeler pour le mettre à jout
  // que ce qu'un hook : https://fr.reactjs.org/docs/hooks-state.html
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const listOfTab = []
  {titles.forEach((val, ind) => {
    
    listOfTab.push(<Tab label={val} {...dynamicProps(ind)}/>)
    })}
  return (
    <div className={classes.parentDiv}>
        <div className={classes.logo}>
           <h2>Coindinar</h2> 
        </div> 
        <div className={classes.root}>
        <AppBar position="static" style={styles.hideBorder}>
            
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="secondary">
            {listOfTab}
            </Tabs>
        </AppBar>
        </div>
        <div className={classes.buttonParentDiv}>
            <div className={classes.buttonDiv}>
                <Button color="inherit">Login</Button>
            </div>
            <div className={classes.buttonDiv}>
                <Button color="inherit">Sign up</Button>
            </div>
        </div>
    </div>
  );
}

export default Navbar;