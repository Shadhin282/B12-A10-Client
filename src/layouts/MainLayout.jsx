import React from 'react';
import  Header  from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header>
            <Header></Header>
            </header>
            <main>
                Hello

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;