import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import { useState } from "react";

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css'
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

export default function TeacherForm (){
  const [scheduleItems, setScheduleItems] = useState([
    {week_day:0, from: '', to: ''},
    
  ]);

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      {week_day:0, from: '', to: ''}
    ]);
  }

  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que vc quer dar aulas."
        description="O primeiro passo e preencher esse formulario de inscricao."
        />

        <main>
          <fieldset>
            <legend>Seus Dados</legend>
              <Input name="name" label="Nome Completo" />
              <Input name="avatar" label="Avatar" />
              <Input name="whatsapp" label="Whatsapp" /> 
              <Textarea name="bio" label="Biografia"/>
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
              <Select
              name="subject" 
              label="Matéria"
              options={[
                { value:'Artes', label: 'Artes'},
                { value:'Biologia', label: 'Biologia'},
                { value:'Ciências', label: 'Ciências'},
                { value:'Educacao Fisica', label: 'Educacao Fisica'},
                { value:'Fisica', label: 'Fisica'},
                { value:'Geografia', label: 'Geografia'},
                { value:'Matemática', label: 'Matematica'},
                { value:'Português', label: 'Português'},
                { value:'Quimica', label: 'Quimica'},
              ]}
              />
              <Input name="cost" label="Custo da sua hora por aula" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis 
              <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
            </legend>

            {scheduleItems.map((scheduleItem => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day" 
                    label="Dia da semana"
                    options={[
                      { value:'0', label: 'Domingo'},  
                      { value:'1', label: 'Segunda-Feira'},
                      { value:'2', label: 'Terça-Feira'},
                      { value:'3', label: 'Quarta-Feira'},
                      { value:'4', label: 'Quinta-Feira'},
                      { value:'5', label: 'Sexta-Feira'},
                      { value:'6', label: 'Sabado'},
                    ]}
                    />
                    <Input name="from" label="Das" type="time"/>
                    <Input name="to" label="Ate" type="time"/>
                </div>
              )
            }))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="button">
              Salvar cadastro
            </button>
          </footer>
        </main>
    </div>
  )
}
