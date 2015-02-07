/*jslint devel:true plusplus:true */

var GenerateForm = function () {
	'use strict';
	this.currentFlow = 0;
	this.flowTypes = [[0, null],
					  [1, this.refresh(this.principalFlow)],
					  [2, this.annuityFlow],
					  [3, this.gradientFlow]];
	this.principalFlow = 10;
	this.annuityFlow = 10;
	this.gradientFlow = 10;

	this.initialize = function () {

	};

	this.refresh = function (arg1) {
		alert('refresh() called');

//		var newInput = Object, newTextNode = Object;
//
//		this.clear();
//
//		console.log(this.variables.flowTypes);
//		console.log(this.variables.flowTypes[this.variables.currentFlow]);
//
//		newInput = document.createElement('input');
//		newInput.setAttribute('type', this.variables.flowTypes[this.variables.currentFlow]);
//		newInput.setAttribute('name', this.variables.flowTypes[this.variables.currentFlow][1][0]);
//		newInput.setAttribute('value', this.variables.Flow[1][0]);
//
//		newInput = document.createElement('input');
//		newInput.setAttribute('type', 'number');
//
//		document.forms.namedItem('economics').appendChild(newInput);
	};

	this.clear = function () {
		document.forms.namedItem('economics').innerHTML = '';
	};
};

window.onload = function () {
    'use strict';

	var generateform = new GenerateForm();
	generateform.initialize();

	document.getElementById('addFlowElement').onchange = function () {
		generateform.currentFlow = document.getElementById('addFlowElement').value;

		console.log(generateform.flowTypes[1][1]);

		generateform.refresh(generateform.flowTypes[1][1]);
	};
};
