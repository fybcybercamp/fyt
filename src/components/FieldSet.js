import Field from "./Field";
import { FieldHelper, memberRoles, memberInstitutions } from "../utils";


function FieldSet(props) {

  const {isRequired} = props;

  return (
    <>
    <h4 className="mb-3">{props.title}</h4>
            
            <Field isRequired={isRequired} label='Nome Completo' feedbackMessage= 'Informar o nome completo é obrigatório.' className='member_name' type={FieldHelper.INPUT}/>
            
            <Field isRequired={isRequired} label='CPF' feedbackMessage= 'Informar o CPF é obrigatório.' className='member_id' type={FieldHelper.INPUT}/>
            
            <Field isRequired={isRequired} label='E-mail' feedbackMessage= 'Informar um e-mail válido é obrigatório.' className='member_email' type={FieldHelper.INPUT}/>

            <Field isRequired={isRequired} data={memberRoles} label='Papel no time' feedbackMessage= 'Informar o papel do membro é obrigatório.' className='member_role' type={FieldHelper.SELECT} />

           
            <Field isRequired={isRequired}  data={memberInstitutions} label='Instituição de ensino' feedbackMessage= 'Informar uma instituição é obrigatório.' className='member_institution' type={FieldHelper.SELECT}/>

            <Field isRequired={isRequired} label='Matricula' feedbackMessage= 'Informar a matrícula do membro junto a instituição é obrigatório.' className='member_enrollment' type={FieldHelper.INPUT}/>
            <hr className="my-4"/>
         </>

  );
}

export default FieldSet;
