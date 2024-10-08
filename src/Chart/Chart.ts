/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
import ChartInternal from "../ChartInternal/ChartInternal";
import {loadConfig} from "../config/config";
import {extend, isFunction, notEmpty} from "../module/util";

import apiChart from "./api/chart";
import apiColor from "./api/color";
import apiData from "./api/data";
import apiExport from "./api/export";
import apiFocus from "./api/focus";
import apiLegend from "./api/legend";
import apiLoad from "./api/load";
import apiShow from "./api/show";
import apiTooltip from "./api/tooltip";

/**
 * Main chart class.
 * - Note: Instantiated via `bb.generate()`.
 * @class Chart
 * @example
 * var chart = bb.generate({
 *  data: {
 *    columns: [
 *        ["x", "2015-11-02", "2015-12-01", "2016-01-01", "2016-02-01", "2016-03-01"],
 *        ["count1", 11, 8, 7, 6, 5 ],
 *        ["count2", 9, 3, 6, 2, 8 ]
 *   ]}
 * }
 * @see {@link bb.generate} for the initialization.
 */
/**
 * Access instance's primary node elements
 * @member {object} $
 * @property {object} $ Access instance's primary node elements
 * @property {d3.selection} $.chart Wrapper element
 * @property {d3.selection} $.svg Main svg element
 * @property {d3.selection} $.defs Definition element
 * @property {d3.selection} $.main Main grouping element
 * @property {d3.selection} $.needle Needle element
 *  - **NOTE:**
 *    - The element will have `bb-needle` as class name.
 *    - Will provide speical helper `.updateHelper(value: number, updateConfig: boolean)` method to facilitate needle position update.
 * @property {d3.selection} $.tooltip Tooltip element
 * @property {d3.selection} $.legend Legend element
 * @property {d3.selection} $.title Title element
 * @property {d3.selection} $.grid Grid element
 * @property {d3.selection} $.arc Arc element
 * @property {d3.selection} $.circles Data point circle elements
 * @property {object} $.bar Bar element object
 * @property {d3.selection} $.bar.bars Bar elements
 * @property {d3.selection} $.candlestick Candlestick elements
 * @property {object} $.line Line element object
 * @property {d3.selection} $.line.lines Line elements
 * @property {d3.selection} $.line.areas Areas elements
 * @property {object} $.text Text element object
 * @property {d3.selection} $.text.texts Data label text elements
 * @memberof Chart
 * @example
 * const chart = bb.generate({ ... });
 *
 * chart.$.chart; // wrapper element
 * chart.$.line.circles;  // all data point circle elements
 * @example
 * // Update arc needle position
 * const chart = bb.generate({
 *   data: {
 *     type: "donut"
 *   },
 *   arc: {
 *     needle: {
 *       show: true,
 *       ...
 *     }
 *   }
 * });
 *
 * chart.$.needle.updateHelper(70);  // update needle position to point value 70.
 *
 * // update needle position to point value 70 and the config value.
 * // NOTE: updating config value, will update needle pointer initial value too.
 * chart.$.needle.updateHelper(70, true);
 *
 * // update needle point position every 1 second
 * let i = 0;
 * setInterval(() => {
 *   chart.$.needle.updateHelper(i += 10);
 * }, 1000)
 */
/**
 * Plugin instance array
 * @member {Array} plugins
 * @memberof Chart
 * @example
 *  var chart = bb.generate({
 *     ...
 *     plugins: [
 *        new bb.plugin.stanford({ ... }),
 *        new PluginA()
 *     ]
 *  });
 *
 *  chart.plugins; // [Stanford, PluginA] - instance array
 */
export default class Chart {
	public plugins = [];
	public internal: ChartInternal;

	constructor(options) {
		const $$ = new ChartInternal(this);
		// let hook = () => {};

		this.internal = $$;

		// bind to namespaced APIs
		(function bindThis(fn, target, argThis) {
			Object.keys(fn).forEach(key => {
				const isFunc = isFunction(fn[key]);
				const isChild = target !== argThis;
				const isNotNil = notEmpty(fn[key]);
				const hasChild = isNotNil && Object.keys(fn[key]).length > 0;
				// const hookFn = function(...params) {
				// 	hook();
				// 	return fn[key].bind(argThis)(...params);
				// }

				if (isFunc && ((!isChild && hasChild) || isChild)) {
					target[key] = fn[key].bind(argThis);
				} else if (isNotNil && !isFunc) {
					target[key] = {};
				} else {
					target[key] = fn[key];
				}

				hasChild && bindThis(fn[key], target[key], argThis);
			});
		})(Chart.prototype, this, this);

		loadConfig.call($$, options);

		$$.beforeInit();
		$$.init();

		// if ($$.config.render.lazy !== false && hasStyle($$.$el.chart, {"display": "none", "visibility": "hidden"})) {
		// 	hook = () => {
		// 		logError(`The call of APIs won't work. Please, make sure if chart element is %cvisible.`);
		// 	};
		// }
	}
}

// extend common APIs as part of Chart class
extend(Chart.prototype, [
	apiChart,
	apiColor,
	apiData,
	apiExport,
	apiFocus,
	apiLegend,
	apiLoad,
	apiShow,
	apiTooltip
]);
