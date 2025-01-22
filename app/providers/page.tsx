import React from 'react';
import TopBlock from './components/TopBlock';
import Orders from './components/Orders';
import About from './components/About';
import Features from './components/Features';
import Select from './components/Select';
export default function ProvidersPage() {
    return (
        <>
            <div className="overflow-hidden">
                <TopBlock />
            </div>
            <div>
                <Orders />
            </div>
            <div>
                <About />
            </div>
            <div className="bg-metallic">
                <Features />
            </div>
            <div>
                <Select />
            </div>
        </>
    );
}
