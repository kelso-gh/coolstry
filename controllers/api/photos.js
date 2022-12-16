const Photo = require('../../models/photo');

module.exports = {
   searchApi, 
}

async function searchApi(req, res) {
    console.log(req.query.q)
    const photos = await fetch(`https://pixabay.com/api/?key=32083904-50471c20c3570b6956fc70c33&q=${req.query.q}&image_type=photo`).then(r => r.json());
    console.log(photos);
    res.json(photos);
}