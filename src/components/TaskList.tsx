import React from 'react';

interface Task {
  id: number;
  label: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleDone, onDelete }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggleDone(task.id)} // チェックボックスが変更されたら完了状態を切り替える
            />
            <span>{task.label}</span>
            <button onClick={() => onDelete(task.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
