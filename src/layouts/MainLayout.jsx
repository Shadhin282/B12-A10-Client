import React from 'react';
import  Header  from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <header className='bg-background shadow-md sticky bg-white   dark:bg-gray-900 top-0 z-50'>
            <Header></Header>
            </header>
            <main className=''>
               <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;