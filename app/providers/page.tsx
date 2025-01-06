import React from 'react'
import TopBlock from './components/TopBlock'
import Orders from './components/Orders'
import About from './components/About'
import Features from './components/Features'
import Select from './components/Select'
import Contact from '@/components/Contact'
import Download from '@/components/Download'
import InstagramLinks from '@/components/InstagramLinks'

export default function ProvidersPage() {
  return (
      <main>
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
          <div id="contact" className="bg-white lg:mb-[100px] mb-[50px]">
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
