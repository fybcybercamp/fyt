import "./Store.css";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs
} from "firebase/firestore";


function Store() {
  
  const [registrations, setRegistrations] = useState([]);
  
  useEffect(() => {
    const getRegistrations = async () => {
      const registrationsStore = collection(db, "registration");
      const data = await getDocs(registrationsStore);
      setRegistrations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRegistrations();
    
  }, []);

  return (
    <div className="Store">
      {registrations.map((registration) => {
        return (
          <div>
            {" "}
            <h1>Squad: {registration.squad}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Store;
