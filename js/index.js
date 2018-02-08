/**
 * Created by 32752 on 2018/2/8.
 */
(function(global, factory) {
    "use strict";
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }
})(typeof window !== "undefined" ? window : this, function(w, noGlobal){
    var version = '0.01';
    var slice = Array.slice;
    var document = w.document;
    var zyw = function(selector, context) {
        return new zyw.fn.init(selector, context);
    }
    zyw.fn = zyw.prototype = {
        zyw: version,
        constructor: zyw,
        length: 0,
        toArray: function() {
            return slice.call(this);
        }
    };
    var zywRoot;
    var isClassSelector = function(selector) {
        if (typeof selector === 'string' && selector.length && selector[0] === '.') {
            return true;
        }
        return false;
    };
    var isIdSelector = function(selector) {
        if (typeof selector === 'string' && selector.length && selector[0] === '#') {
            return true;
        }
        return false;
    }
    var init = zyw.fn.init = function( selector, context, root ) {
        if (!selector) {
            return this;
        }
        var elem;
        if (isClassSelector(selector)) {
            elem = w.document.getElementsByClassName(selector.substr(1));
            for (var el in elem) {
                this[el] = elem[el];
            }
            this.length = elem.length;
        }
        if (isIdSelector(selector)) {
            elem = w.document.getElementById(selector.substr(1));
            this[0] = elem;
            this.length = elem.length;
        }
        root = root || zywRoot;
        return this;
    }
    init.prototype = new function(){};
    init.prototype.html = function() {
        var self = this;
        console.log(self);
        if (!value) {
            return self ? self[0].innerHTML : undefined;
        }
        for (var el in self) {
            self[el].innerHTML = value;
        }
        return self;
    }
    zywRoot = zyw(document);
    if (!noGlobal) {
        //window.zyw = window.$ = zyw;
        window.zyw = zyw;
    }
    return zyw;
});