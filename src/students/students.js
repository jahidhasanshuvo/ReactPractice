import React, {Component} from 'react'


import Form from './form'

class Students extends Component {
    constructor(){
        super()
        this.state = {
            students: [
                {id: 1410, name: "Jahid"},
                {id: 1420, name: "Hasan"},
                {id: 1430, name: "Shuvo"},
                {id: 1440, name: "Jahir"},
            ],
            edit:0,
            currentStudent:{},
            currentStudentIndex:'',

        }

        this.addStudent = this.addStudent.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
        this.updateStudent = this.updateStudent.bind(this)
        this.cancelForm = this.cancelForm.bind(this)
    }

    addStudent(student){
        if(this.state.edit){
            this.updateStudent(student)
        }
        else{
            this.setState(prevState=>({
                students:[...prevState.students,student]
            }))
        }
        console.log(student)
    }

    deleteStudent(event){
        if(confirm("Are you sure?")){
            const index=event.target.value
            const students = [...this.state.students]
            students.splice(index,1)
            this.setState({
                students,
            })
        }
    }

    editStudent(student,index){
        this.setState({
            currentStudent:student,
            edit:1,
            currentStudentIndex:index
        })
        console.log(student,index)
    }
    updateStudent(student){
        const students=this.state.students
        students[this.state.currentStudentIndex]=student
        this.setState({
            students:students,
            edit:0,
            currentStudent:{},
            currentStudentIndex:''
        })
    }

    componentDidMount() {
        console.log("component mounted")
    }

    cancelForm(){
        this.setState({
            edit:0,
            currentStudentIndex:''
        })
    }

    render() {
        return (
            <div className="container mydiv">
                <Form formSubmission={this.addStudent} currentStudent={this.state.currentStudent} edit={this.state.edit} cancelForm={this.cancelForm}/>
                <div className="row">
                    <div className="col-md-10">
                        <h1 className="text-center"> Students List</h1>
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>Sl.</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.students.map((student, index) =>
                                <tr key={student.id}>
                                    <td>{index + 1}</td>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" data-toggle="button" aria-pressed="false" onClick={this.editStudent.bind(this,student,index)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" data-toggle="button" aria-pressed="false" onClick={this.deleteStudent} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Students