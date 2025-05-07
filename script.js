// Enable sound only after user interacts once
let audioEnabled = false;
document.addEventListener("click", () => {
    audioEnabled = true;
}, { once: true }); // This triggers only once

const sound = document.getElementById("ding-sound");

setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    hour.style.transform   = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    // Ding sound logic at the top of the hour
    if (audioEnabled && mtime === 0 && stime === 0) {
        let chimes = htime % 12;
        chimes = chimes === 0 ? 12 : chimes;

        let count = 0;
        const interval = setInterval(() => {
            if (count < chimes) {
                sound.currentTime = 0;
                sound.play();
                count++;
            } else {
                clearInterval(interval);
            }
        }, 1000); // 1 second between chimes
    }

}, 1000);
