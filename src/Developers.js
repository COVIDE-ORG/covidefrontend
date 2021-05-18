
import Header from './components/header'
import Card from './components/DevelopersCard'
import Footer from './components/footer'
import { Helmet } from 'react-helmet';



function App() {
  return (
   <>
   <Helmet>
        <title>Our Team</title>
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
   </>
  );
}

export default App;
