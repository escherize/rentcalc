// Compiled by ClojureScript 0.0-2268
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__4989__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__4989__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__4989__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__7497 = (i + class$.length);
start_from = G__7497;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___7522 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7522))
{var class_list_7523 = temp__4124__auto___7522;var seq__7510_7524 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7511_7525 = null;var count__7512_7526 = (0);var i__7513_7527 = (0);while(true){
if((i__7513_7527 < count__7512_7526))
{var class_7528 = cljs.core._nth.call(null,chunk__7511_7525,i__7513_7527);class_list_7523.add(class_7528);
{
var G__7529 = seq__7510_7524;
var G__7530 = chunk__7511_7525;
var G__7531 = count__7512_7526;
var G__7532 = (i__7513_7527 + (1));
seq__7510_7524 = G__7529;
chunk__7511_7525 = G__7530;
count__7512_7526 = G__7531;
i__7513_7527 = G__7532;
continue;
}
} else
{var temp__4126__auto___7533 = cljs.core.seq.call(null,seq__7510_7524);if(temp__4126__auto___7533)
{var seq__7510_7534__$1 = temp__4126__auto___7533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7510_7534__$1))
{var c__5757__auto___7535 = cljs.core.chunk_first.call(null,seq__7510_7534__$1);{
var G__7536 = cljs.core.chunk_rest.call(null,seq__7510_7534__$1);
var G__7537 = c__5757__auto___7535;
var G__7538 = cljs.core.count.call(null,c__5757__auto___7535);
var G__7539 = (0);
seq__7510_7524 = G__7536;
chunk__7511_7525 = G__7537;
count__7512_7526 = G__7538;
i__7513_7527 = G__7539;
continue;
}
} else
{var class_7540 = cljs.core.first.call(null,seq__7510_7534__$1);class_list_7523.add(class_7540);
{
var G__7541 = cljs.core.next.call(null,seq__7510_7534__$1);
var G__7542 = null;
var G__7543 = (0);
var G__7544 = (0);
seq__7510_7524 = G__7541;
chunk__7511_7525 = G__7542;
count__7512_7526 = G__7543;
i__7513_7527 = G__7544;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__7514_7545 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7515_7546 = null;var count__7516_7547 = (0);var i__7517_7548 = (0);while(true){
if((i__7517_7548 < count__7516_7547))
{var class_7549 = cljs.core._nth.call(null,chunk__7515_7546,i__7517_7548);var class_name_7550 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7550,class_7549)))
{} else
{elem__$1.className = (((class_name_7550 === ""))?class_7549:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_7550)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_7549)));
}
{
var G__7551 = seq__7514_7545;
var G__7552 = chunk__7515_7546;
var G__7553 = count__7516_7547;
var G__7554 = (i__7517_7548 + (1));
seq__7514_7545 = G__7551;
chunk__7515_7546 = G__7552;
count__7516_7547 = G__7553;
i__7517_7548 = G__7554;
continue;
}
} else
{var temp__4126__auto___7555 = cljs.core.seq.call(null,seq__7514_7545);if(temp__4126__auto___7555)
{var seq__7514_7556__$1 = temp__4126__auto___7555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7514_7556__$1))
{var c__5757__auto___7557 = cljs.core.chunk_first.call(null,seq__7514_7556__$1);{
var G__7558 = cljs.core.chunk_rest.call(null,seq__7514_7556__$1);
var G__7559 = c__5757__auto___7557;
var G__7560 = cljs.core.count.call(null,c__5757__auto___7557);
var G__7561 = (0);
seq__7514_7545 = G__7558;
chunk__7515_7546 = G__7559;
count__7516_7547 = G__7560;
i__7517_7548 = G__7561;
continue;
}
} else
{var class_7562 = cljs.core.first.call(null,seq__7514_7556__$1);var class_name_7563 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7563,class_7562)))
{} else
{elem__$1.className = (((class_name_7563 === ""))?class_7562:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_7563)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_7562)));
}
{
var G__7564 = cljs.core.next.call(null,seq__7514_7556__$1);
var G__7565 = null;
var G__7566 = (0);
var G__7567 = (0);
seq__7514_7545 = G__7564;
chunk__7515_7546 = G__7565;
count__7516_7547 = G__7566;
i__7517_7548 = G__7567;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__7568__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7518_7569 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__7519_7570 = null;var count__7520_7571 = (0);var i__7521_7572 = (0);while(true){
if((i__7521_7572 < count__7520_7571))
{var c_7573 = cljs.core._nth.call(null,chunk__7519_7570,i__7521_7572);add_class_BANG_.call(null,elem__$1,c_7573);
{
var G__7574 = seq__7518_7569;
var G__7575 = chunk__7519_7570;
var G__7576 = count__7520_7571;
var G__7577 = (i__7521_7572 + (1));
seq__7518_7569 = G__7574;
chunk__7519_7570 = G__7575;
count__7520_7571 = G__7576;
i__7521_7572 = G__7577;
continue;
}
} else
{var temp__4126__auto___7578 = cljs.core.seq.call(null,seq__7518_7569);if(temp__4126__auto___7578)
{var seq__7518_7579__$1 = temp__4126__auto___7578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7518_7579__$1))
{var c__5757__auto___7580 = cljs.core.chunk_first.call(null,seq__7518_7579__$1);{
var G__7581 = cljs.core.chunk_rest.call(null,seq__7518_7579__$1);
var G__7582 = c__5757__auto___7580;
var G__7583 = cljs.core.count.call(null,c__5757__auto___7580);
var G__7584 = (0);
seq__7518_7569 = G__7581;
chunk__7519_7570 = G__7582;
count__7520_7571 = G__7583;
i__7521_7572 = G__7584;
continue;
}
} else
{var c_7585 = cljs.core.first.call(null,seq__7518_7579__$1);add_class_BANG_.call(null,elem__$1,c_7585);
{
var G__7586 = cljs.core.next.call(null,seq__7518_7579__$1);
var G__7587 = null;
var G__7588 = (0);
var G__7589 = (0);
seq__7518_7569 = G__7586;
chunk__7519_7570 = G__7587;
count__7520_7571 = G__7588;
i__7521_7572 = G__7589;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7568 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7568__delegate.call(this,elem,classes,more_classes);};
G__7568.cljs$lang$maxFixedArity = 2;
G__7568.cljs$lang$applyTo = (function (arglist__7590){
var elem = cljs.core.first(arglist__7590);
arglist__7590 = cljs.core.next(arglist__7590);
var classes = cljs.core.first(arglist__7590);
var more_classes = cljs.core.rest(arglist__7590);
return G__7568__delegate(elem,classes,more_classes);
});
G__7568.cljs$core$IFn$_invoke$arity$variadic = G__7568__delegate;
return G__7568;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__7591 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__7591;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___7600 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7600))
{var class_list_7601 = temp__4124__auto___7600;class_list_7601.remove(class$__$1);
} else
{var class_name_7602 = elem__$1.className;var new_class_name_7603 = dommy.attrs.remove_class_str.call(null,class_name_7602,class$__$1);if((class_name_7602 === new_class_name_7603))
{} else
{elem__$1.className = new_class_name_7603;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7604__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7596 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7597 = null;var count__7598 = (0);var i__7599 = (0);while(true){
if((i__7599 < count__7598))
{var c = cljs.core._nth.call(null,chunk__7597,i__7599);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7605 = seq__7596;
var G__7606 = chunk__7597;
var G__7607 = count__7598;
var G__7608 = (i__7599 + (1));
seq__7596 = G__7605;
chunk__7597 = G__7606;
count__7598 = G__7607;
i__7599 = G__7608;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7596);if(temp__4126__auto__)
{var seq__7596__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7596__$1))
{var c__5757__auto__ = cljs.core.chunk_first.call(null,seq__7596__$1);{
var G__7609 = cljs.core.chunk_rest.call(null,seq__7596__$1);
var G__7610 = c__5757__auto__;
var G__7611 = cljs.core.count.call(null,c__5757__auto__);
var G__7612 = (0);
seq__7596 = G__7609;
chunk__7597 = G__7610;
count__7598 = G__7611;
i__7599 = G__7612;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7596__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7613 = cljs.core.next.call(null,seq__7596__$1);
var G__7614 = null;
var G__7615 = (0);
var G__7616 = (0);
seq__7596 = G__7613;
chunk__7597 = G__7614;
count__7598 = G__7615;
i__7599 = G__7616;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__7604 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7604__delegate.call(this,elem,class$,classes);};
G__7604.cljs$lang$maxFixedArity = 2;
G__7604.cljs$lang$applyTo = (function (arglist__7617){
var elem = cljs.core.first(arglist__7617);
arglist__7617 = cljs.core.next(arglist__7617);
var class$ = cljs.core.first(arglist__7617);
var classes = cljs.core.rest(arglist__7617);
return G__7604__delegate(elem,class$,classes);
});
G__7604.cljs$core$IFn$_invoke$arity$variadic = G__7604__delegate;
return G__7604;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4124__auto___7618 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7618))
{var class_list_7619 = temp__4124__auto___7618;class_list_7619.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7622){var vec__7623 = p__7622;var k = cljs.core.nth.call(null,vec__7623,(0),null);var v = cljs.core.nth.call(null,vec__7623,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dommy.utils.as_str.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7630_7636 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7631_7637 = null;var count__7632_7638 = (0);var i__7633_7639 = (0);while(true){
if((i__7633_7639 < count__7632_7638))
{var vec__7634_7640 = cljs.core._nth.call(null,chunk__7631_7637,i__7633_7639);var k_7641 = cljs.core.nth.call(null,vec__7634_7640,(0),null);var v_7642 = cljs.core.nth.call(null,vec__7634_7640,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_7641),v_7642);
{
var G__7643 = seq__7630_7636;
var G__7644 = chunk__7631_7637;
var G__7645 = count__7632_7638;
var G__7646 = (i__7633_7639 + (1));
seq__7630_7636 = G__7643;
chunk__7631_7637 = G__7644;
count__7632_7638 = G__7645;
i__7633_7639 = G__7646;
continue;
}
} else
{var temp__4126__auto___7647 = cljs.core.seq.call(null,seq__7630_7636);if(temp__4126__auto___7647)
{var seq__7630_7648__$1 = temp__4126__auto___7647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7630_7648__$1))
{var c__5757__auto___7649 = cljs.core.chunk_first.call(null,seq__7630_7648__$1);{
var G__7650 = cljs.core.chunk_rest.call(null,seq__7630_7648__$1);
var G__7651 = c__5757__auto___7649;
var G__7652 = cljs.core.count.call(null,c__5757__auto___7649);
var G__7653 = (0);
seq__7630_7636 = G__7650;
chunk__7631_7637 = G__7651;
count__7632_7638 = G__7652;
i__7633_7639 = G__7653;
continue;
}
} else
{var vec__7635_7654 = cljs.core.first.call(null,seq__7630_7648__$1);var k_7655 = cljs.core.nth.call(null,vec__7635_7654,(0),null);var v_7656 = cljs.core.nth.call(null,vec__7635_7654,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_7655),v_7656);
{
var G__7657 = cljs.core.next.call(null,seq__7630_7648__$1);
var G__7658 = null;
var G__7659 = (0);
var G__7660 = (0);
seq__7630_7636 = G__7657;
chunk__7631_7637 = G__7658;
count__7632_7638 = G__7659;
i__7633_7639 = G__7660;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7661){
var elem = cljs.core.first(arglist__7661);
var kvs = cljs.core.rest(arglist__7661);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7668_7674 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7669_7675 = null;var count__7670_7676 = (0);var i__7671_7677 = (0);while(true){
if((i__7671_7677 < count__7670_7676))
{var vec__7672_7678 = cljs.core._nth.call(null,chunk__7669_7675,i__7671_7677);var k_7679 = cljs.core.nth.call(null,vec__7672_7678,(0),null);var v_7680 = cljs.core.nth.call(null,vec__7672_7678,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7679,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7680)+"px"));
{
var G__7681 = seq__7668_7674;
var G__7682 = chunk__7669_7675;
var G__7683 = count__7670_7676;
var G__7684 = (i__7671_7677 + (1));
seq__7668_7674 = G__7681;
chunk__7669_7675 = G__7682;
count__7670_7676 = G__7683;
i__7671_7677 = G__7684;
continue;
}
} else
{var temp__4126__auto___7685 = cljs.core.seq.call(null,seq__7668_7674);if(temp__4126__auto___7685)
{var seq__7668_7686__$1 = temp__4126__auto___7685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7668_7686__$1))
{var c__5757__auto___7687 = cljs.core.chunk_first.call(null,seq__7668_7686__$1);{
var G__7688 = cljs.core.chunk_rest.call(null,seq__7668_7686__$1);
var G__7689 = c__5757__auto___7687;
var G__7690 = cljs.core.count.call(null,c__5757__auto___7687);
var G__7691 = (0);
seq__7668_7674 = G__7688;
chunk__7669_7675 = G__7689;
count__7670_7676 = G__7690;
i__7671_7677 = G__7691;
continue;
}
} else
{var vec__7673_7692 = cljs.core.first.call(null,seq__7668_7686__$1);var k_7693 = cljs.core.nth.call(null,vec__7673_7692,(0),null);var v_7694 = cljs.core.nth.call(null,vec__7673_7692,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7693,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7694)+"px"));
{
var G__7695 = cljs.core.next.call(null,seq__7668_7686__$1);
var G__7696 = null;
var G__7697 = (0);
var G__7698 = (0);
seq__7668_7674 = G__7695;
chunk__7669_7675 = G__7696;
count__7670_7676 = G__7697;
i__7671_7677 = G__7698;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7699){
var elem = cljs.core.first(arglist__7699);
var kvs = cljs.core.rest(arglist__7699);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__7708 = dommy.template.__GT_node_like.call(null,elem);(G__7708[dommy.utils.as_str.call(null,k)] = v);
return G__7708;
} else
{var G__7709 = dommy.template.__GT_node_like.call(null,elem);G__7709.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__7709;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7716__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7710_7717 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__7711_7718 = null;var count__7712_7719 = (0);var i__7713_7720 = (0);while(true){
if((i__7713_7720 < count__7712_7719))
{var vec__7714_7721 = cljs.core._nth.call(null,chunk__7711_7718,i__7713_7720);var k_7722__$1 = cljs.core.nth.call(null,vec__7714_7721,(0),null);var v_7723__$1 = cljs.core.nth.call(null,vec__7714_7721,(1),null);set_attr_BANG_.call(null,elem__$1,k_7722__$1,v_7723__$1);
{
var G__7724 = seq__7710_7717;
var G__7725 = chunk__7711_7718;
var G__7726 = count__7712_7719;
var G__7727 = (i__7713_7720 + (1));
seq__7710_7717 = G__7724;
chunk__7711_7718 = G__7725;
count__7712_7719 = G__7726;
i__7713_7720 = G__7727;
continue;
}
} else
{var temp__4126__auto___7728 = cljs.core.seq.call(null,seq__7710_7717);if(temp__4126__auto___7728)
{var seq__7710_7729__$1 = temp__4126__auto___7728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7710_7729__$1))
{var c__5757__auto___7730 = cljs.core.chunk_first.call(null,seq__7710_7729__$1);{
var G__7731 = cljs.core.chunk_rest.call(null,seq__7710_7729__$1);
var G__7732 = c__5757__auto___7730;
var G__7733 = cljs.core.count.call(null,c__5757__auto___7730);
var G__7734 = (0);
seq__7710_7717 = G__7731;
chunk__7711_7718 = G__7732;
count__7712_7719 = G__7733;
i__7713_7720 = G__7734;
continue;
}
} else
{var vec__7715_7735 = cljs.core.first.call(null,seq__7710_7729__$1);var k_7736__$1 = cljs.core.nth.call(null,vec__7715_7735,(0),null);var v_7737__$1 = cljs.core.nth.call(null,vec__7715_7735,(1),null);set_attr_BANG_.call(null,elem__$1,k_7736__$1,v_7737__$1);
{
var G__7738 = cljs.core.next.call(null,seq__7710_7729__$1);
var G__7739 = null;
var G__7740 = (0);
var G__7741 = (0);
seq__7710_7717 = G__7738;
chunk__7711_7718 = G__7739;
count__7712_7719 = G__7740;
i__7713_7720 = G__7741;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7716 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7716__delegate.call(this,elem,k,v,kvs);};
G__7716.cljs$lang$maxFixedArity = 3;
G__7716.cljs$lang$applyTo = (function (arglist__7742){
var elem = cljs.core.first(arglist__7742);
arglist__7742 = cljs.core.next(arglist__7742);
var k = cljs.core.first(arglist__7742);
arglist__7742 = cljs.core.next(arglist__7742);
var v = cljs.core.first(arglist__7742);
var kvs = cljs.core.rest(arglist__7742);
return G__7716__delegate(elem,k,v,kvs);
});
G__7716.cljs$core$IFn$_invoke$arity$variadic = G__7716__delegate;
return G__7716;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__7751__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7747_7752 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7748_7753 = null;var count__7749_7754 = (0);var i__7750_7755 = (0);while(true){
if((i__7750_7755 < count__7749_7754))
{var k_7756__$1 = cljs.core._nth.call(null,chunk__7748_7753,i__7750_7755);remove_attr_BANG_.call(null,elem__$1,k_7756__$1);
{
var G__7757 = seq__7747_7752;
var G__7758 = chunk__7748_7753;
var G__7759 = count__7749_7754;
var G__7760 = (i__7750_7755 + (1));
seq__7747_7752 = G__7757;
chunk__7748_7753 = G__7758;
count__7749_7754 = G__7759;
i__7750_7755 = G__7760;
continue;
}
} else
{var temp__4126__auto___7761 = cljs.core.seq.call(null,seq__7747_7752);if(temp__4126__auto___7761)
{var seq__7747_7762__$1 = temp__4126__auto___7761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7747_7762__$1))
{var c__5757__auto___7763 = cljs.core.chunk_first.call(null,seq__7747_7762__$1);{
var G__7764 = cljs.core.chunk_rest.call(null,seq__7747_7762__$1);
var G__7765 = c__5757__auto___7763;
var G__7766 = cljs.core.count.call(null,c__5757__auto___7763);
var G__7767 = (0);
seq__7747_7752 = G__7764;
chunk__7748_7753 = G__7765;
count__7749_7754 = G__7766;
i__7750_7755 = G__7767;
continue;
}
} else
{var k_7768__$1 = cljs.core.first.call(null,seq__7747_7762__$1);remove_attr_BANG_.call(null,elem__$1,k_7768__$1);
{
var G__7769 = cljs.core.next.call(null,seq__7747_7762__$1);
var G__7770 = null;
var G__7771 = (0);
var G__7772 = (0);
seq__7747_7752 = G__7769;
chunk__7748_7753 = G__7770;
count__7749_7754 = G__7771;
i__7750_7755 = G__7772;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__7751 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7751__delegate.call(this,elem,k,ks);};
G__7751.cljs$lang$maxFixedArity = 2;
G__7751.cljs$lang$applyTo = (function (arglist__7773){
var elem = cljs.core.first(arglist__7773);
arglist__7773 = cljs.core.next(arglist__7773);
var k = cljs.core.first(arglist__7773);
var ks = cljs.core.rest(arglist__7773);
return G__7751__delegate(elem,k,ks);
});
G__7751.cljs$core$IFn$_invoke$arity$variadic = G__7751__delegate;
return G__7751;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7775 = dommy.template.__GT_node_like.call(null,elem);G__7775.style.display = ((show_QMARK_)?"":"none");
return G__7775;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7777 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7777,false);
return G__7777;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7779 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7779,true);
return G__7779;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
