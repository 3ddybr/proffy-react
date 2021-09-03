import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

export default function TeacherList (){
  return(
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="" />
          </Link>
          <img src={logoImg} alt="" />
        </div>
        <div className="header-content">
          <strong>Estes sao os proffys disponível.</strong>
        </div>
      </header>
    </div>
  )
}