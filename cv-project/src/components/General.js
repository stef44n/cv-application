import React from "react";
import "../styles/General.css";

export default class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "John",
            lastName: "Smith",
            email: "jsmith123@abyahoo.com",
            phone: "0123 456 789",
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
        // console.log(this.props);
        // console.log(event.target);
        // console.log(event.target.value);
    };

    render() {
        return (
            <div className="section">
                {this.props.isSubmitted === false && (
                    <fieldset className="general-field field">
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
                )}
                {this.props.isSubmitted && (
                    <div className="render-general render">
                        {(this.state.firstName || this.state.lastName) && (
                            <p>
                                Name: {this.state.firstName}{" "}
                                {this.state.lastName}
                            </p>
                        )}
                        {/* {this.state.lastName && (
                        <p>THE LAST NAME: {this.state.lastName}</p>
                    )} */}
                        {this.state.email && (
                            <p>Email address: {this.state.email}</p>
                        )}
                        {this.state.phone && (
                            <p>Phone number: {this.state.phone}</p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
