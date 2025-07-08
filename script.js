function toggleLayer(id, elements) {
    var checkbox = document.getElementById(id);
    checkbox.addEventListener('change', function () {
        elements.forEach(function (el) {
            el.style.display = checkbox.checked ? 'block' : 'none';
        });
    });
}

function createMarker(x, y, text, cls) {
    var div = document.createElement('div');
    div.className = 'layer ' + cls;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.textContent = text;
    return div;
}

window.onload = function () {
    var layout = document.getElementById('layout');

    var areas = [
        {name: 'Strefa A', x: 50, y: 50},
        {name: 'Strefa B', x: 300, y: 100}
    ];
    var areaEls = areas.map(function (a) {
        var el = createMarker(a.x, a.y, a.name, 'area');
        layout.appendChild(el);
        return el;
    });

    var gates = [
        {name: 'Brama 1', x: 100, y: 400},
        {name: 'Brama 2', x: 600, y: 450}
    ];
    var gateEls = gates.map(function (g) {
        var el = createMarker(g.x, g.y, g.name, 'gate');
        layout.appendChild(el);
        return el;
    });

    var alerts = [
        {level: 'yellow', count: 2, x: 200, y: 200},
        {level: 'red', count: 1, x: 500, y: 300}
    ];
    var alertEls = alerts.map(function (a) {
        var el = createMarker(a.x, a.y, a.count, 'alert ' + a.level);
        layout.appendChild(el);
        return el;
    });

    var statuses = [
        {status: 'Pracuje', x: 150, y: 500},
        {status: 'Stop', x: 400, y: 520}
    ];
    var statusEls = statuses.map(function (s) {
        var el = createMarker(s.x, s.y, s.status, 'status');
        layout.appendChild(el);
        return el;
    });

    var workers = [
        {count: 3, x: 250, y: 350},
        {count: 5, x: 550, y: 250}
    ];
    var workerEls = workers.map(function (w) {
        var el = createMarker(w.x, w.y, w.count, 'worker');
        layout.appendChild(el);
        return el;
    });

    toggleLayer('areaToggle', areaEls);
    toggleLayer('gateToggle', gateEls);
    toggleLayer('alertToggle', alertEls);
    toggleLayer('statusToggle', statusEls);
    toggleLayer('workerToggle', workerEls);
};
