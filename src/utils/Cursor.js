const Cursor = {
    element: null,
    timeout: null,
    init: function() {
        if (!this.element) {
            let cursorSpan = document.createElement('span')
            cursorSpan.id = 'cursor-span';
            document.body.prepend(cursorSpan);

            window.addEventListener('mousemove', function(e) {
                cursorSpan.style.transform = `translate( ${e.clientX + 21}px, ${e.clientY - (21/2)}px )`;
            })

            this.element = cursorSpan
        }
    },
    setText: function(text) { 
        if (this.element) {
            this.element.innerHTML = text;
            this.timeout = setTimeout(() => Cursor.clearText(), 3000)
        }
    },
    clearText: function() { 
        if (this.element) this.element.innerHTML = null;
        clearTimeout(this.timeout);
    },
    applyBehavior: function(text) {
        return {
            onMouseEnter: () => this.setText(text),
            onMouseLeave: () => this.clearText()
        }
    }
}

Cursor.init();

export default Cursor;