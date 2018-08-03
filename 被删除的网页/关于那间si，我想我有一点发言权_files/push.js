!function () {

  var retry_times = 0,
      max_retry = 50,
      retry_interval_unit = 1000 * 3,
      source;

    function getAuthToken(orderId, callback) {
      $.ajax({
          url: '//donate.douban.com/j/donate/push/get_token_with_ts',
          data: {
              order_id: orderId
          },
          dataType: 'jsonp',
          success: function(data) {
              callback(data.token, data.timestamp);
          }
      });
  }

  function connectSSE(orderId, token, timestamp, callback) {
      if (!window.EventSource) {
          return;
      }

      var channel = 'donate:order:' + orderId + ':status',
          auth = (orderId + '_' + timestamp) + ':' + token,
          sse_url;

      if (location.protocol == "https:") {
          sse_url = 'https://push.douban.com:4397/sse?channel=' + channel + '&auth=' + auth;
      } else {
          sse_url = 'http://push.douban.com:4394/sse?channel=' + channel + '&auth=' + auth;
      }

      var source = null;
      try {
          source = new EventSource(sse_url);
      } catch (e) {
          return;
      }

      source.addEventListener('open', function() {
          retry_times = 0;
      }, false);

      source.addEventListener('error', function(e) {
          if (this.readyState == EventSource.CLOSED ||
                  this.readyState == EventSource.CONNECTING) {

              source.close();
              source = null;

              setTimeout(function(){
                  retry_times += 1;
                  if (retry_times < max_retry) {
                      getAuthToken(orderId, function(token, timestamp) {
                          connectSSE(orderId, token, timestamp, callback);
                      });
                  }
              }, retry_times * retry_interval_unit);
          }
      }, false);

      source.addEventListener('message', function(e) {
          var data = JSON.parse(e.data);
          callback(data);
      }, false);

      return source;
  }

  window.initDonatePush = function(orderId, callback) {
      if (source) {
          source.close();
      }
      getAuthToken(orderId, function(token, timestamp) {
          source = connectSSE(orderId, token, timestamp, callback);
      });
  };
}();
