import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import './styles.css'

export default function TeacherList (){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
      <TeacherItem/>    
      <TeacherItem/>    
      <TeacherItem/>    
      </main>
    </div>
  )
}