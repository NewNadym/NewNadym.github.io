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
            source: 'https://pastvu.com/p/1192124'
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
            source: 'https://pastvu.com/p/1234944'
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
            source: 'https://www.etoretro.ru/pic256794.htm'
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
            source: 'https://www.etoretro.ru/pic256794.htm'
          },
          {
            url: require('../assets/images/4/9.jpg'),
            source: 'https://pastvu.com/p/1201090'
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
            source: 'https://www.etoretro.ru/pic256794.htm'
          },
        ],
        comments:[
          {
            text: 'Это далёкие шестидесятые годы. Улица Железнодорожная. Ненцы стоят возле ЛТУ. Барак, что за столбами, сгорел при экспедиции. Вдали видно здание общежития охраны 501 стройки. На начальном этапе строительства города там располагался Трест, райком партии. На той площади в 72 году объявили Надым городом.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про вторую фотографию'
          },
          {
            text: 'А.И.Бобров на групповом фото в пос. Новый Надым. 1960-е гг.',
            author: 'Подпись к третьей фотографии на сайте <a href="https://goskatalog.ru/portal/#/collections?id=30309588" target="_blank">Госкаталог</a>'
          },
          {
            text: 'Помнится, в ЛТУ, а они обслуживали линию Москва-Игарка, в 1966 году работали 7 человек. Это, скорее всего, они и есть. Начальником был Самарин. Через дорогу от здания ЛТУ был их магазинчик. Денег у нас не было, так мы получали в том магазине продукты под запись, под будущую получку. Продукты из Салехарда привозил Сорокин на дрезине. Макароны, сухую картошку, консервы. Пряники - откусить было невозможно. Супы, каши в банках. Сгущёнку за рубль, консервированное молоко за 70 копеек банка. Да, уж...Было время...',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a> про третью фотографию'
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
            source: 'https://www.etoretro.ru/pic256794.htm'
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
            source: 'https://www.etoretro.ru/pic256794.htm'
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
            source: 'https://pastvu.com/p/1234944'
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
            source: 'https://www.etoretro.ru/pic256794.htm'
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
            source: 'https://www.etoretro.ru/pic256794.htm'
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
            url: require('../assets/images/16/1.jpg'),
            source: 'https://www.etoretro.ru/pic256794.htm'
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
            url: require('../assets/images/20/1.jpg'),
            source: 'https://pastvu.com/p/1234193'
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
            source: 'https://pastvu.com/p/1234944'
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
        ],
      },
      {
        id: 26,
        title: '26. Пекарня и хоз.магазин',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509959%2C65.535828&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/26/1.jpg'),
            source: 'https://pastvu.com/p/1136853'
          },
          {
            url: require('../assets/images/26/2.jpg'),
            source: 'https://pastvu.com/p/1415534'
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
        ]
      },
      {
        id: 28,
        title: '28. Жилой дом',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.509353%2C65.536616&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/28/1.jpg'),
            source: 'https://pastvu.com/p/1399139'
          },
          {
            url: require('../assets/images/28/2.jpg'),
            source: 'https://www.etoretro.ru/pic256799.htm'
          },
          {
            url: require('../assets/images/28/3.jpg'),
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
            source: 'https://www.etoretro.ru/pic256799.htm'
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
        ]
      },
      {
        id: 40,
        title: '40. Школа',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.507272%2C65.534959&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>При экспедиции здесь размещалась школа. После того, как школу перенесли в нынешний Дом молодёжи, тут разместили больницу.</p>',
        images:[
          {
            url: require('../assets/images/40/1.jpg'),
            source: 'https://pastvu.com/p/1406608'
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
        ]
      },
      {
        id: 69,
        title: '69. Аэровокзал',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/?l=sat%2Cskl&ll=72.522736%2C65.533433&mode=usermaps&source=constructorLink&um=constructor%3A166c81c0eae364a8133bc8e3b87f5432edfc0f232bce323ada856fcc3b7e173d&z=19" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/69/1.jpg'),
            source: 'https://pastvu.com/p/1406814'
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
