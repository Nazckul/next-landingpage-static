import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <About />
      <Footer />
    </Layout>
  );
};
export default Index;
