import React from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
// import uniqid from "uniqid";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <General />

                    <Education />

                    <Experience />
                </form>
            </div>
        );
    }
}

// class App extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             task: { text: "", id: uniqid() },
//             tasks: [],
//         };
//     }

//     handleChange = (e) => {
//         this.setState({
//             task: {
//                 text: e.target.value,
//                 id: this.state.task.id,
//             },
//         });
//     };

//     onSubmitTask = (e) => {
//         e.preventDefault();
//         this.setState({
//             tasks: this.state.tasks.concat(this.state.task),
//             task: { text: "", id: uniqid() },
//         });
//     };

//     render() {
//         const { task, tasks } = this.state;

//         return (
//             <div className="App">
//                 <form onSubmit={this.onSubmitTask}>
//                     <label>Enter task</label>
//                     <input
//                         onChange={this.handleChange}
//                         value={task.text}
//                         type="text"
//                         id="taskInput"
//                     />
//                     <button type="submit">Add task</button>
//                 </form>
//                 <Overview tasks={tasks} />
//             </div>
//         );
//     }
// }

// export default App;
