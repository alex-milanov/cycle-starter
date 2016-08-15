
const run = require('@cycle/rx-run').run;
const cycleDom = require('@cycle/dom');
const {div, label, input, hr, h1, makeDOMDriver} = cycleDom;

function main(sources) {
	const sinks = {
		DOM: sources.DOM.select('.field').events('input')
			.map(ev => ev.target.value)
			.startWith('')
			.map(name =>
				div([
					label('Name:'),
					input('.field', {attrs: {type: 'text'}}),
					hr(),
					h1('Hello ' + name)
				])
			)
	};
	return sinks;
}

const drivers = {
	DOM: makeDOMDriver('#app')
};

run(main, drivers);
