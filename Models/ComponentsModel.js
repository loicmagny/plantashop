class Element extends Element {
	constructor(name, text, _class, _id, attr) {
		let element = document.createElement(name);
		element.setAttribute(_class);
		element.setAttribute(_id);
		if (attr.length > 0) {
			for (a in attr) {
				element.setAttribute(a);
			}
		}
		element.appendChild(document.createTextNode(text));
	}
}
