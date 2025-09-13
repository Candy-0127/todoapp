import './App.css';
import InputForm from './components/InputForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import React, { useState } from 'react';

function App() {
  // タスクのリスト
  const [taskList, setTaskList] = useState([
    { id: 1, label: 'Task 1', done: false },
    { id: 2, label: 'Task 2', done: true },
  ]);
  
  // フィルターの状態
  const [filter, setFilter] = useState('all');

  // タスクを追加する関数
  const handleAddTask = (task: string) => {
    const newTask = { id: Date.now(), label: task, done: false };
    setTaskList([...taskList, newTask]);
  };

  // 完了状態をトグルする関数
  const handleToggleTask = (id: number) => {
    const updatedTasks = taskList.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTaskList(updatedTasks);
  };

  // タスクを削除する関数
  const handleDeleteTask = (id: number) => {
    const updatedTasks = taskList.filter(task => task.id !== id);
    setTaskList(updatedTasks);
  };

  // フィルタリング
  const filteredTasks = taskList.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'todo') return !task.done;
    if (filter === 'done') return task.done;
    return true;
  });

  return (
    <>
      <h1>ToDo App</h1>
      {/* 入力欄 */}
      <InputForm onAddTask={handleAddTask} />

      {/* フィルター */}
      <TaskFilter onFilterChange={setFilter} currentFilter={filter} />

      {/* リスト */}
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
