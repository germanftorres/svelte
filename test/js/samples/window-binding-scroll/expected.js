/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, addListener, add_render_callback, append, createElement, createText, detachNode, flush, init, insert, noop, safe_not_equal, setData } from "svelte/internal";

function create_fragment($$, ctx) {
	var scrolling = false, clear_scrolling = () => { scrolling = false }, scrolling_timeout, p, text0, text1, dispose;

	add_render_callback(ctx.onwindowscroll);

	return {
		c() {
			p = createElement("p");
			text0 = createText("scrolled to ");
			text1 = createText(ctx.y);
			dispose = addListener(window, "scroll", () => {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
				ctx.onwindowscroll();
			});
		},

		m(target, anchor) {
			insert(target, p, anchor);
			append(p, text0);
			append(p, text1);
		},

		p(changed, ctx) {
			if (changed.y && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				window.scrollTo(window.pageXOffset, ctx.y);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}

			if (changed.y) {
				setData(text1, ctx.y);
			}
		},

		i: noop,
		o: noop,

		d(detach) {
			if (detach) {
				detachNode(p);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { y } = $$props;

	function onwindowscroll() {
		y = window.pageYOffset; $$invalidate('y', y);
	}

	$$self.$set = $$props => {
		if ('y' in $$props) $$invalidate('y', y = $$props.y);
	};

	return { y, onwindowscroll };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get y() {
		return this.$$.ctx.y;
	}

	set y(y) {
		this.$set({ y });
		flush();
	}
}

export default SvelteComponent;