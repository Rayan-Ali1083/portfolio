import NavBar from './NavBar';
import MainLanding from './MainLanding';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Blogs from './Blogs';
import Bars from './Bars';
import Transition from './Transition';

export default function Home() {

  return (
    <>
      <NavBar />

      <MainLanding />

      <Bars emaildisp="hidden" icons="block" position="hidden lg:fixed lg:flex lg:flex-col lg:bottom-0 lg:ml-[2.75rem] lg:items-center lg:gap-8" bar="block bg-[#CCD6F6] w-[1px] h-24"/>

      <Bars emaildisp="hidden lg:block text-[#CCD6F6] rotate-90 mb-20 tracking-widest font-thin text-sm" icons="hidden" position="fixed flex flex-col bottom-0 right-0 -mr-[1rem] items-center gap-8" bar="block bg-[#CCD6F6] w-[1px] h-24" />

      <Transition delay={0.4} >

        <AboutMe />

      </Transition>

      <Transition delay={0.4} >

        <Projects />

      </Transition>

      {/* <Transition delay={0.4} >

        <Blogs />

      </Transition> */}




    </>
  )
}
