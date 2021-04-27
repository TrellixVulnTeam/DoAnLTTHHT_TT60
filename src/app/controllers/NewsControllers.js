class NewsControllers {
    // [GET] /news
    news(req,res){
        res.render('news');
    }

    // [GET /news/:path]
    show(req,res){
        res.send('newdetail')
    }
}
module.exports = new NewsControllers;
