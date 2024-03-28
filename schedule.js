const scheduleNumer = {
  Вторник: [
    {
      subject: "",
      room: "",
      time: "",
    },
    {
      subject: "Моделирование бизнец процессов",
      room: "УК-10-21",
      time: "9:30",
    },
    {
      subject: "Управление предпринимательскими рисками",
      room: "УК-9-308",
      time: "11:00",
    },
    { subject: "БЖД", room: "УК-9-308", time: "13:00" },
    {
      subject: "Управление предпринимательскими рисками",
      room: "УК-9-308",
      time: "14:30",
    },
    // Добавьте уроки для вторника
  ],
  Среда: [
    { subject: "", room: "", time: "8:00" },
    { subject: "WEB-программирование", room: "УК-0-4", time: "9:30" },
    { subject: "", room: "", time: "11:00" },
    { subject: "БЖД", room: "УК-13", time: "13:00" },
    { subject: "", room: "", time: "14:30" },
    // Добавьте уроки для среды
  ],
  Четверг: [
    {
      subject: "Вычислительная системы и коммуникации",
      room: "УК-10-22",
      time: "8:00",
    },
    {
      subject: "Вычислительная системы и коммуникации ",
      room: "ЦЦО",
      time: "9:30",
    },
    { subject: "", room: "", time: "11:00" },
    { subject: "", room: "", time: "13:00" },
    { subject: "", room: "", time: "14:30" },
    // Добавьте уроки для четверга
  ],
  Пятница: [
    { subject: "WEB-программирование", room: "УК-10-04", time: "8:00" },
    { subject: "Моделирование бизнец процессов", room: "", time: "9:30" },
    { subject: "WEB-программирование", room: "ЦЦО", time: "11:00" },
    { subject: "Моделирование бизнец процессов", room: "", time: "13:00" },
    { subject: "", room: "", time: "" },
    // Добавьте уроки для пятницы
  ],
};

const scheduleDenom = {
  // Аналогично для знаменателя

  Вторник: [
    {
      subject: "Вычислительная системы и коммуникации",
      room: "УК-10-21",
      time: "8:00",
    },
    {
      subject: "Моделирование бизнец процессов",
      room: "УК-10-21",
      time: "9:30",
    },
    {
      subject: "Моделирование бизнец процессов",
      room: "УК-9-308",
      time: "11:00",
    },
    { subject: "БЖД", room: "УК-9-308", time: "13:00" },
    {
      subject: "Управление предпринимательскими рисками",
      room: "УК-9-308",
      time: "14:30",
    },
    // Добавьте уроки для вторника
  ],
  Среда: [
    { subject: "", room: "", time: "8:00" },
    { subject: "WEB-программирование", room: "102", time: "9:30" },
    { subject: "", room: "", time: "11:00" },
    { subject: "БЖД", room: "104", time: "13:00" },
    { subject: "", room: "", time: "" },
    // Добавьте уроки для среды
  ],
  Четверг: [
    {
      subject: "Вычислительная системы и коммуникации",
      room: "УК-10-22",
      time: "8:00",
    },
    {
      subject: "Вычислительная системы и коммуникации ",
      room: "ЦЦО",
      time: "9:30",
    },
    { subject: "", room: "", time: "11:00" },
    { subject: "", room: "", time: "13:00" },
    { subject: "", room: "", time: "14:20" },
    // Добавьте уроки для четверга
  ],
  Пятница: [
    { subject: "WEB-программирование", room: "УК-10-04", time: "8:00" },
    { subject: "Моделирование бизнец процессов", room: "", time: "9:30" },
    { subject: "WEB-программирование", room: "103", time: "11:00" },
    { subject: "БЖД", room: "", time: "13:00" },
    { subject: "", room: "", time: "14:20" },
    // Добавьте уроки для пятницы
  ],
};

function updateSchedule() {
  const currentDate = new Date();
  const currentWeek = Math.ceil(currentDate.getDate() / 7);
  const schedule = currentWeek % 2 === 0 ? scheduleDenom : scheduleNumer;

  let weekType = currentWeek % 2 === 0 ? "числитель" : "знаменатель";
  document.getElementById("weekType").textContent = `${weekType}`;

  let scheduleHtml = "";

  Object.keys(schedule).forEach((day) => {
    scheduleHtml += `<tr><td class="rotate" rowspan="6"><strong>${day}</strong></td>`;
    schedule[day].forEach((lesson) => {
      scheduleHtml += `<td class="subject">${lesson.subject}</td>`;
      scheduleHtml += `<td class="room">${lesson.room}</td>`;
      scheduleHtml += `<td class="time">${lesson.time}</td></tr><tr>`;
    });
  });

  document.getElementById("schedule").innerHTML = scheduleHtml;
}

// Обновляем расписание при загрузке страницы и каждый день
window.onload = updateSchedule;
setInterval(updateSchedule, 1000 * 60 * 60 * 24); // Проверка каждый день

//Дата
let currentDate = new Date();
let daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let dayIndex = currentDate.getDay();
let currentDayOfWeek = daysOfWeek[dayIndex];
document.querySelector("#data").textContent = currentDayOfWeek;

//Время
function updateTime() {
  let allDate = new Date();

  let hours = allDate.getHours();
  let minutes = allDate.getMinutes();
  let seconds = allDate.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let formattedTime = hours + ":" + minutes + ":" + seconds;
  let timeElement = document.getElementById("time");
  timeElement.textContent = formattedTime;
}
updateTime();
setInterval(updateTime, 1000);
