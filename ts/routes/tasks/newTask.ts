import {
  Router,
  Request,
  Response
} from 'express';

import SubTask from '../../models/Task';

const route = Router();

route.post('/', async (req: Request, res: Response) => {
  const {
    parentId,
    name,
    price,
    done
  } = req.body;
  const newSubTask = new SubTask({
    parentId,
    name,
    price,
    done
  });

  try {
    await newSubTask.save();
    res.status(201).json({
      message: `Your subtask "${name}" has been added`
    });
  } catch (err) {
    res.status(500).send({
      message: `Something went wrong: ${err}`
    })
  }
});

export default route;
