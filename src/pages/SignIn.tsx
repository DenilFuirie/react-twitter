import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core/";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%'
    },
    blueSideListInfo: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
        }
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
        color: '#1DA1F2',
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 20,
    }

}));

const SignIn = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <ul className={classes.blueSideListInfo}>
                    <li>

                        <Typography variant="h6"><SearchIcon />Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li>
                        <Typography variant="h6">Узнайте, о чем говорят в мире.</Typography>
                    </li>
                    <li>
                        <Typography variant="h6">Присоединяйтесь к общению.</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">Узнайте, что происходит в мире прям сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прям сейчас!</b></Typography> <br />
                    <Button style={{ marginBottom: 20, color: '#fff'}} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth>Войти</Button>
                </div>
            </section>
        </div>
    )
};

export default SignIn;