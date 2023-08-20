import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Feautures from "./components/Features/Features";
import TopNFTs from "./components/TopNFTs/TopNFTs";

const App = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <main className='content'>
        <HeroSection/>
        <Feautures/>
        <TopNFTs/>
        <h1>Join US 03</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
