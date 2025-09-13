import React, { useState } from 'react';

interface InputFormProps {
  onAdd: (task: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAdd }) => {
  const [task, setTask] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="新しいタスクを追加"
        required
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default InputForm;
