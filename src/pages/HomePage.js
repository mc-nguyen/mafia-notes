import React from "react";
import {auth, db} from "../database/firebase";
import {doc, getDoc} from "firebase/firestore";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "NONE"
        }
    }

    unsubscribe() {
        const unsub = auth.onAuthStateChanged(async (user) => {
            unsub()
            if (user) {
                const snap = await getDoc(doc(db, 'users', user.uid))
                if (snap.exists()) {
                    console.log(snap.data())
                    this.setState(snap.data())
                }
            } else this.setState({name: "NONE"})
        })
    }

    componentDidMount() {
        this.unsubscribe()
    }

    render() {
        return (
            <h1>Hello, {this.state.name}</h1>
        );
    }
}

export default HomePage;