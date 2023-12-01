const balloons = document.querySelectorAll('.balloon');

const updateBalloonPositions = () => {
    for (const balloon of balloons) {
        const currentTop = parseInt(balloon.style.top);
        const randomDirection = Math.random() < 0.5 ? 1 : -1;
        const newTop = currentTop + randomDirection * Math.random() * 5;

        balloon.style.top = `${newTop}px`;
    }
};

setInterval(updateBalloonPositions, 100);
