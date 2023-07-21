const payouts = [100, 15];
const takes = [10, 500];

let out = "";

// Вывод на экран подробной информации
out = "<p class=\"po_title\">ВЫПЛАТЫ</p>";
for (let i = 0; i < payouts.length; i++) {
    out += `<p class="po_elem">Выплата ${payouts[i]}грн</p>`;
}

document.querySelector('.payouts_info').innerHTML = out;



/////////////////////////////
out = "<p class=\"ti_title\">ВЗЯЛ ЕЩЁ</p>";

for (let i = 0; i < takes.length; i++) {
    out += `<p class="ti_elem">Взял ${takes[i]}грн</p>`;
}


document.querySelector('.takes_info').innerHTML = out;
