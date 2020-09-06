/*Клас людина:
    поля:
        вага,зріст

Клас депутат(наслідується від людини):

поля:
    прізвище,ім'я,вік,хабарник?,розмі хабаря
методи:
    дати хабаря(зробити відповідні перевірки...
якщо депутат не хабарник то щоб він відмовився,
    або ж якщо сума хабаря надто велика то щоб він вагався
чи брати чи ні)


Клас фракція
поля:
    список депутатів
методи:
    додати депутата (вводимо з клави)
видалити депутата(теж з клави)
видалити всіх негідників які брали хабаря
вивести найбільшого хабарника
вивести всіх депутатів
видалити всіх депутатів
вивести загальну суму хабарів для фракції
клас Верховна рада
поля:
    мапа фракцій
методи:
    додати\видалити фракцію
вивести всі фракції
вивести конкретну фракцію
додати\видалити депутата з фракції
вивести всіх хабарників фракції
вивести найбільшого хабарника у фрації
вивести найбільшого хабарника верховної ради
вивести фсіх депутатів фракції
вивести найбільшого хабарника фракції

в майні зробити через switch меню
    1 - Верховна рада
        2 - Фракція
        3 - Депутат
        відповідно при вводі з клави певної цифри ми попадаєио в інше меню
        якщо ми нажали 1 то нам промалюється в консолі таке меню
        1-додати фракцію
        2-вивести всі фракції
        3-вивести найбільшого хабарника
        меню робимо на свій смак*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// клас Верховна рада
// поля:
// масив фракцій
// методи:
// додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
var Human = /** @class */ (function () {
    function Human(FirstName, LastName, age, weight, height) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    return Human;
}());
var Deputat = /** @class */ (function (_super) {
    __extends(Deputat, _super);
    function Deputat(FirstName, LastName, age, weight, height, habarnuk) {
        var _this = _super.call(this, FirstName, LastName, age, weight, height) || this;
        _this.habarnuk = habarnuk;
        return _this;
    }
    Deputat.prototype.getHabar = function (habar) {
        this.habar = habar;
        if (this.habar > 1000 && this.habarnuk === false) {
            return this.habarnuk = !this.habarnuk;
            this.allHabar = this.habar;
        }
        else if (this.habarnuk === false) {
            return;
        }
    };
    return Deputat;
}(Human));
var depLyashko = new Deputat('Oleg', 'Lyashko', 33, 78, 176, false);
depLyashko.getHabar(2000);
console.log(depLyashko);
