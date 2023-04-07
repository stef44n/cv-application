import React from "react";

export default class Experience extends React.Component {
    state = {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
    };

    render() {
        return (
            <div>
                <fieldset>
                    <h3>Experience Information</h3>

                    <label>Company Name: </label>
                    <input
                        type="text"
                        placeholder="Company Name"
                        // onChange={handleChange}
                        name="companyName"
                        // value={formData.firstName}
                    />

                    <label>Position Title: </label>
                    <input
                        type="text"
                        placeholder="Position Title"
                        // onChange={handleChange}
                        name="positionTitle"
                        // value={formData.firstName}
                    />

                    <label>Main Tasks: </label>
                    <textarea
                        type="text"
                        placeholder="Main Tasks"
                        // onChange={handleChange}
                        name="mainTasks"
                        // value={formData.firstName}
                    />
                    <label>Start Date: </label>
                    <input
                        type="date"
                        // placeholder="First Name"
                        // onChange={handleChange}
                        name="startDate"
                        // value={formData.firstName}
                    />

                    <label>End Date: </label>
                    <input
                        type="date"
                        // placeholder="First Name"
                        // onChange={handleChange}
                        name="endDate"
                        // value={formData.firstName}
                    />
                </fieldset>
            </div>
        );
    }
}
