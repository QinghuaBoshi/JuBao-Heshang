;(function(window, undefined) {
  window.shani = {
    compile: function(tpl) {
      var code = tpl.replace(/(\n|\r)/g, '')
                    .replace(/(%\}|^)(.*?)(\{%|$)/g, function(_, a, b, c) {
                      return a + '__acc__ += \'' + b + '\'; ' + c;
                    })
                    .replace(/\{%\s*(if|else if)\s+(.*?)\s*%\}/g, function(_, a, b) {
                      var sf = (a === 'if') ? '' : ' } ';
                      b = b.replace(/(.*?\s+)(and|or)(\s+.*?)/g, function(_, a, b, c) {
                        return a + (b === 'and' ? '&&' : '||') + c;
                      });
                      return sf + a + ' (' + b + ') { ';
                    })
                    .replace(/\{%\s*for\s+([a-zA-Z_][a-zA-Z0-9_]*),\s*([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+(.*?)\s*%\}/g, function(_, k, v, lst) {
                      return 'var lst = (' + lst + '); for (var ' + k + ' in lst) { var ' + v + ' = lst[' + k + '];  if (typeof ' + v + ' === \'function\') continue; if (' + k + ' === \'__c__\') continue; ';
                    })
                    .replace(/\{%\s*else\s*%\}/g, ' } else { ')
                    .replace(/\{%\s*end\s*%\}/g, ' } ')
                    .replace(/\{\{\s*(.*?)\s*\}\}/g, function(_, k) {
                      return '\' + (' + k + ') + \'';
                    });
      code = 'var __acc__ = ""; ' + code + '; return __acc__;';
      var caches = {};
      return function(scope) {
        var line = Object.getOwnPropertyNames(scope).map(function(name) {
          return 'var ' + name + ' = ' + '__scope__["' + name + '"]';
        }).join(';');
        var func = caches[line];
        if (func) {
            return func(scope);
        }
        code = 'var __scope__ = arguments[0];' + line + ';' + code;
        func = caches[line] = new Function(code);
        return func(scope);
      };
    }
  };
})(window);
