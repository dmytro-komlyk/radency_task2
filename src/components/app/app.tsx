import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '../../common/enums/enums';

import { Tasks } from '../tasks/tasks';
import { TaskPreView } from '../task-preview/task-preview';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Tasks />}/>
          <Route path={AppRoute.TASK_$ID} element={<TaskPreView />} />
      </Routes>
    </>
  )
};

export default App;