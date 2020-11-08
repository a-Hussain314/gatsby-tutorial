import React from "react"
import Footer from "../components/footer";
import Header from "../components/Header";
import "../style/style.scss";

export default function Layout(props) {
  return (
  <>
  <div className="d-flex flex-column justify-content-between" style={{minHeight:"100vh"}}>

    <div>
      <Header/>
      <div className="p-3">
        {props.children}
      </div>
    </div>

    <Footer/>
    
  </div>
  </>
  )
}
