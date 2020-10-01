import React from 'react'
import '../styles/layout.scss'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
    return (
        <>
            <div className="container">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
