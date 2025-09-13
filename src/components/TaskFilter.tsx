import React from 'react';

interface TaskFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ selectedFilter, onFilterChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="task-filter">
      <label>
        <input
          type="radio"
          value="all"
          checked={selectedFilter === 'all'}
          onChange={handleFilterChange}
        />
        ALL
      </label>
      <label>
        <input
          type="radio"
          value="todo"
          checked={selectedFilter === 'todo'}
          onChange={handleFilterChange}
        />
        ToDo
      </label>
      <label>
        <input
          type="radio"
          value="done"
          checked={selectedFilter === 'done'}
          onChange={handleFilterChange}
        />
        Done
      </label>
    </div>
  );
};

export default TaskFilter;
