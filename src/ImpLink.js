
import Header from './components/header'
import Card from './components/ImpLinksCard'
import Footer from './components/footer'
import { Helmet } from 'react-helmet';



function App() {
  return (
   <>
   <Helmet>
        <title>Important Links</title>
        <meta name="description" content="Important Links for COVID 19 India Resources. Find the most important links for Ambulance, Plasma, Oxygen, Medicine, COVID 19 Helpline and Hospital Beds. All the Important links for COVID 19 in India compiled in a single place." />
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
   </>
  );
}

export default App;
