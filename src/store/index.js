import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects:[
      {
        id: 1,
        title: '1. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqUhJ9D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/1/2.jpg'),
            source: 'https://pastvu.com/p/1416774'
          },
          {
            url: require('../assets/images/1/3.jpg'),
            source: 'https://pastvu.com/p/1197538'
          },
          {
            url: require('../assets/images/1/4.jpg'),
            source: 'https://pastvu.com/p/1234914'
          },
          {
            url: require('../assets/images/1/5.jpg'),
            source: 'https://pastvu.com/p/1171612'
          },
          {
            url: require('../assets/images/1/6.jpg'),
            source: 'https://pastvu.com/p/1234941'
          },
          {
            url: require('../assets/images/1/7.jpg'),
            source: 'https://pastvu.com/p/1192116'
          },
          {
            url: require('../assets/images/1/8.jpg'),
            source: 'https://pastvu.com/p/1168132'
          },
          {
            url: require('../assets/images/1/9.jpg'),
            source: 'https://pastvu.com/p/1168134'
          },
          {
            url: require('../assets/images/1/10.jpg'),
            source: 'https://pastvu.com/p/1168298'
          },
          {
            url: require('../assets/images/1/11.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/1/12.jpg'),
            source: 'https://pastvu.com/p/1549428'
          },
        ],
        comments:[
          {
          text: 'Дом Мокроусовых. Там жили мой друг, Олег Мокроусов и его старшая сестра Мила. Олег пропал во время рыбалки на Оби в 80-е... а сестра, вроде, переехали давно в Тюмень. Это был дом по ул. Железнодорожной, ближе всех к ж/д путям и складам... где работала моя мама. И вход в их квартиру был самым первым от дороги',
          author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
          text: 'Дальше, во второй квартире жил Володя Венцель. Вместе с ним в одном классе учились, а потом жили через стенку на Комсомольской 20... есть одно старое фото с ним, где он на фоне нарт стоит, а я не захотел фотографироваться. Теперь он в историю вошёл, а я только вспоминаю.',
          author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
        ]
      },
      {
        id: 2,
        title: '2. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqQwY~D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/2/1.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/2/2.jpg'),
            source: 'https://pastvu.com/p/1234914'
          },
          {
            url: require('../assets/images/2/3.jpg'),
            source: 'https://pastvu.com/p/1234941'
          },
          {
            url: require('../assets/images/2/4.jpg'),
            source: 'https://pastvu.com/p/1171612'
          },
          {
            url: require('../assets/images/2/5.jpg'),
            source: 'https://pastvu.com/p/1192116'
          },
          {
            url: require('../assets/images/2/6.jpg'),
            source: 'https://pastvu.com/p/1201055'
          },
          {
            url: require('../assets/images/2/7.jpg'),
            source: 'https://pastvu.com/p/1168134'
          },
          {
            url: require('../assets/images/2/8.jpg'),
            source: 'https://pastvu.com/p/1168298'
          },
          {
            url: require('../assets/images/2/9.jpg'),
            source: 'https://pastvu.com/p/1171613'
          },
          {
            url: require('../assets/images/2/10.jpg'),
            source: 'https://pastvu.com/p/1416774'
          },
        ]
      },
      {
        id: 3,
        title: '3. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.515130%2C65.535834&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/3/1.jpg'),
            source: 'https://pastvu.com/p/1234941'
          },
          {
            url: require('../assets/images/3/2.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/3/3.jpg'),
            source: 'https://pastvu.com/p/1192128'
          },
          {
            url: require('../assets/images/3/4.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/3/5.jpg'),
            source: 'https://pastvu.com/p/1460815'
          },
        ]
      },
      {
        id: 4,
        title: '4. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqMHI~D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/4/1.jpg'),
            source: 'https://pastvu.com/p/1201092'
          },
          {
            url: require('../assets/images/4/2.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/4/3.jpg'),
            source: 'https://pastvu.com/p/1192128'
          },
          {
            url: require('../assets/images/4/4.jpg'),
            source: 'https://pastvu.com/p/1372387'
          },
          {
            url: require('../assets/images/4/5.jpg'),
            source: 'https://pastvu.com/p/1403976'
          },
          {
            url: require('../assets/images/4/6.jpg'),
            source: 'https://pastvu.com/p/1415530'
          },
          {
            url: require('../assets/images/4/7.jpg'),
            source: 'https://www.etoretro.ru/pic256796.htm'
          },
          {
            url: require('../assets/images/4/8.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/4/9.jpg'),
            source: 'https://pastvu.com/p/1201090'
          },
          {
            url: require('../assets/images/4/10.jpg'),
            source: 'https://pastvu.com/p/1416832'
          },
          {
            url: require('../assets/images/4/11.jpg'),
            source: 'https://pastvu.com/p/1417882'
          },
          {
            url: require('../assets/images/4/12.jpg'),
            source: 'https://pastvu.com/p/1460815'
          },
          {
            url: require('../assets/images/4/13.jpg'),
            source: 'https://pastvu.com/p/1542805'
          },
          {
            url: require('../assets/images/4/14.jpg'),
            source: 'https://pastvu.com/p/1631136'
          },
        ]
      },
      {
        id: 5,
        title: '5. Линейно-технический узел',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqMDQLB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description:'',
        images:[
          {
            url: require('../assets/images/5/1.jpg'),
            source: 'https://pastvu.com/p/1201092'
          },
          {
            url: require('../assets/images/5/2.jpg'),
            source: 'https://pastvu.com/p/1327371'
          },
          {
            url: require('../assets/images/5/3.jpg'),
            source: 'https://pastvu.com/p/1403976'
          },
          {
            url: require('../assets/images/5/4.jpg'),
            source: 'https://pastvu.com/p/1372387'
          },
          {
            url: require('../assets/images/5/5.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
        ],
        comments:[
          {
            text: 'Это далёкие шестидесятые годы. Улица Железнодорожная. Ненцы стоят возле ЛТУ. Барак, что за столбами, сгорел при экспедиции. Вдали видно здание общежития охраны 501 стройки. На начальном этапе строительства города там располагался Трест, райком партии. На той площади в 72 году объявили Надым городом.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
          {
            text: 'Фотография, на которой семья ненцев с упряжкой - уникальна. По ней можно судить, каким был задуман посёлок в 50-е годы. Широкая улица, ухоженные дома, радио говорило, свет был, позвонить можно было в любой конец страны. Это мрачный сталинизм.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
          {
            text: 'Дом, который возле ЛТУ сгорел в 66 году. Мы только его отремонтировали, только распределили под квартиры,- а он ночью полыхнул. Следом за ним виден дом, который мы под столовую переделали, а дальше, то здание, которое поперёк, зэковское офицерское общежитие виднеется. Там трест СГС и первый райком партии был.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
          {
            text: 'Если приглядеться, то здание за столовой - зэковский клуб. С двухэтажной надстройкой. При нас его уже не было. На дрова разобрали. Но рассказывали, каким он был. Внутри весь расписан.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Помнится, в ЛТУ, а они обслуживали линию Москва-Игарка, в 1966 году работали 7 человек. Это, скорее всего, они и есть. Начальником был Самарин. Через дорогу от здания ЛТУ был их магазинчик. Денег у нас не было, так мы получали в том магазине продукты под запись, под будущую получку. Продукты из Салехарда привозил Сорокин на дрезине. Макароны, сухую картошку, консервы. Пряники - откусить было невозможно. Супы, каши в банках. Сгущёнку за рубль, консервированное молоко за 70 копеек банка. Да, уж...Было время...',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про третью фотографию'
          },
          {
            text: 'А в апреле 67 года приехали девчонки-связистки на практику в ЛТУ. Пилот вертолёта решил одну покатать, ну и грохнулся, забыл снять брезент. Два трупа увезли в Салехард. Петя Кощеев им гроб делал. Один на двоих. Кстати, с материалами было плохо, так Петя разобрал пол на складах ВВ, которые были за кедровой рощей (склады были зэковские), и из них колотил гроб.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Чуть-чуть добавлю про крушение вертолета весной 67-го: весна была ранняя, не по-северному. И лето затем было жаркое - мы купались в озере. В нем было очень много пиявок. Из воды вылезешь, а по рукам и ногам в кожу впились эти черные твари. Отдираешь их, а они скользкие. От укусов оставались ранки и кровоточили. Наличие пиявок говорило о том, что вода чистая была в озере...<br>А тот Вертолет пролетел прямо над моей головой. (Я играл возле нашего барака в тот день, который был самым крайним, родители были на работе. За нашим бараком была вертолетная площадка.)<br>Я еще подумал: "как низко летит. Почему? Чуть крышу нашу не задел". А спустя несколько секунд за бараком раздался сильный удар о землю. Взрыва не было. Видимо топливо закончилось. Тут смотрю, а в сторону нашего барака бегут люди. Много людей. Наша улица называлась Песчаная. Было много песка вокруг наших нескольких бараков и не то, что бегать, ходить было неудобно - ноги утопали в песке. А тут люди бежали несмотря ни на что. Оббежали наш барак и дальше, в тундру побежали. Их обогнал грузовой Зил-157, в кузове были люди. Они что-то кричали и махали руками. Зил несся, не обращая внимания на песок, ямки и кочки, так, что его сильно трясло. Я за ними. "Наверное, что-то случилось", - подумал я. Когда прибежал к месту, где толпились люди, то увидел вокруг большое количество кусков железа, куски винтов, обшивки, всякие приборы... Груда железа - салон вертолета и двигатели - лежали первыми. Дальше на сотню метров, если не больше, валялись двери, иллюминаторы, колеса... смятая кабина... Когда из-под обломков достали людей - их было двое - то открыли борт Зила и положили их в кузов ногами вперед. Тела были все в крови. Просто совершенно красные. У девушки были длинные светлые волосы - они были красными и свешивались с борта машины.<br>Позже родители сказали, что молодежь устроила себе танцы в тот день, точнее это было ближе к вечеру уже. Ну, а вертолетчик решил прокатить девушку-практикантку... Так вот и прокатились... <br>Вертолет упал там, где сейчас стоят дома по Полярной 17-18',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'Вертолет МИ-4 разбился в 1967г. Они, как сейчас говорят, бухали. Выпивки им мало показалось. И один летчик согласился лететь в п. Ныду за спиртом. И прихватил с собой девушку. Не сняв капот, они взлетели. Капот сорвало и то ли стекло кабины накрыло, то ли попал под винты. Так они и грохнулись. Справа от этого узла связи я жил, у меня была двоюродная сестра Таня 11лет. Почему то около нашего дома на земле лежал большой моток проводов подключенных к электричеству, в августе 1967г. сестра утром вышла на улицу, присела по маленькому возле этих проводов и ее убило электричеством. Может Вы помните этот случай? Говорят небызвестная личность Сорокин в то время был электриком, по его вине погибла моя сестра.',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a>'
          },
          {
            text: 'Начальником узла связи был Самарин Александр. В этом здании был бильярд. Нас пацанов иногда впускали поиграть.',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a>'
          },
          {
            text: 'Справа от этого узла связи я жил. У меня была двоюродная сестра Таня, 11 лет. Почему-то около нашего дома на земле лежал большой моток проводов, подключенных к электричеству. В августе 1967г. сестра утром вышла на улицу, присела по маленькому возле этих проводов, и ее убило электричеством. Говорят небезызвестная личность Сорокин в то время был электриком. По его вине погибла моя сестра.',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a>'
          },
        ]
      },
      {
        id: 6,
        title: '6. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.514122%2C65.535618&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/6/1.jpg'),
            source: 'https://pastvu.com/p/1234921'
          },
          {
            url: require('../assets/images/6/2.jpg'),
            source: 'https://pastvu.com/p/1201090'
          },
          {
            url: require('../assets/images/6/3.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/6/4.jpg'),
            source: 'https://pastvu.com/p/1192128'
          },
          {
            url: require('../assets/images/6/5.jpg'),
            source: 'https://pastvu.com/p/1396591'
          },
          {
            url: require('../assets/images/6/6.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/6/7.jpg'),
            source: 'https://pastvu.com/p/1416832'
          },
          {
            url: require('../assets/images/6/8.jpg'),
            source: 'https://pastvu.com/p/1417882'
          },
          {
            url: require('../assets/images/6/9.jpg'),
            source: 'https://pastvu.com/p/1417890'
          },
          {
            url: require('../assets/images/6/10.jpg'),
            source: 'https://pastvu.com/p/1417891'
          },
          {
            url: require('../assets/images/6/11.jpg'),
            source: 'https://pastvu.com/p/1417889'
          },
          {
            url: require('../assets/images/6/12.jpg'),
            source: 'https://pastvu.com/p/1417876'
          },
          {
            url: require('../assets/images/6/13.jpg'),
            source: 'https://pastvu.com/p/1542804'
          },
          {
            url: require('../assets/images/6/14.jpg'),
            source: 'https://pastvu.com/p/1631136'
          },
        ],
        comments:[
          {
          text: 'А не Чикунов Виктор слева? Всё-таки это Виктор. "Надымский Мересьев". Приехал в Надым в 1967 году. Пошёл на охоту в декабре месяце, провалился в полынью, полтора суток по снегу полз к жилью. Лишился ног. Его в Москве лечил тот же врач, что и летчика Маресьева в войну. Живчик Витька был. Балагур, весельчак. Танцевал на протезах... Такие вот люди были в Надыме.',
          author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про пятую фотографию'
          },
        ]
      },
      {
        id: 7,
        title: '7. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.514432%2C65.535178&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/7/1.jpg'),
            source: 'https://pastvu.com/p/1403327'
          },
          {
            url: require('../assets/images/7/2.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/7/3.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/7/4.jpg'),
            source: 'https://pastvu.com/p/1417889'
          },
          {
            url: require('../assets/images/7/5.jpg'),
            source: 'https://pastvu.com/p/1417876'
          },
          {
            url: require('../assets/images/7/6.jpg'),
            source: 'https://pastvu.com/p/1542804'
          },
        ],
        comments:[
          {
            text: 'Помнится, в 71 году был первый митинг. Председатель поселкового Совета Надежда Бордунова речь с кузова машины говорила. Это она назвала жителей посёлка надымчанами. А потом трибуну для митинга строили у бывшего офицерского общежития , у треста СГС. Затем трибуну ставили на Комсомольской. В первые годы помпезности не было. не было заорганизованности. Это потом начался период шествий и демонстраций. Что бы там ни говорили, а мы верили в лучшую жизнь. Разве без веры можно было бы пережить те трудности? А вера была от незнания другой жизни...',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов про 5 фотографию</a>'
          },
        ]
      },
      {
        id: 8,
        title: '8. Аванпост',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.515218%2C65.535013&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/8/1.jpg'),
            source: 'https://pastvu.com/p/1349814'
          },
          {
            url: require('../assets/images/8/2.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/8/3.jpg'),
            source: 'https://pastvu.com/p/1396595'
          },
          {
            url: require('../assets/images/8/4.jpg'),
            source: 'https://pastvu.com/p/1549428'
          },
        ]
      },
      {
        id: 9,
        title: '9. Фельдшерско-акушерский пункт',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.514740%2C65.534778&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/9/0.jpg'),
            source: 'https://pastvu.com/p/1224195'
          },
          {
            url: require('../assets/images/9/1.jpg'),
            source: 'https://pastvu.com/p/1349814'
          },
          {
            url: require('../assets/images/9/2.jpg'),
            source: 'https://pastvu.com/p/1403327'
          },
          {
            url: require('../assets/images/9/3.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/9/4.jpg'),
            source: 'https://pastvu.com/p/1396595'
          },
          {
            url: require('../assets/images/9/5.jpg'),
            source: 'https://pastvu.com/p/1385427'
          },
          {
            url: require('../assets/images/9/6.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
          {
            url: require('../assets/images/9/7.jpg'),
            source: 'https://pastvu.com/p/1192124'
          },
          {
            url: require('../assets/images/9/8.jpg'),
            source: 'https://pastvu.com/p/1542804'
          },
        ],
        comments:[
          {
            text: 'Рядом с фельдшерским пунктом два самостроя - это один мясной магазин, второй - книжный. Так-то. Хорошую книгу в Надыме было не купить. Всё сразу раскупалось. И в кино километровые очереди за билетами были.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
          {
            text: 'На фото с девушками я двоих знал. Крайняя справа - Валя Кулакова. Вторая справа - Наташа Федорова. На фото, где идет ремонт четырехклассной школы, мужчина - Анатолий Федоров, отец Наташи Федоровой. Наташа через год или два погибнет: какая-то бабушка сдалает ей криминальный аборт, и она истечет кровью.',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a> про третью фотографию'
          }
        ]
      },
      {
        id: 10,
        title: '10. Почта и библиотека',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.515093%2C65.534337&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Вход на почту находился с левого крыльца, а в библиотеку - с правого крыльца (первое место библиотеки).</p>',
        images:[
          {
            url: require('../assets/images/10/1.jpg'),
            source: 'https://pastvu.com/p/1234914'
          },
          {
            url: require('../assets/images/10/2.jpg'),
            source: 'https://pastvu.com/p/1403327'
          },
          {
            url: require('../assets/images/10/3.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/10/4.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
          {
            url: require('../assets/images/10/5.jpg'),
            source: 'https://www.etoretro.ru/pic257015.htm'
          },
          {
            url: require('../assets/images/10/6.jpg'),
            source: 'https://pastvu.com/p/1441795'
          },
          {
            url: require('../assets/images/10/7.jpg'),
            source: 'https://pastvu.com/p/1542804'
          },
        ],
        comments:[
          {
            text: 'Когда мы пришли в Новый Надым, в левой половине этого дома жил начальник нашего участка Дёмин с женой. Света тогда не было, дизель экспедиционники установили к ноябрю месяцу, так что лампой светили и свечками. Ещё фитильки делали: вместо керосина в банку солярку с солью наливали и фитилёк выводили на крышку. Коптил сильно, но светил. Вот именно в той в квартире мы и услышали про город под куполом. Из Ленинграда, из фундаментпроекта двое мужиков были. Это потом библиотеку там сделали.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'А про почту, начальником почты, не помню его фамилию, звали его Борис. Тогда им выдавали пистолеты. Так его пацанчик, пяти лет, застрелил из пистолета женщину. Боря у нас в бригаде потом работал. Мы его звали Боря-сундук.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'В первый год хоть и была там почта, но чтобы отправить деньги и получить посылку. надо было ехать в Старый Надым. Там настоящая почта была. Там самолёты приземлялись.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Чудно, Надыма на карте не было, в почтовых каталогах он не числился. Отправляли с Земли в первый год посылки, так на почте сто раз переспрашивали, где это. Но что удивительно, всё доходило. Раз мать отправила в корзине яблоки, обшила верх мешковиной,- всё дошло за неделю. А то отправила кастрюлю с творогом, сверху залила маслом - все в целости получили. Да, та почта была не чета теперешней почты.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'И вот что странно, по всем домам и баракам была проведена проводка электроосвещения по роликам, в оплётке, и лампочки висели. И розетки радио были. Всё это осталось от 501 стройки. Потом Блинов радио настроил через ЛТУ. И свет в ноябре был. Что удивительно, лампочки висели с 50-х годов и нам потом светили. Умели делать люди качественно.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'На фото в центре Милка Куртекова. Справа Валя Кулакова. Остальных не помню имен.',
            author: '<a href="https://vk.com/id378694748" target="_blank">Константин Иванов</a> про вторую фотографию'
          },
          {
            text: 'Знакомые лица. Куртекова сестра Виктора Чикунова - "надымского Мересьева". В этом доме с правой стороны была почта, с левой- библиотека.. В следующем доме была амбулатория. А причёски какие" Бывало поллитровую банку закатывали в волосы для пышности. Тут уже вся земля перепахана колёсами машин, а первоначально мох, ягель. брусничник,- чисто и сухо в посёлке было. И тихо.<br>Помнится, как впервые пешочком в августе 1966 года шли через парк от железнодорожного вокзала. именно на этот дом направление держали.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'На охоте за взлеткой [Виктор Чикунов] провалился в протоку. Был морозец. Его нашли, он полз, как Мересьев. Ноги в Москве удалили до колен, отморозил.',
            author: '<a href="https://vk.com/id378694748" target="_blank">Константин Иванов </a>'
          },
          {
            text: 'В начале 1971г. я жил на квартире у Натальи Трофименко, у которой был сын Витя. Их дом был через 2 дома от почты. На почте работала женщина, фамилию я забыл. У нее был маленький сын, лет 5 возрастом. Пенсионеры получали там пенсию. Старуха-оленеводка приехала с тундры плучать пенсию. Работник почты открыла сейф, взяла деньги и стала считать их. В это время ее маленький сын подошел к сейфу, взял там лежащий пистолет, прицелился в старуху и выстрелил, убил ее наповал. Потом труп этой старухи целый месяц лежал в сарае замороженный.',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a>'
          },
          {
            text: 'Почта долго была в бараке. Потом её перенесли в подвал общежития (Полярная 1). Тогда (в 1974году) много в подвале организаций было. Например, ОРС 1.  А жо того люди жили в этом подвале. Комнатушки, отделенные друг от друга совсем тонкими перегородками. Готовили на самодельных электроплитках, никаких удобств.',
            author: '<a href="https://vk.com/id562641092" target="_blank">Татьяна Ражева</a>'
          },
          {
            text: 'Это скорее "вокруг ямы". Видны ещё остатки "Дворянского гнезда"- вагон-городка начальства (около Теремка), видны два магазина - Книги и Мясной (детище В.А. Атрощенко).<br>Вообще, глядя на это фото, он вспоминается. Все вагон-городки, подвоз воды, ремонт, электричество - за всё он отвечал, начальник 4 участка СГС (потом ХРСУ). Он был узником фашистских лагерей, страшный книголюб. Он был первым покупателем во всех книжных магазинах города.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про шестую фотографию'
          },
          {
            text: 'Кстати, примерно в этом месте слева, где будочка, во времена 501 стройки было овощехранилище. Развалины его застал в 66 году. И по этому ряду стояла большая пекарня, её уже не было в моё время, но лежала в парке гора ящиков и груда обручей от бочек. И сейф железный чугунный там лежал.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про шестую фотографию'
          },
          {
            text: 'Дом, в котором жил в 1966 году начальник нашего участка Дёмин. Именно в этом доме в октябре-ноябре мы услышали от двух проектировщиков из ленинградского фундаментпроекта о Надыме - городе под куполом. Потом в этом доме была почта и первая библиотека. В соседнем доме при экспедиции была амбулатория.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 11,
        title: '11. Клуб',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqYRp3B" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>При 501-й стройке здание использовалось в качестве столовой для вольнонаёмных. При экспедиции здесь был организован клуб, который просуществовал до 1975 года. Справа находилась библиотека (это было ее второе место).</p>',
        images:[
          {
            url: require('../assets/images/11/1.jpg'),
            source: 'https://www.etoretro.ru/pic256794.htm'
          },
          {
            url: require('../assets/images/11/2.jpg'),
            source: 'https://pastvu.com/p/1372457'
          },
          {
            url: require('../assets/images/11/3.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ],
        comments:[
          {
            text: 'Столовая в посёлке, которую мы переделали под клуб, работала круглосуточно. Хлеб на столах лежал вольно. И это при том, что в стране было голодновато.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Когда в Новый Надым перебралась Казымская партия глубокого бурения, чтобы скрасить досуг кино крутили в деревянной школе. Где-то в конце сентября 1966 года начали переделывать зэковскую столовую под клуб. В большом зале часть пола опустили, чтобы сцену оформить. Печку отремонтировали. Она плохо грела, холодно было в помещении. По субботам танцы устраивались. Так женщины экспедиции с утра все ходили в бигудях, предвкушая радость. На танцы и старые ходили, и молодые. Одни посудачить, другие, чтобы встряхнуться. Шкаф с книгами стоял - выдавали читать. Правая половина здания была забита. Там дядя Коля, зэк, лошадей держал. Правую половину очистили от навоза только в 72 году - библиотеку туда перевели.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Кино крутил киномеханик Саша. Действо начиналось так, сначала он всех отматерит в зале, а потом начинал кино крутить. Фильмы привозил из Старого Надыма. Собака у него была огромная - Боцман звалась. Вот он её запрягал в санки и по зимнику, тогда он был мимо кедровой рощи, мимо кладбища, через протоки - где-то чуть больше 4-х километров до Старого Надыма, ехал за фильмом. Ну и крутил одно и то же неделями.<br>Первый концерт был, на 7 ноября. Хор, огонёк с КВН-ом. На Новый 1967 год был полноценный праздник.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Кто только в этом клубе не выступал в начале семидесятых. Валом валили московские артисты на надымскую землю. Модно было. Как же, подышать можно было воздухом первопроходимства. Помнится, Сличенко большой концерт дал, на бис долго пел.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Мы в этом клубе вступали в пионеры и смотрели кино. Вроде, 120 мест было в том клубе. 12 рядов по 10 мест или наоборот. Кому места не хватало, чтобы кино посмотреть, давали билет без места. Сидели на полу возле сцены или вдоль рядов... к концу фильма дышать было нечем... Очень любили в кино ходить. Билеты продавала Мила, старшая сестра Олега Мокроусова. Он пропал во время рыбалки в 80-х. Они жили в самом первом бараке возле ЖД, и вход в их квартиру был самым первым от дороги.',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
        ]
      },
      {
        id: 13,
        title: '13. Кузнеца и мастерская',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.512424%2C65.535064&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/13/1.jpg'),
            source: 'https://www.etoretro.ru/pic256794.htm'
          },
        ],
        comments:[
          {
            text: 'В этом помещение было РММ [Ремонтомехмастерские]. В кузнице работал д.Гриша. Первый начальник - А.Дранной. Токарь - Алексей.',
            author: '<a href="https://vk.com/id378694748" target="_blank">Константин Иванов</a>'
          },
          {
            text: 'Кузницу при экспедиции сделали. Рядом циркулярку поставили. Дядя Ваня, зэк, бывший, во главе бригады из четырёх женщин, дрова пилил для клуба, бани, пекарни и конторы. А мы дровишки оттуда потаскивали. Это в этом учреждении машину переделали. поставили её на рельсы, вместо паровоза.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 14,
        title: '14. Банк',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.512140%2C65.535425&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>При экспедиции здесь была баня. Затем открыли банк.</p>',
        images:[
          {
            url: require('../assets/images/14/1.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/14/2.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ],
        comments:[
          {
            text: 'Баньщицей была тетя Наташа Трофименко. В раздевалке стоял квадратный огромный бак с холодной водой. Пока тетя Наташа не видела, мы пацаны после парилки ныряли в этот бак и плескались в нем.',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a>'
          },
          {
            text: 'Да. эту баню при экспедиции сотворили. Тетя Наташа на саночках возила воду от колодца, заполняла бочки. Печку сложили умельцы, - она толком не грела. Зимой, бывало, моешься, голова скрыта в пару, а на полу лёд. Дрова для бани пилил бывший зэк дядя Ваня с женской командой на циркулярке. Большая чёрная борода у дяди Вани была, мы думали, что ему далеко за 60, а когда ему разрешили уехать, срок кончился, сбрил он её - мужику не больше сорока лет было. В цивильное время первый надымский банк в том здании сделали.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 15,
        title: '15. Столовая',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.511895%2C65.535800&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/15/1.jpg'),
            source: 'https://pastvu.com/p/1327371'
          },
          {
            url: require('../assets/images/15/2.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
        ]
      },
      {
        id: 16,
        title: '16. ОРС',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.511337%2C65.536353&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/16/0.jpg'),
            source: 'https://pastvu.com/p/1622084'
          },
          {
            url: require('../assets/images/16/1.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/16/2.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ]
      },
      {
        id: 19,
        title: '19. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&amp;source=constructor" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/19/0.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/19/1.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ]
      },
      {
        id: 20,
        title: '20. КМСМУ-3',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.511361%2C65.535128&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/20/0.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/20/1.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
          {
            url: require('../assets/images/20/2.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ]
      },
      {
        id: 22,
        title: '22. Генеральский домик',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmqQbDPB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/22/1.jpg'),
            source: 'https://pastvu.com/p/1358915'
          },
          {
            url: require('../assets/images/22/2.jpg'),
            source: 'https://pastvu.com/p/1168139'
          },
          {
            url: require('../assets/images/22/3.jpg'),
            source: 'https://pastvu.com/p/1385691'
          },
          {
            url: require('../assets/images/22/4.jpg'),
            source: 'https://pastvu.com/p/1344574'
          },
          {
            url: require('../assets/images/22/5.jpg'),
            source: 'https://pastvu.com/p/1349814'
          },
          {
            url: require('../assets/images/22/6.jpg'),
            source: 'https://pastvu.com/p/1396595'
          },
          {
            url: require('../assets/images/22/7.jpg'),
            source: 'https://pastvu.com/p/1220813'
          },
          {
            url: require('../assets/images/22/8.jpg'),
            source: 'https://pastvu.com/p/1549428'
          },
          {
            url: require('../assets/images/22/9.jpg'),
            source: 'https://pastvu.com/p/1192128'
          },
          {
            url: require('../assets/images/22/10.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
          {
            url: require('../assets/images/22/11.jpg'),
            source: 'https://pastvu.com/p/1219754'
          },
          {
            url: require('../assets/images/22/12.jpg'),
            source: 'https://pastvu.com/p/1080209'
          },
          {
            url: require('../assets/images/22/13.jpg'),
            source: 'https://pastvu.com/p/1136788'
          },
          {
            url: require('../assets/images/22/14.jpg'),
            source: 'https://pastvu.com/p/1430228'
          },
          {
            url: require('../assets/images/22/15.jpg'),
            source: 'https://pastvu.com/p/1449232'
          },
          {
            url: require('../assets/images/22/16.jpg'),
            source: 'https://pastvu.com/p/1552017'
          },
          {
            url: require('../assets/images/22/17.jpg'),
            source: 'https://pastvu.com/p/1631136'
          },
          {
            url: require('../assets/images/22/18.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
          {
            url: require('../assets/images/22/19.jpg'),
            source: 'https://pastvu.com/p/1715637'
          },
        ],
        comments:[
          {
            text: 'В этом доме в начале 70-х располагался штаб стройки во главе с Ю.П. Баталиным. А при 501 стройке жил начальник строительства. Здесь жил и уполномоченный министра Васильев А.М. Хотели из этого дома сделать музей стройки, но... хотение так и осталось хотением. Сожгли...',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Как говорили оставшиеся после 501 стройки жители, в этом доме жил начальник стройки. В начале 70-х в одной половине дома располагался штаб стройки города, в другой половине жил Ю. Баталин, потом там жил Уполномоченный министра - Васильев. Строился город, домик перестал быть нужным. Сколько было разговора, сделать из него музей 501 стройки. Он долго стоял заброшенным, пока его не спалили бомжи. Не берегут в Надыме свою историю.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'В 1967г. в этом доме проживала семья Трухиных. Я заходил к другу Михаилу Трухину в гости. В начале 70-х годов в этом доме висела вывеска, что здесь находится Дирекция. А что за дирекция, я не помню. Еще вроде бы за словом "Дирекция" находилось слово "Проектирования". Справа находится барак в нем жила моя тетя.',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a>'
          },
          {
            text: 'Это был "Генеральский дом". В 60-е мы его так звали. Среди всех бараков поселка, он был самым добротным. В нем, походе, жил комендант лагпункта. В 70-е там была гостиница.',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'Здесь на кривой сосне висел кусок рельсы, в который били, чтобы созвать народ... в далекие 50-е...',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'В этом домике жил Василий Данилович Чернышев с семьей.',
            author: '<a href="https://vk.com/id378694748" target="_blank">Константин Иванов</a>'
          },
          {
            text: '"Генеральский" домик, в нём жил начальник 9 отделения 501 стройки, при мне жил помбур Казымской партии глубокого бурения с семьёй - Трухин.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 23,
        title: '23. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.510985%2C65.534538&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/23/1.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
          {
            url: require('../assets/images/23/2.jpg'),
          },
          {
            url: require('../assets/images/23/3.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ],
        comments:[
          {
            text: 'Тётя Юля Мухина - хлеб пекла в посёлке Новый Надым в семидесятые годы. Я её помню в 66 году. 40 буханок за один замес. Всё руками. Всё сама. И воды наносить из колодца, и дров нарубить. Великая Труженица.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
          {
            text: 'Память имеет одну особенность,- прошлое до мельчайших подробностей вспоминается. Запах того хлеба, белого, не черствеющего, помнится. Выдавали буханку на двоих. Квас она постоянно ставила. Белёные стены. присадистая печь в половину комнаты... Что касается мельницы - не знаю. Муку и при 501 стройки в мешках завозили. Кстати, побегов на 501 стройки почти не было: ненцы ловили беглецов,- мешок муки давали за левое отрезанное и представленное ухо. Почему именно левое ухо - не знаю. Так рассказывали заключённые. Меня поражало, как такая маленькая женщина, управляется около печи!',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
          {
            text: 'Когда выпал кирпич из свода, а печника не могли найти, хлеб начали возить из Ныды и Старого Надыма, там на фактории тоже пекарня была. Но тот хлеб никак нельзя было сравнить с тёти Юлиным. С фактории хлеб с песком был.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
        ]
      },
      {
        id: 24,
        title: '24. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&amp;source=constructor" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/24/1.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ]
      },
      {
        id: 25,
        title: '25. Трест СГС',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.510019%2C65.535344&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description:'<p>В здании размещались трест СГС, райком партии и общежитие офицеров. А с обратной стороны был экспедиционный магазин.</p>',
        images:[
          {
            url: require('../assets/images/25/1.jpg'),
            source: 'https://pastvu.com/p/1358914'
          },
          {
            url: require('../assets/images/25/2.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
          {
            url: require('../assets/images/25/3.jpg'),
            source: 'https://pastvu.com/p/1327371'
          },
          {
            url: require('../assets/images/25/4.jpg'),
            source: 'https://pastvu.com/p/1415534'
          },
          {
            url: require('../assets/images/25/5.jpg'),
            source: 'https://pastvu.com/p/1631123'
          },
          {
            url: require('../assets/images/25/6.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ],
        comments:[
          {
            text: 'Да, на фотографиях бывшее офицерское общежитие охраны 501 стройки. Потом трест Севергазстрой - управляющий Василий Чернышёв, потом Виталий Зайченко. В 1972 году с кузова машины у крыльца этого здания было объявлено, что Надым получил статус города. В городе был всего ОДИН пятиэтажный дом и тысячи три вагончиков и балков.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Кстати, в экспедиционном магазине работала Валя Анкушева. Одни банки в том магазине были да всё сухое - картошка, морковка, свёкла, лук. Масло в двухкилограммовых железных банках. Если привозили яблоки, то в первую очередь давали тем, у кого дети. Помидоры ребятёшки не ели, выплёвывали. А всё одно весёлой и интересной вспоминается та жизнь.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: '49 лет назад,- хорошо помнится тот день [9 марта 1972 года посёлок Надым получил статус города]. Площадь перед трестом "Севергазстрой". Тихо, ветра нет. И мороз небольшой. Площадь огорожена низким заборчиком. Подогнали к крыльцу машину, откинули борт. Поднялись на эту трибуну руководители и зачитали постановление. Никакой шумихи, никаких фейерверков. В городе был всего один дом по Снежной улице, строилась 1 школа. Тысячи три вагонов и балков. Главным в те дни было закончить первую нитку газопровода Надым-Пунга. "Севертрубопроводстрой" был королём. Шла укладка трубы в траншею. Не хватало пригрузов. Все организации были подключены: на мало-мальски пригодных площадках отливали их. Рабочим был город. Без мишуры и показухи. И руководители были подстать - Майданов, Агапов, Горячий, Струбцов... Атрощенко... Уполномоченный министра Васильев...<br>Уникальность Надыма в том, что его начали строить не имея генерального плана. Специально был издан приказ(единственный, только для Надыма) желающих ехать на стройку погранцов демобилизовали раньше на три месяца.Людей не хватало.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 26,
        title: '26. Пекарня и хоз.магазин',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509959%2C65.535828&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/26/0.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/26/1.jpg'),
            source: 'https://pastvu.com/p/1136853'
          },
          {
            url: require('../assets/images/26/2.jpg'),
            source: 'https://pastvu.com/p/1415534'
          },
          {
            url: require('../assets/images/26/3.jpg'),
            source: 'https://pastvu.com/p/1631123'
          },
          {
            url: require('../assets/images/26/4.jpg'),
            source: 'https://pastvu.com/p/1705538'
          },
        ]
      },
      {
        id: 27,
        title: '27. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509650%2C65.536204&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/27/0.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/27/1.jpg'),
            source: 'https://pastvu.com/p/1136853'
          },
          {
            url: require('../assets/images/27/2.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
          {
            url: require('../assets/images/27/3.jpg'),
            source: 'https://pastvu.com/p/1358914'
          },
          {
            url: require('../assets/images/27/4.jpg'),
            source: 'https://www.etoretro.ru/pic256794.htm'
          },
          {
            url: require('../assets/images/27/5.jpg'),
            source: 'https://pastvu.com/p/1416791'
          },
        ]
      },
      {
        id: 28,
        title: '28. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509353%2C65.536616&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/28/0.jpg'),
            source: 'https://pastvu.com/p/1704757'
          },
          {
            url: require('../assets/images/28/1.jpg'),
            source: 'https://pastvu.com/p/1416805'
          },
          {
            url: require('../assets/images/28/2.jpg'),
            source: 'https://pastvu.com/p/1399139'
          },
          {
            url: require('../assets/images/28/3.jpg'),
            source: 'https://pastvu.com/p/1446040'
          },
          {
            url: require('../assets/images/28/4.jpg'),
            source: 'https://pastvu.com/p/1720650'
          },
          {
            url: require('../assets/images/28/5.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
        ]
      },
      {
        id: 29,
        title: '29. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509088%2C65.537001&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/29/1.jpg'),
            source: 'https://pastvu.com/p/1446040'
          },
          {
            url: require('../assets/images/29/2.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
        ]
      },
      {
        id: 31,
        title: '31. Жилой дом, экспедиционное общежитие',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.508555%2C65.536127&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/31/0.jpg'),
            source: 'https://pastvu.com/p/1416805'
          },
          {
            url: require('../assets/images/31/1.jpg'),
            source: 'https://pastvu.com/p/1399139'
          },
          {
            url: require('../assets/images/31/2.jpg'),
            source: 'https://pastvu.com/p/1136853'
          },
          {
            url: require('../assets/images/31/3.jpg'),
            source: 'https://pastvu.com/p/1136777'
          },
          {
            url: require('../assets/images/31/4.jpg'),
            source: 'https://pastvu.com/p/1416791'
          },
        ]
      },
      {
        id: 32,
        title: '32. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmrCr2OB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/32/0.jpg'),
            source: 'https://pastvu.com/p/1416805'
          },
          {
            url: require('../assets/images/32/1.jpg'),
            source: 'https://pastvu.com/p/1416791'
          },
          {
            url: require('../assets/images/32/2.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ]
      },
      {
        id: 33,
        title: '33. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmrCvX8D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/33/0.jpg'),
            source: 'https://pastvu.com/p/1416805'
          },
          {
            url: require('../assets/images/33/1.jpg'),
            source: 'https://pastvu.com/p/1416791'
          },
        ]
      },
      {
        id: 34,
        title: '34. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&amp;source=constructor" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/34/1.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ]
      },
      {
        id: 35,
        title: '35. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&amp;source=constructor" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/35/1.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ]
      },
      {
        id: 36,
        title: '36. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509447%2C65.533934&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/36/1.jpg'),
            source: 'https://pastvu.com/p/1359100'
          },
        ],
        comments:[
          {
            text: 'Ностальгия. Если память не обманывает, то в этом бараке при экспедиции жила семья Анкушевых. В том бараке, правее, где виден белый угол стены, начинал надымскую жизнь я. На фото время бурного строительства города. ещё нет ни метра бетонного тротуара. Чистейший песок. Нет ни одного более-менее современного магазина. Балки и вагоны и... бараки.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Здесь в бараке жили Анкушевы и Алабышевы. Кстати, свадьба Алабышевых была первой, и Катерина первой родила нового жителя посёлка Новый Надым. В этом же бараке жил и киномеханик Саша с Фаей, страшный матерщинник. У них была огромная собака - Боцман, на которой Саша привозил из Старого Надыма киноплёнки, крутил кино в деревянной школе, потом в клубе, который мы перестроили из зэковской столовой.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 37,
        title: '37. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509973%2C65.534331&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/37/1.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
        ],
        comments:[
          {
            text: 'Напротив моего барака видно общежитие рабочих Ямальского строительного управления по обустройству разведочных площадей на нефть и газ - такое было полное наименование нашей конторы.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 38,
        title: '38. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.510339%2C65.534072&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Здесь жили Мартыновы. А с торца жил дядя Коля (зэк).</p>',
        images:[
          {
            url: require('../assets/images/38/1.jpg'),
            source: 'https://pastvu.com/p/1234193'
          },
        ],
        comments: [
          {
            text: 'Барак, в котором я начинал надымскую жизнь. Третья квартира-клетушка. Три метра в ширину, пять в длину. В первой квартире жил дядя Ваня - зэк-поселенец 501 стройки. Мы его считали стариком, но когда ему было позволено в семидесятые годы выехать, он сбрил бороду, то стал выглядеть лет на сорок.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 39,
        title: '39. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmjVRdoD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>',
        description: '<p>Жили дядя Коля с тётей Фросей, которую посадили на 8 лет за зерно в кармане. У дяди Коли была лошадь Надым.</p>',
        images:[
          {
            url: require('../assets/images/39/1.jpg'),
            source: 'https://pastvu.com/p/1136854'
          },
          {
            url: require('../assets/images/39/2.jpg'),
            source: 'https://pastvu.com/p/1705538'
          },
        ], 
        comments: [
          {
            text: 'Рядом с этим бараком располагался барак, в котором жил дядя Коля, тоже зэк-поселенец. У него была корова, две лошади. Одну звали "Надым". Жена его, тетя Фрося, была сослана на 501 стройку из Молдавии в восемнадцать лет - украла карман зерна для голодных сестёр. Дали ей 8 лет. Работала путеукладчицей. Таскала рельсы и шпалы.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Кстати, именно дядя Коля два года топил печь лыжами, которые свезли в склад со всего девятого отделения строительства после закрытия-консервации строительства "сталинской железной дороги". Столовую, правую её часть, он использовал под конюшню. В 72 году комсомольцы выскребли оттуда навоз и библиотеку там сотворили.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 40,
        title: '40. Школа',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.507272%2C65.534959&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>При экспедиции здесь размещалась школа. После того, как школу перенесли в нынешний Дом молодёжи, тут разместили больницу.</p>',
        images:[
          {
            url: require('../assets/images/40/0.jpg'),
            source: 'https://www.etoretro.ru/pic256848.htm'
          },
          {
            url: require('../assets/images/40/1.jpg'),
            source: 'https://pastvu.com/p/1406608'
          },
          {
            url: require('../assets/images/40/2.jpg'),
            source: 'https://pastvu.com/p/1704756'
          },
        ],
        comments:[
          {
            text: 'Первая школа Надыма. Два маленьких кабинета. Печка. Четыре учительницы. 12 учеников с 1-го по 6-й классы... Она была школой и с 1949-го по 1953-й...',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'В Надыме была начальная школа. С 8-го класса всех отправили в Ныду, в школу-интернат, они там учились. На каникулы приезжали домой к родителям...',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'На [первом] фото стоит и ее первая учитель - Алла Ефимовна Яковлева. Она учила нас в этой школе с 1966 по 1971. Их первых приехало 4. Но трое уехали на следующий год. Хотели романтики, а тут север - все гораздо серьезнее оказалось.',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'И в школе я помню только 2 учебных кабинета и длинный коридор. Между кабинетами было пространство метра 3 и выход на другую сторону в дверь. В школе были печки, чтобы отапливать. Сторожиха приходила в 6 утра, чтобы их затопить. Иначе заниматься было невозможно - все за ночь замерзало. Мы чернильницы ставили на печки, чтобы они оттаяли. На партах посередине были углубления, куда ставили чернильницы. Была обычная школьная доска в классе, глобус, пара истрепанных географических карт...',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'Поесть приносили с собой и на переменах садились возле печки, выкладывали в середину, у кого что есть - делились и так обедали. Почему на полу? Потому что столов не было, да и поставить их было некуда. А парты были наклонные, на них есть неудобно. В коридоре у входа в школу на табуретке стоял бак с водой, накрытый крышкой. На крышке была эмалированная кружка. Из бака пили воду. Воду приносили из колодца. Туалет был на улице за школой. Обычный деревянный М/Ж...',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'Еще те первые учителя приносили свои одеяла, чтобы занавесить окна и стены в классе, потому что в них сильно дуло - было много дыр, а тряпок заткнуть дыры не хватало. Позже нам со склада списали старые фуфайки, мы их разодрали и законопатили дыры. Снаружи стены школы мы старались повыше засыпать песком, а позже снегом. И очень радовались, когда заметало снегом по крышу, потому что внутри становилось теплее.',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'Училось нас всего первых учеников человек 12 - все разных возрастов. От 1-го до 6 класса. Была одна девочка 8-классница. Она была крупная для своего возраста и в школу почти не ходила. В 1967 летом она вышла замуж и уехала...',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'Позже нам выдали чайник - зеленый, эмалированный. Мы его на печке кипятили. Заварку приносили с собой. Заваривали прямо в эмалированных кружках и так пили на переменах.',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'Каждый день назначались дежурные. Они носили воду из колодца, который был неподалеку, строгали лучинки для растопки печки, мыли доску, подметали...',
            author: '<a href="https://vk.com/nadym7" target="_blank">Андрей Мартынов</a>'
          },
          {
            text: 'На фото знаю только двоих, крайняя слева - моя мама, мужчина на фото - Федоров Анатолиий, он давно уже умер. ',
            author: '<a href="https://vk.com/id579497158" target="_blank">Виталий Филиппов</a>'
          },
          {
            text: 'Удивительная штука - память. Вчерашнее с возрастом забывается. а прошлое вылезает, бог знает, откуда. Смотрю на фото и сразу представляю вот эту женщину. что с собакой, которая сидит на крыльце деревянной. маленькой школы. Вначале в той школе всего 15 учеников было, когда в Новый Надым перебралась экспедиция. Я не помню её фамилию. мы звали её Зоя-трактор. Мощная женщина была. Когда переделывали зэковскую столовую под клуб, который прослужил городу до 75 года, женщинам пришлось штукатурить стены и потолки - залепливать дыры. Ничего ведь не было. Глину оббивали со старых щитов лагеря за железкой и замачивали. И женщины ладошками, мастерком не получалось, замазывали дыры. Потом гордо ходили и показывали, где чьи пальцы остались на потолке.<br>А в школе киномеханик Саша кино показывал. Смотреть приходили со своими табуретками. Кино привозил он из Старого Надыма. Там аэродром был и почта.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
        ]
      },
      {
        id: 43,
        title: '43. Склад',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.519481%2C65.536964&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/43/1.jpg'),
            source: 'https://pastvu.com/p/1403979'
          },
        ],
        comments:[
          {
            text: 'Да, уж... Снова история. Помню эти склады. От основной линии ж-д к ним отходил тупичок. В последний склад при консервации 501 стройки свозили лыжи. Он забит был лыжами до крыши. Дядя Коля, бывший зэк, два года ими печь топил. Потом сено там хранил для лошадей, одну звали "Надым". И корова у него была. И картошку тогда жители сажали возле бараков. А на такой дрезине с прицепом Сорокин, бывший старший надзиратель лагеря, возил продукты из Салехарда.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 44,
        title: '44. Склад',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.519391%2C65.537200&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/44/1.jpg'),
            source: 'https://pastvu.com/p/1403979'
          },
        ],
        comments:[
          {
            text: 'Да, уж... Снова история. Помню эти склады. От основной линии ж-д к ним отходил тупичок. В первом складе при экспедиции жена, Мартынова Альбина Афанасьевна, кладовщиком работала. А на такой дрезине с прицепом Сорокин, бывший старший надзиратель лагеря, возил продукты из Салехарда.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: '45m',
        title: '45М. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.512866%2C65.535893&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Сгорел в 1966 при экспедиции.</p>',
        images:[
          {
            url: require('../assets/images/45m/1.jpg'),
            source: 'https://pastvu.com/p/1327371'
          },
        ]
      },
      {
        id: '60m',
        title: '60М. Железнодорожный вокзал',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.537571%2C65.530241&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>На пятачке перед домом №41 по ул. Зверева находился типовой дом, который использовали в качестве железнодорожного вокзала. Сам вокзал построить не успели. Но в книге Вадима Гриценко "История "мертвой дороги" можно найти его проект.</p><p>В конце 1960-х годов здание было переделано под диспетчерский пункт находящегося недалеко аэродрома.</p>',
        images:[
          {
            url: require('../assets/images/60m/1.jpg'),
            source: 'https://www.etoretro.ru/pic256801.htm'
          },
          {
            url: require('../assets/images/60m/2.jpg'),
          },
        ],
        comments:[
          {
            text: 'Вспомнилось, как мы пятером шли по железке в посёлок Новый Надым на работу. Переползли по качающимся шпалам через промоину. Слева вдоль ж-д по болоту шла лежнёвка из брёвен, потом узнали, что по ней гоняли этапы, справа торчали покосившиеся столбы телефонной линии. Шли больше часа. Потом показался семафор. Потом вышли на песчаную проплешину среди небольших холмов. Справа стоял домик. Железная вывеска "Надым". Дверь распахнута. Зашли. Небольшой зал ожидания. Окошечко кассы раскрыто. Скамейка широкая у стены, залоснившаяся. И тишина. Во вторую половину тоже открыта была дверь.<br>Станция была небольшая. Основная колея уходила прямо. Был путь - ответвление к вокзалу, были два запасных пути справа. Было ответвление в карьер. Справа, за вокзалом был установлен ряд щитов снегозадержания. Мы их потом использовали для ремонта клуба. Слева, вдоль железнодорожного пути тянулось низкое ограждение из колючей проволоки. На берегу видимого от вокзала озера торчал ряд печных труб. Сквозь, поверх деревьев, вдали виднелись крыши бараков. Мы и пошли в ту сторону. <br>Повторюсь, местность была холмистая. Это потом при экспедиции разровняли полосу для посадки самолётов.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Вокзал был примерно таким, как и здание ЛТУ, с двумя входами. На правом торце висела жестяная вывеска "Надым". В половине справа был зал ожидания. Слева располагались технические службы. В зале ожидания были две большие скамьи, касса. Станция - четыре железнодорожных колеи и ответвление в песчаный карьер в направлении УМ-2. Со стороны болот стояли снегозащитные щиты. Со стороны озера тянулась колючка.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 69,
        title: '69. Аэровокзал',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.522736%2C65.533433&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Освоение Тюменского Севера было бы невозможным без авиации. Поэтому уже в 1966 году в Новом Надыме начинают накатывать первую взлетно-посадочную полосу. Она шла параллельно <a href="https://newnadym.github.io/#/pgd">железнодорожной ветке</a>.</p><p>Здание <a href="https://newnadym.github.io/#/p60m">железнодорожного вокзала</a> было перестроено под диспетчерский пункт.</p> <p>В парке между детскими садами "Ёлочка" и "Медвежонок" был построен аэровокзал.</p> <p>В 1969 году было создано "Надымское авиапредприятие". Официально временный аэродром был принят в эксплуатацию в 1970 году. Постоянный аэропорт в нескольких км от города Надыма был построен в 1973 году.</p>',
        images:[
          {
            url: require('../assets/images/69/1.jpg'),
            source: 'https://pastvu.com/p/1406814'
          },
        ],
        comments:[
          {
            text: 'Аэродрома в посёлке Новый Надым не было. По необходимости садился АН-2В на озере, там и причальные мостки были. Аэродром был в Старом Надыме - военный аэродром подскока. В 1943 году Совет Обороны принял постановление, Старый Надым был определён, как место высылки лиц сотрудничавших с немцами и тех, кто проживал в оккупации. На аэродром в Старом Надыме могли сесть АН-2 и ЛИ-2. Мы туда и прилетели, потом на почтовом катере на 107 переплыли, потом в Новый Надым пришли.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Где-то в середине сентября 1966 года мы разобрали два запасных пути ж-д. Дров у нас не было. ДЭТ-250 перевернул колею, собрал ножом шпалы,- вот и дрова. А потом экспедиционные бульдозеры начали ровнять местность. Холмистая она была. Трогать основной путь было запрещено. Вдоль него были выставлены бочки. Зима в тот год началась рано. В октябре всё замёрзло. Кстати, я никогда больше не видел такого перелёта птиц, как в первую неделю октября. Тысячи птиц летели днём и ночью. Утки, лебеди, гуси. Стоял в небе сплошной стон.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Сначала полоса аэродрома была короткой. Всё. что теперь за бульваром Стрижова, всё дальше было болото. Но и той полосы хватало. Первым прилетел АН-2. Его встречать пришли чуть ли не все. Зимой и более мощные самолёты начали летать.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Первый начальник Аэропорта был Александр Саган. После него Виктор Горовенко.',
            author: '<a href="https://vk.com/id378694748" target="_blank">Константин Иванов</a>'
          },
          {
            text: 'В 1971 году в аэропорт устроились два друга Аристов Валерий и Ошев Владимир (папа). Они были напарниками на машине обогрева самолётов. И ещё в то время начальником аэропорта был Ошкин, потом его перевели в Берёзово.',
            author: '<a href="id192365022" target="_blank">Татьяна Савкина</a>'
            },
          {
            text: 'До Тюмени за семь часов добирались с двумя посадками. 35 рублей билет туда стоил. Билет в Салехард стоил 14 рублей. В Москву - 45 руб, тоже с двумя посадками. Много всего с этим аэродромом связано.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'В начале 70-х полоса была вполне нормальная. Зимой даже АН-22 прилетал, Марина Попович пилотом была. Как-то АН-26 аварийно сел. Лыжу сломал. Долго стоял в конце полосы.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'В аэровокзале, в парке, собранном из вагончиков, летом было засилье мошки и комаров. Съедали. Зимой жуткая холодина была. Печка в углу не нагревала. Потом котельную пристроили.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Два раза Косыгин на старый аэродром прилетал. У меня остался кусок ковровой дорожки, по которой он шёл в 74 году. Атрощенко отрезал.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Тогда вокруг аэропорта никакой ограды не было. Ходили через взлётную полосу. Когда первый раз прилетел Косыгин, народ столпился за взлёткой, а как только министр вышел с самолёта, - все бросились к нему. Обступили. Простым мужиком был Косыгин. В фетровых ботинках, пальто, пирожок шапка на голове. Свите его сразу полушубки и унты выделили. А он так и ходил в своём. Сразу на гостя посыпались вопросы и про спецовку, и про вагоны, которые промерзают, и что жильё не строится толком. И про продукты. И ведь многое решилось. Уже на следующий год спецовкой стал костюм лесоруба, с воротником, с поддевкой. И полушубки стали выдавать. А то ходили в зэковских телогрейках.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'В те первые годы Витя-тётинаташин, как мы его звали, был чуть ли не главным лицом на аэродроме. Он переболел менингитом, красивый парень был, но с трёхлетним развитием. Он вечно ходил в пилотской фуражке и с жезлом. Так вот он, когда перед вагончиками выруливал АН-2, выскочил и начал руками махать. Пилот и кувыркнул самолёт, уткнул винт в землю. С неделю тот самолёт так и стоял кверху хвостом. Витю изгнали навечно с территории.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Витя, как и его отец - дядя Степан. физически сильными были. Тот же Витя таскал летом за собой прицеп от дрезины по песку. Мог разобрать любой двигатель, свободно сбивал подшипники с осей, разбирал часы. Заядлый был рыбак. В любой луже мог что-то поймать. У них в доме бочка была с землёй. так Витя сажал в неё зёрнышки яблок, всё, что попадало в руки, и всё всходило.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 'a',
        title: 'А. Метеостанция',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.518501%2C65.535537&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/pa/1.jpg'),
            source: 'https://pastvu.com/p/1234914'
          },
        ]
      },
      {
        id: 'gd',
        title: 'Железная дорога',
        mapUrl: '',
        description: '<p>Железная дорога была проложена через Надым в 1949 года. Со стороны Салехарда она шла в районе ул. Ямальской. В районе круговой развязки приближалась к ул. Зверева. И дальше шла вдоль ул. Зверева. В районе перекрестка улиц Зверева и Рыжкова стоял семафор.</p><p>Мост через реку Надым был построен к декабрю 1949 года. В его основании были деревянные свайные опоры, по которым были уложены металлические 11-метровые пакеты.</p><p>С закрытием 501-й стройки железнодорожное движение было остановлено. Были надежды на восстановление железнодорожного полотна. Но этого так и не случилось.</p>',
        images:[
          {
            url: require('../assets/images/pgd/0.jpg'),
            source: 'https://pastvu.com/p/1622291'
          },
          {
            url: require('../assets/images/pgd/1.jpg'),
            source: 'https://pastvu.com/p/1415548'
          },
          {
            url: require('../assets/images/pgd/2.jpg'),
            source: 'https://pastvu.com/p/1415549'
          },
          {
            url: require('../assets/images/pgd/3.jpg'),
            source: 'https://pastvu.com/p/1403979'
          },
          {
            url: require('../assets/images/pgd/4.jpg'),
            source: 'https://pastvu.com/p/1234214'
          },
          {
            url: require('../assets/images/pgd/5.jpg'),
            source: 'https://pastvu.com/p/1270575'
          },
          {
            url: require('../assets/images/pgd/6.jpg'),
            source: 'https://pastvu.com/p/1417902'
          },
          {
            url: require('../assets/images/pgd/7.jpg'),
            source: 'https://pastvu.com/p/1417904'
          },
        ],
        comments:[
          {
            text: 'В 50-м мост сдали через реку Надым. Поезд в Салехард пришёл в 51 году. В 52 году до Надыма поезда начали ходить. В 53 году всё свернули. Началась консервация. Начальство сбежало быстро, поэтому и картотека на 107 была брошена. Её особист сжёг в 66 году. Всё более-менее ценное свозилось в места хранения. В Надыме склад у железной дороги был забит лыжами. Потом дядя Коля ими два года печь топил.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Вспомнилось, как мы пятером шли по железке в посёлок Новый Надым на работу. Переползли по качающимся шпалам через промоину. Слева вдоль ж-д по болоту шла лежнёвка из брёвен, потом узнали, что по ней гоняли этапы, справа торчали покосившиеся столбы телефонной линии. Шли больше часа. Потом показался семафор. Потом вышли на песчаную проплешину среди небольших холмов. Справа стоял домик. Железная вывеска "Надым". Дверь распахнута. Зашли. Небольшой зал ожидания. Окошечко кассы раскрыто. Скамейка широкая у стены, залоснившаяся. И тишина. Во вторую половину тоже открыта была дверь.<br>Станция была небольшая. Основная колея уходила прямо. Был путь - ответвление к вокзалу, были два запасных пути справа. Было ответвление в карьер. Справа, за вокзалом был установлен ряд щитов снегозадержания. Мы их потом использовали для ремонта клуба. Слева, вдоль железнодорожного пути тянулось низкое ограждение из колючей проволоки. На берегу видимого от вокзала озера торчал ряд печных труб. Сквозь, поверх деревьев, вдали виднелись крыши бараков. Мы и пошли в ту сторону. <br>Повторюсь, местность была холмистая. Это потом при экспедиции разровняли полосу для посадки самолётов.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Если дальше двигаться по железки, то потом слева стояли два больших склада, а напротив старого здания Надымгазпрома, с другой стороны находился за колючей проволокой лагерь - оставались от него четыре барака. Их потом на дрова и для ремонта основного посёлка разобрали. Топить чем-то надо было.<br>Кстати. один из бараков был столовой. Ломая его на чердаке нашли поварскую книгу, записи с ежедневным меню. Мы только облизнулись.<br>А облизнулись потому, что мы-то, строители коммунизма, всё ели из сухой картошку. Сухой лук был, сухая свёкла. Каши в банках, а там, в столовке лагеря, и борщи, и щи, и компоты. и каши разные, и масло..',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Как рассказывал Аполлон Николаевич Кондратьев, когда проходили топь, то для ускорения строительства выторфовку не делали, а устраивали настил и грузили его камнем. пока он полностью не осаживался. Он и был основанием для насыпи. Дорога однопутка. Для ускорения, радиус поворота снизили в отдельных местах до 150 метров.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Шпальный "завод" находился на речке Хейдеяха. выше по Надыму. Там был женский лагерь. Зона была ограждена берёзовым частоколом метра три высотой. Жуткое впечатление было, когда, бывало, заходили в полуземлянки. Остались в шестидесятые годы от тех женщин алюминиевые гребешки, кружки и куклы. Весь берег был завален горбылём отходов. А выше по течению сгнили 10000 кубометров заготовленного леса для шпал.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Что касается моста, в шестидесятые годы из воды всё ещё торчали два ряжа, а не сваи, от моста. Их окончательно снесло страшное половодье 67 года. Аполлон говорил, что до 2-х тысяч зэков каждую весну работали на реке, долбили лёд, чтобы мост не снесло в паводок. Им и зачёты усиленные были, чуть ли не день за три снижался срок. За риск.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Если идти от берега в сторону Надыма, то где-то метрах в пятьсот от берега, справа, под насыпью находилась будка, в которой был телефон, какой показывают в кино про революцию. крутить ручку надо было, но что удивительно, из леса можно было говорить с Москвой. Телефонистка в Новом Надыме спрашивала лишь номер. И денег платить не надо было.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'На первой промоине от берега насыпь вся была смыта. Рельсы висели в воздухе метров шестьдесят. А потом шли по болоту до второй промоины. И вот паводок 67 года перевернул, перекрутил ж-д колею. Почти на пять метров вода поднялась. До Надыма на лодке можно было доплыть.<br>В 1967 году в посёлок Новый Надым приехал из Омска студенческий отряд. Они и восстановили железку до посёлка. Аполлон у них был за геодезиста. А потом умельцы механической мастерской экспедиции поставили машину на рельсы. И мы успешно ездили на ней на берег за материалами. И прицеп к машине был.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Когда после сильнейшего паводка в 67 году, до Надыма можно было на лодке доплыть, течение перевернуло ж-д путь на 107-й и студенты из Омска его восстановили, пришлось ехать с Сорокиным на 107. Жуть. как он гонял по искривлённому пути. Мотало из стороны в сторону, всё звенело. А Сорокин накинул капюшон на голову и ему - трава не расти.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: '6 фото - более поздних времён, времён освоение. А 7 фото - уникальное. Оно годов 501 стройки. Помнится, говорили, что составы свыше 6 вагонов не пускали по ж-д. Радиусы поворотов были маленькие и путь хлипкий. 20 км скорость. Рабочая.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
      {
        id: 'lg',
        title: '105 колонна',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUmjDe2~C" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>',
        description: '',
        images:[],
        comments:[
          {
            text: 'Лагерь на углу Кедровой и Ямальской. Кажется, был под номером 105. Мне ни разу не удавалось нигде прочитать о нём. Даже те, оставшиеся пять человек в посёлке Новый Надым после консервации стройки, ничего не рассказывали. Но одно ясно, судя по столовой там, по поварской книге, которую нашли, ломая столовую, условия там были сносными. Лагерь был небольшим. Бараков было немного. Человек на 300-400. Лагерь на 107 был в два раза больше.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Кстати, если про 107 рассказывали, что там отбывал срок мужик, который был в числе трёх на расстреле Ф. Каплан(в Ленина она стреляла), что там сидели два Героя Советского Союза и какой-то учёный, которому позволено было что-то писать и всё написанное запечатывали в конверт и отправляли в Москву, то никто не говорил, что за контингент сидел в лагере 105.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text: 'Если дальше двигаться по железки, то потом слева стояли два больших склада, а напротив старого здания Надымгазпрома, с другой стороны находился за колючей проволокой лагерь - оставались от него четыре барака. Их потом на дрова и для ремонта основного посёлка разобрали. Топить чем-то надо было.<br>Кстати. один из бараков был столовой. Ломая его на чердаке нашли поварскую книгу, записи с ежедневным меню. Мы только облизнулись.<br>А облизнулись потому, что мы-то, строители коммунизма, всё ели из сухой картошку. Сухой лук был, сухая свёкла. Каши в банках, а там, в столовке лагеря, и борщи, и щи, и компоты. и каши разные, и масло..',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
        ]
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
