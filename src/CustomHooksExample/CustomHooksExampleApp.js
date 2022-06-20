import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import './CustomHooksExampleApp.css';
import useHttp from './hooks/use-http';

function CustomHooksExampleApp() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObj) => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({
        id: taskKey,
        text: tasksObj[taskKey].text
      })
    }
    setTasks(loadedTasks);
  }, []);
  //We don't have anything in the array because we don't use anything external expect setTasks and it will not change

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);

  useEffect(() => {
    fetchTasks({ url: 'https://react-http-c4132-default-rtdb.europe-west1.firebasedatabase.app/tasks.json' });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default CustomHooksExampleApp;