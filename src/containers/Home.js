import React, { Component } from 'react'
import home_0 from "../images/home_0.png"
import home_1 from "../images/home_1.png"
import home_2 from "../images/home_2.png"
import home_3 from "../images/home_3.png"
import home_4 from "../images/home_4.png"
import home_yaz from "../images/home_yaz.png"
import home_workplace from "../images/home_workplace.png"
import home_tamaki from "../images/home_tamaki.png"
import BackToTop from '../components/BackToTop'



export default class Home extends Component {
  render() {
    return (
 
      <div style={{
        backgroundColor: "#3a4052",
}}>  
 <img src={home_0} alt="separator" style={{margin: "50px", width:"800px", }} />
   <img src={home_1} alt="hello" style={{margin: "0 auto", width:"1000px"}}/>
   <img src={home_2} alt="artist" style={{margin: "40px", width:"800px"}} />
   <img src={home_yaz} alt="portrait" style={{margin: "40px", width:"600px"}} />
   <img src={home_3} alt="tools" style={{margin: "40px", width:"800px"}} />
   <img src={home_workplace} alt="workplace" style={{margin: "40px", width:"600px"}} />
   <img src={home_4} alt="about me" style={{margin: "40px", width:"800px"}}/>
   <img src={home_tamaki} alt="cat" style={{margin: "40px", width:"600px"}} /><br/>

<BackToTop />

      </div>
    )
  }
}
