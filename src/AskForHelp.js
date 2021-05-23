
import Header from './components/header'
import Footer from './components/footer'
import AFH from './components/AFHcard'
import {Helmet} from "react-helmet";

function App() {
  return (
   <>
   <Helmet>
        <title>Ask for Help</title>
        <meta name="description" content="Ask for Help for COVID 19 in India. Ask for Help in getting Ambulances, Plasma, Oxygen, Hospital Beds, Medicines and Helpline Numbers. Ask for COVID 19 India Help." />
    </Helmet>
      <Header/>
          <AFH/>
      <Footer/>
   </>
  );
}

export default App;
