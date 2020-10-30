import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, Grid, Link } from '@material-ui/core';
import { Map } from 'components/common/Map';
import { Legend } from 'components/legends/Legend';
import UserMenu from 'components/views/UserMenu';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  navBar: {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },
  logo: {
    width: 'auto',
    height: '36px',
    '& img': {
      width: 'auto',
      height: '100%',
    },
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 24px',
    borderBottom: `2px solid transparent`,
    color: theme.palette.common.white,
    opacity: '0.75',
    transition: 'opacity 0.25s ease, border 0.25s ease',
    '&.active, &:hover': {
      opacity: 1,
      borderBottom: `2px solid ${theme.palette.common.white}`,
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'start',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  sidebarWrapper: {
    position: 'relative',
    width: '350px',
    height: '100%',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 2px 8px 0 rgba(44, 48, 50, 0.2)',
    overflow: 'auto',
    zIndex: 1,
  },
  mapWrapper: {
    position: 'relative',
    width: 'calc(100% - 350px)',
    height: '100%',
    overflow: 'hidden',
  },
  legend: {
    position: 'absolute',
    bottom: theme.spacing(3.5),
    right: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container direction='column' className={classes.grid}>
      <CssBaseline />
      <AppBar position='static' className={classes.navBar}>
        <Toolbar>
          <Link href='datasets' className={classes.logo}>
            <img src='/logo.svg' alt='CARTO logo' />
          </Link>
          <Grid
            container
            justify='center'
            alignItems='flex-end'
            style={{ height: '100%' }}
          >
            <Link
              component={NavLink}
              to='/stores'
              underline='none'
              variant='button'
              className={classes.navLink}
            >
              Stores
            </Link>
            <Link
              component={NavLink}
              to='/kpi'
              underline='none'
              variant='button'
              className={classes.navLink}
            >
              KPI
            </Link>
            <Link
              component={NavLink}
              to='/datasets'
              underline='none'
              variant='button'
              className={classes.navLink}
            >
              Datasets
            </Link>
          </Grid>
          <Grid container justify='flex-end' style={{ flexGrow: 1 }}>
            <Grid item>
              <UserMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container direction='row' className={classes.contentWrapper}>
        <Grid item className={classes.sidebarWrapper}>
          <Outlet />
        </Grid>
        <Grid item className={classes.mapWrapper}>
          <Map />
          <Legend className={classes.legend} />
        </Grid>
      </Grid>
    </Grid>
  );
}
