import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import FeauturesSection from "./components/sections/FeaturesSection/FeaturesSection";
import TopNFTsSection from "./components/sections/TopNFTsSection/TopNFTsSection";
import JoinUsSection from "./components/sections/JoinUsSection/JoinUsSection";

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      {/* <HeroSection /> */}
      <main className="content">
        <FeauturesSection />
        <TopNFTsSection />
        <JoinUsSection />
      </main>
      <Footer />
    </div>

    // <div className="appWrapper">
    //   <main className="content">
    //     <Header />
    //     <HeroSection />
    //     <Feautures />
    //     <TopNFTs />
    //     <h1>Join US 03</h1>
    //     <Footer />
    //   </main>
    // </div>
  );
};

export default App;
