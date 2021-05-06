import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'


const useStyles = makeStyles(theme => ({

    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'

    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]: {
            height: '2.5em',
            width: '2.5em'
        }
    },
    socialcontainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em',
        [theme.breakpoints.down('xs')]: {
            right: '0.6em'
        }
    }

}))

export default function Footer(props) {

    const classes = useStyles();

    return <footer className={classes.footer}>
        <Hidden mdDown>
            <Grid container justify='center' className={classes.mainContainer} >
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/' onClick={() => props.setValue(0)} className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/database' onClick={() => props.setValue(2)} className={classes.link}>
                            Database search
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/volunteers' onClick={() => props.setValue(3)} className={classes.link}>
                            Volunteers
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/help' onClick={() => props.setValue(4)} className={classes.link}>
                            Ask for help
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Hidden>
        <img
            alt='black decorative slash'
            src={footerAdornment}
            className={classes.adornment}
        />
        <Grid container justify='flex-end' className={classes.socialcontainer}>
            <Grid item component={"a"} href="https://www.facebook.com/profile.php?id=100036939404474" rel='noopener noreferrer' target='_blank'>
                <img alt='facebook logo' src={facebook} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href='https://twitter.com/sagnikghoshcr7' rel='noopener noreferrer' target='_blank'>
                <img alt='twitter logo' src={twitter} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href='https://www.instagram.com/sagnikghoshcr7' rel='noopener noreferrer' target='_blank'>
                <img alt='instagram logo' src={instagram} className={classes.icon} />
            </Grid>
        </Grid>
    </footer>
}
