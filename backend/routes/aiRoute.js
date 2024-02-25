import express from 'express';

import { generateResponse, history } from '../controllers/aiController.js';

const aiRouter = express.Router();

aiRouter.post('/', generateResponse);
aiRouter.get('/', (req, res) => {
  //   res.statusCode(200).json({
  //     data: history,
  //   });

  res.send(history);
});

export default aiRouter;
