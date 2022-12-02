const VideosServices = require('../services/videos.services');

const createVideo = async(req, res) => {
    try {
        const newVideo = req.body;
        const result =  await VideosServices.createVideo(newVideo);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
};

const deleteVideo = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await VideosServices.deleteVideo(id);
        res.status(200).json({message: 'Video deleted'});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createVideo,
    deleteVideo,
}