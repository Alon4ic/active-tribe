import BussinesCard from '@/components/BussinesCard';
import DownloadApp from '@/components/DownloadApp';
import FAQ from '@/components/FAQ';

import HowItWorks from '@/components/HowItWorks';
import ProvidBlockHome from '@/components/ProvidBlockHome';
import Structure from '@/components/Structure';
import UsersBlockHome from '@/components/UsersBlockHome';


export default function Home() {
    return (
        <>
            <main>
                <div className="lg:flex block">
                    <ProvidBlockHome />
                    <UsersBlockHome />
                </div>
                <div id="works" className="bg-[#FCFBF5]">
                    <HowItWorks />
                </div>
                <div className="bg-[#FCFBF5]">
                    <DownloadApp />
                </div>
                <div id="about" className="bg-white">
                    <BussinesCard />
                </div>
                <div>
                    <Structure />
                </div>
                <div id="faq" className="bg-[#EEEAE2]">
                    <FAQ />
                </div>
            </main>
        </>
    );
}
