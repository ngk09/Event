import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Anniversary from "@/components/Anniversary";
import ConveyorsMessage from "@/components/ConveyorsMessage"; // New Import
import FeatureSections from "@/components/FeatureSections";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Intro />
      <Hero />
      <Anniversary />
     
      <FeatureSections />
       <ConveyorsMessage /> 
       <Footer />
    </main>
  );
}