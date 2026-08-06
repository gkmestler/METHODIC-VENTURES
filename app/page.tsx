import Hero from '@/components/Hero'
// Stats bar temporarily hidden — restore by uncommenting the import and <Statistics /> below.
// import Statistics from '@/components/Statistics'
import AboutPE from '@/components/AboutPE'
import Leadership from '@/components/Leadership'
import Advisors from '@/components/Advisors'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Statistics /> */}
      <AboutPE />
      <Leadership />
      <Advisors />
    </main>
  )
}