import React, {Component} from 'react'


import Add from './add'

class Students extends Component {
    constructor(){
        super()
        this.state = {
            students: [
                {id: 1410, name: "Jahid"},
                {id: 1420, name: "Hasan"},
                {id: 1430, name: "Jahir"},
                {id: 1440, name: "Shuvo"},
            ],
            edit:true,
            currentStudent:{}

        }

        this.addStudent = this.addStudent.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
    }

    addStudent(student){
        this.setState(prevState=>({
            students:[...prevState.students,student]
        }))
        console.log(student)
    }

    deleteStudent(event){
        const index=event.target.value
        const students = [...this.state.students]

        students.splice(index,1)
        this.setState({
            students,
        })
    }

    editStudent(student){
        console.log(student)
    }


    componentDidMount() {
        console.log("component mounted")
    }

    render() {
        return (
            <div className="container mydiv">
                <Add formSubmission={this.addStudent} currentStudent={this.state.currentStudent}/>
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
                                        <button onClick={this.editStudent.bind(this,student)}>Edit</button>
                                        <button onClick={this.deleteStudent} value={index}>Delete</button>
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