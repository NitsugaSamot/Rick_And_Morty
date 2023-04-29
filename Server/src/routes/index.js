const {login} = require ('../controllers/login')
const{getCharById} = require ('../controllers/getCharById')
const {addFavorite, deleteFavorite} = require('../controllers/handleFavorites')

const router = require('express').Router()

router.get('/character/:id', (req, res) => {
    getCharById(req, res)
})

router.get('/login', login)

router.post('/fav', (req, res) => {
    addFavorite(req, res)
})

router.delete('/fav/:id', (req, res) => {
    deleteFavorite(req, res)
})

module.exports = router