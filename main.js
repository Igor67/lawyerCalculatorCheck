function calculate() {
    // let defYes = document.getElementById('def-yes').value;
    // let defNo = document.getElementById('def-no').value;
    let inflTerm = document.getElementById('infl-term').value;
    let info1 = document.getElementById("info").value; // информация 1
    let info2 = document.getElementById("info2").value; // инфо 2
    let colDoc = document.getElementById("col-doc").value; // название документа
    let colDate = document.getElementById("col-date").value; // дата -дачи?
    let colKt = document.getElementById("col-kt").value; // умма долгаlt
    let colDt = document.getElementById("col-dt").value; // заплочено
    let date1 = new Date(document.getElementById("startDate").value); // дата -дачи -зовной заявы
    let date2 = new Date(document.getElementById("finishDate").value); // конечная дата чета анкцийe
    let term = document.getElementById("term").value; // трок -зовно авноті за оновнмзобояанням
    let percent = document.getElementById("percent").value / 100; //процент за и-льзование еег. /100???
    let deadline = document.getElementById("deadline").value;
    let deadlineStop = document.getElementById("deadline-stop").value;
    let bets = ['03.10.2001', '25.00', '04.07.2001', '21.00', '06.11.2001', '19.00', '08.09.2001', '17.00', '09.10.2001', '15.00', '12.10.2001', '12.50', '03.11.2002', '11.50', '04.04.2002', '10.00', '07.05.2002', '8.00 ', '12.05.2002', '7.00 ', '06.09.2004', '7.50 ', '10.07.2004', '8.00 ', '11.09.2004', '9.00 ', '08.10.2005', '9.50 ', '06.10.2006', '8.50 ', '06.01.2007', '8.00 ', '01.01.2008', '10.00', '04.30.2008', '12.00', '06.15.2009', '11.00', '08.12.2009', '10.25', '06.08.2010', '9.50 ', '07.08.2010', '8.50 ', '08.10.2010', '7.75 ', '03.23.2012', '7.50 ', '06.10.2013', '7.00 ', '08.13.2013', '6.50 ', '04.15.2014', '9.50 ', '07.17.2014', '12.50', '11.13.2014', '14.00', '02.06.2015', '19.50', '03.04.2015', '30.00', '08.28.2015', '27.00', '09.25.2015', '22.00', '10.30.2015', '22.00', '12.18.2015', '22.00', '01.28.2016', '22.00', '03.03.2016', '22.00', '04.22.2016', '19.00', '05.27.2016', '18.00', '06.24.2016', '16.50', '07.29.2016', '15.50', '09.16.2016', '15.00', '10.28.2016', '14.00', '12.08.2016', '14.00', '01.26.2017', '14.00', '03.02.2017', '14.00', '03.03.2017', '14.00', '04.14.2017', '13.00', '05.26.2017', '12.50', '07.07.2017', '12.50', '08.03.2017', '12.50', '09.14.2017', '12.50', '10.27.2017', '13.50', '12.15.2017', '14.50', '01.26.2018', '16.00', '03.02.2018', '17.00', '04.12.2018', '17.00', '05.24.2018', '17.00', '07.13.2018', '17.50', '09.07.2018', '18.00', '10.25.2018', '18.00', '21.13.2018', '18.00', '01.31.2019', '18.00', '02.01.2019', '18.00', '03.15.2019', '18.00', '04.26.2019', '17.50', '06.07.2019', '17.50', '07.19.2019', '17.00', '09.06.2019', '16.50', '10.25.2019', '15.50', '12.13.2019', '13.50'];
    //  bets = bets.split(' ');
    let totalBets = [];
    let bets_index = {};
    let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    let infl_index = '104.6 103.3 102.0 101.7 102.1 103.7 99.9 100.0 102.6 101.4 100.4 101.6 101.5 100.6 100.6 101.5 100.4 100.6 98.3 99.8 100.4 100.2 100.5 101.6 101.0 98.6 99.3 101.4 99.7 98.2 98.5 99.8 100.2 100.7 100.7 101.4 101.5 101.1 101.1 100.7 100.0 100.1 99.9 98.3 100.6 101.3 101.9 101.5 101.4 100.4 100.4 100.7 100.7 100.7 100.0 99.9 101.3 102.2 101.6 102.4 101.7 101.0 101.6 100.7 100.6 100.6 100.3 100.0 100.4 100.9 101.2 100.9 101.2 101.8 99.7 99.6 100.5 100.1 100.9 100.0 102.0 102.6 101.8 100.9 100.5 100.6 100.2 100.0 100.6 102.2 101.4 100.6 102.2 102.9 102.2 102.1 102.9 102.7 103.8 103.1 101.3 100.8 99.5 99.9 101.1 101.7 101.5 102.1 102.9 101.5 101.4 100.9 100.5 101.1 99.9 99.8 100.8 100.9 101.1 100.9 101.8 101.9 100.9 99.7 99.4 99.6 99.8 101.2 102.9 100.5 100.3 100.8 101.0 100.9 101.4 101.3 100.8 100.4 98.7 99.6 100.1 100.0 100.1 100.2 100.2 100.2 100.3 100.0 99.7 99.7 99.8 99.7 100.1 100.0 99.9 100.2 100.2 99.9 100.0 100.0 100.1 100.0 99.9 99.3 100.0 100.4 100.2 100.5 100.2 100.6 102.2 103.3 103.8 101.0 100.4 100.8 102.9 102.4 101.9 103.0 103.1 105.3 110.8 114.0 102.2 100.4 99.0 99.2 102.3 98.7 102.0 100.7 100.9 99.6 101.0 103.5 100.1 99.8 99.9 99.7 101.8 102.8 101.8 100.9 101.1 101.0 101.8 100.9 101.3 101.6 100.2 99.9 102.0 101.2 100.9 101.0 101.5 100.9 101.1 100.8 100.0 100.0 99.3 100.0 101.9 101.7 101.4 100.8 101.0 100.5 100.9 101.0 100.7 99.5 99.4 99.7 100.7 100.7 100.1 99.7';
    infl_index = infl_index.split(' ');
    let year = 0;
    console.log(daysLag);
    let month = 1;
    let index = {};
    let indexes = [];
    //inflation
    //inflation
    //inflation
    //inflation
    let inflTermD = date1;
    if (inflTerm != 0) {
         inflTermD = new Date(date2.getFullYear() - inflTerm, date2.getMonth(), date2.getDay() - 1);
    }
    let futureMonth = inflTermD.getMonth();
    let futureYear = inflTermD.getFullYear();

    console.log('infl-term: ' + inflTermD);
    for (let i = 0; i < infl_index.length; i++) {
        if (i % 12 == 0 && i != 0) {
            year++;
            month = 1;

        }
        if (i < 121) {
            if (month < 10) {
                index[month + '.' + '20' + '0' + year] = infl_index[i];
            }
            if (month > 9) {
                index[month + '.' + '20' + '0' + year] = infl_index[i];

            }
        } else {
            if (month < 10) {
                index[month + '.' + '20' + year] = infl_index[i];
            }
            if (month > 9) {
                index[month + '.' + '20' + year] = infl_index[i];

            }
        }

        month++;
    }
    let differenceMonths;
    differenceMonths = date2.getMonth() - inflTermD.getMonth() + (12 * (date2.getFullYear() - inflTermD.getFullYear()));
    for (let i = 0; i <= differenceMonths; i++) {

        //if (date1.getDay() > 15) {
        if (futureMonth == 13) {
            futureYear++;
            futureMonth = 1;
        }
        let str = (futureMonth + '.' + futureYear);

        for (let key in index) {
            if (key == str) {
                indexes.push(index[key]);

            }
        }
        futureMonth++;

    }

    let totalSum = 1.0;

    for (let v = 0; v < indexes.length; v++) {
        totalSum = indexes[v] * totalSum;

    }
    totalSum = totalSum / (Math.pow(100, indexes.length));
    console.log('totalsum:' + totalSum * colKt)
    //3 percents
    let threepersum = 1;
    threepersum = colKt * (percent / 100) * 365 / ((date2 - inflTermD) / 60 / 60 / 24 / 1000);

    // console.log(threepersum);
    ////

    //учетная ставка
    //учетная ставка
    //учетная ставка
    //учетная ставка
    for (let i = 0; i < bets.length; i = i + 2) {
        bets_index[bets[i]] = bets[i + 1];

    }
    futureMonth = date1.getMonth();
    futureYear = date1.getFullYear();
    let futureDay = date1.getDay();
    //let keys =[];
    const keys = Object.keys(bets_index);
    //  console.log(bets_index);
    let differenceDays = (date2 - date1) / 60 / 60 / 24 / 1000;
    for (let i = 0; i < differenceDays; i++) {

        if (i % 365 == 0) {
            futureYear++;
            futureMonth = 1;
        }
        if (i % 30 == 0) {
            futureMonth++;
            futureDay = 1;
        }
        let strBet = new Date(futureYear, futureMonth, futureDay);
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            let currDate = new Date(key);
            if (j + 1 < keys.length) {
                const keyPlus1 = keys[j + 1];
                let nextkey = new Date(keyPlus1);

                if (strBet >= currDate && strBet < nextkey) {
                    totalBets.push(bets_index[keys[j]]);
                    //console.log('before: ' + currDate.getMonth() +' ' + currDate.getDay() + ' ' + currDate.getFullYear() +' this: ' + strBet.getMonth() + ' ' + strBet.getDay() + ' ' + strBet.getFullYear() + ' ' + 'next: ' + nextkey.getMonth() +' ' + nextkey.getDay()+ ' ' + nextkey.getFullYear());
                    break;
                }
            }
        }
        futureDay++;
        //console.log(totalBets[i]);
    }
    //пеня
    //пеня
    //пеня
    //пеня
    let penya = [];
    let stop = deadlineStop / 2 * 61;
    let penyadeadline = date1.getMonth() + stop + '.' + date1.getDay() + date1.getFullYear() + deadline;
    futureMonth = date2.getMonth();
    futureYear = date2.getFullYear()-1;
    futureDay = date2.getDay();
    let f = 0;
    let daysForCalc = 0;

    if (daysLag >= stop) {
        daysForCalc = stop;
    } else {
        daysForCalc = daysLag;
    }
    let startDate = new Date();
    let startKey = '';
    let startvariable = 0;
    for (let j = 0; j < keys.length; j++) {
        var date3 = new Date(keys[j]);
        var nextdate = new Date(keys[j + 1]);
        if (date1 > date3 && date1 < nextdate) {
            startDate = nextdate;
            startKey = keys[j + 1];
            startvariable = j + 1;
            console.log('here!')
        }
    }

    let h = 1;
    let m = 0;
    let summPenya = 0;
    let y = 0;
    for (let i = daysForCalc; i >= 0; i--) {
        let penyadate = new Date(futureYear, futureMonth, futureDay);


        if (i % 365 == 0) {
            futureYear++;
            futureMonth = 1;
            y++;
        }
        // if (i % 366 == 0 && y % 4 ==0) {
        //     futureYear++;
        //     futureMonth = 1;
        //     y++;
        // }
        if (i % 31 == 0) {
            futureMonth++;
            futureDay = 1;
            m++;
        }


        let curstr = new Date(futureYear, futureMonth, futureDay);
        for (let i = 0; i < keys.length; i++) {
            let cur = new Date(keys[i]);
            let nex = new Date(keys[i + 1]);
            // console.log('cur: ' + keys[i] + ' nex: ' + keys[i+1] + ' curstr: ' + futureMonth + '.' + futureDay + '.' + futureYear);
            if (curstr >= cur && curstr <= nex) {
                penya.push(parseFloat(bets_index[keys[i]]));
                // console.log('found!!!')
                //  console.log('penya:'+parseFloat( bets_index[keys[i]]));
                break;
            }
        }
        // console.log('date: ' + penyadate);
        let curnum = penya[i];
        // console.log(futureYear + '.' + futureMonth + '.' + futureDay);
        //console.log(penyadate)
        summPenya += ShowPenyPercent(penyadate).percent;
        // console.log('penya: ' + (ShowPenyPercent(penyadate).percent));
        futureDay++;


    }
    // console.log(summPenya);
    let commonPenya = (Number(summPenya) / Number(daysForCalc + 2)).toFixed(2),
        ansFineSumm = ((Number(colKt) * Number(commonPenya) * 2 / 100 / 365 * Number(daysForCalc))).toFixed(2);
    // console.log(ansFineSumm)
    let total = (parseFloat(ansFineSumm) + parseFloat(threepersum * 100) + parseFloat(totalSum * colKt)).toFixed(2);
    console.log(parseFloat(threepersum));
    let termDate = new Date(date2.getFullYear() - term, date2.getMonth(), date2.getDay() - 1);
    console.log('term: ' + termDate);

    if(date2 > penyadeadline){
        ansFineSumm =0;
    }
    if (date1 < termDate) {
        alert('На жаль, срок позовної давності за зобов’язанням сплинув' + ' ' + termDate.getDay() + '.' + termDate.getMonth() + 1 + '.' + termDate.getFullYear() + ' ' + 'числа');
    } else {
        alert(total);
    }
    // TODO: ansFineSumm = ((Number(debt.value) * Number(commonPenya) * 2 / 100 / 365 * Number(daysForCalc))).toFixed(2);

}
