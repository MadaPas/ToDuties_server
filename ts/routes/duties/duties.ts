import {
  Router,
  Request,
  Response
} from 'express';

import Duty from '../../models/Duty';
import SubTask from '../../models/Task';

const route = Router();

route.get('/', async (req: Request, res: Response) => {

  try {
    const allData = await Duty.find({});

    let subTasks: {
      position: Number,
      subTask: object[]
    } [] = [];
    let position = 0;

    for (let duty of allData) {
      const results = await SubTask.find({
        parentId: duty._id
      });
      if (results.length > 0) {
        subTasks = [...subTasks, {
          position,
          subTask: results
        }]
      } else {
        subTasks = [...subTasks, {
          position,
          subTask: []
        }]
      }

      position++;
    };

    const final = allData.map((duty: {
      toObject: () => any;
    }, i: Number) => {
      const match = subTasks.find(subtask => subtask.position === i);

      if (match === undefined) {
        return duty;
      } else {
        return {
          ...duty.toObject(),
          subtask: match.subTask
        }
      }

    });

    res.status(200).send(final);
  } catch (err) {
    res.status(500).json({
      message: `A problem occured: ${err}`
    });
  }
})

export default route;
