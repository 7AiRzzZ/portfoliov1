/* EASING EXTEND */
jQuery.extend({myeas:function(a){var b="bez_"+jQuery.makeArray(arguments).join("_").replace(".","p");if(typeof jQuery.easing[b]!="function"){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){var b=a,c=0,d;while(++c<14){d=f(b,0)-a;if(Math.abs(d)<.001)break;b-=d/g(b)}return b};return function(a){return f(h(a),1)}};jQuery.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}});

/* EACH FUNCTIONS */

$('.title').each(function(index, element) {
    var el = $(this);
	
	el.find('.bar').animate({width:'70%'},600,$.myeas([0.7, 0, 0.175, 1]));
	setTimeout(function(){
		el.find('.text').animate({width:'100%'},600,$.myeas([0.7, 0, 0.175, 1]));
	},300)
	
});