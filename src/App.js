import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cards2 from './components/Card2/Cards2'
import Service from './components/service/Service'
import Cards from './components/card/Cards'
import EmailPage from './components/EmailPage'
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Cards2 />
            <Service />
            <Cards />
            <EmailPage />
            <Footer />
        </div>
    )
}

export default App
