
/*
 * $.unique
 */

// Enhanced $.unique function that also handles duplicate values, not just DOM nodes

(function($){

    var _old = $.unique;

    $.unique = function(arr){

        // do the default behavior only if we got an array of elements
        if (!!arr[0].nodeType){
            return _old.apply(this,arguments);
        } else {
            // reduce the array to contain no dupes via grep/inArray
            return $.grep(arr,function(v,k){
                return $.inArray(v,arr) === k;
            });
        }
    };
})(jQuery);


// in use..
var arr = ['first',7,true,2,7,true,'last','last'];
$.unique(arr); // ["first", 7, true, 2, "last"]


var arr = [1,2,3,4,5,4,3,2,1];
$.unique(arr); // [1, 2, 3, 4, 5]