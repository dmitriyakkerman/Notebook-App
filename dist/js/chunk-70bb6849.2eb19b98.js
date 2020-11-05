(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70bb6849"],{4886:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("Title",[t._v(t._s(t.category.title))]),a("div",{staticClass:"category__container"},[a("div",{staticClass:"main-bar main-bar--category"},[a("form",{staticClass:"main-bar__filters"},[a("SelectStatus",{attrs:{selected:t.selectedStatus},on:{statusValue:t.statusValue}})],1),a("div",{staticClass:"main-bar__buttons"},[a("button",{staticClass:"main-bar__edit j-popup popup-category",attrs:{title:"Edit category"},on:{click:function(e){return t.editCategory(t.category.id,e)}}}),a("button",{staticClass:"main-bar__remove",attrs:{title:"Remove category"},on:{click:function(e){return t.removeCategory(t.category.id)}}})])]),a("div",{staticClass:"notes__container"},[a("transition-group",{attrs:{name:"appear"}},t._l(t.notesByCategory,(function(t){return a("NotesItem",{key:t.id,attrs:{note:t,isCategory:!0}})})),1),a("transition",{attrs:{name:"no-results"}},[t.notesByCategory.length?t._e():a("no-results",[t._v("There is any note. Create new one!")])],1)],1)])],1)},o=[],n=(a("4de4"),a("5530")),i=a("f3c0"),r=a("a4e9"),l=a("9a84"),c=a("6c78"),u=a("2f62"),d={components:{Title:i["a"],NotesItem:r["a"],NoResults:l["a"],SelectStatus:c["a"]},data:function(){return{selectedStatus:"all"}},computed:Object(n["a"])(Object(n["a"])({},Object(u["c"])(["notesBy","categoryBy"])),{},{category:function(){return this.categoryBy(+this.$route.params.id)},notesByCategory:function(){var t=this;return this.notesBy(+this.$route.params.id).filter((function(e){var a;if("all"===t.selectedStatus)a=t.notesBy(+t.$route.params.id);else if("active"===t.selectedStatus){if(e.deadline&&new Date(e.deadline)>Date.now())return e}else if("expired"===t.selectedStatus&&e.deadline&&new Date(e.deadline)<Date.now())return e;return a}))}}),methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(u["b"])(["deleteCategory","updateFavouriteNote","deleteNote","moveNoteToTrash"])),Object(u["d"])(["removeNotesByCategory","setPopupComponent","toggleModal","setModalMessage"])),{},{removeCategory:function(t){this.$router.push("/categories"),this.deleteCategory(t),this.removeNotesByCategory(t),this.toggleModal(),this.setModalMessage("Category has been moved to trash")},makeFavourite:function(t){this.updateFavouriteNote(t)},removeNote:function(t){this.moveNoteToTrash(t),this.deleteNote(t)},editCategory:function(t,e){var a=e.target.closest(".j-popup");a&&this.setPopupComponent(a),window.popup.manualOpen()},statusValue:function(t){this.selectedStatus=t}})},v=d,m=a("2877"),p=Object(m["a"])(v,s,o,!1,null,null,null);e["default"]=p.exports},"6c78":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"select-status"}},[t._v("Select status")]),a("select",{staticClass:"main-bar__select-status",attrs:{id:"select-status"},domProps:{value:t.selected},on:{change:function(e){return t.$emit("statusValue",e.target.value)}}},[a("option",{attrs:{value:"all"}},[t._v("All")]),a("option",{attrs:{value:"active"}},[t._v("Active")]),a("option",{attrs:{value:"expired"}},[t._v("Expired")])])])},o=[],n={props:{selected:String}},i=n,r=a("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports},"9a84":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-results"},[t._t("default"),a("span",{staticClass:"no-results__warning"})],2)},o=[],n={},i=n,r=a("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports},a4e9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"notes-item"},[a("div",{staticClass:"notes-item__title"},[t._v(t._s(t.note.title))]),a("div",{staticClass:"notes-item__text",domProps:{innerHTML:t._s(t.note.text)}}),a("div",{staticClass:"notes-item__status",class:{active:t.note.deadline&&new Date(t.note.deadline)>Date.now(),expired:t.note.deadline&&new Date(t.note.deadline)<Date.now()},attrs:{title:t.note.deadline?new Date(t.note.deadline)>Date.now()?"active":"outdated":""}}),a("div",{staticClass:"notes-item__nav"},[t.isCategory||t.isTrash?t._e():a("router-link",{staticClass:"notes-item__category",attrs:{to:"/categories/"+t.note.category.id,title:"Note category"}},[t._v(t._s(t.note.category.title))]),a("div",{staticClass:"notes-item__buttons"},[t.isTrash?t._e():a("button",{staticClass:"notes-item__favourite",class:{active:t.note.favourite},attrs:{title:"Make favourite"},on:{click:function(e){return e.preventDefault(),t.makeFavourite(t.note.id,e)}}}),t.isTrash?t._e():a("router-link",{staticClass:"notes-item__look",attrs:{to:"/notes/"+t.note.id,title:"View note"}}),t.isTrash?t._e():a("button",{staticClass:"notes-item__remove",attrs:{title:"Remove note"},on:{click:function(e){return e.preventDefault(),t.removeNote(t.note.id)}}}),t.isTrash?a("button",{staticClass:"notes-item__restore",attrs:{title:"Restore note"},on:{click:function(e){return t.restoreNote(t.note)}}}):t._e()],1)],1)])])},o=[],n=a("5530"),i=a("2f62"),r={props:{note:Object,isCategory:Boolean,isTrash:Boolean},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(i["b"])(["updateFavouriteNote","deleteNote","moveNoteToTrash","moveNoteFromTrash","restoreCategoryByNote"])),Object(i["d"])(["setPopupComponent","toggleModal","setModalMessage"])),{},{makeFavourite:function(t,e){this.updateFavouriteNote(t),this.toggleModal(),e.target.classList.contains("active")?this.setModalMessage("Note has been removed from favourites"):this.setModalMessage("Note has been added to favourites")},removeNote:function(t){this.moveNoteToTrash(t),this.deleteNote(t),this.toggleModal(),this.setModalMessage("Note has been moved to trash")},addNote:function(t){var e=t.target.closest(".j-popup");e&&this.setPopupComponent(e),window.popup.manualOpen()},restoreNote:function(t){this.restoreCategoryByNote(t),this.moveNoteFromTrash(t),this.toggleModal(),this.setModalMessage("Note has been restored from trash")}})},l=r,c=a("2877"),u=Object(c["a"])(l,s,o,!1,null,null,null);e["a"]=u.exports},f3c0:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"title"},[t._t("default")],2)},o=[],n={},i=n,r=a("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-70bb6849.2eb19b98.js.map