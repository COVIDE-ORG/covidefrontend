
import Header from './components/header'
import Card from './components/SocitiesInvolved'
import Footer from './components/footer'
import { Helmet } from 'react-helmet';



function App() {
  return (
   <>
   <Helmet>
        <title>Societies Involved</title>
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
   </>
  );
}

export default App;
