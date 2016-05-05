var http = require('http');
var xml2js = require('xml2js');
var Transform = require('stream').Transform;

function xmlParser () {
  var transform = new Transform();
  var xml = "";
  transform._transform = function(chunk, encoding, done) {
    console.log(chunk);
    xml += chunk;
    done();
  };
  
  transform._flush = function (done) {
     var parser = new xml2js.Parser();
     parser.parseString(xml, function (err, result) {
         console.dir(err);
            console.dir(typeof(result));
            console.dir(result);
            transform.push("callback(" + JSON.stringify(result) + ");");
            console.log('Done');
            done();
     });
  }

  transform.on('error', function (err) {
    console.log(err);
  });

  transform.on('end', function () {
    console.log('there will be no more data.');
  });

  return transform;
}

http.createServer(onRequest).listen(3000);

function onRequest(client_req, client_res) {
  console.log('serve: ' + client_req.url);

  var options = {
    hostname: 'services.aonaware.com',
    port: 80,
    path: "/DictService/DictService.asmx/" + client_req.url,
    method: 'GET'
  };

  var proxy = http.request(options, function (res) {
    res.pipe(xmlParser()).pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}