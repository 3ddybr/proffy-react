import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";

import './styles.css'

export default function TeacherList (){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os proffys disponíveis.">
        <form id="search-teachers">
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
          <Input type="time" name="time" label="Hora"/>

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