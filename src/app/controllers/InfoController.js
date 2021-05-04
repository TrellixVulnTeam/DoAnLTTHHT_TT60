class InfoController {
    // [GET] /news
    news(req,res){
        res.render('info');
    }

    // [GET /news/:path]
    show(req,res){
        res.send('newdetail')
    }
}
module.exports = new InfoController;
