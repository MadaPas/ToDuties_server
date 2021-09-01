import {
  Router,
  Request,
  Response
} from 'express';

import Duty from '../../models/Duty';

const route = Router();

route.post('/', async (req: Request, res: Response) => {

  const {
    name,
    description,
    type,
    price,
    specialInput
  } = req.body;
  const newDuty = new Duty({
    name,
    description,
    type,
    price,
    specialInput
  })

  try {
    await newDuty.save();
    res.status(201).json({
      message: `Your duty "${name}" has been created`
    });
  } catch (err) {
    res.status(500).send({
      message: `Something went wrong: ${err}`
    })
  }
});

export default route;
