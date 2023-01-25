// selector

// Pass single element
const element = document.querySelector('#select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});

// map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872185073737896, 2.354223999999991],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map_place.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
}

// form

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate(".valid__form", {
    rules: {
        name: {
            required: true,
            minLength: 2,
        },

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            },
        },

        mail: {
            required: true,
            email: true,
        },
    },
    colorWrong: "#FF5C00",
    messages: {
        name:{
            required: "Вы не ввели имя",
            minLength: "Имя должно содержать больше 2-х символов",
        },

        tel: {
            required: "Вы не ввели телефон",
            function: "Вы ввели неправильный номер телефона",
        },

        mail: {
            required: "Вы не ввели e-mail",
            email: "Вы ввели неправильный e-mail",
        },
    }
});
