if(typeof require !== 'undefined') {
	var notifier = require('node-notifier');
	var fs = require('fs')
	
}

var $ = document.getElementById.bind(document)

;(function(W, D, LS) {

	var App = React.createClass({
		getInitialState: function() {
			var minutes2notify = LS.getItem('minutes2notify') || 45
			var toggle = LS.getItem('toggle') || 'off'
			return {
				minutes2notify: minutes2notify,
				toggle: toggle,
				clocks: []
			}
		},
		componentDidMount: function() {
			if(this.state.toggle) {
				this._handleClock()
			}
		},
		_handleClock: function() {
			clearInterval(this.state.clocks)
			var inter = setInterval(function() {
				}, this.state.minutes2notify)
			this.state.clocks.push(inter)

		},
		_handleClick: function() {
			if(this.state.toggle == 'off') {
				this.setState({
					toggle: 'on'
				})
				LS.setItem('toggle', 'on')
			} else {
				this.setState({
					toggle: 'off'
				})
				LS.setItem('toggle', 'off')
			}
		},
		render: function() {
			return (
					<div>
						<div className="red-block" id="minutes">
							{ this.state.minutes2notify }<small>min</small>
						</div>
						<div className="extra-block">
							<button id="toggle-button" onClick={this._handleClick} className={ 'toggle-button ' + this.state.toggle }>
								{ this.state.toggle == 'on' ? 'Turn off' : 'Turn on' }
							</button>
						</div>
					</div>
				)
		}
	})

	React.render(<App/>, document.body)


})(window, document, localStorage);