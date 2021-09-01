import {
  Router
} from 'express';

import allTasks from './duties/duties';

import createDuty from './duties/addDuty';
import deleteDuty from './duties/deleteDuty';
import updateDoneDuty from './duties/updateDoneDuty';
import updateDuty from './duties/updateDuty';

import newSubTask from './tasks/newTask';
import updateSubTask from './tasks/updateDoneTask';
import removeSubTask from './tasks/deleteTask';

const routes = Router();

routes.use('/task/all-tasks', allTasks);

routes.use('/task/new-todo', createDuty);
routes.use('/task/erase-task', deleteDuty);
routes.use('/task/update-task', updateDoneDuty);
routes.use('/task', updateDuty);

routes.use('/task/new-subtask', newSubTask);
routes.use('/task/remove-subtask', removeSubTask);
routes.use('/task/update-subtask', updateSubTask);

export default routes;
