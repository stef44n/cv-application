import React from "react";

export default class General extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        };
    }

    handleChange = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
        // console.log(this.state);
        // console.log(event.target);
        // console.log(event.target.value);
    };

    render() {
        return (
            <div>
                <fieldset>
                    <legend>General Information</legend>
                    <label htmlFor="firstName">First Name: </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={this.handleChange}
                        name="firstName"
                        value={this.state.firstName}
                    />
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        name="lastName"
                        value={this.state.lastName}
                    />
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                    />
                    <label htmlFor="phone">Phone number: </label>
                    <input
                        type="phone"
                        placeholder="Phone"
                        onChange={this.handleChange}
                        name="phone"
                        value={this.state.phone}
                    />
                </fieldset>

                {this.state.firstName && (
                    <h1>THE FIRST NAME: {this.state.firstName}</h1>
                )}
                {this.state.lastName && (
                    <h1>THE LAST NAME: {this.state.lastName}</h1>
                )}
                {this.state.email && <h1>THE EMAIL: {this.state.email}</h1>}
                {this.state.phone && <h1>THE PHONE NUM: {this.state.phone}</h1>}
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
