
import Header from './components/header'
import Card from './components/ImpLinksCard'
import Footer from './components/footer'
import { Helmet } from 'react-helmet';



function App() {
  return (
   <>
   <Helmet>
        <title>Important Links</title>
        <meta name="description" content="This page has comprehensive COVID-19 Resource Link. Users can navigate to more specific information, including those we have selected here." />
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
   </>
  );
}

export default App;
