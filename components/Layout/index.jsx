import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

export default function index({ children }) {
    return (
        <div className="bg-body">
            <Header />
            <div className="pt-[140px]">
                {children}
            </div>
            <Footer />
        </div>
    )
}
