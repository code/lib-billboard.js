/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
import CLASS from "../config/classes";
import ChartInternal from "../internals/ChartInternal";
import {extend} from "../internals/util";

extend(ChartInternal.prototype, {
	load(rawTargets, args) {
		const $$ = this;
		let targets = rawTargets;

		if (targets) {
			// filter loading targets if needed
			if (args.filter) {
				targets = targets.filter(args.filter);
			}

			// set type if args.types || args.type specified
			if (args.type || args.types) {
				targets.forEach(t => {
					const type = (args.types && args.types[t.id]) || args.type;

					$$.setTargetType(t.id, type);
				});
			}

			// Update/Add data
			$$.data.targets.forEach(d => {
				for (let i = 0; i < targets.length; i++) {
					if (d.id === targets[i].id) {
						d.values = targets[i].values;
						targets.splice(i, 1);
						break;
					}
				}
			});

			$$.data.targets = $$.data.targets.concat(targets); // add remained
		}

		// Set targets
		$$.updateTargets($$.data.targets);

		// Redraw with new targets
		$$.redraw({
			withUpdateOrgXDomain: true,
			withUpdateXDomain: true,
			withLegend: true
		});

		args.done && args.done();
	},

	loadFromArgs(args) {
		const $$ = this;

		// prevent load when chart is already destroyed
		if (!$$.config) {
			return;
		}

		// reset internally cached data
		$$.resetCache();

		const data = args.data || $$.convertData(args, d => $$.load($$.convertDataToTargets(d), args));

		data && $$.load($$.convertDataToTargets(data), args);
	},

	unload(rawTargetIds, customDoneCb) {
		const $$ = this;
		let done = customDoneCb;
		let targetIds = rawTargetIds;

		// reset internally cached data
		$$.resetCache();

		if (!done) {
			done = () => {};
		}

		// filter existing target
		targetIds = targetIds.filter(id => $$.hasTarget($$.data.targets, id));

		// If no target, call done and return
		if (!targetIds || targetIds.length === 0) {
			done();
			return;
		}

		$$.svg.selectAll(targetIds.map(id => $$.selectorTarget(id)))
			.transition()
			.style("opacity", "0")
			.remove()
			.call($$.endall, done);

		targetIds.forEach(id => {
			// Reset fadein for future load
			$$.withoutFadeIn[id] = false;
			// Remove target's elements
			if ($$.legend) {
				$$.legend.selectAll(`.${CLASS.legendItem}${$$.getTargetSelectorSuffix(id)}`).remove();
			}
			// Remove target
			$$.data.targets = $$.data.targets.filter(t => t.id !== id);
		});
	}
});
