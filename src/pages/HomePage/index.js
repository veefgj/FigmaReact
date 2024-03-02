import Header from "~/components/Header";
import Learn from "~/components/Learn";
import MobileApp from "~/components/MobileApp";
import Platforms from "~/components/Platforms";
import Footer from "~/components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Platforms />
      <MobileApp />
      <Learn />
      <Footer />
    </>
  );
}

export default HomePage;
