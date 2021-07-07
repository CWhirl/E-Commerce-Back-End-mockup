const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ include:[Product]
  }).then(allCategories => {
    res.json(allCategories)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {include: [{ model: Product }],
  }).then(category => {
    res.json(category)
  }).catch(err => {
    res.status(500).json(err)
  })
});


router.post('/', (req, res) => {
  // create a new Category
  Category.create( req.body
  ).then(newCategory => {
    res.json(newCategory)
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
