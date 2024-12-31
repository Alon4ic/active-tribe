import BussinesCard from '@/components/BussinesCard';
import Contact from '@/components/Contact';
import Download from '@/components/Download';
import DownloadApp from '@/components/DownloadApp';
import FAQ from '@/components/FAQ';

import HowItWorks from '@/components/HowItWorks';
import InstagramLinks from '@/components/InstagramLinks';
import ProvidBlockHome from '@/components/ProvidBlockHome';
import Structure from '@/components/Structure';
import UsersBlockHome from '@/components/UsersBlockHome';

export default function Home() {
    return (
        <main>
            <div className="lg:flex block">
                <ProvidBlockHome />
                <UsersBlockHome />
            </div>
            <div className="bg-[#FCFBF5]">
                <HowItWorks />
            </div>
            <div className="bg-[#FCFBF5]">
                <DownloadApp />
            </div>
            <div className="bg-white">
                <BussinesCard />
            </div>
            <div>
                <Structure />
            </div>
            <div id='faq' className="bg-[#EEEAE2]">
                <FAQ />
            </div>
            <div id='contact' className="bg-white lg:mb-[100px] mb-[50px]">
                <Contact />
            </div>
            <div className="bg-[#EEEAE2]">
                <Download />
            </div>
            <div className="bg-[#0D0D0D]">
                <InstagramLinks />
            </div>
        </main>
    );
}
