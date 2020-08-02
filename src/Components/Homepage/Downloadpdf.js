import React, { Component } from "react";
import halp from "../../assets/images/Community_Responsibility_Acknowledgement.pdf";
import GetAppIcon from '@material-ui/icons/GetApp';
const MemberList = [
    {Text: "May 2020 Report", file:halp},
    {Text: "June 2020 Report",halp},
    {Text: "July 2020 Report",halp},
    {Text: "August 2020 Report", halp},
];

export default class Downloadpdf extends Component {
  constructor() {
    super();
      
    this.state = {
      Text: "",
      file:MemberList[0].file
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ Text: event.target.value });
  }

  handleSubmit(event) {
    console.log("jsj", this.state);
    event.preventDefault();
    var pdfs = this.state.Text;
    console.log("pdfs",pdfs)

    var doc = "";
    for(var i = 0; i < MemberList.length; i++) {
        if (MemberList[i].Text == pdfs) {
            console.log("djjdj")
            doc = MemberList[i].file ;    
            // console.log("sjsj",doc)
            break;
        }
    }
    console.log("Hi", doc);
    window.open(halp, "download");
  }
  //

  render() {
    return (
      <div>
           <form onSubmit={this.handleSubmit}>
               <select class="btn btn-secondary btn-lg dropdown-toggle" id="exampleFormControlSelect1" style={{ "padding": "10px", "margin": "15px" }} value={this.state.Text} onChange={this.handleChange}>
    {MemberList.map((member, index) =>
        <option key={`member-${index}`} >{member.Text}</option>
    )}
</select>

    <button type="submit" class="btn btn-secondary btn-sm " value="submit"><GetAppIcon>
    </GetAppIcon></button>

</form>
        </div>
    );
  }
}
{/* <form onSubmit={this.handleSubmit}>
<select value={this.state.category} onChange={this.handleChange}>
  <option value="php">PHP</option>
  <option value="laravel">Laravel</option>
  <option value="angular">Angular</option>
  <option value="react">React</option>
  <option value="vue">Vue</option>
</select>
<input type="submit" value="Submit"></input>


</form> */}