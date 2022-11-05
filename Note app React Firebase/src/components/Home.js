import React from 'react'
import { NavBar } from './NavBar';
import { Landing } from './Landing';

export function Home() {
    return (
        <div className="w-auto h-screen">
            <NavBar/>
            <Landing/>
        </div>
    )
}
