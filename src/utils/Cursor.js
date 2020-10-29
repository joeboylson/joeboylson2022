const Cursor = {
    initialized: false,
    element: null,
    timeout: null,
    init: function() {
        if (!this.element && typeof window === "object") {
            let cursorSpan = document.createElement('span')
            cursorSpan.id = 'cursor-span';
            document.body.prepend(cursorSpan);

            window.addEventListener('mousemove', function(e) {
                cursorSpan.style.transform = `translate( ${e.clientX + 21}px, ${e.clientY - (21/2)}px )`;
            })

            this.element = cursorSpan;
        }
    },
    setText: function(text) {
        this.init();
        if (this.element) {
            this.element.innerHTML = text;
            this.timeout = setTimeout(() => Cursor.clearText(), 3000)
        }
    },
    clearText: function() { 
        this.init();
        if (this.element) this.element.innerHTML = null;
        clearTimeout(this.timeout);
    },
    applyBehavior: function(text) {
        this.init();
        return {
            onMouseEnter: () => this.setText(text),
            onMouseLeave: () => this.clearText()
        }
    }
}

export default Cursor;