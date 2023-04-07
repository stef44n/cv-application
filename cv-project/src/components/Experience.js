import React from "react";

export default class Experience extends React.Component {
    state = {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
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
        //     console.log(this.state);
        //     console.log(event.target);
        //     console.log(event.target.value);
    };

    render() {
        return (
            <div>
                <fieldset>
                    <h3>Experience Information</h3>

                    <label htmlFor="companyName">Company Name: </label>
                    <input
                        type="text"
                        placeholder="Company Name"
                        onChange={this.handleChange}
                        name="companyName"
                        value={this.state.companyName}
                    />

                    <label htmlFor="positionTitle">Position Title: </label>
                    <input
                        type="text"
                        placeholder="Position Title"
                        onChange={this.handleChange}
                        name="positionTitle"
                        value={this.state.positionTitle}
                    />

                    <label htmlFor="mainTasks">Main Tasks: </label>
                    <textarea
                        type="text"
                        placeholder="Main Tasks"
                        onChange={this.handleChange}
                        name="mainTasks"
                        value={this.state.mainTasks}
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
