/*jslint devel:true plusplus:true */

var GenerateForm = {
	variables: {
		currentFlow: 0,
		flowTypes: [[0, ['Select Flow Type', 1]],
				   [1, ['Principal', 0]],
				   [2, ['Annuity', 0]],
				   [3, ['Gradient', 0]]],
		principalFlow: [1, [0, 1]]
	},

	initialize: function () {
		'use strict';
	},

	refresh: function () {
		'use strict';

		var newInput = Object, newTextNode = Object;
		this.variables.currentFlow = document.getElementById('addFlowElement').value;

		this.clear();

		newInput = document.createElement('input');
		newInput.setAttribute('type', 'number');
		newInput.setAttribute('name', this.variables.flowTypes[this.variables.currentFlow][1][0]);
		newInput.setAttribute('value', this.variables.principalFlow[1][0]);

		document.forms.namedItem('economics').appendChild(newInput);
	},

	clear: function () {
		'use strict';

		document.forms.namedItem('economics').innerHTML = '';
	}
};

window.onload = function () {
    'use strict';

	GenerateForm.initialize();

	document.getElementById('addFlowElement').onchange = function () {
		GenerateForm.refresh();
	};
};
