import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Catalog } from './components/Catalog.jsx';
import { Inspiration } from './components/Inspiration.jsx';
import { Services } from './components/Services.jsx';
import { Contact } from './components/Contact.jsx';
import { WhatsAppButton } from './components/WhatsAppButton.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Inspiration />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
