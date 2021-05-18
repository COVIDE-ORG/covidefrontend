
import Header from './components/header'
import Footer from './components/footer'
import AFH from './components/AFHcard'
import {Helmet} from "react-helmet";

function App() {
  return (
   <>
   <Helmet>
        <title>Ask for Help</title>
        <meta name="description" content="Provide all your details and requirements and we will be contacting you soon" />
    </Helmet>
      <Header/>
          <AFH/>
      <Footer/>
   </>
  );
}

export default App;
