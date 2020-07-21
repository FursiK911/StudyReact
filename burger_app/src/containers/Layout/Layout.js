import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css'; //чтобы воспользоваться классами, нужно дописать .module.css к файлу

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;