


var tabs = document.querySelectorAll('.tabs-item');
var panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab, index) => {
    tab.onclick = () => {
        console.log(this)
    }
})

