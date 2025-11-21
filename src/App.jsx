import Hero from './components/Hero';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-['Manrope',ui-sans-serif,system-ui]">
      <Hero />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App
