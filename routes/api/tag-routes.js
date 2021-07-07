const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include:[Product]
  }).then(allTags => {
    res.json(allTags)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {include: [{ model: Product }],
  }).then(tag => {
    res.json(tag)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create( req.body
  ).then(newTag => {
    res.json(newTag)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {tag_name:req.body.tag_name},
    {where: {id: req.params.id}}
    ).then((newID) => {
      res.json(newID)
    }).catch(err => {
      res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
