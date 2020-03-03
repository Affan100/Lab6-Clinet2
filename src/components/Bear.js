import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './bear.css'

export default () => {

    const [students, setStudents] = useState({})
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [Major, setMajor] = useState('')
    const [gpa, setGpa] = useState(0)

    // const [bears, setBears] = useState({})
    // const [name, setName] = useState('')
    // const [weight, setWeight] = useState(0)

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = async () => {
        const result = await axios.get(`http://localhost/api/students`)
        console.log(result.data)
        setStudents(result.data)
    }

    const addStudent = async () => {
        const result = await axios.post(`http://localhost/api/students`, {
            id,
            name,
            surname,
            Major,
            gpa
        })
        console.log(result.data)
        getStudents()
    }

    const getStudent = async (std) => {          ///ข้อมูลที่ละข้อมูล
        const result = await axios.get(`http://localhost/api/students/${std}`)
        console.log(result.data)
        setID(result.data.id)
        setName(result.data.name)
        setSurname(result.data.surname)
        setMajor(result.data.Major)
        setGpa(result.data.gpa)
    }
    const updateStudent = async (std) => {
        const result = await axios.put(`http://localhost/api/students/${std}`, {
            id,
            name,
            surname,
            Major,
            gpa
        })

        console.log(result.data)
        setID(result.data.id)
        setName(result.data.name)
        setSurname(result.data.surname)
        setMajor(result.data.Major)
        setGpa(result.data.gpa)
        getStudents()
    }

    const delStudent = async (std) => {
        const result = await axios.delete(`http://localhost/api/students/${std}`)
        getStudents()
    }

    const printStudents = () => {
        if (students && students.length)
            return students.map((student, index) => {
                return (
                    <li key={index}>
                        {student.id} : {student.name} : {student.surname} : {student.Major} : {student.gpa}

                        <link rel="stylesheet" type="text/css" href="bear.css" />
                        <button className="btnGet" onClick={() => getStudent(student.std)}> Get </button>
                        <button className="btnDe" onClick={() => delStudent(student.std)}> Delete </button>
                        <button className="btnUp" onClick={() => updateStudent(student.std)}> Update </button>
                    </li>
                )
            })
        else {
            return (<h2> No Student </h2>)
        }
    }

    return (
        <div>
            <h2>Student</h2>
            <ul>
                {printStudents()}
            </ul>
            <h2>Get Student</h2>
            Get: {name}  {surname}  {Major}  {gpa}

            <h2>Add Student</h2>
            ID:
            <input placeholder="ID" type="text" name="name" onChange={(e) => setID(e.target.value)} /> <br />
            Name:
            <input placeholder="name" type="text" name="name" onChange={(e) => setName(e.target.value)} /> <br />
            Surname:
            <input placeholder="surname" type="text" name="Surname" onChange={(e) => setSurname(e.target.value)} /><br />
            Major:
            <input placeholder="Major" type="text" name="Major" onChange={(e) => setMajor(e.target.value)} /><br />
            GPA:
            <input placeholder="GPA" type="number" name="GPA" onChange={(e) => setGpa(e.target.value)} /><br />
            <button className="btnAdd" onClick={addStudent}>Add </button>
        </div>
    )
}










// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// export default () => {


//     const [bears, setBears] = useState({})
//     const [name, setName] = useState('')
//     const [weight, setWeight] = useState(0)

//     useEffect(() => {
//         getBears()
//     }, [])

//     const getBears = async () => {
//         const result = await axios.get(`http://localhost/api/bears`)
//         console.log(result.data)
//         setBears(result.data)
//     }

//     const addBear = async () => {
//         const result = await axios.post(`http://localhost/api/bears`, {
//             name,
//             weight
//         })
//         console.log(result.data)
//         getBears()
//     }

//     const getBear = async (id) => {
//         const result = await axios.get(`http://localhost/api/bears/${id}`)
//         console.log(result.data)
//         setName(result.data.name)
//         setWeight(result.data.weight)
//     }
//     const updateBear = async (id) => {
//         const result = await axios.put(`http://localhost/api/bears/${id}`, {
//             name,
//             weight
//         })

//         console.log(result.data)
//         setName(result.data.name)
//         setWeight(result.data.weight)
//         getBears()
//     }

//     const delBear = async (id) => {
//         const result = await axios.delete(`http://localhost/api/bears/${id}`)
//         getBears()
//     }

//     const printBears = () => {
//         if (bears && bears.length)
//             return bears.map((bear, index) => {
//                 return (
//                     <li key={index}>
//                         {bear.name} : {bear.weight}
//                         <button onClick={() => getBear(bear.id)}> Get </button>
//                         <button onClick={() => delBear(bear.id)}> Del </button>
//                         <button onClick={() => updateBear(bear.id)}> Update </button>
//                     </li>
//                 )
//             })
//         else {
//             return (<h2> No bear </h2>)
//         }

//     }

//     return (
//         <div>
//             <h2>Bear</h2>
//             <ul>
//                 {printBears()}
//             </ul>
//             <h2>Get Bear</h2>
//             Get: {name} : {weight}

//             <h2>Add Bear</h2>
//             Name:
//             <input placeholder="name" type="text" name="name" onChange={(e) => setName(e.target.value)} /> <br />
//             Weight:
//             <input type="number" name="weight" onChange={(e) => setWeight(e.target.value)} /><br />
//             <button onClick={addBear}>Add </button>
//         </div>
//     )
// }