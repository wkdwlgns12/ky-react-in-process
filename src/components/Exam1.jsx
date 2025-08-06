import React from 'react'
import './Exam1.css'
// const Exam1 = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <p>
//                 안녕 나는
//                 <span className="name">
//                     {props.name}
//                 </span>
//                 이고
//                 <span className="age">
//                    {props.age}
//                 </span>
//                 살이야.
//             </p>
//         </div>
//     )
// }
const Exam1 = ({ name, age }) => {
    return (
        <div>
            <p>
                안녕 나는
                <span className="name">
                    {name}
                </span>
                이고
                <span className="age">
                    {age}
                </span>
                살이야.
            </p>
        </div>
    )
}

export default Exam1