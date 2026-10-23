import HeroSection from '../components/HeroSection';
import QuoteSection from '../components/QuoteSection';
import SmallBitesSection from '../components/SmallBitesSection';
import WeCareSection from '../components/WeCareSection';
import FeaturesSection from '../components/FeaturesSection';
import InstagramGallerySection from '../components/InstagramGallerySection';
import BookTableSection from '../components/BookTableSection';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <QuoteSection />
      <SmallBitesSection/>
      <WeCareSection/>
      <FeaturesSection/>
      <InstagramGallerySection/>
      <BookTableSection />
    </main>
  );
}