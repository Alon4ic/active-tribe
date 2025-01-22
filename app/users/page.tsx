import React from 'react';
import TopBlock from './components/TopBlock';
import WorksBlock from './components/WorksBlock';
import DownloadApp from '@/components/DownloadApp';
import SelectBlock from './components/SelectBlock';
import Locations from './components/Locations';
import Workout from './components/Workout';
import UsersFAQ from './components/UsersFAQ';

export default function UsersPage() {
    return (
        <>
            <div className="overflow-hidden">
                <TopBlock />
            </div>
            <div className="bg-[#FCFBF5]">
                <WorksBlock />
            </div>
            <div className="bg-[#FCFBF5]">
                <DownloadApp />
            </div>
            <div>
                <SelectBlock />
            </div>
            <div className="bg-[#FCFBF5]">
                <Locations />
            </div>
            <div className="bg-white">
                <Workout />
            </div>
            <div id="faq" className="bg-[#EEEAE2]">
                <UsersFAQ />
            </div>
        </>
    );
}
