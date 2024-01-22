import NavBar from './NavBar';
import MainLanding from './MainLanding';
import AboutMe from './AboutMe';
import Projects from './Blogs';
import Blogs from './Blogs';
import Bars from './Bars';
import Transition from './Transition';

export default function Home() {

  return (
    <>
      <NavBar />

      <MainLanding />

      <Bars emaildisp="hidden" icons="" position="fixed flex flex-col bottom-0 ml-[2.75rem] items-center gap-8"/>

      <Bars emaildisp="text-[#CCD6F6] rotate-90 mb-20 tracking-widest font-thin text-sm" icons="hidden" position="fixed flex flex-col bottom-0 right-0 -mr-[1rem] items-center gap-8"/>

      <Transition delay={0.3} >

        <AboutMe />
      
      </Transition>

      <Transition delay={0.5} >

        <Blogs />

      </Transition>




    </>
  )
}
