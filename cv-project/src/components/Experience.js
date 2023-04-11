import React from "react";
import "../styles/Experience.css";

export default class Experience extends React.Component {
    constructor() {
        super();

        this.state = {
            companyName: "Rolls-Royce",
            positionTitle: "Chief Design Engineer",
            mainTasks:
                "Management, systems integration, risk assessment, cost analysis etc.",
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
    };

    render() {
        return (
            <div className="section">
                {this.props.isSubmitted === false && (
                    <fieldset className="experience-field field">
                        <legend>Experience Information</legend>

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
                            wrap="hard"
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
                    <div className="render-experience render">
                        {this.state.companyName && (
                            <p>
                                {/* Company name:  */}
                                {this.state.companyName}
                            </p>
                        )}
                        {this.state.positionTitle && (
                            <p>
                                {/* Position:  */}
                                {this.state.positionTitle}
                            </p>
                        )}
                        {this.state.mainTasks && (
                            <p>
                                <span>Main responsibilities: </span>
                                <br />
                                {this.state.mainTasks}
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
