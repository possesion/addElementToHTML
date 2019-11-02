class Options {
	constructor(height, width, background, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.background = background;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
    }
    
	addDiv() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let param = `height: ${this.height}px; width: ${this.width}px;
		 background-color: ${this.background}; font-size: ${this.fontSize}px; text-align: ${this.textAlign} `;
		 elem.style.cssText = param;
	}
}
const item = new Options(100, 350, 'yellow', 14, 'center');
const item2 =new Options(200,200,'blue',14,'center');

item.addDiv();
item2.addDiv();
