particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ff003c" },
        "opacity": { "value": 0.3, "random": true },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1.5, "direction": "top", "random": true, "straight": false, "out_mode": "out" }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const garden = document.getElementById('garden');
    const colors = [
        'linear-gradient(to top, #e0d022, #efb300)',
        'linear-gradient(to top, #e6b70c, #ffc907)',
        'linear-gradient(to top, #efbe1a, #f1c30d)',
        'linear-gradient(to top, #fbeb0b, #f0c903)'
    ];

    for (let i = 0; i < 8; i++) {
        const tulip = document.createElement('div');
        tulip.className = 'tulip';
        tulip.style.animation = `sway ${2 + Math.random() * 2}s ease-in-out infinite alternate`;
        tulip.style.animationDelay = `${Math.random() * 2}s`;

        const head = document.createElement('div');
        head.className = 'flower-head';
        head.style.background = colors[i % colors.length];

        const stem = document.createElement('div');
        stem.className = 'stem';
        stem.style.height = `${180 + Math.random() * 100}px`;

        tulip.appendChild(head);
        tulip.appendChild(stem);
        garden.appendChild(tulip);
    }
});