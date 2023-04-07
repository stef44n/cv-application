import React from "react";

export default class Education extends React.Component {
    state = {
        schoolName: "",
        degreeName: "",
        startDate: "",
        endDate: "",
    };

    render() {
        return (
            <div>
                <fieldset>
                    <h3>Education Information</h3>

                    <label>School Name: </label>
                    <input
                        type="text"
                        placeholder="School Name"
                        // onChange={handleChange}
                        name="schoolName"
                        // value={formData.firstName}
                    />

                    <label>Degree Name: </label>
                    <input
                        type="text"
                        placeholder="Degree"
                        // onChange={handleChange}
                        name="degreeName"
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
