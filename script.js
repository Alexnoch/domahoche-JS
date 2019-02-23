
var health = 100;
var mydollars = 50;

document.getElementById('start').addEventListener('click',life,false);
var btnEat = document.getElementById('btnEat');
btnEat.addEventListener('click',eaTing,false);
var logs = document.getElementById('logs');
var smileSad = document.getElementById('smileSad');
var smileHappy = document.getElementById('smileHappy');
var mycash = document.getElementById('myCash');
var myhealth = document.getElementById('myHealth')
var work = document.getElementById('work');
work.addEventListener('click',workInterval,false);
var sun = document.getElementById('sun');

var walkbtn = document.getElementById('walk');
walkbtn.addEventListener('click',walkingStreet,false);

function life(){
      var timer;
      timerF();

 function timerF(){                                          // Таймер отсчитывает жизни и деньги , плюс вызывает Логи
   if(health>0 && mydollars>0){
       health = health-1;
       timer = setTimeout(timerF,300);
       myhealth.innerHTML = health;
       mycash.innerHTML = mydollars;
       logsDog();

  }else{
       clearTimeout(timer);
       alert("ВЫ проиграли!");
   }
 };
};

function eaTing(){                                        // Функция Кушать выводит в консоль ням-ням, добавляет жизни и убавляет доллары
        health += 10;
        mydollars -= 5;
        logs.innerText = "Ням-ням";
        var timerEat;
        timerEat=setTimeout(tyFood,2000);
 function tyFood(){
           clearTimeout(timerEat);
  };
};

function logsDog(){                                     // функция Логи, следит за состоянием животного и передаёт его эмоции 
  var timerLogs;
  timerLogs = setTimeout(logsDog,200);
    if(health<50){
      logs.innerHTML="Хочу кушать";
      smileHappy.style.display="none";
      smileSad.style.display="block";
    }else if(health>51){
      smileHappy.style.display="block";
      smileSad.style.display="none";
    }
};


function workInterval(){                                  // Функция Прогулка, блокирует другие кнопки и прибавляет деньги
       mydollars += 10;
       work.style.display = 'none';
       btnEat.style.display='none';
       walkbtn.style.display = 'none';
       setTimeout(showBtn,5000)
  };   


function showBtn(){
  btnEat.style.display = 'block';
  work.style.display = 'block';
  walkbtn.style.display = 'block';
};

function walkingStreet(){
  walking.style.display = 'block';
  sun.style.display = 'block';
  var timeWalk = setTimeout(clear,4000);
  function clear(){
    clearTimeout(timeWalk);
    walking.style.display = 'none';
  sun.style.display = 'none';
  };
};

































