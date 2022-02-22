import './Welcome.css';
import { useNavigate } from 'react-router';


function Welcome() {

  let navigate = useNavigate();


  const handleRegisterRedirect = () => {
    navigate("/fyt/register");
  }

  const handleLoginRedirect = () => {
    navigate("/fyt/login");
  }

  return (
    <section className="h-100 gradient-form Welcome">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src="/fyt/img/logo.png" alt="logo"/>
                      <h4 className="mt-1 mb-5 pb-1">Cybercamp Fit Your Business</h4>
                      <p>Bem vindo a plataforma de inscrições!</p>

                    </div>

                    

                      <div className="row WelcomeButtonRow">
                      <button className="btn btn-block btn-primary gradient-custom-2" onClick={handleRegisterRedirect} type="button">Realizar inscrição</button>
                      </div>

                      <div className="row WelcomeButtonRow">
                      <button className="btn btn-block btn-primary gradient-custom-2" onClick={handleLoginRedirect} type="button">Gerenciar inscrições</button>
                      </div>

                     

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">O Cybercamp</h4>
                    <p className="small mb-0">O Fit Your Thinking é um programa de parceria que visa a criação de soluções inovadoras para aperfeiçoar a área dos meios de pagamentos digitais. Por meio do certame, serão dadas às equipes condições para que elas possam desenvolver um software de aplicação web que se traduza em uma plataforma bancária ou uma Application Programming Interface (API) de serviços bancários.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default Welcome;
