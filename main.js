function ifZero(i) {
    return (i < 10)? '0'+i : i;
}

setInterval(function main() {

    const doc_date = document.getElementById("doc_date");
    const doc_time = document.getElementById("doc_time");
    const day = document.getElementById("day");
    const days = ["Niedziela","Poniedziałek","Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const engdays = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const t = new Date();
    const d = ifZero(t.getDate());
    const m = ifZero(t.getMonth() + 1);
    const y = ifZero(t.getFullYear());
    const h = ifZero(t.getHours());
    const min = ifZero(t.getMinutes());
    const s = ifZero(t.getSeconds());

    date = d + "." + m + "." + y;
    time = h + ":" + min + ":" + s;
    doc_date.innerHTML = date;
    doc_time.innerHTML = time;
    day.innerHTML = days[t.getDay()] + "    /   " + engdays[t.getDay()];

}, 1000), 
window.onload;