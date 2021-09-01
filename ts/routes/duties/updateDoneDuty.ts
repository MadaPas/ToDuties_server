import {
  Router,
  Request,
  Response
} from 'express';

import Duty from '../../models/Duty';

const route = Router();

route.post('/', async (req: Request, res: Response) => {
  const {
    id,
    done
  } = req.body;

  try {
    await Duty.findOneAndUpdate({
      _id: id
    }, {
      done
    });

    res.status(200).json({
      message: 'Done status modified'
    });
  } catch (err) {
    res.status(500).json({
      message: `Your request was not processed: ${err}`
    });
  }
})

export default route;
