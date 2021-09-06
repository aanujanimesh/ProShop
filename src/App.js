import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./compents/Header";
import Footer from "./compents/Footer";

const App = () => {
    return (

        <div>
        <Header />
        <main>
            <Container>
                <h1>Welcome To ProShop</h1>
                <h2>Welcome</h2>
                <h3>Testing</h3>
            </Container>
        </main>
        <Footer/>
        </div>

    );
}

export default App;
