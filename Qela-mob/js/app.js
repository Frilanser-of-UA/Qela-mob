const btnChatBottom = document.querySelector('.qela-chat-btn');
const navBottom = document.querySelector('.qela-bottom')
const observer = new ResizeObserver(entrirs => {
	const elem = entrirs[0];
	console.log(elem);
	let heightAside = elem.borderBoxSize[0].blockSize;
	btnChatBottom.style.bottom = heightAside + 'px';
	console.log(btnChatBottom.style.bottom = heightAside + 'px');

})
if (btnChatBottom && navBottom) observer.observe(navBottom);

// texarea autoheight
const myText = document.querySelector('textarea[type="message"]');
if (myText) {
	const maxHeight = (myText.dataset.maxHeight * 23 + (myText.scrollHeight - 25));
	myText.style.height = `${myText.scrollHeight}px`;
	myText.addEventListener("input", function () {
		this.style.height = "auto";
		if (myText.scrollHeight <= maxHeight) {
			this.style.cssText = `height: ${this.scrollHeight}px; overflow-y: hidden`;
		} else {
			this.style.cssText = `height: ${maxHeight}px; overflow-y: auto`;
		}
	});
}
