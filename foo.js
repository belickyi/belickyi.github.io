let canvas = document.getElementById("sandbox"), // Получаем элемент
    context = canvas.getContext("2d"), // Получаем контекст канваса
    circle, // переменная для круга
    lineS,
    lineM,
    lineH;


function drawWatch() {
    // Очитска холста
    context.clearRect(0, 0, 300, 300);
    // Создаем окружность
    circle = new Path2D();
    circle.arc(150, 150, 150, 0, 2 * Math.PI);
    // Рисуем контур окружности
    context.stroke(circle);

    // Переменные для создания отсечек на часах
    let R = 300 / 2, d, angle, pX, pY, qX, qY;

    // Цикл для остечек
    for (d = 0; d < 60; ++d) {
        // Угл 1-ой отсечки
        angle = (d / 60) * (2 * Math.PI);
        // Зная угл высчитываем координату x
        pX = Math.cos(angle) * R;
        // Зная угл высчитываем координату y
        pY = -Math.sin(angle) * R;
        // Обрезаем линию отсечки
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        // Увеличиваем координаты на радиус, что бы отсчет отрисовки отсечки начинался с центра
        pX += R; pY += R;
        qX += R; qY += R;

        // Рисуем отсечки
        context.moveTo(pX, pY);
        context.lineTo(qX, qY);
        context.stroke();
    }

    // Получаем сек, ч, мин. в переменные
    let date = new Date(), hours, minutes, seconds;
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();

    // Рисуем секундную стрелку
    let sX, sY;
    // Создаем линию
    lineS = new Path2D();
    // Вычисляем угол секундной стрелки
    let secondsAngle = (seconds / 60) * (2 * Math.PI);
    secondsAngle = Math.PI / 2 - secondsAngle;
    console.log(secondsAngle)
    sX = Math.cos(secondsAngle) * R * 0.85;
    sY = -Math.sin(secondsAngle) *  R * 0.85;
    sX += R; sY += R;

    lineS.moveTo(150,150);
    lineS.lineTo(sX, sY);
    context.stroke(lineS);

    // Рисуем минутную стрелку
    let mX, mY;
    // Создаем линию
    lineM = new Path2D();
    // Вычисляем угол секундной стрелки
    let minutesAngle = (minutes / 60) * (2 * Math.PI);
    minutesAngle = Math.PI / 2 - minutesAngle;
    mX = Math.cos(minutesAngle) * R * 0.65;
    mY = -Math.sin(minutesAngle) *  R * 0.65;
    mX += R; mY += R;

    lineM.moveTo(150,150);
    lineM.lineTo(mX, mY);
    context.stroke(lineM);

    // Рисуем стрелку часов
    let hX, hY;
    // Создаем линию
    lineH = new Path2D();
    // Вычисляем угол секундной стрелки
    let hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);
    hoursAngle = Math.PI / 2 - hoursAngle;
    hX = Math.cos(hoursAngle) * R * 0.4;
    hY = -Math.sin(hoursAngle) *  R * 0.4;
    hX += R; hY += R;

    lineH.moveTo(150,150);
    lineH.lineTo(hX, hY);
    context.stroke(lineH);

    setTimeout(drawWatch, 1000)
}

drawWatch();

