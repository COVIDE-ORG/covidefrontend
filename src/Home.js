import {React,useEffect} from 'react';
import Header from './components/header'
import Card from './components/homecard'
import Footer from './components/footer'
import Cookies from 'universal-cookie';
import './index.css';
import { Helmet } from 'react-helmet';


function App() {


  const cookies = new Cookies();

  useEffect(()=>{
    openModal();
  })
  const openModal = () => {
    const checkAgreement = cookies.get('Agree');
    if(checkAgreement !== 'true'){ 
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("backdrop").style.opacity = 0.8
    document.getElementById("exampleModal").style.display = "block"
    document.getElementById("exampleModal").classList.add("show")}
    else{
      return;
    }
}
const closeModal = () => {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").classList.remove("show")
    cookies.set('Agree', true, { path: '/' });
}
  return (
   <>
   <Helmet>
        <title>Covid Resources</title>
        <meta
      name="description"
      content="A comprehensive resource list of Oxygen, Ambulance Services, Plasma, Remdesivir, Tocilizumab Hospital Beds in India. COVID 19 India Help- View all verified resources, ranging from Pan-India to State-wise COVID-19 Resource Lists. Verified leads for Plasma, Ambulance, Oxygen, Remdesivir and Hospital Beds to help in COVID 19 emergencies in India."
    />
    </Helmet>
      <Header/>
      <Card/>
      <Footer/>
      <div className="modal fade" style={{zIndex: "999999"}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
    role="dialog">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header justify-content-center">
               <center> <h5 className="modal-title  text-center" style={{color: "#16C799"}} id="exampleModalLabel"><i className="fas fa-exclamation-circle"></i>&nbsp;Disclaimer</h5></center>
                
            </div>
            <div className="modal-body">
            <p style={{color: "gray"}}>
            Welcome to TPH’s portal for COVID-19 resources. By using the website, you agree and understand that any information provided in the website on an as-is basis may change anytime without any notification or intimation. You also understand that the resources being provided are crowdsourced and TPH or any of its members do not take responsibility for the truth of any information provided in the website. <br/><br/>

TPH acts just as a platform to help people find the resources. Also, as a word of caution, we strongly recommend not using online payments or advance payments for any resource or service.<br/><br/>

People using the platform are advised to use caution and do their own research and due diligence before using the resources provided. <br/><br/>

The terms mentioned above can change without any imitation or notification. By clicking on the Accept button, you agree to understand the risks involved and agree not to proceed with legal action against TPH, any of its members and the people involved in the making of this website for the resources provided. <br/><br/>
            </p>
            </div>
            <div className="modal-footer justify-content-center">
                <button type="button" id ="agreebutton" className="btn btn-warning" style={{colo:"#16C799"}} onClick={closeModal}>Agree and Proceed</button>
                
            </div>
        </div>
    </div>
</div>
<div className="modal-backdrop fade show" id="backdrop" style={{display: "none",zIndex: "99999"}}></div>
   </>
  );
}

export default App;
