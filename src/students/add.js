import React,{Component} from 'react'

class Add extends Component{

    constructor(props){
        super(props)
        this.state={
            id:this.props.student.id,
            name:this.props.student.name,
            edit:false,
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
    }

    handleFieldChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
        // console.log(this.state.id,this.state.name)
    }
    submitForm(event){
        event.preventDefault()
        const student={
            id:this.state.id,
            name:this.state.name
        }
        this.props.formSubmission(student)
    }
    render(){
        return(
            <form className="form-inline" onSubmit={this.submitForm.bind(this)}>
                <div className="form-group mx-sm-3 mb-2 form-div">
                    <label htmlFor="staticEmail2" className="sr-only">Id</label>
                    <input type="text" className="form-control" name="id" placeholder="Id" onChange={this.handleFieldChange} value={this.state.id}/>
                </div>
                <div className="form-group mx-sm-3 mb-2 form-div">
                    <label htmlFor="inputPassword2" className="sr-only">Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Name"  onChange={this.handleFieldChange} value={this.state.name}/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add New Student</button>
            </form>
        )
    }
}


export default Add