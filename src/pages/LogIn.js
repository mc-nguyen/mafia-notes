import {
    Alert,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Link,
    TextField,
    Typography
} from "@mui/material";
import "@fontsource/aclonica"

import React, {Component} from 'react';
import {logIn} from "../database/account";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    async onLoggingIn() {
        this.setState({error: ''})
        const result = await logIn(this.state.email, this.state.password)
        if (result === false) this.setState({error: 'Unmatched email and password!'})
        else window.location.href = '/'
    }

    render() {
        return (
            <Card sx={{
                maxWidth: 500,
                m: 'auto',
                mt: 10,
                pt: 0,
                borderRadius: 2,
                background: 'linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div"
                                align='center'
                                sx={{ fontFamily: 'Aclonica' }}
                    >
                        Log In
                    </Typography>
                    {
                        this.state.error
                        &&
                        <Alert severity="error"
                               sx={{ py: 0, mb: 2 }}
                        >{this.state.error}</Alert>
                    }
                    <TextField id="email"
                               label="Email"
                               variant="outlined"
                               value={this.state.email}
                               onChange={(e)=>this.setState({email: e.target.value})}
                               fullWidth
                               size="small"
                               sx={{ pb: 1 }}
                               type='email'
                    />
                    <TextField id="password"
                               label="Password"
                               variant="outlined"
                               value={this.state.password}
                               onChange={(e)=>this.setState({password: e.target.value})}
                               fullWidth
                               size="small"
                               sx={{ pb: 1 }}
                               type='password'
                    />
                </CardContent>
                <CardActions>
                    <Container component='div' align='center' sx={{ pb: 1 }}>
                        <Link href="/sign-up"
                              color="white"
                              underline="hover"
                        >Doesn't Have an Account?</Link>
                        <br/>
                        <Button variant='contained' color='error'
                                sx={{ mt: 1,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        color: 'red',
                                        backgroundColor: 'white'
                                    }}}
                                onClick={()=>this.onLoggingIn()}
                        >LOG IN</Button>
                    </Container>
                </CardActions>
            </Card>
        );
    }
}

export default LogIn;