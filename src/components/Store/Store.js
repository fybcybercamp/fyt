import "./Store.css";
import { useNavigate } from 'react-router';
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs
} from "firebase/firestore";
import { exportToCSV , formatDate} from "../../utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Store() {
  
  const [registrations, setRegistrations] = useState([]);
  let navigate = useNavigate();

  const handleExporter=()=>{
    exportToCSV(registrations);
  }
  
  useEffect(() => {

    if(localStorage.getItem('USER')==null)
      navigate("/");
    else{
      const auth = getAuth();
      signInWithEmailAndPassword(auth, localStorage.getItem(`USER`), localStorage.getItem(`PASS`))
        .then((userCredential) => {
          localStorage.setItem(`CRED`,userCredential)
        })
        .catch((error) => {
            console.log(error)
        });

      const getRegistrations = async () => {
      
          const registrationsStore = collection(db, "registration");
          const data = await getDocs(registrationsStore);
          setRegistrations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
      };
      try{
        getRegistrations();
      }catch(error){
        navigate("/");
        alert(`Sua sessão expirou. Faça login novamente para continuar.`)
      }

    }

  }, [navigate]);

  return (
    <div className="Store">

      <div className="StoreBar navbar">

        <img className='StoreBarLogo' src='img/logo_min.png' alt='logo'/>

        <span className='StoreSize'>Equipes: {registrations.length}</span>

        <span className='StoreExporter' onClick={handleExporter}>Exportar</span>

      </div>

      <div className="StoreContent row">
      {registrations.map((registration, key) => {
        return (

          <div className="card" key={key}>
          <div className="card-body">
            <h4 className="card-title">Equipe: {registration.squad}</h4>
            
            <h4 className="card-quantity">Inscritos: {registration.number}</h4>
            <hr/>
            <h5 className="card-member">Membros</h5>
            
            <div className="card-members">
              {registration.head_name!==''?
              (<ul><li>👽 {registration.head_name}</li><li>📧 {registration.head_email}</li></ul>):(<></>)}
              
              {registration.member_two_name!==''?
              (<ul><li>👽 {registration.member_two_name}</li><li>📧 {registration.member_two_email}</li></ul>):(<></>)}
              
              {registration.member_three_name!==''?
              (<ul><li>👽 {registration.member_three_name}</li><li>📧 {registration.member_three_email}</li></ul>):(<></>)}
              
              {registration.member_four_name!==''?
              (<ul><li>👽 {registration.member_four_name}</li><li>📧 {registration.member_four_email}</li></ul>):(<></>)}
              

              {registration.member_five_name!==''?
              (<ul><li>👽 {registration.member_five_name}</li><li>📧 {registration.member_five_email}</li></ul>):(<></>)}
              
              {registration.member_six_name!==''?
              (<ul><li>👽 {registration.member_six_name}</li><li>📧 {registration.member_six_email}</li></ul>):(<></>)}

            </div>
 
            <hr/>

            <h5 className="card-member">Data da inscrição: {formatDate(registration.moment.toDate())}</h5>
            

            </div>
          </div>
          
          
        );
      })}
      </div>

      
    </div>
  );
}

export default Store;
