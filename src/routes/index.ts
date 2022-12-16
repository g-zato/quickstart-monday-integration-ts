import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();
import mondayRoutes from './monday';

router.use(mondayRoutes);
router.get('/', function(req: Request, res: Response) {
  res.json(getHealth());
});

router.get('/health', function(req: Request, res: Response) {
  res.json(getHealth());
  res.end();
});

function getHealth() {
  return {
    ok: true,
    message: 'Healthy'
  };
}

export default router;
