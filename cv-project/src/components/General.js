import React from "react";

export default class General extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };

    render() {
        return (
            <div>
                <fieldset>
                    <legend>General Information</legend>
                    <label>First Name: </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        // onChange={handleChange}
                        name="firstName"
                        // value={formData.firstName}
                    />
                    <label>Last Name: </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        // onChange={handleChange}
                        name="lastName"
                        // value={formData.lastName}
                    />
                    <label>Email: </label>
                    <input
                        type="email"
                        placeholder="Email"
                        // onChange={handleChange}
                        name="email"
                        // value={formData.email}
                    />
                    <label>Phone number: </label>
                    <input
                        type="phone"
                        placeholder="Phone"
                        // onChange={handleChange}
                        name="phone"
                        // value={formData.email}
                    />
                </fieldset>
            </div>
        );
    }
}

// const Overview = (props) => {
//     const { tasks } = props;

//     return (
//         <ul>
//             {tasks.map((task) => {
//                 return <li key={task.id}>{task.text}</li>;
//             })}
//         </ul>
//     );
// };

// export function MainContent() {
//     return (
//         <div>
//             <p>this is main content paragraph</p>
//             <p>para 2</p>
//         </div>
//     );
// }

// export default Overview;

// class TasksRender extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.title}Hi</li>
//             </div>
//         );
//     }
// }

// export default TasksRender;
