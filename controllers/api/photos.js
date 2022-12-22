const Photo = require('../../models/photo');

module.exports = {
   searchApi,
   addToFeed,
   getFeed,
   removeFromFeed, 
}

async function searchApi(req, res) {
    console.log(req.query.q)
    const photos = await fetch(`https://pixabay.com/api/?key=32083904-50471c20c3570b6956fc70c33&q=${req.query.q}&image_type=photo`).then(r => r.json()).then(data => data.hits);
    res.json(photos);
}

async function removeFromFeed(req, res) {
    const photos_ = await Photo.findOneAndDelete({_id: req.params.apiId});
    const photos = await Photo.find({user: req.user._id});
    res.json(photos)
}

async function addToFeed(req, res) {
    const photoApi = await fetch(`https://pixabay.com/api/?key=32083904-50471c20c3570b6956fc70c33&id=${req.params.apiId}&image_type=photo`).then(r => r.json()).then(data => data.hits[0]);
    const photo = await Photo.create({
        user: req.user._id,
        apiId: photoApi.id,
        photo: photoApi.webformatURL,
        description: photoApi.tags,
        views: photoApi.views,
        likes: photoApi.likes,
        comments: photoApi.comments
    });
    res.json(photo);
}

async function getFeed(req, res) {
    const photos = await Photo.find({user: req.user._id});
    res.json(photos);
}