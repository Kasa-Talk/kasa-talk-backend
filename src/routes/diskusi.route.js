const route = require('express').Router()
const {
  getAll,
  addDiskusi
} = require('../controllers/diskusi.controller')


route.get('/', getAll)
route.post('/', addDiskusi)

module.exports = route