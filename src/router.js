import { Router } from 'express';
import * as Photos from './controllers/photo_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to this api!' });
});

router.route('/photos')
  .post(Photos.createPhoto)
  .get(Photos.getNextPhoto);
//   .delete(/* jds */);

router.route('/photos/results')
  .put(Photos.updateCount)
  .get(Photos.getResults);

router.route('/photos/:id')
  .put(Photos.updatePhoto)
  .get(Photos.getPhoto);


export default router;
