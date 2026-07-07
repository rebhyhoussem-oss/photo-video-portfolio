import { Navbar } from '@/sections/Navbar'
import { Hero } from '@/sections/Hero'
import { SocialReels } from '@/sections/SocialReels'
import { BrandCampaigns } from '@/sections/BrandCampaigns'
import { Photos } from '@/sections/Photos'
import { Footer } from '@/sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialReels />
        <BrandCampaigns />
        <Photos />
      </main>
      <Footer />
    </>
  )
}
