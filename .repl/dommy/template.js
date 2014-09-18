// Compiled by ClojureScript 0.0-2268
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["path",null,"svg",null,"text",null,"line",null,"polygon",null,"textPath",null,"polyline",null,"g",null,"clipPath",null,"rect",null,"circle",null], null), null);
dommy.template.PElement = (function (){var obj7781 = {};return obj7781;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__4989__auto__ = this$;if(and__4989__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4989__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__5628__auto__ = (((this$ == null))?null:this$);return (function (){var or__5001__auto__ = (dommy.template._elem[goog.typeOf(x__5628__auto__)]);if(or__5001__auto__)
{return or__5001__auto__;
} else
{var or__5001__auto____$1 = (dommy.template._elem["_"]);if(or__5001__auto____$1)
{return or__5001__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":((new cljs.core.Keyword(null,"else","else",-1508377146))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_7784 = node_str.substring(base_idx);while(true){
var next_idx_7785 = dommy.template.next_css_index.call(null,str_7784,(1));var frag_7786 = (((next_idx_7785 >= (0)))?str_7784.substring((0),next_idx_7785):str_7784);var G__7783_7787 = frag_7786.charAt((0));switch (G__7783_7787) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_7786.substring((1)));

break;
case "#":
node.setAttribute("id",frag_7786.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_7786.charAt((0))))));

}
if((next_idx_7785 >= (0)))
{{
var G__7789 = str_7784.substring(next_idx_7785);
str_7784 = G__7789;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7795 = data;if(G__7795)
{var bit__5651__auto__ = null;if(cljs.core.truth_((function (){var or__5001__auto__ = bit__5651__auto__;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return G__7795.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7795.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7795);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7795);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__7796_7800 = cljs.core.seq.call(null,data);var chunk__7797_7801 = null;var count__7798_7802 = (0);var i__7799_7803 = (0);while(true){
if((i__7799_7803 < count__7798_7802))
{var child_7804 = cljs.core._nth.call(null,chunk__7797_7801,i__7799_7803);__GT_document_fragment.call(null,result_frag,child_7804);
{
var G__7805 = seq__7796_7800;
var G__7806 = chunk__7797_7801;
var G__7807 = count__7798_7802;
var G__7808 = (i__7799_7803 + (1));
seq__7796_7800 = G__7805;
chunk__7797_7801 = G__7806;
count__7798_7802 = G__7807;
i__7799_7803 = G__7808;
continue;
}
} else
{var temp__4126__auto___7809 = cljs.core.seq.call(null,seq__7796_7800);if(temp__4126__auto___7809)
{var seq__7796_7810__$1 = temp__4126__auto___7809;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7796_7810__$1))
{var c__5757__auto___7811 = cljs.core.chunk_first.call(null,seq__7796_7810__$1);{
var G__7812 = cljs.core.chunk_rest.call(null,seq__7796_7810__$1);
var G__7813 = c__5757__auto___7811;
var G__7814 = cljs.core.count.call(null,c__5757__auto___7811);
var G__7815 = (0);
seq__7796_7800 = G__7812;
chunk__7797_7801 = G__7813;
count__7798_7802 = G__7814;
i__7799_7803 = G__7815;
continue;
}
} else
{var child_7816 = cljs.core.first.call(null,seq__7796_7810__$1);__GT_document_fragment.call(null,result_frag,child_7816);
{
var G__7817 = cljs.core.next.call(null,seq__7796_7810__$1);
var G__7818 = null;
var G__7819 = (0);
var G__7820 = (0);
seq__7796_7800 = G__7817;
chunk__7797_7801 = G__7818;
count__7798_7802 = G__7819;
i__7799_7803 = G__7820;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7822 = data;if(G__7822)
{var bit__5651__auto__ = null;if(cljs.core.truth_((function (){var or__5001__auto__ = bit__5651__auto__;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return G__7822.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7822.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7822);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7822);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__7823){var vec__7843 = p__7823;var tag_name = cljs.core.nth.call(null,vec__7843,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__7843,(1),null);var children = cljs.core.nthnext.call(null,vec__7843,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__7845 = maybe_attrs;if(G__7845)
{var bit__5651__auto__ = null;if(cljs.core.truth_((function (){var or__5001__auto__ = bit__5651__auto__;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return G__7845.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7845.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7845);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7845);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__7846_7862 = cljs.core.seq.call(null,attrs);var chunk__7847_7863 = null;var count__7848_7864 = (0);var i__7849_7865 = (0);while(true){
if((i__7849_7865 < count__7848_7864))
{var vec__7850_7866 = cljs.core._nth.call(null,chunk__7847_7863,i__7849_7865);var k_7867 = cljs.core.nth.call(null,vec__7850_7866,(0),null);var v_7868 = cljs.core.nth.call(null,vec__7850_7866,(1),null);var G__7851_7869 = (((k_7867 instanceof cljs.core.Keyword))?k_7867.fqn:null);switch (G__7851_7869) {
case "classes":
var seq__7852_7871 = cljs.core.seq.call(null,v_7868);var chunk__7853_7872 = null;var count__7854_7873 = (0);var i__7855_7874 = (0);while(true){
if((i__7855_7874 < count__7854_7873))
{var c_7875 = cljs.core._nth.call(null,chunk__7853_7872,i__7855_7874);dommy.attrs.add_class_BANG_.call(null,n,c_7875);
{
var G__7876 = seq__7852_7871;
var G__7877 = chunk__7853_7872;
var G__7878 = count__7854_7873;
var G__7879 = (i__7855_7874 + (1));
seq__7852_7871 = G__7876;
chunk__7853_7872 = G__7877;
count__7854_7873 = G__7878;
i__7855_7874 = G__7879;
continue;
}
} else
{var temp__4126__auto___7880 = cljs.core.seq.call(null,seq__7852_7871);if(temp__4126__auto___7880)
{var seq__7852_7881__$1 = temp__4126__auto___7880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7852_7881__$1))
{var c__5757__auto___7882 = cljs.core.chunk_first.call(null,seq__7852_7881__$1);{
var G__7883 = cljs.core.chunk_rest.call(null,seq__7852_7881__$1);
var G__7884 = c__5757__auto___7882;
var G__7885 = cljs.core.count.call(null,c__5757__auto___7882);
var G__7886 = (0);
seq__7852_7871 = G__7883;
chunk__7853_7872 = G__7884;
count__7854_7873 = G__7885;
i__7855_7874 = G__7886;
continue;
}
} else
{var c_7887 = cljs.core.first.call(null,seq__7852_7881__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7887);
{
var G__7888 = cljs.core.next.call(null,seq__7852_7881__$1);
var G__7889 = null;
var G__7890 = (0);
var G__7891 = (0);
seq__7852_7871 = G__7888;
chunk__7853_7872 = G__7889;
count__7854_7873 = G__7890;
i__7855_7874 = G__7891;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_7868);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7867,v_7868);

}
{
var G__7892 = seq__7846_7862;
var G__7893 = chunk__7847_7863;
var G__7894 = count__7848_7864;
var G__7895 = (i__7849_7865 + (1));
seq__7846_7862 = G__7892;
chunk__7847_7863 = G__7893;
count__7848_7864 = G__7894;
i__7849_7865 = G__7895;
continue;
}
} else
{var temp__4126__auto___7896 = cljs.core.seq.call(null,seq__7846_7862);if(temp__4126__auto___7896)
{var seq__7846_7897__$1 = temp__4126__auto___7896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7846_7897__$1))
{var c__5757__auto___7898 = cljs.core.chunk_first.call(null,seq__7846_7897__$1);{
var G__7899 = cljs.core.chunk_rest.call(null,seq__7846_7897__$1);
var G__7900 = c__5757__auto___7898;
var G__7901 = cljs.core.count.call(null,c__5757__auto___7898);
var G__7902 = (0);
seq__7846_7862 = G__7899;
chunk__7847_7863 = G__7900;
count__7848_7864 = G__7901;
i__7849_7865 = G__7902;
continue;
}
} else
{var vec__7856_7903 = cljs.core.first.call(null,seq__7846_7897__$1);var k_7904 = cljs.core.nth.call(null,vec__7856_7903,(0),null);var v_7905 = cljs.core.nth.call(null,vec__7856_7903,(1),null);var G__7857_7906 = (((k_7904 instanceof cljs.core.Keyword))?k_7904.fqn:null);switch (G__7857_7906) {
case "classes":
var seq__7858_7908 = cljs.core.seq.call(null,v_7905);var chunk__7859_7909 = null;var count__7860_7910 = (0);var i__7861_7911 = (0);while(true){
if((i__7861_7911 < count__7860_7910))
{var c_7912 = cljs.core._nth.call(null,chunk__7859_7909,i__7861_7911);dommy.attrs.add_class_BANG_.call(null,n,c_7912);
{
var G__7913 = seq__7858_7908;
var G__7914 = chunk__7859_7909;
var G__7915 = count__7860_7910;
var G__7916 = (i__7861_7911 + (1));
seq__7858_7908 = G__7913;
chunk__7859_7909 = G__7914;
count__7860_7910 = G__7915;
i__7861_7911 = G__7916;
continue;
}
} else
{var temp__4126__auto___7917__$1 = cljs.core.seq.call(null,seq__7858_7908);if(temp__4126__auto___7917__$1)
{var seq__7858_7918__$1 = temp__4126__auto___7917__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7858_7918__$1))
{var c__5757__auto___7919 = cljs.core.chunk_first.call(null,seq__7858_7918__$1);{
var G__7920 = cljs.core.chunk_rest.call(null,seq__7858_7918__$1);
var G__7921 = c__5757__auto___7919;
var G__7922 = cljs.core.count.call(null,c__5757__auto___7919);
var G__7923 = (0);
seq__7858_7908 = G__7920;
chunk__7859_7909 = G__7921;
count__7860_7910 = G__7922;
i__7861_7911 = G__7923;
continue;
}
} else
{var c_7924 = cljs.core.first.call(null,seq__7858_7918__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7924);
{
var G__7925 = cljs.core.next.call(null,seq__7858_7918__$1);
var G__7926 = null;
var G__7927 = (0);
var G__7928 = (0);
seq__7858_7908 = G__7925;
chunk__7859_7909 = G__7926;
count__7860_7910 = G__7927;
i__7861_7911 = G__7928;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_7905);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7904,v_7905);

}
{
var G__7929 = cljs.core.next.call(null,seq__7846_7897__$1);
var G__7930 = null;
var G__7931 = (0);
var G__7932 = (0);
seq__7846_7862 = G__7929;
chunk__7847_7863 = G__7930;
count__7848_7864 = G__7931;
i__7849_7865 = G__7932;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__7934 = data;if(G__7934)
{var bit__5651__auto__ = null;if(cljs.core.truth_((function (){var or__5001__auto__ = bit__5651__auto__;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return G__7934.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7934.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7934);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7934);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
