import Advantages from '../../features/adntages/Advantages';
import Banner from '../../features/banner/Banner';
import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';
import HeroSection from '../../features/hero-section/HeroSection';
import HowItWorks from '../../features/how-it-works/HowItWorks';

const HomePage: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <HeroSection />
        <Banner />
        <HowItWorks />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
