
import Header from './components/header'
import Card from './components/volunteerTeam'
import Footer from './components/footer'
import { Helmet } from 'react-helmet';


function App() {
  return (
   <>
   <Helmet>
        <title>Volunteer Team</title>
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
   </>
  );
}

export default App;
