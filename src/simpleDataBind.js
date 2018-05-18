import fp from 'lodash/fp';

/**
 *
 * @param {String} tag - the html tag for each data item
 * @param {String[]} classes - on the tag for each data item
 * @param {Array} data - the array of data we will bind
 * @param {d3.selection} container the element we are putting the elements into
 * @param {Function} key - (data, index, groupNodes) => key for data join
 * @returns {d3.selection} the selection of the newly added items
 */
export default fp.curryN(4, (tag, classes, data, container, keyFn) => {
	const updateSelection = container
			.selectAll(`${tag}${classes.length ? '.' : ''}${classes.join('.')}`)
			.data(data, keyFn);
	updateSelection.exit().remove();
	return updateSelection
			.enter()
			.append(tag)
			.classed(classes.join(' '), true)
			.merge(updateSelection);
});
