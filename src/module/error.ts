import {TYPE, TYPE_METHOD_NEEDED} from "../config/const";
import {window} from "./browser";
import {camelize, isEmpty} from "./util";

/**
 * Copyright (c) 2021 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/* eslint no-console: "off" */
export {checkModuleImport, logError};

/**
 * Check chart type module imports.
 * @param {ChartInternal} ctx Context
 * @private
 */
function checkModuleImport(ctx) {
	const $$ = ctx;
	const {config} = $$;
	let type = "";

	if (isEmpty(config.data_type || config.data_types) && !$$[TYPE_METHOD_NEEDED.LINE]) {
		type = "line";
	} else {
		for (const x in TYPE_METHOD_NEEDED) {
			const t = TYPE[x];

			if ($$.hasType(t) && !$$[TYPE_METHOD_NEEDED[x]]) {
				type = t;
				break;
			}
		}
	}

	type &&
		logError(`Please, make sure if %c${camelize(type)}`,
			"module has been imported and specified correctly.",
			"https://github.com/naver/billboard.js/wiki/CHANGELOG-v2#modularization-by-its-functionality");
}

/**
 * Log error and throw error
 * @param {string} head Message header
 * @param {string} tail Message tail
 * @param {string} info Info message
 * @private
 */
function logError(head, tail?: string, info?: string) {
	const prefix = "[billboard.js]";
	const hasConsole = window.console?.error;

	if (hasConsole) {
		const tailMsg = tail ?
			["background:red;color:white;display:block;font-size:15px", tail] :
			[];

		console.error(`❌ ${prefix} ${head}`,
			"background:red;color:white;display:block;font-size:15px", ...tailMsg);
		info && console.info("%cℹ️", "font-size:15px", info);
	}

	throw Error(`${prefix} ${head.replace(/\%c([a-z-]+)/i, "'$1' ")} ${tail ?? ""}`);
}
