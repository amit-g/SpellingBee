'use strict';

System.register([], function (_export, _context) {
  var _typeof, http, xml2js, Transform;

  function xmlParser() {
    var transform = new Transform();
    var xml = "";
    transform._transform = function (chunk, encoding, done) {
      console.log(chunk);
      xml += chunk;
      done();
    };

    transform._flush = function (done) {
      var parser = new xml2js.Parser();
      parser.parseString(xml, function (err, result) {
        console.dir(err);
        console.dir(typeof result === 'undefined' ? 'undefined' : _typeof(result));
        console.dir(result);
        transform.push("callback(" + JSON.stringify(result) + ");");
        console.log('Done');
        done();
      });
    };

    transform.on('error', function (err) {
      console.log(err);
    });

    transform.on('end', function () {
      console.log('there will be no more data.');
    });

    return transform;
  }

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
  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      http = require('http');
      xml2js = require('xml2js');
      Transform = require('stream').Transform;
      http.createServer(onRequest).listen(3000);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3h5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsV0FBUyxTQUFULEdBQXNCO0FBQ3BCLFFBQUksWUFBWSxJQUFJLFNBQUosRUFBaEI7QUFDQSxRQUFJLE1BQU0sRUFBVjtBQUNBLGNBQVUsVUFBVixHQUF1QixVQUFTLEtBQVQsRUFBZ0IsUUFBaEIsRUFBMEIsSUFBMUIsRUFBZ0M7QUFDckQsY0FBUSxHQUFSLENBQVksS0FBWjtBQUNBLGFBQU8sS0FBUDtBQUNBO0FBQ0QsS0FKRDs7QUFNQSxjQUFVLE1BQVYsR0FBbUIsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLFVBQUksU0FBUyxJQUFJLE9BQU8sTUFBWCxFQUFiO0FBQ0EsYUFBTyxXQUFQLENBQW1CLEdBQW5CLEVBQXdCLFVBQVUsR0FBVixFQUFlLE1BQWYsRUFBdUI7QUFDM0MsZ0JBQVEsR0FBUixDQUFZLEdBQVo7QUFDRyxnQkFBUSxHQUFSLFFBQW1CLE1BQW5CLHlDQUFtQixNQUFuQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0Esa0JBQVUsSUFBVixDQUFlLGNBQWMsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFkLEdBQXVDLElBQXREO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNOLE9BUEQ7QUFRRixLQVZEOztBQVlBLGNBQVUsRUFBVixDQUFhLE9BQWIsRUFBc0IsVUFBVSxHQUFWLEVBQWU7QUFDbkMsY0FBUSxHQUFSLENBQVksR0FBWjtBQUNELEtBRkQ7O0FBSUEsY0FBVSxFQUFWLENBQWEsS0FBYixFQUFvQixZQUFZO0FBQzlCLGNBQVEsR0FBUixDQUFZLDZCQUFaO0FBQ0QsS0FGRDs7QUFJQSxXQUFPLFNBQVA7QUFDRDs7QUFJRCxXQUFTLFNBQVQsQ0FBbUIsVUFBbkIsRUFBK0IsVUFBL0IsRUFBMkM7QUFDekMsWUFBUSxHQUFSLENBQVksWUFBWSxXQUFXLEdBQW5DOztBQUVBLFFBQUksVUFBVTtBQUNaLGdCQUFVLHVCQURFO0FBRVosWUFBTSxFQUZNO0FBR1osWUFBTSxtQ0FBbUMsV0FBVyxHQUh4QztBQUlaLGNBQVE7QUFKSSxLQUFkOztBQU9BLFFBQUksUUFBUSxLQUFLLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLFVBQVUsR0FBVixFQUFlO0FBQy9DLFVBQUksSUFBSixDQUFTLFdBQVQsRUFBc0IsSUFBdEIsQ0FBMkIsVUFBM0IsRUFBdUM7QUFDckMsYUFBSztBQURnQyxPQUF2QztBQUdELEtBSlcsQ0FBWjs7QUFNQSxlQUFXLElBQVgsQ0FBZ0IsS0FBaEIsRUFBdUI7QUFDckIsV0FBSztBQURnQixLQUF2QjtBQUdEOzs7Ozs7Ozs7QUF6REcsVSxHQUFPLFFBQVEsTUFBUixDO0FBQ1AsWSxHQUFTLFFBQVEsUUFBUixDO0FBQ1QsZSxHQUFZLFFBQVEsUUFBUixFQUFrQixTO0FBa0NsQyxXQUFLLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsTUFBN0IsQ0FBb0MsSUFBcEMiLCJmaWxlIjoicHJveHkuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
