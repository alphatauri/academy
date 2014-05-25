var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/docente', function(req, res){
	console.log('buscando docente');
	res.render('./docente/index', {title:'Docentes', subtitle:'administración'});
})

module.exports = router;
