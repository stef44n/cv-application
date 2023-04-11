import React from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import uniqid from "uniqid";
import "./styles/App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
        };
    }

    submitData = (event) => {
        event.preventDefault();

        this.setState((prevState) => {
            return {
                submitted: prevState.submitted ? false : true,
            };
        });
        // return console.log("clicked", this.state);
    };

    render() {
        return (
            <div className="page">
                <Header />
                <form className="whole-form" onSubmit={this.submitData}>
                    <button>{this.state.submitted ? "EDIT" : "SUBMIT"}</button>
                    <General isSubmitted={this.state.submitted} />

                    <Education isSubmitted={this.state.submitted} />

                    <Experience isSubmitted={this.state.submitted} />
                </form>
                <Footer />
            </div>
        );
    }
}
