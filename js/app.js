'use strict';

if (typeof require !== 'undefined') {
	var notifier = require('node-notifier');
	var fs = require('fs');
}

var $ = document.getElementById.bind(document);(function (W, D, LS) {

	var App = React.createClass({
		displayName: 'App',

		getInitialState: function getInitialState() {
			var minutes2notify = LS.getItem('minutes2notify') || 45;
			var toggle = LS.getItem('toggle') || 'off';
			return {
				minutes2notify: minutes2notify,
				toggle: toggle,
				clocks: []
			};
		},
		componentDidMount: function componentDidMount() {
			if (this.state.toggle) {
				this._handleClock();
			}
		},
		_handleClock: function _handleClock() {
			clearInterval(this.state.clocks);
			var inter = setInterval(function () {
				console.log('do!');
			}, this.state.minutes2notify);
			this.state.clocks.push(inter);
		},
		_handleClick: function _handleClick() {
			if (this.state.toggle == 'off') {
				this.setState({
					toggle: 'on'
				});
				LS.setItem('toggle', 'on');
			} else {
				this.setState({
					toggle: 'off'
				});
				LS.setItem('toggle', 'off');
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'red-block', id: 'minutes' },
					this.state.minutes2notify,
					React.createElement(
						'small',
						null,
						'min'
					)
				),
				React.createElement(
					'div',
					{ className: 'extra-block' },
					React.createElement(
						'button',
						{ id: 'toggle-button', onClick: this._handleClick, className: 'toggle-button ' + this.state.toggle },
						this.state.toggle == 'on' ? 'Turn off' : 'Turn on'
					)
				)
			);
		}
	});

	React.render(React.createElement(App, null), document.body);
})(window, document, localStorage);
