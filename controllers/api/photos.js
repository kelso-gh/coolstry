const Photo = require('../../models/photo');

module.exports = {
   index, 
}

async function index(req, res) {
    const photos = await fetch(`https://pixabay.com/api/?key=32083904-50471c20c3570b6956fc70c33&q=${req.body.value}&image_type=photo`).then((res) => res.json());
    res.json(photos);
}