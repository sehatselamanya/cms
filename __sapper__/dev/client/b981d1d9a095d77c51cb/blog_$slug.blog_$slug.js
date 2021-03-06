(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog_$slug"],{

/***/ "./src/routes/blog/[slug].svelte":
/*!***************************************!*\
  !*** ./src/routes/blog/[slug].svelte ***!
  \***************************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_PrismicHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PrismicHTML */ "./src/components/PrismicHTML.svelte");
/* harmony import */ var _components_PrismicTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PrismicTitle */ "./src/components/PrismicTitle.svelte");
/* src\routes\blog\[slug].svelte generated by Svelte v3.25.1 */




const file = "src\\routes\\blog\\[slug].svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1ycksgq-style";
	style.textContent = ".content.svelte-1ycksgq h2{font-size:1.4em;font-weight:500}.content.svelte-1ycksgq pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-1ycksgq pre code{background-color:transparent;padding:0}.content.svelte-1ycksgq ul{line-height:1.5}.content.svelte-1ycksgq li{margin:0 0 0.5em 0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLnN2ZWx0ZSIsInNvdXJjZXMiOlsiW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IFByaXNtaWNUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmlzbWljVGl0bGVcIjtcbiAgaW1wb3J0IFByaXNtaWNIVE1MIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ByaXNtaWNIVE1MXCI7XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4geyBwb3N0OiBkYXRhIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBleHBvcnQgbGV0IHBvc3Q7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAvKlxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxuXHRcdGFuZCBhbnkgdW51c2VkIHN0eWxlcyBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXG5cdFx0SW4gdGhpcyBwYWdlLCBTdmVsdGUgY2FuJ3Qga25vdyB3aGljaCBlbGVtZW50cyBhcmVcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXG5cdFx0c28gd2UgaGF2ZSB0byB1c2UgdGhlIDpnbG9iYWwoLi4uKSBtb2RpZmllciB0byB0YXJnZXRcblx0XHRhbGwgZWxlbWVudHMgaW5zaWRlIC5jb250ZW50XG5cdCovXG4gIC5jb250ZW50IDpnbG9iYWwoaDIpIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKHByZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwocHJlKSA6Z2xvYmFsKGNvZGUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbCh1bCkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKGxpKSB7XG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8UHJpc21pY1RpdGxlIGVsZW1lbnRzPXtwb3N0LnRpdGxlfSAvPlxuPC9zdmVsdGU6aGVhZD5cblxuPFByaXNtaWNIVE1MIGVsZW1lbnRzPXtwb3N0LnRpdGxlfSAvPlxuXG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICA8UHJpc21pY0hUTUwgZWxlbWVudHM9e3Bvc3QuY29udGVudH0gLz5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCRSx1QkFBUSxDQUFDLEFBQVEsRUFBRSxBQUFFLENBQUMsQUFDcEIsU0FBUyxDQUFFLEtBQUssQ0FDaEIsV0FBVyxDQUFFLEdBQUcsQUFDbEIsQ0FBQyxBQUVELHVCQUFRLENBQUMsQUFBUSxHQUFHLEFBQUUsQ0FBQyxBQUNyQixnQkFBZ0IsQ0FBRSxPQUFPLENBQ3pCLFVBQVUsQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDakQsT0FBTyxDQUFFLEtBQUssQ0FDZCxhQUFhLENBQUUsR0FBRyxDQUNsQixVQUFVLENBQUUsSUFBSSxBQUNsQixDQUFDLEFBRUQsdUJBQVEsQ0FBQyxBQUFRLEdBQUcsQUFBQyxDQUFDLEFBQVEsSUFBSSxBQUFFLENBQUMsQUFDbkMsZ0JBQWdCLENBQUUsV0FBVyxDQUM3QixPQUFPLENBQUUsQ0FBQyxBQUNaLENBQUMsQUFFRCx1QkFBUSxDQUFDLEFBQVEsRUFBRSxBQUFFLENBQUMsQUFDcEIsV0FBVyxDQUFFLEdBQUcsQUFDbEIsQ0FBQyxBQUVELHVCQUFRLENBQUMsQUFBUSxFQUFFLEFBQUUsQ0FBQyxBQUNwQixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUNyQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let prismictitle;
	let t0;
	let prismichtml0;
	let t1;
	let div;
	let prismichtml1;
	let current;

	prismictitle = new _components_PrismicTitle__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: { elements: /*post*/ ctx[0].title },
			$$inline: true
		});

	prismichtml0 = new _components_PrismicHTML__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: { elements: /*post*/ ctx[0].title },
			$$inline: true
		});

	prismichtml1 = new _components_PrismicHTML__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: { elements: /*post*/ ctx[0].content },
			$$inline: true
		});

	const block = {
		c: function create() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(prismictitle.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(prismichtml0.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(prismichtml1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-2xwx3c\"]", document.head);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(prismictitle.$$.fragment, head_nodes);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(prismichtml0.$$.fragment, nodes);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(prismichtml1.$$.fragment, div_nodes);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "content svelte-1ycksgq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 62, 0, 1368);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(prismictitle, document.head, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(prismichtml0, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(prismichtml1, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const prismictitle_changes = {};
			if (dirty & /*post*/ 1) prismictitle_changes.elements = /*post*/ ctx[0].title;
			prismictitle.$set(prismictitle_changes);
			const prismichtml0_changes = {};
			if (dirty & /*post*/ 1) prismichtml0_changes.elements = /*post*/ ctx[0].title;
			prismichtml0.$set(prismichtml0_changes);
			const prismichtml1_changes = {};
			if (dirty & /*post*/ 1) prismichtml1_changes.elements = /*post*/ ctx[0].content;
			prismichtml1.$set(prismichtml1_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(prismictitle.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(prismichtml0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(prismichtml1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(prismictitle.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(prismichtml0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(prismichtml1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(prismictitle);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(prismichtml0, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(prismichtml1);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params, query }) {
	const res = await this.fetch(`blog/${params.slug}.json`);
	const { data } = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("U5Bslugu5D", slots, []);
	let { post } = $$props;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({ PrismicTitle: _components_PrismicTitle__WEBPACK_IMPORTED_MODULE_2__["default"], PrismicHTML: _components_PrismicHTML__WEBPACK_IMPORTED_MODULE_1__["default"], preload, post });

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post];
}

class U5Bslugu5D extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1ycksgq-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { post: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (U5Bslugu5D);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUQ7QUFERTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBd0RqQyxHQUFJLElBQUMsS0FBSzs7Ozs7K0JBR2IsR0FBSSxJQUFDLEtBQUs7Ozs7OytCQUdSLEdBQUksSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0VBTlgsR0FBSSxJQUFDLEtBQUs7OztvRUFHYixHQUFJLElBQUMsS0FBSzs7O29FQUdSLEdBQUksSUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBM0RiLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztPQUNyQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssU0FBUyxNQUFNLENBQUMsSUFBSTtTQUN4QyxJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUk7O0tBRTNCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztXQUNYLElBQUksRUFBRSxJQUFJOztFQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87Ozs7Ozs7T0FNNUIsSUFBSSIsImZpbGUiOiJiOTgxZDFkOWEwOTVkNzdjNTFjYi9ibG9nXyRzbHVnLmJsb2dfJHNsdWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IFByaXNtaWNUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QcmlzbWljVGl0bGVcIjtcbiAgaW1wb3J0IFByaXNtaWNIVE1MIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1ByaXNtaWNIVE1MXCI7XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4geyBwb3N0OiBkYXRhIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBleHBvcnQgbGV0IHBvc3Q7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAvKlxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxuXHRcdGFuZCBhbnkgdW51c2VkIHN0eWxlcyBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXG5cdFx0SW4gdGhpcyBwYWdlLCBTdmVsdGUgY2FuJ3Qga25vdyB3aGljaCBlbGVtZW50cyBhcmVcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXG5cdFx0c28gd2UgaGF2ZSB0byB1c2UgdGhlIDpnbG9iYWwoLi4uKSBtb2RpZmllciB0byB0YXJnZXRcblx0XHRhbGwgZWxlbWVudHMgaW5zaWRlIC5jb250ZW50XG5cdCovXG4gIC5jb250ZW50IDpnbG9iYWwoaDIpIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKHByZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwocHJlKSA6Z2xvYmFsKGNvZGUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbCh1bCkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKGxpKSB7XG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8UHJpc21pY1RpdGxlIGVsZW1lbnRzPXtwb3N0LnRpdGxlfSAvPlxuPC9zdmVsdGU6aGVhZD5cblxuPFByaXNtaWNIVE1MIGVsZW1lbnRzPXtwb3N0LnRpdGxlfSAvPlxuXG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICA8UHJpc21pY0hUTUwgZWxlbWVudHM9e3Bvc3QuY29udGVudH0gLz5cbjwvZGl2PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==