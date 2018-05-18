import { csv } from 'd3-fetch';
import { select } from 'd3-selection';

import simpleDataBind from './simpleDataBind';

import './main.scss';

const parseRow = r => ({
	...r,
	minRange: +r.minRange,
	maxRange: +r.maxRange,
	weight: +r.weight,
	strength: +r.strength,
});

const tableRowData = cam => [
	{ k: 'product', v: cam.product },
	{ k: 'size', v: cam.size },
	{ k: 'range', v: [cam.minRange, cam.maxRange] },
	{ k: 'weight', v: cam.weight },
];

const renderRange = selection =>
	simpleDataBind('span', ['range'], d => [d], selection)
		.text(d => d.v)
		.style('margin-left', d => `${d.v[0]}em`)
		.style('width', d => `${d.v[1] - d.v[0]}em`);

const renderTextValue = selection => selection.text(d => d.v);

function camChart() {

	function chart(selection) {
		const data = selection.datum();
		console.log('render', data);
		const cams = simpleDataBind('tr', ['cam'], data, selection);
		const cam = simpleDataBind('td', [], tableRowData, cams);
		cam.each(function (d) {
			if (d.k === 'range') {
				renderRange(select(this));
			} else {
				renderTextValue(select(this));
			}
		});
	}

	return chart;
}


const render = camChart();
const canvas = select('#result');

csv('../cams.csv', parseRow).then((data) => {
	canvas.datum(data);
	canvas.call(render);
});
