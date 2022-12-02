const { Router } = require('express');
const { createCategory, deleteCategory } = require('../controllers/categories.controller')

const router = Router();

router.post('/category', createCategory);

router.delete('/category/:id', deleteCategory);

module.exports = router;