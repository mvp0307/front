import Banner from '../../features/banner/Banner';
import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';
import HeroSection from '../../features/hero-section/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <HeroSection />
        <Banner />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
