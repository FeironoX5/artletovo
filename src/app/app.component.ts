import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  works = {
    masks: [
      {
        author: 'Александра Буглакова',
        title: 'From Russia with love',
        pictures: [
          'assets/images/masks/Саша1.JPG',
          'assets/images/masks/Саша2.JPG',
          'assets/images/masks/Саша3.JPG',
          'assets/images/masks/Саша4.JPG',
          'assets/images/masks/Саша5.JPG',
        ],
        mat: 'темпера; переплетный картон, микрогофрокартон, аэрозольная краска, акрил\n' +
          '2022',
        descr: 'История с кокошниками получилась довольно личной, она отражает важные для меня части жизни. На каждом кокошнике есть символ, связанный с этими частями. Казалось бы, темы совершенно разные (история, культура и искусство, религия, люди), но их объединяет понятие “дом”. Я хотела поделиться именно тем, что дает мне ощущение нахождения дома, безопасности, спокойствия.\n'
      },
      {
        author: 'Глеб Кива',
        title: 'Anonymity',
        pictures: [
          'assets/images/masks/Глеб1.JPG',
          'assets/images/masks/Глеб2.JPG',
          'assets/images/masks/Глеб3.JPG',
          'assets/images/masks/Глеб4.JPG',
        ],
        mat: 'темпера; гофрокартон, бумага, акрил, горячий клей\n' +
          '2022',
        descr: 'Листая комментарии, смотря трансляции и слушая музыку я редко задумываюсь о личности, которая стоит за их созданием. В основу моей работы легла мысль о том, что действие совершенное анонимно никому не принадлежит. Все фигуры на маске, кроме треугольника на месте рта заполнены скриншотами контента, произведенного анонимно.\n'
      },
      {
        author: 'Алиса Голованова',
        title: 'emotional masking',
        pictures: [
          'assets/images/masks/Алиса1.JPG',
          'assets/images/masks/Алиса2.JPG',
          'assets/images/masks/Алиса3.JPG',
          'assets/images/masks/Алиса4.JPG',
          'assets/images/masks/Алиса5.JPG',
          'assets/images/masks/Алиса6.JPG',
        ],
        mat: 'гофрокартон, пластик, скульптурный пластилин, липучки, акрил\n' +
          '2022',
        descr: 'Изначально идею для проекта подал такой феномен, как emotional masking, который часто встречается у людей аутистического спектра, когда они искусственно учатся копировать выражения эмоций других людей. Затем я решила, что эта тема намного шире – эмоции у всех людей неоднозначны, и многие люди пытаются скрывать свои реальные эмоции за “масками”. Я реализовала эту идею через четыре маски, которые накладываются друг на друга и изображают разные, зачастую смешанные эмоции.\n'
      },
      {
        author: 'Никита',
        title: 'Маска для гипсовой головы',
        pictures: [
          'assets/images/masks/nikita1.JPG',
          'assets/images/masks/nikita12.JPG',
          'assets/images/masks/nikita13.JPG',
        ],
        mat: 'гофрокартон; баллончик с краской; горячий клей\n' +
          '2022',
        descr: 'В классе изобразительных искусств обитают две гипсовые головы: Венера и Лаокоон. Всегда холодные, отстраненные, недоступные. Я решил, что пора попробовать вступить с ними в контакт. Но за долгие годы одиночества они настолько ушли в себя, что раскрыться им будет не просто. Возможно, если они скроют лицо под маской, им будет легче общаться. \n'
      }, {
        author: 'Василиса', title: 'Без имени', pictures: [
          'assets/images/masks/vasilisa.jpg',
          'assets/images/masks/vasilisa2.JPG',
          'assets/images/masks/vasilisa3.jpg',
        ],
        mat: '',
        descr: 'Нет описания'
      }, {
        author: 'Соня Орехова', title: 'Без имени', pictures: [
          'assets/images/masks/sonya.JPG',
          'assets/images/masks/sonya2.JPG',
        ],
        mat: '',
        descr: 'Нет описания'
      },
    ],
    future: [
      {
        author: 'Василиса',
        title: 'Предчувствие эволюции',
        pictures: [
          'assets/images/future/vasilisa.JPG',
          'assets/images/future/василиса1.JPG',
          'assets/images/future/василиса2.JPG',
          'assets/images/future/василиса3.JPG',
        ],
        mat: 'цветная бумага, журналы, цветные карандаши, акварель, акварельная бумага, линеры, белая ручка\n' +
          '2021',
        descr: 'На Землю падает огромный метеорит и люди в попытке избежать катастрофы взрывают его с помощью атомных бомб. Но избежать столкновения с метеоритом не получается. Помимо вреда от столкновения с метеоритом и ударной волны, уничтожившей все живое на планете, на Землю обрушились последствия взрыва атомных бомб. Спустя десятки лет после катастрофы окружающая среда стала восстанавливаться. Но природа не стала прежней, климат сильно изменился, многие растения мутировали. На Земле остались следы человечества, но они утратили своё значение и функции. Хотя для человечества это катастрофа стала концом, для Земли это стало очередным этапом существования и эволюции.\n'
      }, {
        author: 'Алиса Голованова', title: 'совсем никого', pictures: [
          'assets/images/future/alisa_g.jpg',
          'assets/images/future/alisa_g(1).JPG',
        ],
        mat: 'сухая игла + акварель (бумага, печать, акварель)\n' +
          '2021\n',
        descr: 'Нет описания'
      }, {
        author: 'Алиса П.', title: 'Pangaea', pictures: [
          'assets/images/future/alisa_p.jpg',
        ],
        mat: 'Чернила',
        descr: 'Нет описания'
      }, {
        author: 'Никита',
        title: 'Прошлое/будущее',
        pictures: [
          'assets/images/future/nikita.JPG',
        ],
        mat: 'Цветная бумага; акварель; линеры; пастель; лампа\n' +
          '2022',
        descr: 'Тема Большого террора и памяти о нем волнует меня с детства. Я чувствую, что не могу не говорить об этом. Проект состоит из двух работ: карта и пейзаж. На карте, якобы принадлежащей руководителю вымышленной экспедиции, отмечены места захоронений на расстрельном полигоне. Мы видим только фрагмент карты. Остальной части у нас нет, и мы не знаем, что там.\n' +
          'Вторая работа – пейзаж, наклеенный на электрическую лампу. Это локация, которая могла быть взята с моей предыдущей работы (карта). Дыры на бумаге можно принять за обычные лесные овраги, но на самом деле это места массовых захоронений. Из этих дыр струится яркий свет, на который так же больно смотреть, как и говорить о теме памяти.\n'
      }, {
        author: 'Александра Буглакова',
        title: 'The only vocation',
        pictures: [
          'assets/images/future/sasha.jpg',
        ],
        mat: 'бумага для черчения, линеры, цветные маркеры, акварельные карандаши\n' +
          '2021',
        descr: 'Люди стремятся к собственному благополучию, независимости. Они пытаются превзойти общество и самих себя. К чему это приведет? Формируются отдельные группы, так называемые “кружки по интересам”. Такие общества находятся в одном пространстве, но никогда друг с другом не пересекаются и не взаимодействуют.\n'
      },
      {
        author: 'Соня Орехова', title: 'Без названия', pictures: [
          'assets/images/future/sonya.jpg',
        ],
        mat: '',
        descr: 'Нет описания'
      },
    ],
    avangard: [
      {
        author: 'Александра Буглакова',
        title: 'Кони топотом торопливо шепотом',
        pictures: [
          'assets/images/avangard/саша1.JPG',
          'assets/images/avangard/саша2.JPG',
          'assets/images/avangard/саша3.JPG',
          'assets/images/avangard/саша4.JPG',
          'assets/images/avangard/саша5.JPG',
        ],
        mat: 'коллаж, аппликация; цветная бумага, пробойник, люверсы\n' +
          '2022',
        descr: 'Давид Бурлюк (1882-1967) являлся одним из основоположников футуризма в России, он писал манифесты, издавал экспериментальные сборники и организовывал выставки. \n' +
          'Давид Бурлюк провел детство на хуторе, поэтому деревенские мотивы стали основой для сюжетов многих работ. \n' +
          'Так в нескольких его работах и стихотворениях появляются кони, которые стали основой моей композиции. В фигурине я совместила его творчество как художника и как писателя.  \n' +
          '“Без А”\n' +
          'Кони топотом\n' +
          'Торопливо\n' +
          'Шепотом игриво над ивой несут\n'
      },
      {
        author: 'Никита',
        title: 'Кинетический супрематизм',
        pictures: [
          'assets/images/avangard/никита1.JPG',
          'assets/images/avangard/никита2.JPG',
          'assets/images/avangard/никита3.JPG',
          'assets/images/avangard/никита4.JPG',
          'assets/images/avangard/никита5.JPG',
          'assets/images/avangard/никита6.JPG',
          'assets/images/avangard/никита7.JPG',
        ],
        mat: 'Цветной картон; проволока; пенопласт\n' +
          '2022',
        descr: 'Многие супрематистские композиции настолько динамичны, что, кажется, не хватает всего небольшого усилия для того, чтобы движение стало реальным. Творческое задание, полученное на занятии, подтолкнуло меня сделать этот шаг. В качестве отправной точки я использовал работы Николая Суетина, художника кружка Малевича.\n' +
          'По дуге ездит центральная группа элементов. Двигаясь и вращаясь, она образует новые комбинации с фоном.\n'
      },
      {
        author: 'Соня Орехова', title: 'Без названия', pictures: [
          'assets/images/avangard/соня1.jpg',
          'assets/images/avangard/соня2.JPG',
          'assets/images/avangard/соня3.jpg',
          'assets/images/avangard/соня4.jpg',
          'assets/images/avangard/соня5.jpg',
          'assets/images/avangard/соня6.jpg',
        ],
        mat: '',
        descr: 'Нет описания'
      },
    ],
    books: [
      {
        author: 'Алиса П.', title: 'Ключ', pictures: [
          'assets/images/books/Алиса-%20ключ/1.jpg',
          'assets/images/books/Алиса-%20ключ/2.jpg',
          'assets/images/books/Алиса-%20ключ/3.jpg',
          'assets/images/books/Алиса-%20ключ/4.jpg',
          'assets/images/books/Алиса-%20ключ/5.jpg',
          'assets/images/books/Алиса-%20ключ/6.jpg',
          'assets/images/books/Алиса-%20ключ/7.jpg',
          'assets/images/books/Алиса-%20ключ/8.jpg',
        ],
        mat: '',
        descr: 'Нет описания'
      },
      {
        author: 'Алиса Голованова',
        title: 'покидая дом',
        pictures: [
          'assets/images/books/Алиса%20Г/1.jpg',
          'assets/images/books/Алиса%20Г/2.jpg',
          'assets/images/books/Алиса%20Г/3.jpg',
          'assets/images/books/Алиса%20Г/4.jpg',
          'assets/images/books/Алиса%20Г/5.jpg',
          'assets/images/books/Алиса%20Г/6.jpg',
          'assets/images/books/Алиса%20Г/7.jpg',
          'assets/images/books/Алиса%20Г/8.jpg',
          'assets/images/books/Алиса%20Г/9.jpg',
          'assets/images/books/Алиса%20Г/10.jpg',
          'assets/images/books/Алиса%20Г/11.jpg',
          'assets/images/books/Алиса%20Г/12.jpg',
          'assets/images/books/Алиса%20Г/13.jpg',
        ],
        mat: 'коллаж (бумага / фотошоп)\n' +
          '2022',
        descr: 'Мне кажется, если в жизни человека происходит что-то необычное, об этом необходимо оставлять след. Записывать не факты, а эмоции, чувства и ассоциации, передавать своё уникальное восприятие. В день отъезда из Москвы я начала делать фотографии, понимая, что хочу сделать из них какой-то проект, и сделала книгу о том, как я уехала (и вернулась). Я побывала в ОАЭ и Шри-Ланке и постаралась передать моё восприятие каждой из стран через динамику, цвет и шрифт в разворотах.\n'
      },
      {
        author: 'Алиса П.',
        title: 'leave it in my dreams',
        pictures: [
          'assets/images/books/Алиса%20П/1.JPG',
          'assets/images/books/Алиса%20П/2.jpg',
          'assets/images/books/Алиса%20П/3.JPG',
          'assets/images/books/Алиса%20П/4.jpg',
          'assets/images/books/Алиса%20П/5.jpg',
          'assets/images/books/Алиса%20П/6.jpg',
          'assets/images/books/Алиса%20П/7.jpg',
          'assets/images/books/Алиса%20П/8.jpg',
          'assets/images/books/Алиса%20П/9.jpg',
          'assets/images/books/Алиса%20П/10.jpg',
          'assets/images/books/Алиса%20П/11.JPG',
          'assets/images/books/Алиса%20П/12.JPG',
          'assets/images/books/Алиса%20П/13.JPG',
          'assets/images/books/Алиса%20П/14.jpg',
          'assets/images/books/Алиса%20П/15.jpg',
          'assets/images/books/Алиса%20П/16.jpg',
        ],
        mat: 'фотографии, пиксель-арт рисунки, гуашь, маркеры, чьи-то принты, нитки\n' +
          '2022',
        descr: 'Сны, мечты и другие проявления подсознания всегда привлекали меня как тема. Я много мечтаю, придумывая истории – иногда так забываюсь в себе. Это может как помогать мне создавать сюжеты для своих работ, так и мешать – я теряю чувство реальности. Что вообще такое реальность?\n' +
          'Моя работа рассказывает историю человека, который теряет счет времени в своих фантазиях, но в конце концов должен принять реальный мир. Что-то ему мешает и тащит обратно, но герою удается найти смелость вернуться домой.\n' +
          'Я использовала пиксель-арт стиль для персонажа и комнаты чтобы показать их связь, а также это является отсылкой на RPG-игры, которым я посвящала много времени в средней школе. \n' +
          'Кажется, что сны и фантазии являются лучшим для нас местом, но мы не можем позволить потерять себя в них – выбор подчиниться им или принять реальность за нами.\n'
      },
      {
        author: 'Амина Магомедова', title: 'Ёлочная игрушка', pictures: [
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/1.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/2.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/3.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/4.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/5.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/6.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/7.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/8.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/9.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/10.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/11.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/12.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/13.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/14.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/15.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/16.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/17.jpg',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/18.JPG',
          'assets/images/books/Амина%20м.%20-%20елочная%20игрушка/19.JPG',
        ],
        mat: '',
        descr: 'Нет описания'
      },
      {
        author: 'Глеб Кива', title: 'Обои', pictures: [
          'assets/images/books/Глеб%20-%20обои/1.JPG',
          'assets/images/books/Глеб%20-%20обои/2.JPG',
          'assets/images/books/Глеб%20-%20обои/3.JPG',
          'assets/images/books/Глеб%20-%20обои/4.JPG',
          'assets/images/books/Глеб%20-%20обои/5.JPG',
          'assets/images/books/Глеб%20-%20обои/6.JPG',
        ],
        mat: '',
        descr: 'Нет описания'
      },
    ]
  };
  activeSection = 0;
  activeWork = 0;
  activePicture = 0;
  private swipeCoord!: [number, number];
  private swipeTime!: number;
  openedPopUp = false;
  openedMenu = false;
  openedHelp = false;

  constructor() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 39) {
        this.previousWork();
      }
      if (e.keyCode == 37) {
        this.nextWork();
      }
      if (e.keyCode == 40) {
        this.previousPicture();
      }
      if (e.keyCode == 38) {
        this.nextPicture();
      }
    });
  }

  getWork() {
    return this.getWorks()[this.activeWork];
  }

  getPictureUrl(pos: string) {
    let work = this.activeWork;
    let pict = this.activePicture;
    if (pos == 'left') {
      work = this.getWorkIndex(this.activeWork - 1);
      pict = 0;
    }
    if (pos == 'right') {
      work = this.getWorkIndex(this.activeWork + 1);
      pict = 0;
    }
    if (pos == 'top') {
      work = this.activeWork;
      pict = this.getPictureIndex(this.activePicture - 1);
    }
    if (pos == 'bottom') {
      work = this.activeWork;
      pict = this.getPictureIndex(this.activePicture + 1);
    }
    return this.getWorks()[work].pictures[pict];
  }

  getWorkIndex(work: number) {
    if (work < 0) {
      return this.getWorks().length - 1;
    }
    if (work >= this.getWorks().length) {
      return 0;
    }
    return work;
  }

  getPictureIndex(pict: number) {
    if (pict < 0) {
      return this.getWorks()[this.activeWork].pictures.length - 1;
    }
    if (pict >= this.getWorks()[this.activeWork].pictures.length) {
      return 0;
    }
    return pict;
  }

  getWorks() {
    if (this.activeSection == 0) {
      return this.works.masks;
    }
    if (this.activeSection == 1) {
      return this.works.future;
    }
    if (this.activeSection == 2) {
      return this.works.avangard;
    }
    if (this.activeSection == 3) {
      return this.works.books;
    }
    return [];
  }

  nextWork() {
    if (this.activeWork + 1 >= this.getWorks().length) {
      this.activeWork = 0;
    } else {
      this.activeWork++;
      this.activePicture = 0;
    }
  }

  previousWork() {
    if (this.activeWork - 1 < 0) {
      this.activeWork = this.getWorks().length - 1;
    } else {
      this.activeWork--;
      this.activePicture = 0;
    }
  }


  nextPicture() {
    if (this.activePicture + 1 >= this.getWorks()[this.activeWork].pictures.length) {
      this.activePicture = 0;
    } else {
      this.activePicture++;
    }
  }

  previousPicture() {
    if (this.activePicture - 1 < 0) {
      this.activePicture = this.getWorks()[this.activeWork].pictures.length - 1;
    } else {
      this.activePicture--;
    }
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000
        && Math.abs(direction[0]) > 30
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        if (swipe == 'next') {
          this.nextWork();
        } else {
          this.previousWork();
        }
      } else if (duration < 1000
        && Math.abs(direction[0]) <= 30
        && Math.abs(direction[1]) > Math.abs(direction[0] * 3)) {
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        if (swipe == 'next') {
          this.previousPicture();
        } else {
          this.nextPicture();
        }
      }
    }
  }
}
