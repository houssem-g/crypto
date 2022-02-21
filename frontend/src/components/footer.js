
import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Typography } from "@material-ui/core";

import Social from "./social";

const useStyles = makeStyles((theme) => ({
  footer: {
    
    backgroundColor: "#3f51b5",
    width: `100%`,
    overflow: "hidden",
    marginTop: "8em",
    marginBottom: "0px",
    
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Social />
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/houssem-g/"
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy;Houssem Gharsalli
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;