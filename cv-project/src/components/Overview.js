import React from "react";

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.text}</li>;
            })}
        </ul>
    );
};

export default Overview;

// class TasksRender extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.title}Hi</li>
//             </div>
//         );
//     }
// }

// export default TasksRender;
