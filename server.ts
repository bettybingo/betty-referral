// @ts-ignore
const express = require('express');
// @ts-ignore
const app = express();
// @ts-ignore
const path = require('path');
app.use(express.static(__dirname + '/dist/betty-referral'));

app.listen(process.env.PORT || 4500);

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname + '/dist/betty-referral/index.html'));
});


console.log('console listeneingr');
