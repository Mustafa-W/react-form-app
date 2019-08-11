import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

export class Success extends Component {

    render() {

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank You For Your Permission</h1>
                    <p>You Will Get an email with furthure instruction</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
