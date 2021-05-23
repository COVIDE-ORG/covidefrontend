
import Header from './components/header'
import Card from './components/volunteerTeam'
import Footer from './components/footer'
import { Helmet } from 'react-helmet';


function App() {
  return (
   <>
   <Helmet>
        <title>Volunteer Team</title>
        <meta
      name="description"
      content="A comprehensive resource list of Oxygen, Ambulance Services, Plasma, Remdesivir, Tocilizumab Hospital Beds in India. COVID 19 India Help- View all verified resources, ranging from Pan-India to State-wise COVID-19 Resource Lists. Verified leads for Plasma, Ambulance, Oxygen, Remdesivir and Hospital Beds to help in COVID 19 emergencies in India."
    />
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
   </>
  );
}

export default App;
