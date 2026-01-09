import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TechServices from "@/components/TechServices";
import Testimonials from "@/components/Testimonials";
import PathCarousel from "@/components/PathCarousel";
import BlogInsights from "@/components/BlogInsights";
import TeamSection from "@/components/TeamSection";
// import DevOpsSection from "@/components/DevOpsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <TechServices />
        <Testimonials />
        <PathCarousel />
        {/* <BlogInsights /> */}
        <TeamSection />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
