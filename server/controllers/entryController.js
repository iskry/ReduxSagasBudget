const Entry = require('../models/entryModel.js');

exports.createEntry = async (req, res) => {
  try {
    const entry = await Entry.create(req.body);
    res.json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const entries = await Entry.findAll();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const entry = await Entry.findByPk(req.params.id);
    if (entry) {
      await entry.update(req.body);
      res.json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findByPk(req.params.id);
    if (entry) {
      await entry.destroy();
      res.json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

