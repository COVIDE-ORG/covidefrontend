
import Header from './components/header'
import Footer from './components/footer'
import Card from "./components/contribute"
import { Helmet } from 'react-helmet';



function App() {
  return (
   <>
   <Helmet>
        <title>Contribute</title>
        <meta name="description" content="Contribute towards the COVID 19 Relief efforts in India. Contribute by providing verified leads in India for Ambulance, Oxygen, Plasma, Medicine, Hospital Beds and Volunteers. Contribute by Helping us help people through these tough times of COVID 19 in India." />
    </Helmet>
      <Header/>
      <Card/>
      {/* <iframe title="Volunteer Form" src="https://docs.google.com/forms/d/e/1FAIpQLSfF6M5ID-Az0rM9IEPIzJZq3RJ6rY1S8B1wuhmuu25hwhu6sg/viewform" width="100%" height="2300" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe> */}
      <Footer/>
   </>
  );
}

export default App;
