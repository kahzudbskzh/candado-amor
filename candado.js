let day = 0;
let month = 0;
let year = 0;

function format(n) {
    return n < 10 ? "0" + n : n;
}

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        let target = btn.dataset.target;

        if (btn.classList.contains("up")) {
            if (target === "day") day = day === 31 ? 0 : day + 1;
            if (target === "month") month = month === 12 ? 0 : month + 1;
            if (target === "year") year = year === 99 ? 0 : year + 1;
        }
        else {
            if (target === "day") day = day === 0 ? 31 : day - 1;
            if (target === "month") month = month === 0 ? 12 : month - 1;
            if (target === "year") year = year === 0 ? 99 : year - 1;
        }

        document.getElementById("day").innerText = format(day);
        document.getElementById("month").innerText = format(month);
        document.getElementById("year").innerText = format(year);

        // Contraseña correcta → 31 / 07 / 25
        if (day === 31 && month === 7 && year === 25) {
            unlock();
        }
    });
});

function unlock() {
    const shackle = document.querySelector(".shackle");
    const message = document.getElementById("unlocked-message");

    shackle.style.transform = "translateY(-160px) rotate(25deg)";

    setTimeout(() => {
        message.style.display = "block";
        window.scrollTo({ top: 9999, behavior: "smooth" });
    }, 1000);
}
