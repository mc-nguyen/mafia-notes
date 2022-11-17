import React from "react";
import {auth, db} from "../database/firebase";
import {doc, getDoc} from "firebase/firestore";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Moderator",
            uid: null
        }
    }

    unsubscribe() {
        const unsub = auth.onAuthStateChanged(async (user) => {
            unsub()
            if (user) {
                const snap = await getDoc(doc(db, 'users', user.uid))
                this.setState({uid: user.uid})
                if (snap.exists()) {
                    console.log(snap.data())
                    this.setState(snap.data())
                }
            } else this.setState({name: "Moderator"})
        })
    }

    componentDidMount() {
        this.unsubscribe()
    }

    render() {
        return (
            <Card sx={{
                maxWidth: 500,
                minWidth: 200,
                mt: 2,
                mx: 'auto'
            }}>
                <CardMedia
                    component='img'
                    height='300'
                    image='images/mafia.png'
                    alt='Mafia Board Game wallpaper'
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        Hello, {this.state.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" align='justify'>
                        There are {100000} visits and {100} games created. Thank you so
                        much for visiting my page and choosing this application for
                        playing Mafia and Werewolf! <br/>
                        To play a new game or log-in before playing a new game,
                        please <strong>press</strong> on the button below!
                    </Typography>
                </CardContent>
                <CardActions sx={{ alignContent: 'right' }}>
                    <Container component='div' align='right' sx={{ pb: 1 }}>
                        <Button variant='contained' color='error'
                                sx={{ mt: 1,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        color: 'red',
                                        backgroundColor: 'white'
                                    }}}
                                href={(this.state.uid === null) ? '/log-in' : '/'}
                        >{(this.state.uid === null) ? "LOG-IN/SIGN-UP" : 'Create a Game'}</Button>
                    </Container>
                </CardActions>
                <CardMedia
                    component='img'
                    height='300'
                    image='images/werewolf.png'
                    alt='Werewolf Board Game wallpaper'
                />
            </Card>
        );
    }
}

export default HomePage;