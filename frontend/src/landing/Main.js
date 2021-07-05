import Banner from './Banner';
import How from './How';
import About from './About';
import InTouch from './InTouch';
import Footer from './Footer';
import './Main.css'



export default function Main() {
  return (
    <div class="container">
      <Banner />
      <How />
      <About />
      <InTouch />
      <Footer />
    </div>
  );
}
