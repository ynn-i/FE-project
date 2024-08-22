import React from 'react';
import { useState } from 'react';
import './App.css';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';

const GlobalStyle = createGlobalStyle`
    ${reset}
    `;

function App() {
    const [showModal, setShowModal] = useState(false);

    const madalOpen = () => {
        setShowModal(true);
    };
    const madalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <GlobalStyle />
            <Header />
            <Main modalOpen={madalOpen} />
            <Footer />
            {showModal && <Modal modalClose={madalClose} />}
        </>
    );
}
export default App;
