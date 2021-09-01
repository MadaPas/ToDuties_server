import {
  Router,
  Request,
  Response
} from 'express';

import SubTask from '../../models/Task';

const route = Router();

route.post('/', async (req: Request, res: Response) => {
  const {
    subTaskId,
    done
  } = req.body;

  try {
    await SubTask.findOneAndUpdate({
      _id: subTaskId
    }, {
      done
    });
    res.status(200).json({
      message: 'Done status updated'
    });
  } catch (err) {
    res.status(500).json({
      message: `Your request was not processed: ${err}`
    });
  }
});

export default route;
