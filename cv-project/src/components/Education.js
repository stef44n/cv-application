import React from "react";

export default class Education extends React.Component {
    state = {
        schoolName: "",
        degreeName: "",
        startDate: "",
        endDate: "",
    };

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
                    <h3>Education Information</h3>

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
            </div>
        );
    }
}
