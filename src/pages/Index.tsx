import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CollectionSection from '@/components/CollectionSection';
import ManifestoSection from '@/components/ManifestoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <CollectionSection />
      <ManifestoSection />
      <Footer />
    </main>
  );
};

export default Index;
