const router = require("express").Router();
const watchlistController = require("../../controllers/watchlistcontroller");

router.route("/:id")
    .get(watchlistController.getList)
    .post(watchlistController.addListItem)
    .put(watchlistController.removeListItem);
    
// Exporting
module.exports = router;