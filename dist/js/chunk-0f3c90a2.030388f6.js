(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f3c90a2"],{"0841":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notes"},[a("Title",[t._v("Notes")]),a("div",{staticClass:"main-bar"},[a("form",{staticClass:"main-bar__filters"},[a("SelectCategory",{attrs:{selected:t.selectedCategory,notes:t.notes},on:{categoryValue:t.categoryValue}}),a("SelectStatus",{attrs:{selected:t.selectedStatus},on:{statusValue:t.statusValue}}),a("Search",{attrs:{categoryToSearch:t.noteToSearch,loading:t.loading},on:{initLoading:t.initLoading,removeLoading:t.removeLoading,debounce:t.debounce}})],1),a("button",{staticClass:"main-bar__btn",on:{click:t.addNote}},[a("i")])]),a("div",{staticClass:"notes__container"},[a("transition-group",{attrs:{name:"appear"}},t._l(t.filteredNotes,(function(t){return a("NotesItem",{key:t.id,attrs:{note:t}})})),1),a("transition",{attrs:{name:"no-results"}},[t.filteredNotes.length?t._e():a("no-results",[t._v("There is any note. Create new one!")])],1)],1)],1)},s=[],n=(a("4de4"),a("c975"),a("5530")),i=a("f3c0"),r=a("a4e9"),l=a("9a84"),c=a("93b9"),u=a("6c78"),d=a("aeef"),f=a("2ef0"),v=a("2f62"),g={components:{Title:i["a"],NotesItem:r["a"],NoResults:l["a"],SelectCategory:c["a"],SelectStatus:u["a"],Search:d["a"]},data:function(){return{selectedCategory:"all",selectedStatus:"all",noteToSearch:"",loading:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(v["c"])(["notes","categories"])),{},{filteredNotes:function(){var t,e=this;return t=this.notes.filter((function(t){if(-1!==t.title.indexOf(e.noteToSearch))return t})),t=t.filter((function(t){return"all"===e.selectedCategory?t:t.category.title===e.selectedCategory})),t=t.filter((function(a){var o;if("all"===e.selectedStatus)o=t;else if("active"===e.selectedStatus){if(a.deadline&&new Date(a.deadline)>Date.now())return a}else if("expired"===e.selectedStatus&&a.deadline&&new Date(a.deadline)<Date.now())return a;return o})),t.sort((function(t,e){return t.title<e.title?-1:t.title>e.title?1:0}))}}),methods:Object(n["a"])(Object(n["a"])({},Object(v["d"])(["toggleModalForm"])),{},{addNote:function(){this.toggleModalForm({component:"ModalAddNote",data:{}})},initLoading:function(){this.loading=!0},removeLoading:function(){this.loading=!1},debounce:Object(f["debounce"])((function(t){this.noteToSearch=t,this.removeLoading()}),300),restoreNote:function(t){this.restoreCategoryByNote(t),this.moveNoteFromTrash(t)},statusValue:function(t){this.selectedStatus=t},categoryValue:function(t){this.selectedCategory=t}})},m=g,_=a("2877"),h=Object(_["a"])(m,o,s,!1,null,null,null);e["default"]=h.exports},"6c78":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"select-status"}},[t._v("Select status")]),a("select",{staticClass:"main-bar__select-status",attrs:{id:"select-status"},domProps:{value:t.selected},on:{change:function(e){return t.$emit("statusValue",e.target.value)}}},[a("option",{attrs:{value:"all"}},[t._v("All")]),a("option",{attrs:{value:"active"}},[t._v("Active")]),a("option",{attrs:{value:"expired"}},[t._v("Expired")])])])},s=[],n={props:{selected:String}},i=n,r=a("2877"),l=Object(r["a"])(i,o,s,!1,null,null,null);e["a"]=l.exports},"93b9":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"select-category"}},[t._v("Select category")]),a("select",{staticClass:"main-bar__select-category",attrs:{id:"select-category"},domProps:{value:t.selected},on:{change:function(e){return t.$emit("categoryValue",e.target.value)}}},[a("option",{attrs:{value:"all"}},[t._v("All")]),t._l(t.notes,(function(e){return a("option",{key:e.id,domProps:{value:e.category.title}},[t._v(t._s(e.category.title))])}))],2)])},s=[],n={props:{selected:String,notes:Array}},i=n,r=a("2877"),l=Object(r["a"])(i,o,s,!1,null,null,null);e["a"]=l.exports},a4e9:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"notes-item"},[a("div",{staticClass:"notes-item__title"},[t._v(t._s(t.note.title))]),a("div",{staticClass:"notes-item__text",domProps:{innerHTML:t._s(t.note.text)}}),a("div",{staticClass:"notes-item__status",class:{active:t.note.deadline&&new Date(t.note.deadline)>Date.now(),expired:t.note.deadline&&new Date(t.note.deadline)<Date.now()},attrs:{title:t.note.deadline?new Date(t.note.deadline)>Date.now()?"active":"outdated":""}}),a("div",{staticClass:"notes-item__nav"},[t.isCategory||t.isTrash?t._e():a("router-link",{staticClass:"notes-item__category",attrs:{to:"/categories/"+t.note.category.id,title:"Note category"}},[t._v(t._s(t.note.category.title))]),a("div",{staticClass:"notes-item__buttons"},[t.isTrash?t._e():a("button",{staticClass:"notes-item__favourite",class:{active:t.note.favourite},attrs:{title:"Make favourite"},on:{click:function(e){return e.preventDefault(),t.makeFavourite(t.note.id,e)}}}),t.isTrash?t._e():a("router-link",{staticClass:"notes-item__look",attrs:{to:"/notes/"+t.note.id,title:"View note"}}),t.isTrash?t._e():a("button",{staticClass:"notes-item__remove",attrs:{title:"Remove note"},on:{click:function(e){return e.preventDefault(),t.removeNote(t.note.id)}}}),t.isTrash?a("button",{staticClass:"notes-item__restore",attrs:{title:"Restore note"},on:{click:function(e){return t.restoreNote(t.note)}}}):t._e()],1)],1)])])},s=[],n=a("5530"),i=a("2f62"),r={props:{note:Object,isCategory:Boolean,isTrash:Boolean},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(i["b"])(["updateFavouriteNote","deleteNote","moveNoteToTrash","moveNoteFromTrash","restoreCategoryByNote"])),Object(i["d"])(["toggleModalMessage"])),{},{makeFavourite:function(t,e){this.updateFavouriteNote(t),e.target.classList.contains("active")?this.toggleModalMessage("Note has been removed from favourites"):this.toggleModalMessage("Note has been added to favourites")},removeNote:function(t){this.moveNoteToTrash(t),this.deleteNote(t),this.toggleModalMessage("Note has been moved to trash")},addNote:function(){},restoreNote:function(t){this.restoreCategoryByNote(t),this.moveNoteFromTrash(t),this.toggleModalMessage("Note has been restored from trash")}})},l=r,c=a("2877"),u=Object(c["a"])(l,o,s,!1,null,null,null);e["a"]=u.exports},c975:function(t,e,a){"use strict";var o=a("23e7"),s=a("4d64").indexOf,n=a("a640"),i=a("ae40"),r=[].indexOf,l=!!r&&1/[1].indexOf(1,-0)<0,c=n("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?r.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-0f3c90a2.030388f6.js.map