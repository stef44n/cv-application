import React from "react";

export default class Education extends React.Component {
    constructor() {
        super();

        this.state = {
            schoolName: "Imperial College London",
            degreeName: "Engineering",
            startDate: "",
            endDate: "",
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
        // console.log(event.target.valueAsDate);
        // console.log(event.target.valueAsDate.toDateString());
    };

    render() {
        return (
            <div className="section">
                {this.props.isSubmitted === false && (
                    <fieldset className="education-field field">
                        <legend>Education Information</legend>

                        <label htmlFor="schoolName">School Name: </label>
                        <input
                            type="text"
                            placeholder="School Name"
                            onChange={this.handleChange}
                            name="schoolName"
                            value={this.state.schoolName}
                        />

                        <label htmlFor="degreeName">Degree Name: </label>
                        <input
                            type="text"
                            placeholder="Degree"
                            onChange={this.handleChange}
                            name="degreeName"
                            value={this.state.degreeName}
                        />

                        <label htmlFor="startDate">Start Date: </label>
                        <input
                            type="date"
                            onChange={this.handleChange}
                            name="startDate"
                            value={this.state.startDate}
                        />

                        <label htmlFor="endDate">End Date: </label>
                        <input
                            type="date"
                            onChange={this.handleChange}
                            name="endDate"
                            value={this.state.endDate}
                        />
                    </fieldset>
                )}
                {this.props.isSubmitted && (
                    <div className="render-education render">
                        {this.state.schoolName && (
                            <p>
                                {/* College/University:  */}
                                {this.state.schoolName}
                            </p>
                        )}
                        {this.state.degreeName && (
                            <p>
                                {/* Degree:  */}
                                {this.state.degreeName}
                            </p>
                        )}
                        {this.state.startDate && (
                            <p>
                                <span>Start date: </span>
                                {this.state.startDate}
                            </p>
                        )}
                        {this.state.endDate && (
                            <p>
                                <span>Finish date: </span>
                                {this.state.endDate}
                            </p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
