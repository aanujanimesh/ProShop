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
            </Container>
        </main>
        <Footer/>
        </div>

    );
}

export default App;
