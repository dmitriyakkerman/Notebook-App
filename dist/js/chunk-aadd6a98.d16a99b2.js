(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aadd6a98"],{"6c78":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"select-status"}},[t._v("Select status")]),a("select",{staticClass:"main-bar__select-status",attrs:{id:"select-status"},domProps:{value:t.selected},on:{change:function(e){return t.$emit("statusValue",e.target.value)}}},[a("option",{attrs:{value:"all"}},[t._v("All")]),a("option",{attrs:{value:"active"}},[t._v("Active")]),a("option",{attrs:{value:"expired"}},[t._v("Expired")])])])},o=[],n={props:{selected:String}},r=n,i=a("2877"),l=Object(i["a"])(r,s,o,!1,null,null,null);e["a"]=l.exports},"93b9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"select-category"}},[t._v("Select category")]),a("select",{staticClass:"main-bar__select-category",attrs:{id:"select-category"},domProps:{value:t.selected},on:{change:function(e){return t.$emit("categoryValue",e.target.value)}}},[a("option",{attrs:{value:"all"}},[t._v("All")]),t._l(t.notes,(function(e){return a("option",{key:e.id,domProps:{value:e.category.title}},[t._v(t._s(e.category.title))])}))],2)])},o=[],n={props:{selected:String,notes:Array}},r=n,i=a("2877"),l=Object(i["a"])(r,s,o,!1,null,null,null);e["a"]=l.exports},"9a84":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-results"},[t._t("default"),a("span",{staticClass:"no-results__warning"})],2)},o=[],n={},r=n,i=a("2877"),l=Object(i["a"])(r,s,o,!1,null,null,null);e["a"]=l.exports},a4e9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"notes-item"},[a("div",{staticClass:"notes-item__title"},[t._v(t._s(t.note.title))]),a("div",{staticClass:"notes-item__text",domProps:{innerHTML:t._s(t.note.text)}}),a("div",{staticClass:"notes-item__status",class:{active:t.note.deadline&&new Date(t.note.deadline)>Date.now(),expired:t.note.deadline&&new Date(t.note.deadline)<Date.now()},attrs:{title:t.note.deadline?new Date(t.note.deadline)>Date.now()?"active":"outdated":""}}),a("div",{staticClass:"notes-item__nav"},[t.isCategory||t.isTrash?t._e():a("router-link",{staticClass:"notes-item__category",attrs:{to:"/categories/"+t.note.category.id,title:"Note category"}},[t._v(t._s(t.note.category.title))]),a("div",{staticClass:"notes-item__buttons"},[t.isTrash?t._e():a("button",{staticClass:"notes-item__favourite",class:{active:t.note.favourite},attrs:{title:"Make favourite"},on:{click:function(e){return e.preventDefault(),t.makeFavourite(t.note.id)}}}),t.isTrash?t._e():a("router-link",{staticClass:"notes-item__look",attrs:{to:"/notes/"+t.note.id,title:"View note"}}),t.isTrash?t._e():a("button",{staticClass:"notes-item__remove",attrs:{title:"Remove note"},on:{click:function(e){return e.preventDefault(),t.removeNote(t.note.id)}}}),t.isTrash?a("button",{staticClass:"notes-item__restore",attrs:{title:"Restore note"},on:{click:function(e){return t.restoreNote(t.note)}}}):t._e()],1)],1)])])},o=[],n=a("5530"),r=a("2f62"),i={props:{note:Object,isCategory:Boolean,isTrash:Boolean},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["b"])(["updateFavouriteNote","deleteNote","moveNoteToTrash","moveNoteFromTrash","restoreCategoryByNote"])),Object(r["d"])(["setPopupComponent"])),{},{makeFavourite:function(t){this.updateFavouriteNote(t)},removeNote:function(t){this.moveNoteToTrash(t),this.deleteNote(t)},addNote:function(t){var e=t.target.closest(".j-popup");e&&this.setPopupComponent(e),window.popup.manualOpen()},restoreNote:function(t){this.restoreCategoryByNote(t),this.moveNoteFromTrash(t)}})},l=i,c=a("2877"),u=Object(c["a"])(l,s,o,!1,null,null,null);e["a"]=u.exports},c9bd:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"favourite"},[a("h1",{staticClass:"title"},[t._v("Favourite notes")]),a("div",{staticClass:"main-bar"},[a("form",{staticClass:"main-bar__filters"},[a("SelectCategory",{attrs:{selected:t.selectedCategory,notes:t.favourite},on:{categoryValue:t.categoryValue}}),a("SelectStatus",{attrs:{selected:t.selectedStatus},on:{statusValue:t.statusValue}})],1)]),a("div",{staticClass:"notes__container"},[a("transition-group",{attrs:{name:"appear"}},t._l(t.filteredNotes(t.favourite),(function(t){return a("NotesItem",{key:t.id,attrs:{note:t}})})),1),a("transition",{attrs:{name:"no-results"}},[t.favourite.length?t._e():a("no-results",[t._v("You don't have any favourite note so far!")])],1)],1)])},o=[],n=(a("4de4"),a("5530")),r=a("a4e9"),i=a("9a84"),l=a("93b9"),c=a("6c78"),u=a("2f62"),d={components:{NotesItem:r["a"],NoResults:i["a"],SelectCategory:l["a"],SelectStatus:c["a"]},data:function(){return{selectedCategory:"all",selectedStatus:"all"}},computed:Object(n["a"])({},Object(u["c"])(["favourite"])),methods:Object(n["a"])(Object(n["a"])({},Object(u["b"])(["updateFavouriteNote"])),{},{filteredNotes:function(t){var e,a=this;return e=t.filter((function(t){return"all"===a.selectedCategory?t:t.category.title===a.selectedCategory})),e.filter((function(t){var s;if("all"===a.selectedStatus)s=e;else if("active"===a.selectedStatus){if(t.deadline&&new Date(t.deadline)>Date.now())return t}else if("expired"===a.selectedStatus&&t.deadline&&new Date(t.deadline)<Date.now())return t;return s}))},makeFavourite:function(t){this.updateFavouriteNote(t)},statusValue:function(t){this.selectedStatus=t},categoryValue:function(t){this.selectedCategory=t}})},v=d,_=a("2877"),f=Object(_["a"])(v,s,o,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-aadd6a98.d16a99b2.js.map