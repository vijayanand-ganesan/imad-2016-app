var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/van.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'van.png'));
});

app.get('/article-:articleNum', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
  var articleNum = req.params.articleNum;
  res.send( createTemplate(createArticleContent(articleNum)) );
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


function createArticleContent(artNum){

var articleContent = {
	title : `Article ${artNum} | Vijay Anand Ganesan`,
	heading : `Article ${artNum}`,
	date : `September 2016 - From Refacored JS : | ${artNum}`,
	content : `
	<p>
	This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.
	This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.
</p>
<p>
	This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.
	This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.
</p>
<p>
	This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.
	This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.This is a test article ${artNum}  content.
</p>`
};
return articleContent;
};



function createTemplate (data) {
var content = data.content;
var date = data.date;
var heading = data.heading;
var title = data.title;

var templateHtml = `<html>
<head>
<link href="/ui/style.css" rel="stylesheet" />
<title>${title}</title>
</head>
<body>
<div>
	<a href="/">Home</a>
</div>
<hr>
<div class="container">
<div>
<h3>${heading}</h3>
</div>
<div>
<h3>${date}</h3>
</div>
<div>
${content}
</div>
</div>
</body>
</html>
`;
return templateHtml;
};