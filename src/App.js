import React, {Component} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
class App extends Component {
    constructor() {
          super();
          this.state = {
             employeeData : [
                 {name:'sundar',age:27,email:'kumarsun53@gmail.com',mobile:'8294439986'},
                 {name:'Pooja',age:22,email:'poojamauryajnp@gmail.com',mobile:'7007949890'},
                 {name:'Sameer',age:24,email:'Sameerchauhan@gmail.com',mobile:'8294434394'},
                 {name:'Sapna',age:23,email:'sapnarathore@gmail.com',mobile:'8294489765'},
             ],
              index:0,
              act:0
          }
  }

  handleSubmit = (e)  => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name   = this.refs.txtName  .value;
    let age    = this.refs.txtAge   .value;
    let email  = this.refs.txtEmail .value;
    let mobile = this.refs.txtMobile.value;

    if(this.state.act === 0) {
        let newEmployee = {
              "name": name,
               "age": age,
             "email": email,
            "mobile": mobile
        }
        employeeData.push(newEmployee);
    }
    else
    {
        let index = this.state.index;
        employeeData[index].name   = name;
        employeeData[index].age    = age;
        employeeData[index].email  = email;
        employeeData[index].mobile = mobile;
    }
    this.setState({
        employeeData: employeeData
    })
       this.refs.myform.reset();
  }

  handleDelete = (i) => {
        let employeeData = this.state.employeeData;
        employeeData.splice(i,1);
        this.setState({
            employeeData:employeeData
        });
  }

  handleEdit = (i) => {
    let employeeData = this.state.employeeData;

         this.refs.txtName  .value = employeeData.name;
         this.refs.txtAge   .value = employeeData.age;
         this.refs.txtEmail .value = employeeData.email;
         this.refs.txtMobile.value = employeeData.mobile;

      this.setState({
          employeeData:employeeData,
          act:1,
          index:i
      })
    }

  render() {
      let employeeData = this.state.employeeData;
    return (
        <div className='container'>
            <br />
            <h5><center>React CRUD with Bootstrap</center></h5>
                <br />
           <form ref='myform' className="form-group">

            <form className="form-group">
                <input className="form-control" type="text" ref="txtName" placeholder="Name"/>
            </form>

            <form className="form-group">
                <input className="form-control" type="text" ref="txtAge" placeholder="Age"/>
            </form>

            <form className="form-group">
                <input className="form-control" type="text" ref="txtEmail" placeholder="Email"/>
            </form>

            <form className="form-group">
                 <input className="form-control" type="text" ref="txtMobile" placeholder="Mobile"/>
            </form>

          <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
            <br />
            <table className="table table-hover table-striped">
                <tr>
                    <td>Name  </td>
                    <td>Age   </td>
                    <td>Email </td>
                    <td>Mobile</td>
                    <td colSpan={2}><center>Actions</center></td>
                </tr>
                {
                    employeeData.map((data,i) =>
                     <tr key={i}>
                         <td>{data.name  }</td>
                         <td>{data.age   }</td>
                         <td>{data.email }</td>
                         <td>{data.mobile}</td>
                         <td><button className="btn btn-primary" onClick={(e) => this.handleEdit(i)}>Edit</button></td>
                         <td><button className="btn btn-primary" onClick={(e) => this.handleDelete(i)}>Delete</button></td>
                     </tr>
                    )
                }
            </table>

        </div>
    );
  }
}

export default App;


