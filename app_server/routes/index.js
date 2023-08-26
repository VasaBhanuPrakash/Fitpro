var express = require('express');
var router = express.Router();
var ctrllocations = require('../controller/location');
var ctrlsign=require('../controller/signin');
/* GET home page. */
router.get('/', ctrllocations.homepage);
router.get('/location',ctrllocations.locationinfo);
router.get('/location2',ctrllocations.locationinfo2);
router.get('/location3',ctrllocations.locationinfo3);
router.get('/location4',ctrllocations.locationinfo4);
router.get('/location/review/new',ctrllocations.review);
router.get('/signin',ctrlsign.signin);
module.exports = router;