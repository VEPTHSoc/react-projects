import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import './navbar.css';

const styles = makeStyles(theme =>({
    root:{
        '& >*':{
            margin:theme.spacing(1)
        },
        
    }
}))


const navBar =()=>{
    const classes= styles();
    return(
        <nav>
            <ul>
                <li>
                    <Button>Home</Button>
                    <Button href="#">Skills</Button>
                    <Button color="secondary">My links</Button>
                    <Button color="primary" href="#">Contact</Button>
                </li>
            </ul>
        </nav>
    )
}
export default navBar;