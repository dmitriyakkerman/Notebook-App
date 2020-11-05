(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d6cb5ba"],{"27c8":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"trash"},[s("h1",{staticClass:"title"},[t._v("Trash")]),t.notesTrash.length||t.categoriesTrash.length?s("div",[s("button",{staticClass:"trash__clean",attrs:{title:"Clear trash box"},on:{click:t.cleanTrash}},[s("i")]),t.notesTrash.length?s("div",{staticClass:"trash__notes"},[s("h2",[t._v("Notes")]),s("div",{staticClass:"trash__container"},[s("div",{staticClass:"main-bar"},[s("form",{staticClass:"main-bar__filters"},[s("SelectCategory",{attrs:{selected:t.selectedCategory,notes:t.notesTrash},on:{categoryValue:t.categoryValue}}),s("SelectStatus",{attrs:{selected:t.selectedStatus},on:{statusValue:t.statusValue}})],1)]),s("div",{staticClass:"notes__items"},[s("transition-group",{attrs:{name:"appear"}},t._l(t.filteredNotes(t.notesTrash),(function(t){return s("NotesItem",{key:t.id,attrs:{note:t,isTrash:!0}})})),1)],1)])]):t._e(),t.categoriesTrash.length?s("div",{staticClass:"trash__categories"},[s("h2",[t._v("Categories")]),s("div",{staticClass:"notes__items"},[s("transition-group",{attrs:{name:"appear"}},t._l(t.categoriesTrash,(function(t){return s("CategoriesItem",{key:t.id,attrs:{category:t,isTrash:!0}})})),1)],1)]):t._e()]):t._e(),s("transition",{attrs:{name:"no-results"}},[t.notesTrash.length||t.categoriesTrash.length?t._e():s("no-results",[t._v("Trash box is empty!")])],1)],1)},o=[],r=(s("4de4"),s("5530")),i=s("a4e9"),n=s("6fcb"),l=s("9a84"),c=s("93b9"),u=s("6c78"),d=s("2f62"),_={components:{NotesItem:i["a"],CategoriesItem:n["a"],NoResults:l["a"],SelectCategory:c["a"],SelectStatus:u["a"]},data:function(){return{selectedCategory:"all",selectedStatus:"all"}},computed:Object(r["a"])({},Object(d["c"])(["notesTrash","categoriesTrash"])),methods:Object(r["a"])(Object(r["a"])({},Object(d["b"])(["cleanNotesTrash","cleanCategoriesTrash"])),{},{filteredNotes:function(t){var e,s=this;return e=t.filter((function(t){return"all"===s.selectedCategory?t:t.category.title===s.selectedCategory})),e.filter((function(t){var a;if("all"===s.selectedStatus)a=e;else if("active"===s.selectedStatus){if(t.deadline&&new Date(t.deadline)>Date.now())return t}else if("expired"===s.selectedStatus&&t.deadline&&new Date(t.deadline)<Date.now())return t;return a}))},cleanTrash:function(){this.cleanNotesTrash(),this.cleanCategoriesTrash()},statusValue:function(t){this.selectedStatus=t},categoryValue:function(t){this.selectedCategory=t}})},v=_,g=s("2877"),h=Object(g["a"])(v,a,o,!1,null,null,null);e["default"]=h.exports},"6c78":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"select-status"}},[t._v("Select status")]),s("select",{staticClass:"main-bar__select-status",attrs:{id:"select-status"},domProps:{value:t.selected},on:{change:function(e){return t.$emit("statusValue",e.target.value)}}},[s("option",{attrs:{value:"all"}},[t._v("All")]),s("option",{attrs:{value:"active"}},[t._v("Active")]),s("option",{attrs:{value:"expired"}},[t._v("Expired")])])])},o=[],r={props:{selected:String}},i=r,n=s("2877"),l=Object(n["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},"6fcb":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"categories-item"},[s("div",{staticClass:"categories-item__title"},[t._v(t._s(t.category.title))]),s("div",{staticClass:"categories-item__nav"},[s("div",{staticClass:"categories-item__buttons"},[t.isTrash?t._e():s("router-link",{staticClass:"categories-item__look",attrs:{to:"/categories/"+t.category.id,title:"View note"}}),t.isTrash?t._e():s("button",{staticClass:"categories-item__remove",attrs:{title:"Remove note"},on:{click:function(e){return e.preventDefault(),t.removeCategory(t.category.id)}}}),t.isTrash?s("button",{staticClass:"categories-item__restore",attrs:{title:"Restore note"},on:{click:function(e){return t.restoreCategory(t.category)}}}):t._e()],1)])])])},o=[],r=s("5530"),i=s("2f62"),n={props:{category:Object,isTrash:Boolean},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["restoreNotesByCategory","moveCategoryFromTrash","deleteCategory","moveCategoryToTrash","removeNotesByCategory"])),{},{removeCategory:function(t){this.moveCategoryToTrash(t),this.deleteCategory(t),this.removeNotesByCategory(t)},restoreCategory:function(t){this.restoreNotesByCategory(t),this.moveCategoryFromTrash(t)}})},l=n,c=s("2877"),u=Object(c["a"])(l,a,o,!1,null,null,null);e["a"]=u.exports},"93b9":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"select-category"}},[t._v("Select category")]),s("select",{staticClass:"main-bar__select-category",attrs:{id:"select-category"},domProps:{value:t.selected},on:{change:function(e){return t.$emit("categoryValue",e.target.value)}}},[s("option",{attrs:{value:"all"}},[t._v("All")]),t._l(t.notes,(function(e){return s("option",{key:e.id,domProps:{value:e.category.title}},[t._v(t._s(e.category.title))])}))],2)])},o=[],r={props:{selected:String,notes:Array}},i=r,n=s("2877"),l=Object(n["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},"9a84":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"no-results"},[t._t("default"),s("span",{staticClass:"no-results__warning"})],2)},o=[],r={},i=r,n=s("2877"),l=Object(n["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},a4e9:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"notes-item"},[s("div",{staticClass:"notes-item__title"},[t._v(t._s(t.note.title))]),s("div",{staticClass:"notes-item__text",domProps:{innerHTML:t._s(t.note.text)}}),s("div",{staticClass:"notes-item__status",class:{active:t.note.deadline&&new Date(t.note.deadline)>Date.now(),expired:t.note.deadline&&new Date(t.note.deadline)<Date.now()},attrs:{title:t.note.deadline?new Date(t.note.deadline)>Date.now()?"active":"outdated":""}}),s("div",{staticClass:"notes-item__nav"},[t.isCategory||t.isTrash?t._e():s("router-link",{staticClass:"notes-item__category",attrs:{to:"/categories/"+t.note.category.id,title:"Note category"}},[t._v(t._s(t.note.category.title))]),s("div",{staticClass:"notes-item__buttons"},[t.isTrash?t._e():s("button",{staticClass:"notes-item__favourite",class:{active:t.note.favourite},attrs:{title:"Make favourite"},on:{click:function(e){return e.preventDefault(),t.makeFavourite(t.note.id)}}}),t.isTrash?t._e():s("router-link",{staticClass:"notes-item__look",attrs:{to:"/notes/"+t.note.id,title:"View note"}}),t.isTrash?t._e():s("button",{staticClass:"notes-item__remove",attrs:{title:"Remove note"},on:{click:function(e){return e.preventDefault(),t.removeNote(t.note.id)}}}),t.isTrash?s("button",{staticClass:"notes-item__restore",attrs:{title:"Restore note"},on:{click:function(e){return t.restoreNote(t.note)}}}):t._e()],1)],1)])])},o=[],r=s("5530"),i=s("2f62"),n={props:{note:Object,isCategory:Boolean,isTrash:Boolean},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(i["b"])(["updateFavouriteNote","deleteNote","moveNoteToTrash","moveNoteFromTrash","restoreCategoryByNote"])),Object(i["d"])(["setPopupComponent"])),{},{makeFavourite:function(t){this.updateFavouriteNote(t)},removeNote:function(t){this.moveNoteToTrash(t),this.deleteNote(t)},addNote:function(t){var e=t.target.closest(".j-popup");e&&this.setPopupComponent(e),window.popup.manualOpen()},restoreNote:function(t){this.restoreCategoryByNote(t),this.moveNoteFromTrash(t)}})},l=n,c=s("2877"),u=Object(c["a"])(l,a,o,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-2d6cb5ba.11fb9962.js.map