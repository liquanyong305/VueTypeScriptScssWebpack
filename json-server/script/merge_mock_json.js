const fs = require('fs');
const path = require('path');

// ルートパスを設定
const root = path.resolve('./', 'api');

fs.watch(root, function(event, filename) {
  if (api === undefined) { api= {} };

  // jsonファイルのみ処理する
  if (path.extname(file) == '.json') {

    // /api/mock配下にあるjsonファイルの名前をエンドポイントとして読み込む
    const api = fs.readdirSync(root).reduce((api, file) => {
      const endpoint = path.basename(file, path.extname(file));
      api[endpoint] = JSON.parse(fs.readFileSync(root + '/' + file, 'utf-8'));

      return api;
  }
  }, {});
  fs.writeFile(root + '/../mock.json', JSON.stringify(api), function(err) {
    if (err) throw err;
    console.log('mock file updated.');
  });
});