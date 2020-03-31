import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideBar from '../Navigation/SideBar/SideBar';

/**
 * This class provides a layout for the entire burger builder application
 * and handles the state on whether to show the sidebar
 */
class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    SideBarClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    SideBarOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    render() {
        return(
        <Aux>
            <SideBar open={this.state.showSideDrawer} closed={this.SideBarClosedHandler}/>
            <Toolbar open={this.SideBarOpenHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    )};
}

export default Layout; 