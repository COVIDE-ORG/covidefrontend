
import Header from './components/header'
import Card from './components/techTeam'
import Footer from './components/footer'
import { Helmet } from 'react-helmet';


function App() {
  return (
   <>
   <Helmet>
        <title>Tech Team</title>
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
   </>
  );
}

export default App;
