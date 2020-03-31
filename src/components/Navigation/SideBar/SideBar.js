import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideBar.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideBar = (props) => {
    //logic for open/close animation
    let attachedClasses = [classes.SideBar, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideBar, classes.Open];
    }
    return(
         <Aux>
             <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <NavItems/>
        </div>
         </Aux>
        
    );
};

export default SideBar;