import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            task: { text: "", id: uniqid() },
            tasks: [],
        };
    }

    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
            },
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: { text: "", id: uniqid() },
        });
    };

    render() {
        const { task, tasks } = this.state;

        return (
            <div className="App">
                <form onSubmit={this.onSubmitTask}>
                    <label>Enter task</label>
                    <input
                        onChange={this.handleChange}
                        value={task.text}
                        type="text"
                        id="taskInput"
                    />
                    <button type="submit">Add task</button>
                </form>
                <Overview tasks={tasks} />
            </div>
        );
    }
}

export default App;

//
//
//
//
//
// import logo from "./logo.svg";
// import "./App.css";

// {
//     /* <header className="App-header"> */
// }
// {
//     /* <img src={logo} className="App-logo" alt="logo" /> */
// }
// {
//     /* <p>
//     Edit <code>src/App.js</code> and save to reload.
// </p> */
// }
// {
//     /* <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
// >
//     Learn React
// </a> */
// }
// {
//     /* </header> */
// }
