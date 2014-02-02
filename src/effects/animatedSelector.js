define([
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

jQuery.expr.filters.animated = function( elem ) {
	return jQuery.filter(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};

});
