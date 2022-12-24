const express = require('express');
const ciudadelaSchema = require('../models/ciudadela');
const router = express.Router();

// create
router.post('/ciudadela', (req, res) => {
  const ciudadela = ciudadelaSchema(req.body);
  ciudadela
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all
router.get('/ciudadela', (req, res) => {
  ciudadelaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a
router.patch('/ciudadela/:id', (req, res) => {
  const { id } = req.params;
  const { date, am6, am9, pm12, pm3, pm6 } = req.body;
  ciudadelaSchema
    .updateOne({ _id: id }, { $set: { date, am6, am9, pm12, pm3, pm6 } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete a
router.delete('/ciudadela/:id', (req, res) => {
  const { id } = req.params;
  ciudadelaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
