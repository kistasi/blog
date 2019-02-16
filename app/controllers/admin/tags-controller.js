const TagModel = require('../../models/tag');

module.exports = {
  list: (req, res) => {
    TagModel.find({}, ['title', 'description'], (err, allTagDocuments) => {
      if (err) {
        res.status(500).end();
      }

      res.status(200).json(allTagDocuments);
    });
  },
  create: (req, res) => {
    if (req.body.title === undefined) {
      res.status(422).send({ message: 'Title is required!' });
    }

    const tag = new TagModel(req.body);
    tag.save((err, tagDocument) => {
      if (err) {
        res.status(500).end();
      }

      res.status(201).send(tagDocument);
    });
  },
  update: (req, res) => {
    TagModel.findByIdAndUpdate(req.params.id, req.body, (err, tagDocument) => {
      if (err) {
        res.status(500).end();
      }

      res.status(202).json(tagDocument);
    });
  },
  delete: (req, res) => {
    if (req.params.id === undefined) {
      res.status(422).json({ message: 'Missing id param!' });
    }

    TagModel.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.status(500).end();
      }

      res.status(200).end();
    });
  },
};
