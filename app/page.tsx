import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Change from './components/Change/index';
// import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Expert from './components/Expert/index';
// import Wework from './components/Nutritionist/index';
// import Ourteam from './components/Ourteam/index';
import Cook from './components/Cook/index';
import Featured from './components/Featured/index';
// import Manage from './components/Manage/index';
import Gallery from './components/Gallery/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';



export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Change />
      <Digital />
      <Beliefs />
      <Expert />
      {/* <Wework /> */}
      <Cook />
      {/* <Ourteam /> */}
      {/* <Featured /> */}
      {/* <Manage /> */}
      <Gallery />
      <FAQ />
      <Testimonials />
      <Articles />
      <Joinus />
      <Insta />
    </main>
  )
}
