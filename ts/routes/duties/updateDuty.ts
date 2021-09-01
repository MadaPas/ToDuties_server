import {
  Router,
  Request,
  Response
} from 'express';

import Duty from '../../models/Duty';
import SubTask from '../../models/Task';

const route = Router();

route.get('/:taskId', async (req: Request, res: Response) => {
  const {
    taskId
  } = req.params;

  try {
    const duty = await Duty.findById(taskId);
    const subTasks = await SubTask.find({
      parentId: duty!._id
    });

        const dutyWithSubs = { ...duty?.toObject(), subtask: subTasks };

    res.status(200).send(dutyWithSubs);
  } catch (err) {
    res.status(500).send(err);
  }
});

route.post('/edit', async (req: Request, res: Response) => {
  let updatedDuty: {
    name: String,
    description: String,
    type: String,
    specialInput: {
      fooCarbs ? : Number,
      foodFat ? : Number,
      foodProtein ? : Number,
      workDeadline ? : string
    },
    price: Number | null,
    done: boolean,
    _id: string
  } = req.body;

  const {
    _id
  } = req.body;

  try {

    await Duty.findByIdAndUpdate(_id, updatedDuty);
    res.status(204).json({
      message: 'Duty has been updated'
    });
  } catch (err) {
    res.status(500).json({
      message: `Your request was not processed: ${err}`
    });
  }
});

export default route;
