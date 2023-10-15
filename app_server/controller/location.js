module.exports.homepage=function(req,res){
    res.render('location-list',{title:'Register'});
};
module.exports.locationinfo=function(req,res){
    res.render('location-info',{title:'Work Out'});
};
module.exports.locationinfo2=function(req,res){
    res.render('location-info2',{title:'Yoga'});
};
module.exports.locationinfo3=function(req,res){
    res.render('location-info3',{title:'Biceps'});
};
module.exports.locationinfo4=function(req,res){
    res.render('location-info4',{title:'Spine'});
};
module.exports.review=function(req,res){
    res.render('location-review-form',{title:'Review'});
};