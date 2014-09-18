// Compiled by ClojureScript 0.0-2268
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__5001__auto__ = elem.textContent;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__7088 = dommy.template.__GT_node_like.call(null,parent);G__7088.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__7088;
});
var append_BANG___3 = (function() { 
var G__7093__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__7089_7094 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7090_7095 = null;var count__7091_7096 = (0);var i__7092_7097 = (0);while(true){
if((i__7092_7097 < count__7091_7096))
{var c_7098 = cljs.core._nth.call(null,chunk__7090_7095,i__7092_7097);append_BANG_.call(null,parent__$1,c_7098);
{
var G__7099 = seq__7089_7094;
var G__7100 = chunk__7090_7095;
var G__7101 = count__7091_7096;
var G__7102 = (i__7092_7097 + (1));
seq__7089_7094 = G__7099;
chunk__7090_7095 = G__7100;
count__7091_7096 = G__7101;
i__7092_7097 = G__7102;
continue;
}
} else
{var temp__4126__auto___7103 = cljs.core.seq.call(null,seq__7089_7094);if(temp__4126__auto___7103)
{var seq__7089_7104__$1 = temp__4126__auto___7103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7089_7104__$1))
{var c__5757__auto___7105 = cljs.core.chunk_first.call(null,seq__7089_7104__$1);{
var G__7106 = cljs.core.chunk_rest.call(null,seq__7089_7104__$1);
var G__7107 = c__5757__auto___7105;
var G__7108 = cljs.core.count.call(null,c__5757__auto___7105);
var G__7109 = (0);
seq__7089_7094 = G__7106;
chunk__7090_7095 = G__7107;
count__7091_7096 = G__7108;
i__7092_7097 = G__7109;
continue;
}
} else
{var c_7110 = cljs.core.first.call(null,seq__7089_7104__$1);append_BANG_.call(null,parent__$1,c_7110);
{
var G__7111 = cljs.core.next.call(null,seq__7089_7104__$1);
var G__7112 = null;
var G__7113 = (0);
var G__7114 = (0);
seq__7089_7094 = G__7111;
chunk__7090_7095 = G__7112;
count__7091_7096 = G__7113;
i__7092_7097 = G__7114;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__7093 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7093__delegate.call(this,parent,child,more_children);};
G__7093.cljs$lang$maxFixedArity = 2;
G__7093.cljs$lang$applyTo = (function (arglist__7115){
var parent = cljs.core.first(arglist__7115);
arglist__7115 = cljs.core.next(arglist__7115);
var child = cljs.core.first(arglist__7115);
var more_children = cljs.core.rest(arglist__7115);
return G__7093__delegate(parent,child,more_children);
});
G__7093.cljs$core$IFn$_invoke$arity$variadic = G__7093__delegate;
return G__7093;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__7124__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__7120_7125 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7121_7126 = null;var count__7122_7127 = (0);var i__7123_7128 = (0);while(true){
if((i__7123_7128 < count__7122_7127))
{var c_7129 = cljs.core._nth.call(null,chunk__7121_7126,i__7123_7128);prepend_BANG_.call(null,parent__$1,c_7129);
{
var G__7130 = seq__7120_7125;
var G__7131 = chunk__7121_7126;
var G__7132 = count__7122_7127;
var G__7133 = (i__7123_7128 + (1));
seq__7120_7125 = G__7130;
chunk__7121_7126 = G__7131;
count__7122_7127 = G__7132;
i__7123_7128 = G__7133;
continue;
}
} else
{var temp__4126__auto___7134 = cljs.core.seq.call(null,seq__7120_7125);if(temp__4126__auto___7134)
{var seq__7120_7135__$1 = temp__4126__auto___7134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7120_7135__$1))
{var c__5757__auto___7136 = cljs.core.chunk_first.call(null,seq__7120_7135__$1);{
var G__7137 = cljs.core.chunk_rest.call(null,seq__7120_7135__$1);
var G__7138 = c__5757__auto___7136;
var G__7139 = cljs.core.count.call(null,c__5757__auto___7136);
var G__7140 = (0);
seq__7120_7125 = G__7137;
chunk__7121_7126 = G__7138;
count__7122_7127 = G__7139;
i__7123_7128 = G__7140;
continue;
}
} else
{var c_7141 = cljs.core.first.call(null,seq__7120_7135__$1);prepend_BANG_.call(null,parent__$1,c_7141);
{
var G__7142 = cljs.core.next.call(null,seq__7120_7135__$1);
var G__7143 = null;
var G__7144 = (0);
var G__7145 = (0);
seq__7120_7125 = G__7142;
chunk__7121_7126 = G__7143;
count__7122_7127 = G__7144;
i__7123_7128 = G__7145;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__7124 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7124__delegate.call(this,parent,child,more_children);};
G__7124.cljs$lang$maxFixedArity = 2;
G__7124.cljs$lang$applyTo = (function (arglist__7146){
var parent = cljs.core.first(arglist__7146);
arglist__7146 = cljs.core.next(arglist__7146);
var child = cljs.core.first(arglist__7146);
var more_children = cljs.core.rest(arglist__7146);
return G__7124__delegate(parent,child,more_children);
});
G__7124.cljs$core$IFn$_invoke$arity$variadic = G__7124__delegate;
return G__7124;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___7147 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___7147))
{var next_7148 = temp__4124__auto___7147;parent.insertBefore(actual_node,next_7148);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__7150 = dommy.template.__GT_node_like.call(null,parent);G__7150.innerHTML = "";
dommy.core.append_BANG_.call(null,G__7150,node_like);
return G__7150;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__7152 = elem__$1.parentNode;G__7152.removeChild(elem__$1);
return G__7152;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__7158){var vec__7159 = p__7158;var k = cljs.core.nth.call(null,vec__7159,(0),null);var v = cljs.core.nth.call(null,vec__7159,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t7160 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t7160 = (function (v,k,vec__7159,p__7158,container,key_selectors_map,template,selector_map,meta7161){
this.v = v;
this.k = k;
this.vec__7159 = vec__7159;
this.p__7158 = p__7158;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta7161 = meta7161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t7160.cljs$lang$type = true;
dommy.core.t7160.cljs$lang$ctorStr = "dommy.core/t7160";
dommy.core.t7160.cljs$lang$ctorPrWriter = ((function (vec__7159,k,v,container){
return (function (this__5568__auto__,writer__5569__auto__,opt__5570__auto__){return cljs.core._write.call(null,writer__5569__auto__,"dommy.core/t7160");
});})(vec__7159,k,v,container))
;
dommy.core.t7160.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__7159,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__7159,k,v,container))
;
dommy.core.t7160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__7159,k,v,container){
return (function (_7162){var self__ = this;
var _7162__$1 = this;return self__.meta7161;
});})(vec__7159,k,v,container))
;
dommy.core.t7160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__7159,k,v,container){
return (function (_7162,meta7161__$1){var self__ = this;
var _7162__$1 = this;return (new dommy.core.t7160(self__.v,self__.k,self__.vec__7159,self__.p__7158,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta7161__$1));
});})(vec__7159,k,v,container))
;
dommy.core.__GT_t7160 = ((function (vec__7159,k,v,container){
return (function __GT_t7160(v__$1,k__$1,vec__7159__$1,p__7158__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta7161){return (new dommy.core.t7160(v__$1,k__$1,vec__7159__$1,p__7158__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta7161));
});})(vec__7159,k,v,container))
;
}
return (new dommy.core.t7160(v,k,vec__7159,p__7158,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__7163_SHARP_){return p1__7163_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__7164_SHARP_){return !((p1__7164_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7165){var vec__7166 = p__7165;var special_mouse_event = cljs.core.nth.call(null,vec__7166,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__7166,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__7166,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__7166,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__5001__auto__ = event.selectedTarget;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4989__auto__ = related_target;if(cljs.core.truth_(and__4989__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4989__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__7166,special_mouse_event,real_mouse_event))
});})(vec__7166,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__4989__auto__ = selected_target;if(cljs.core.truth_(and__4989__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__4989__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__5001__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__7167){
var elem = cljs.core.first(arglist__7167);
arglist__7167 = cljs.core.next(arglist__7167);
var f = cljs.core.first(arglist__7167);
var args = cljs.core.rest(arglist__7167);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__7168_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__7168_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7192_7215 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7216 = cljs.core.nth.call(null,vec__7192_7215,(0),null);var selector_7217 = cljs.core.nth.call(null,vec__7192_7215,(1),null);var seq__7193_7218 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7200_7219 = null;var count__7201_7220 = (0);var i__7202_7221 = (0);while(true){
if((i__7202_7221 < count__7201_7220))
{var vec__7209_7222 = cljs.core._nth.call(null,chunk__7200_7219,i__7202_7221);var orig_type_7223 = cljs.core.nth.call(null,vec__7209_7222,(0),null);var f_7224 = cljs.core.nth.call(null,vec__7209_7222,(1),null);var seq__7203_7225 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7223,new cljs.core.PersistentArrayMap.fromArray([orig_type_7223,cljs.core.identity], true, false)));var chunk__7205_7226 = null;var count__7206_7227 = (0);var i__7207_7228 = (0);while(true){
if((i__7207_7228 < count__7206_7227))
{var vec__7210_7229 = cljs.core._nth.call(null,chunk__7205_7226,i__7207_7228);var actual_type_7230 = cljs.core.nth.call(null,vec__7210_7229,(0),null);var factory_7231 = cljs.core.nth.call(null,vec__7210_7229,(1),null);var canonical_f_7232 = (cljs.core.truth_(selector_7217)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7216,selector_7217):cljs.core.identity).call(null,factory_7231.call(null,f_7224));dommy.core.update_event_listeners_BANG_.call(null,elem_7216,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7217,actual_type_7230,f_7224], null),canonical_f_7232);
if(cljs.core.truth_(elem_7216.addEventListener))
{elem_7216.addEventListener(cljs.core.name.call(null,actual_type_7230),canonical_f_7232);
} else
{elem_7216.attachEvent(cljs.core.name.call(null,actual_type_7230),canonical_f_7232);
}
{
var G__7233 = seq__7203_7225;
var G__7234 = chunk__7205_7226;
var G__7235 = count__7206_7227;
var G__7236 = (i__7207_7228 + (1));
seq__7203_7225 = G__7233;
chunk__7205_7226 = G__7234;
count__7206_7227 = G__7235;
i__7207_7228 = G__7236;
continue;
}
} else
{var temp__4126__auto___7237 = cljs.core.seq.call(null,seq__7203_7225);if(temp__4126__auto___7237)
{var seq__7203_7238__$1 = temp__4126__auto___7237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7203_7238__$1))
{var c__5757__auto___7239 = cljs.core.chunk_first.call(null,seq__7203_7238__$1);{
var G__7240 = cljs.core.chunk_rest.call(null,seq__7203_7238__$1);
var G__7241 = c__5757__auto___7239;
var G__7242 = cljs.core.count.call(null,c__5757__auto___7239);
var G__7243 = (0);
seq__7203_7225 = G__7240;
chunk__7205_7226 = G__7241;
count__7206_7227 = G__7242;
i__7207_7228 = G__7243;
continue;
}
} else
{var vec__7211_7244 = cljs.core.first.call(null,seq__7203_7238__$1);var actual_type_7245 = cljs.core.nth.call(null,vec__7211_7244,(0),null);var factory_7246 = cljs.core.nth.call(null,vec__7211_7244,(1),null);var canonical_f_7247 = (cljs.core.truth_(selector_7217)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7216,selector_7217):cljs.core.identity).call(null,factory_7246.call(null,f_7224));dommy.core.update_event_listeners_BANG_.call(null,elem_7216,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7217,actual_type_7245,f_7224], null),canonical_f_7247);
if(cljs.core.truth_(elem_7216.addEventListener))
{elem_7216.addEventListener(cljs.core.name.call(null,actual_type_7245),canonical_f_7247);
} else
{elem_7216.attachEvent(cljs.core.name.call(null,actual_type_7245),canonical_f_7247);
}
{
var G__7248 = cljs.core.next.call(null,seq__7203_7238__$1);
var G__7249 = null;
var G__7250 = (0);
var G__7251 = (0);
seq__7203_7225 = G__7248;
chunk__7205_7226 = G__7249;
count__7206_7227 = G__7250;
i__7207_7228 = G__7251;
continue;
}
}
} else
{}
}
break;
}
{
var G__7252 = seq__7193_7218;
var G__7253 = chunk__7200_7219;
var G__7254 = count__7201_7220;
var G__7255 = (i__7202_7221 + (1));
seq__7193_7218 = G__7252;
chunk__7200_7219 = G__7253;
count__7201_7220 = G__7254;
i__7202_7221 = G__7255;
continue;
}
} else
{var temp__4126__auto___7256 = cljs.core.seq.call(null,seq__7193_7218);if(temp__4126__auto___7256)
{var seq__7193_7257__$1 = temp__4126__auto___7256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7193_7257__$1))
{var c__5757__auto___7258 = cljs.core.chunk_first.call(null,seq__7193_7257__$1);{
var G__7259 = cljs.core.chunk_rest.call(null,seq__7193_7257__$1);
var G__7260 = c__5757__auto___7258;
var G__7261 = cljs.core.count.call(null,c__5757__auto___7258);
var G__7262 = (0);
seq__7193_7218 = G__7259;
chunk__7200_7219 = G__7260;
count__7201_7220 = G__7261;
i__7202_7221 = G__7262;
continue;
}
} else
{var vec__7212_7263 = cljs.core.first.call(null,seq__7193_7257__$1);var orig_type_7264 = cljs.core.nth.call(null,vec__7212_7263,(0),null);var f_7265 = cljs.core.nth.call(null,vec__7212_7263,(1),null);var seq__7194_7266 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7264,new cljs.core.PersistentArrayMap.fromArray([orig_type_7264,cljs.core.identity], true, false)));var chunk__7196_7267 = null;var count__7197_7268 = (0);var i__7198_7269 = (0);while(true){
if((i__7198_7269 < count__7197_7268))
{var vec__7213_7270 = cljs.core._nth.call(null,chunk__7196_7267,i__7198_7269);var actual_type_7271 = cljs.core.nth.call(null,vec__7213_7270,(0),null);var factory_7272 = cljs.core.nth.call(null,vec__7213_7270,(1),null);var canonical_f_7273 = (cljs.core.truth_(selector_7217)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7216,selector_7217):cljs.core.identity).call(null,factory_7272.call(null,f_7265));dommy.core.update_event_listeners_BANG_.call(null,elem_7216,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7217,actual_type_7271,f_7265], null),canonical_f_7273);
if(cljs.core.truth_(elem_7216.addEventListener))
{elem_7216.addEventListener(cljs.core.name.call(null,actual_type_7271),canonical_f_7273);
} else
{elem_7216.attachEvent(cljs.core.name.call(null,actual_type_7271),canonical_f_7273);
}
{
var G__7274 = seq__7194_7266;
var G__7275 = chunk__7196_7267;
var G__7276 = count__7197_7268;
var G__7277 = (i__7198_7269 + (1));
seq__7194_7266 = G__7274;
chunk__7196_7267 = G__7275;
count__7197_7268 = G__7276;
i__7198_7269 = G__7277;
continue;
}
} else
{var temp__4126__auto___7278__$1 = cljs.core.seq.call(null,seq__7194_7266);if(temp__4126__auto___7278__$1)
{var seq__7194_7279__$1 = temp__4126__auto___7278__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7194_7279__$1))
{var c__5757__auto___7280 = cljs.core.chunk_first.call(null,seq__7194_7279__$1);{
var G__7281 = cljs.core.chunk_rest.call(null,seq__7194_7279__$1);
var G__7282 = c__5757__auto___7280;
var G__7283 = cljs.core.count.call(null,c__5757__auto___7280);
var G__7284 = (0);
seq__7194_7266 = G__7281;
chunk__7196_7267 = G__7282;
count__7197_7268 = G__7283;
i__7198_7269 = G__7284;
continue;
}
} else
{var vec__7214_7285 = cljs.core.first.call(null,seq__7194_7279__$1);var actual_type_7286 = cljs.core.nth.call(null,vec__7214_7285,(0),null);var factory_7287 = cljs.core.nth.call(null,vec__7214_7285,(1),null);var canonical_f_7288 = (cljs.core.truth_(selector_7217)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7216,selector_7217):cljs.core.identity).call(null,factory_7287.call(null,f_7265));dommy.core.update_event_listeners_BANG_.call(null,elem_7216,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7217,actual_type_7286,f_7265], null),canonical_f_7288);
if(cljs.core.truth_(elem_7216.addEventListener))
{elem_7216.addEventListener(cljs.core.name.call(null,actual_type_7286),canonical_f_7288);
} else
{elem_7216.attachEvent(cljs.core.name.call(null,actual_type_7286),canonical_f_7288);
}
{
var G__7289 = cljs.core.next.call(null,seq__7194_7279__$1);
var G__7290 = null;
var G__7291 = (0);
var G__7292 = (0);
seq__7194_7266 = G__7289;
chunk__7196_7267 = G__7290;
count__7197_7268 = G__7291;
i__7198_7269 = G__7292;
continue;
}
}
} else
{}
}
break;
}
{
var G__7293 = cljs.core.next.call(null,seq__7193_7257__$1);
var G__7294 = null;
var G__7295 = (0);
var G__7296 = (0);
seq__7193_7218 = G__7293;
chunk__7200_7219 = G__7294;
count__7201_7220 = G__7295;
i__7202_7221 = G__7296;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__7297){
var elem_sel = cljs.core.first(arglist__7297);
var type_fs = cljs.core.rest(arglist__7297);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7321_7344 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7345 = cljs.core.nth.call(null,vec__7321_7344,(0),null);var selector_7346 = cljs.core.nth.call(null,vec__7321_7344,(1),null);var seq__7322_7347 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7329_7348 = null;var count__7330_7349 = (0);var i__7331_7350 = (0);while(true){
if((i__7331_7350 < count__7330_7349))
{var vec__7338_7351 = cljs.core._nth.call(null,chunk__7329_7348,i__7331_7350);var orig_type_7352 = cljs.core.nth.call(null,vec__7338_7351,(0),null);var f_7353 = cljs.core.nth.call(null,vec__7338_7351,(1),null);var seq__7332_7354 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7352,new cljs.core.PersistentArrayMap.fromArray([orig_type_7352,cljs.core.identity], true, false)));var chunk__7334_7355 = null;var count__7335_7356 = (0);var i__7336_7357 = (0);while(true){
if((i__7336_7357 < count__7335_7356))
{var vec__7339_7358 = cljs.core._nth.call(null,chunk__7334_7355,i__7336_7357);var actual_type_7359 = cljs.core.nth.call(null,vec__7339_7358,(0),null);var __7360 = cljs.core.nth.call(null,vec__7339_7358,(1),null);var keys_7361 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7346,actual_type_7359,f_7353], null);var canonical_f_7362 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7345),keys_7361);dommy.core.update_event_listeners_BANG_.call(null,elem_7345,dommy.utils.dissoc_in,keys_7361);
if(cljs.core.truth_(elem_7345.removeEventListener))
{elem_7345.removeEventListener(cljs.core.name.call(null,actual_type_7359),canonical_f_7362);
} else
{elem_7345.detachEvent(cljs.core.name.call(null,actual_type_7359),canonical_f_7362);
}
{
var G__7363 = seq__7332_7354;
var G__7364 = chunk__7334_7355;
var G__7365 = count__7335_7356;
var G__7366 = (i__7336_7357 + (1));
seq__7332_7354 = G__7363;
chunk__7334_7355 = G__7364;
count__7335_7356 = G__7365;
i__7336_7357 = G__7366;
continue;
}
} else
{var temp__4126__auto___7367 = cljs.core.seq.call(null,seq__7332_7354);if(temp__4126__auto___7367)
{var seq__7332_7368__$1 = temp__4126__auto___7367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7332_7368__$1))
{var c__5757__auto___7369 = cljs.core.chunk_first.call(null,seq__7332_7368__$1);{
var G__7370 = cljs.core.chunk_rest.call(null,seq__7332_7368__$1);
var G__7371 = c__5757__auto___7369;
var G__7372 = cljs.core.count.call(null,c__5757__auto___7369);
var G__7373 = (0);
seq__7332_7354 = G__7370;
chunk__7334_7355 = G__7371;
count__7335_7356 = G__7372;
i__7336_7357 = G__7373;
continue;
}
} else
{var vec__7340_7374 = cljs.core.first.call(null,seq__7332_7368__$1);var actual_type_7375 = cljs.core.nth.call(null,vec__7340_7374,(0),null);var __7376 = cljs.core.nth.call(null,vec__7340_7374,(1),null);var keys_7377 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7346,actual_type_7375,f_7353], null);var canonical_f_7378 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7345),keys_7377);dommy.core.update_event_listeners_BANG_.call(null,elem_7345,dommy.utils.dissoc_in,keys_7377);
if(cljs.core.truth_(elem_7345.removeEventListener))
{elem_7345.removeEventListener(cljs.core.name.call(null,actual_type_7375),canonical_f_7378);
} else
{elem_7345.detachEvent(cljs.core.name.call(null,actual_type_7375),canonical_f_7378);
}
{
var G__7379 = cljs.core.next.call(null,seq__7332_7368__$1);
var G__7380 = null;
var G__7381 = (0);
var G__7382 = (0);
seq__7332_7354 = G__7379;
chunk__7334_7355 = G__7380;
count__7335_7356 = G__7381;
i__7336_7357 = G__7382;
continue;
}
}
} else
{}
}
break;
}
{
var G__7383 = seq__7322_7347;
var G__7384 = chunk__7329_7348;
var G__7385 = count__7330_7349;
var G__7386 = (i__7331_7350 + (1));
seq__7322_7347 = G__7383;
chunk__7329_7348 = G__7384;
count__7330_7349 = G__7385;
i__7331_7350 = G__7386;
continue;
}
} else
{var temp__4126__auto___7387 = cljs.core.seq.call(null,seq__7322_7347);if(temp__4126__auto___7387)
{var seq__7322_7388__$1 = temp__4126__auto___7387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7322_7388__$1))
{var c__5757__auto___7389 = cljs.core.chunk_first.call(null,seq__7322_7388__$1);{
var G__7390 = cljs.core.chunk_rest.call(null,seq__7322_7388__$1);
var G__7391 = c__5757__auto___7389;
var G__7392 = cljs.core.count.call(null,c__5757__auto___7389);
var G__7393 = (0);
seq__7322_7347 = G__7390;
chunk__7329_7348 = G__7391;
count__7330_7349 = G__7392;
i__7331_7350 = G__7393;
continue;
}
} else
{var vec__7341_7394 = cljs.core.first.call(null,seq__7322_7388__$1);var orig_type_7395 = cljs.core.nth.call(null,vec__7341_7394,(0),null);var f_7396 = cljs.core.nth.call(null,vec__7341_7394,(1),null);var seq__7323_7397 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7395,new cljs.core.PersistentArrayMap.fromArray([orig_type_7395,cljs.core.identity], true, false)));var chunk__7325_7398 = null;var count__7326_7399 = (0);var i__7327_7400 = (0);while(true){
if((i__7327_7400 < count__7326_7399))
{var vec__7342_7401 = cljs.core._nth.call(null,chunk__7325_7398,i__7327_7400);var actual_type_7402 = cljs.core.nth.call(null,vec__7342_7401,(0),null);var __7403 = cljs.core.nth.call(null,vec__7342_7401,(1),null);var keys_7404 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7346,actual_type_7402,f_7396], null);var canonical_f_7405 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7345),keys_7404);dommy.core.update_event_listeners_BANG_.call(null,elem_7345,dommy.utils.dissoc_in,keys_7404);
if(cljs.core.truth_(elem_7345.removeEventListener))
{elem_7345.removeEventListener(cljs.core.name.call(null,actual_type_7402),canonical_f_7405);
} else
{elem_7345.detachEvent(cljs.core.name.call(null,actual_type_7402),canonical_f_7405);
}
{
var G__7406 = seq__7323_7397;
var G__7407 = chunk__7325_7398;
var G__7408 = count__7326_7399;
var G__7409 = (i__7327_7400 + (1));
seq__7323_7397 = G__7406;
chunk__7325_7398 = G__7407;
count__7326_7399 = G__7408;
i__7327_7400 = G__7409;
continue;
}
} else
{var temp__4126__auto___7410__$1 = cljs.core.seq.call(null,seq__7323_7397);if(temp__4126__auto___7410__$1)
{var seq__7323_7411__$1 = temp__4126__auto___7410__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7323_7411__$1))
{var c__5757__auto___7412 = cljs.core.chunk_first.call(null,seq__7323_7411__$1);{
var G__7413 = cljs.core.chunk_rest.call(null,seq__7323_7411__$1);
var G__7414 = c__5757__auto___7412;
var G__7415 = cljs.core.count.call(null,c__5757__auto___7412);
var G__7416 = (0);
seq__7323_7397 = G__7413;
chunk__7325_7398 = G__7414;
count__7326_7399 = G__7415;
i__7327_7400 = G__7416;
continue;
}
} else
{var vec__7343_7417 = cljs.core.first.call(null,seq__7323_7411__$1);var actual_type_7418 = cljs.core.nth.call(null,vec__7343_7417,(0),null);var __7419 = cljs.core.nth.call(null,vec__7343_7417,(1),null);var keys_7420 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7346,actual_type_7418,f_7396], null);var canonical_f_7421 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7345),keys_7420);dommy.core.update_event_listeners_BANG_.call(null,elem_7345,dommy.utils.dissoc_in,keys_7420);
if(cljs.core.truth_(elem_7345.removeEventListener))
{elem_7345.removeEventListener(cljs.core.name.call(null,actual_type_7418),canonical_f_7421);
} else
{elem_7345.detachEvent(cljs.core.name.call(null,actual_type_7418),canonical_f_7421);
}
{
var G__7422 = cljs.core.next.call(null,seq__7323_7411__$1);
var G__7423 = null;
var G__7424 = (0);
var G__7425 = (0);
seq__7323_7397 = G__7422;
chunk__7325_7398 = G__7423;
count__7326_7399 = G__7424;
i__7327_7400 = G__7425;
continue;
}
}
} else
{}
}
break;
}
{
var G__7426 = cljs.core.next.call(null,seq__7322_7388__$1);
var G__7427 = null;
var G__7428 = (0);
var G__7429 = (0);
seq__7322_7347 = G__7426;
chunk__7329_7348 = G__7427;
count__7330_7349 = G__7428;
i__7331_7350 = G__7429;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7430){
var elem_sel = cljs.core.first(arglist__7430);
var type_fs = cljs.core.rest(arglist__7430);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7438_7445 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7446 = cljs.core.nth.call(null,vec__7438_7445,(0),null);var selector_7447 = cljs.core.nth.call(null,vec__7438_7445,(1),null);var seq__7439_7448 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7440_7449 = null;var count__7441_7450 = (0);var i__7442_7451 = (0);while(true){
if((i__7442_7451 < count__7441_7450))
{var vec__7443_7452 = cljs.core._nth.call(null,chunk__7440_7449,i__7442_7451);var type_7453 = cljs.core.nth.call(null,vec__7443_7452,(0),null);var f_7454 = cljs.core.nth.call(null,vec__7443_7452,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7453,((function (seq__7439_7448,chunk__7440_7449,count__7441_7450,i__7442_7451,vec__7443_7452,type_7453,f_7454,vec__7438_7445,elem_7446,selector_7447){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7453,this_fn);
return f_7454.call(null,e);
});})(seq__7439_7448,chunk__7440_7449,count__7441_7450,i__7442_7451,vec__7443_7452,type_7453,f_7454,vec__7438_7445,elem_7446,selector_7447))
);
{
var G__7455 = seq__7439_7448;
var G__7456 = chunk__7440_7449;
var G__7457 = count__7441_7450;
var G__7458 = (i__7442_7451 + (1));
seq__7439_7448 = G__7455;
chunk__7440_7449 = G__7456;
count__7441_7450 = G__7457;
i__7442_7451 = G__7458;
continue;
}
} else
{var temp__4126__auto___7459 = cljs.core.seq.call(null,seq__7439_7448);if(temp__4126__auto___7459)
{var seq__7439_7460__$1 = temp__4126__auto___7459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7439_7460__$1))
{var c__5757__auto___7461 = cljs.core.chunk_first.call(null,seq__7439_7460__$1);{
var G__7462 = cljs.core.chunk_rest.call(null,seq__7439_7460__$1);
var G__7463 = c__5757__auto___7461;
var G__7464 = cljs.core.count.call(null,c__5757__auto___7461);
var G__7465 = (0);
seq__7439_7448 = G__7462;
chunk__7440_7449 = G__7463;
count__7441_7450 = G__7464;
i__7442_7451 = G__7465;
continue;
}
} else
{var vec__7444_7466 = cljs.core.first.call(null,seq__7439_7460__$1);var type_7467 = cljs.core.nth.call(null,vec__7444_7466,(0),null);var f_7468 = cljs.core.nth.call(null,vec__7444_7466,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7467,((function (seq__7439_7448,chunk__7440_7449,count__7441_7450,i__7442_7451,vec__7444_7466,type_7467,f_7468,seq__7439_7460__$1,temp__4126__auto___7459,vec__7438_7445,elem_7446,selector_7447){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7467,this_fn);
return f_7468.call(null,e);
});})(seq__7439_7448,chunk__7440_7449,count__7441_7450,i__7442_7451,vec__7444_7466,type_7467,f_7468,seq__7439_7460__$1,temp__4126__auto___7459,vec__7438_7445,elem_7446,selector_7447))
);
{
var G__7469 = cljs.core.next.call(null,seq__7439_7460__$1);
var G__7470 = null;
var G__7471 = (0);
var G__7472 = (0);
seq__7439_7448 = G__7469;
chunk__7440_7449 = G__7470;
count__7441_7450 = G__7471;
i__7442_7451 = G__7472;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7473){
var elem_sel = cljs.core.first(arglist__7473);
var type_fs = cljs.core.rest(arglist__7473);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__7474){var vec__7476 = p__7474;var update_event_BANG_ = cljs.core.nth.call(null,vec__7476,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__5001__auto__ = update_event_BANG_;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__7474 = null;if (arguments.length > 2) {
  p__7474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__7474);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__7477){
var node = cljs.core.first(arglist__7477);
arglist__7477 = cljs.core.next(arglist__7477);
var event_type = cljs.core.first(arglist__7477);
var p__7474 = cljs.core.rest(arglist__7477);
return fire_BANG___delegate(node,event_type,p__7474);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
