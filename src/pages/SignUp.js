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
import {register} from "../database/account";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            error: ''
        }
    }

    async onRegister() {
        if (this.state.password !== this.state.passwordConfirmation) {
            this.setState({error: "Unmatched passwords!"})
        } else
            try {
                this.setState({error: ""})
                const result = await register(this.state.name, this.state.email, this.state.password)
                if (result===false) this.setState({error: "Cannot create a user with existing email!"})
                else window.location.href = '/'
            } catch (e) {
                console.log(e)
                this.setState({error: "Failed to sign up!"})
            }
    }

    render() {
        return (
            <Card sx={{
                maxWidth: 500,
                m: 'auto',
                mt: 10,
                pt: 0,
                borderRadius: 2,
                border: 1,
                background: 'linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div"
                                align='center'
                                sx={{ fontFamily: 'Aclonica' }}
                    >
                        Sign Up
                    </Typography>
                    {
                        this.state.error
                        &&
                        <Alert severity="error"
                               sx={{ py: 0, mb: 2 }}
                        >{this.state.error}</Alert>
                    }
                    <TextField id="name"
                               label="Name"
                               variant="outlined"
                               value={this.state.name}
                               onChange={(e)=>this.setState({name: e.target.value})}
                               fullWidth
                               size="small"
                               sx={{ pb: 1 }}
                               required
                    />
                    <TextField id="email"
                               label="Email"
                               variant="outlined"
                               type='email'
                               value={this.state.email}
                               onChange={(e)=>this.setState({email: e.target.value})}
                               fullWidth
                               size="small"
                               sx={{ pb: 1 }}
                               required
                    />
                    <TextField id="password"
                               label="Password"
                               variant="outlined"
                               value={this.state.password}
                               type='password'
                               onChange={(e)=>this.setState({password: e.target.value})}
                               fullWidth
                               size="small"
                               sx={{ pb: 1 }}
                               required
                    />
                    <TextField id="password_confirmation"
                               label="Password Confirmation"
                               variant="outlined"
                               type='password'
                               value={this.state.passwordConfirmation}
                               onChange={(e)=>this.setState({passwordConfirmation: e.target.value})}
                               fullWidth
                               size="small"
                               sx={{ pb: 1 }}
                               required
                    />
                </CardContent>
                <CardActions>
                    <Container component='div' align='center' sx={{ pb: 1 }}>
                        <Link href="/log-in"
                              color="white"
                              underline="hover"
                        >Already Have an Acccount?</Link>
                        <br/>
                        <Button variant='contained' color='error'
                                sx={{ mt: 1,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        color: 'red',
                                        backgroundColor: 'white'
                                    }}}
                                onClick={()=>this.onRegister()}
                        >REGISTER</Button>
                    </Container>
                </CardActions>
            </Card>
        );
    }
}

export default SignUp;