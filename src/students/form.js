import React,{Component} from 'react'

class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            id:"",
            name:"",
            edit:0
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.cancelForm = this.cancelForm.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.edit){
            this.setState({
                id:nextProps.currentStudent.id,
                name:nextProps.currentStudent.name,
                edit:nextProps.edit
            })
        }
        console.log(nextProps)
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
        this.setState({
            id:"",
            name:"",
            edit:0,
        })
    }

    cancelForm(event){
        event.preventDefault()
        this.props.cancelForm()
        this.setState({
            id:"",
            name:"",
            edit:0,
        })
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
                {this.state.edit?"":<button type="submit" className="btn btn-success mb-2">Add New Student</button>}
                {this.state.edit?<button type="submit" className="btn btn-primary mb-2">Update</button>:""}
                {this.state.edit?<button type="reset" className="btn btn-danger mb-2" onClick={this.cancelForm}>Cancel</button>:""}
            </form>
        )
    }
}


export default Form