import React, {Component} from 'react';
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material"
import {auth} from "../database/firebase";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchor: null,
            auth: false
        }
    }

    unsubscribe() {
        const unsub = auth.onAuthStateChanged(async (user) => {
            unsub()
            if (user) {
                this.setState({auth: true})
            } else this.setState({auth: false})
        })
    }

    componentDidMount() {
        this.unsubscribe()
    }

    render() {
        return (
            <AppBar position="static" color='error'>
                <Toolbar variant='dense'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to Mafia Notes!
                    </Typography>
                    {this.state.auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={(e)=>this.setState({anchor: e.target})}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.state.anchor}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(this.state.anchor)}
                                onClose={()=>this.setState({anchor: null})}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>My Games</MenuItem>
                                <MenuItem>***Log Out***</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;