const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.pane-item');

const line = document.querySelector('.tabs .line');
// const tabActive = document.querySelector('.tab-item.active')


tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function () {
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.pane-item.active').classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }
})