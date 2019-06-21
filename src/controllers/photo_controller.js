import Photo from '../models/photo_model';

export const updatePhoto = (req, res) => {
  Photo.findById(req.params.id)
    .then((result) => {
      result.tag_correct = req.body.tag_correct;
      console.log(req.body.tag_correct);
      result.save();
    })
    .then((result) => {
      res.json({ message: 'Photo updated!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const createPhoto = (req, res) => {
  //   res.send('in the method');
  const photo = new Photo();
  photo.img = req.body.img;
  photo.vis_tag = req.body.vis_tag;
  photo.tag_correct = req.body.tag_correct;

  console.log(photo);


  photo.save()
    .then((result) => {
      res.json({ message: 'Photo created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};


export const getNextPhoto = (req, res) => {
  Photo.findOne({ tag_correct: 'null' })
    .then((result) => {
      console.log(`in get next, result: ${result}`);
      res.json((result));
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};


export const updateCount = (req, res) => {
  Photo.findOne({ dummy: true })
    .then((result) => {
      console.log(`'in update count be' ${req.body.tagCorrect === 'false'}`);
      if (req.body.tagCorrect === 'true') {
        const temp = parseInt(result.tag_correct, 10) + 1;
        result.tag_correct = temp;
        console.log(`correct count: ${result.tag_correct}`);
      } else if (req.body.tagCorrect === 'false') {
        console.log(`incorrect count 1: ${result.vis_tag}`);
        const temp = result.vis_tag * 1 + 1;
        console.log(`incorrect count 2: ${temp}`);
        result.vis_tag = temp;
        // decided to store the count of incorrect tags in vis_tag because it is already defined in th schema of a photo object
        console.log(`incorrect count 3: ${result.vis_tag}`);
      }
      result.save();
    })
    .then((result) => {
      res.json({ message: 'Count updated!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getPhoto = (req, res) => {
  Photo.findById(req.params.id)
    .then((result) => {
      res.json((result));
      console.log(`in getPhoto: ${result}`);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const getResults = (req, res) => {
  Photo.findOne({ dummy: true })
    .then((result) => {
      res.json((result));
      console.log(`in getResults: ${result}`);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
