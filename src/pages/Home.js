import React from 'react';
import HomeNav from '../components/Navigation';
import StackEvent from '../components/StackEvent';

function Home() {

    return (
        <>
            <header>
                <HomeNav />
            </header>
            <body>
                <StackEvent />
            </body>
        </>
    );
}

export default Home;
