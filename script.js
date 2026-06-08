const commons = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;

const sources = {
  unesco: "https://whc.unesco.org/en/list/545/",
  britannicaRed: "https://www.britannica.com/topic/Red-Square",
  basil: "https://en.shm.ru/museum/hvb/",
  mausoleum: "https://www.britannica.com/place/Lenin-Mausoleum",
  commons: "https://commons.wikimedia.org/"
};

const timeline = [
  {
    id: "xv",
    period: "1475-1495",
    subtitle: "Перестройка Кремля при Иване III",
    title: "1475-1495: каменный Кремль и пространство у восточной стены",
    text:
      "В 1475 году Иван III начал масштабное обновление Московского Кремля, пригласив итальянских мастеров. В 1485-1495 годах были возведены новые кирпичные стены и башни. После расчистки деревянной застройки у восточной стены появилось открытое пространство, из которого позже сформировалась Красная площадь.",
    dates: ["1475", "1485-1495", "1491", "Иван III"],
    people: ["Иван III", "Аристотель Фиораванти", "Пьетро Антонио Солари"],
    images: [
      { file: "Vasnetsov_Moskovsky_Kreml_pri_Ivane_III.jpg", caption: "Кремль при Иване III в реконструкции А. Васнецова" },
      { file: "Ivan_III_of_Russia.jpg", caption: "Иван III, великий князь московский" },
      { file: "Kremlin wall - Red Square.jpg", caption: "Кремлёвская стена со стороны площади" }
    ],
    source: sources.britannicaRed
  },
  {
    id: "xvi",
    period: "1552-1561",
    subtitle: "Покровский собор после взятия Казани",
    title: "1552-1561: военная победа и Собор Василия Блаженного",
    text:
      "В 1552 году войска Ивана IV взяли Казань. В память об этой победе в 1555 году началось строительство Покровского собора на Рву. К 1561 году храмовый ансамбль был завершён, и южная часть Красной площади получила главный архитектурный символ, который сегодня называют Собором Василия Блаженного.",
    dates: ["1552", "1555", "1561", "Иван IV"],
    people: ["Иван IV Грозный", "Барма и Постник", "Василий Блаженный"],
    images: [
      { file: "Ivan_the_Terrible_(cropped).JPG", caption: "Иван IV Грозный" },
      { file: "Saint-Basil-Cathedral_Moscow.jpg", caption: "Собор Василия Блаженного" },
      { file: "St._Basil’s_Cathedral_on_Red_Square_in_Moscow.jpg", caption: "Покровский собор на Красной площади" }
    ],
    source: sources.basil
  },
  {
    id: "xvii",
    period: "1612-1661",
    subtitle: "Смутное время и закрепление названия площади",
    title: "1612-1661: освобождение Москвы и название «Красная площадь»",
    text:
      "В 1612 году народное ополчение Минина и Пожарского освободило Москву от польско-литовских войск. В 1613 году на престол был избран Михаил Романов, что стало началом новой династии. В XVII веке за площадью закрепилось название «Красная», то есть красивая и главная; в документах оно встречается с 1661 года.",
    dates: ["1612", "1613", "1661", "Минин и Пожарский"],
    people: ["Кузьма Минин", "Дмитрий Пожарский", "Михаил Романов", "Патриарх Гермоген"],
    images: [
      { file: "Appeal_of_Minin.jpg", caption: "Призыв Минина к нижегородцам" },
      { file: "Minin_i_Pozharskiy.jpg", caption: "Минин и Пожарский" },
      { file: "Portrait_of_Mikhail_Fedorovich_Romanov.jpg", caption: "Михаил Фёдорович Романов" }
    ],
    source: sources.britannicaRed
  },
  {
    id: "xix",
    period: "1812-1893",
    subtitle: "Восстановление Москвы и новый парадный ансамбль",
    title: "1812-1893: пожар Москвы, музей и Верхние торговые ряды",
    text:
      "В сентябре 1812 года Москва сильно пострадала от пожара во время Отечественной войны. После восстановления центр города постепенно приобрёл более парадный вид. В 1875-1883 годах построили здание Государственного исторического музея, а в 1890-1893 годах появились Верхние торговые ряды, будущий ГУМ.",
    dates: ["14 сентября 1812", "1875-1883", "1890-1893"],
    people: ["Осип Бове", "Владимир Шервуд", "Александр Померанцев", "Владимир Шухов"],
    images: [
      { file: "Nikolskaya Tower, 1812.jpg", caption: "Никольская башня после событий 1812 года" },
      { file: "The_Red_Square,_Moscow,_Russia_(4600822737).jpg", caption: "Красная площадь около 1880 года" },
      { file: "Upper_Trading_Rows_(early_1900th).jpg", caption: "Верхние торговые ряды в начале XX века" }
    ],
    source: sources.britannicaRed
  },
  {
    id: "xx",
    period: "1924-1945",
    subtitle: "Мавзолей и главная площадь советских парадов",
    title: "1924-1945: Мавзолей Ленина и Парад Победы",
    text:
      "21 января 1924 года умер Владимир Ленин, и уже в январе 1924 года на Красной площади появился первый временный деревянный мавзолей. Второй деревянный мавзолей открыли 1 августа 1924 года, а каменное здание по проекту Алексея Щусева завершили в 1930 году. 24 июня 1945 года здесь прошёл Парад Победы.",
    dates: ["21 января 1924", "1 августа 1924", "1930", "24 июня 1945"],
    people: ["Владимир Ленин", "Алексей Щусев", "Иосиф Сталин", "Георгий Жуков"],
    images: [
      { file: "Lenin_Mausoleum_by_Isaak_Brodsky_(1924).jpg", caption: "Деревянный мавзолей Ленина, 1924 год" },
      { file: "Lenin's Mausoleum (19777767158).jpg", caption: "Каменный Мавзолей Ленина" },
      { file: "Парад_Победы_на_Красной_площади_24_июня_1945_г._(25).jpg", caption: "Парад Победы 24 июня 1945 года" }
    ],
    source: sources.mausoleum
  },
  {
    id: "today",
    period: "1990-2026",
    subtitle: "Всемирное наследие и современная площадь",
    title: "1990-2026: Красная площадь как объект мирового наследия",
    text:
      "В 1990 году Кремль и Красная площадь были включены в список Всемирного наследия UNESCO. В XXI веке площадь остаётся историческим ансамблем, туристическим центром и местом государственных церемоний. Здесь рядом видны следы XV, XVI, XIX и XX веков, поэтому площадь воспринимается как открытый музей Москвы.",
    dates: ["1990", "XXI век", "UNESCO"],
    people: ["реставраторы", "историки", "музейные работники"],
    images: [
      { file: "The_Red_Square_(Красная_площадь)_(5873220702).jpg", caption: "Современная Красная площадь" },
      { file: "Moscow_State_Historical_Museum_Red_Square.jpg", caption: "Исторический музей и северная часть площади" },
      { file: "Moscow_Gum_c13.jpg", caption: "ГУМ в современном ансамбле площади" }
    ],
    source: sources.unesco
  }
];

const landmarks = [
  {
    title: "Собор Василия Блаженного",
    date: "1555-1561",
    image: "Saint-Basil-Cathedral_Moscow.jpg",
    short: "Построен по приказу Ивана IV после взятия Казани.",
    details: [
      "Собор Покрова Пресвятой Богородицы на Рву был заложен в 1555 году и завершён в 1561 году. Его строительство связывают с победой Ивана IV над Казанским ханством в 1552 году.",
      "Архитектурно собор состоит из нескольких самостоятельных церквей, объединённых на одном основании. Такой силуэт сделал южную часть Красной площади особенно узнаваемой.",
      "Название «Собор Василия Блаженного» закрепилось из-за придела над могилой московского юродивого Василия Блаженного. Поэтому один объект соединяет военную память, религиозную традицию и городской фольклор."
    ],
    facts: ["1552 - взятие Казани", "1555 - начало строительства", "1561 - завершение собора"],
    people: ["Иван IV Грозный", "Барма и Постник", "Василий Блаженный"],
    photos: [
      { file: "Saint-Basil-Cathedral_Moscow.jpg", caption: "Современный вид собора" },
      { file: "St._Basil’s_Cathedral_on_Red_Square_in_Moscow.jpg", caption: "Собор на Красной площади" },
      { file: "Ivan_the_Terrible_(cropped).JPG", caption: "Иван IV, по приказу которого построили собор" }
    ],
    source: sources.basil
  },
  {
    title: "Памятник Минину и Пожарскому",
    date: "1818",
    image: "Monument to Minin and Pozharsky, Red Square, 2009-06-19.jpg",
    short: "Память о народном ополчении 1612 года.",
    details: [
      "Монумент посвящён событиям 1612 года, когда народное ополчение освободило Москву от польско-литовских войск. Кузьма Минин стал символом гражданской инициативы, а князь Дмитрий Пожарский - военного руководства.",
      "Памятник работы скульптора Ивана Мартоса открыли в 1818 году. Это был один из первых крупных гражданских памятников Москвы, поставленный не царю, а национальным героям.",
      "Первоначально памятник стоял ближе к центру площади, а в советское время был перенесён к Собору Василия Блаженного, где находится сейчас."
    ],
    facts: ["1612 - освобождение Москвы", "1818 - открытие памятника", "1931 - перенос к собору"],
    people: ["Кузьма Минин", "Дмитрий Пожарский", "Иван Мартос"],
    photos: [
      { file: "Monument to Minin and Pozharsky, Red Square, 2009-06-19.jpg", caption: "Памятник на Красной площади" },
      { file: "Minin_i_Pozharskiy.jpg", caption: "Минин и Пожарский в исторической живописи" },
      { file: "Appeal_of_Minin.jpg", caption: "Призыв Минина к ополчению" }
    ],
    source: "https://en.wikipedia.org/wiki/Monument_to_Minin_and_Pozharsky"
  },
  {
    title: "Лобное место",
    date: "XVI век",
    image: "Lobnoye mesto - Moscow - 2025 1.jpg",
    short: "Каменное возвышение для объявлений и торжественных действий.",
    details: [
      "Лобное место известно с XVI века и находится рядом с Покровским собором. Это круглое каменное возвышение было связано с публичными объявлениями, религиозными процессиями и церемониями.",
      "Название часто ошибочно связывают с казнями, но постоянным местом казней Лобное место не было. Его главная роль - символическая: оттуда объявляли важные решения и обращались к горожанам.",
      "Объект важен для понимания Красной площади как пространства публичной власти: здесь город видел не только торговлю, но и официальную речь государства."
    ],
    facts: ["XVI век - первое известное упоминание", "1786 - перестройка каменного сооружения"],
    people: ["московские цари", "патриархи", "городские жители"],
    photos: [
      { file: "Lobnoye mesto - Moscow - 2025 1.jpg", caption: "Лобное место" },
      { file: "Saint-Basil-Cathedral_Moscow.jpg", caption: "Соседство с Покровским собором" },
      { file: "The_Red_Square,_Moscow,_Russia_(4600822737).jpg", caption: "Площадь и историческая среда около 1880 года" }
    ],
    source: "https://www.history.com/articles/red-square"
  },
  {
    title: "Мавзолей Ленина",
    date: "1924 / 1930",
    image: "Lenin's Tomb.jpg",
    short: "Главный памятник советской эпохи на площади.",
    details: [
      "Владимир Ленин умер 21 января 1924 года. Первый временный деревянный мавзолей появился у Кремлёвской стены в январе 1924 года, чтобы люди могли проститься с лидером большевиков.",
      "Второй деревянный мавзолей открыли 1 августа 1924 года. Современное каменное здание по проекту Алексея Щусева было завершено в 1930 году.",
      "Мавзолей изменил смысл Красной площади в XX веке: рядом с древними стенами Кремля появился центр советской политической памяти и трибуна для государственных церемоний."
    ],
    facts: ["21 января 1924 - смерть Ленина", "1 августа 1924 - второй деревянный мавзолей", "1930 - каменный мавзолей"],
    people: ["Владимир Ленин", "Алексей Щусев"],
    photos: [
      { file: "Lenin_Mausoleum_by_Isaak_Brodsky_(1924).jpg", caption: "Деревянный мавзолей, 1924 год" },
      { file: "Lenin's Mausoleum (19777767158).jpg", caption: "Современный мавзолей" },
      { file: "A.V. Schusev by M.Nesterov (1941).jpg", caption: "Алексей Щусев" }
    ],
    source: sources.mausoleum
  },
  {
    title: "Государственный исторический музей",
    date: "1872 / 1875-1883",
    image: "Moscow_State_Historical_Museum_Red_Square.jpg",
    short: "Музей истории России у северной стороны площади.",
    details: [
      "Музей был основан в 1872 году, а здание на Красной площади строилось в 1875-1883 годах. Оно завершило северную сторону площади и стало входом в исторический ансамбль со стороны Манежной площади.",
      "Архитектор Владимир Шервуд выбрал образ, который отсылает к древнерусской архитектуре. Благодаря этому музей не выглядит чужим рядом с Кремлём, а работает как часть исторической сцены.",
      "Содержание музея связано с историей России от древности до нового времени, поэтому само здание поддерживает тему площади как места памяти."
    ],
    facts: ["1872 - основание музея", "1875 - начало строительства", "1883 - завершение здания"],
    people: ["Владимир Шервуд", "Александр II", "Алексей Уваров"],
    photos: [
      { file: "Moscow_State_Historical_Museum_Red_Square.jpg", caption: "Исторический музей" },
      { file: "The_Red_Square,_Moscow,_Russia_(4600822737).jpg", caption: "Красная площадь около 1880 года" },
      { file: "Red Square - State Historical Museum and GUM (19775671970).jpg", caption: "Музей и ГУМ в современном ансамбле" }
    ],
    source: "https://www.visitrussia.com/citiesguide/moscow/places/historical_museum"
  },
  {
    title: "ГУМ",
    date: "1890-1893",
    image: "Moscow_Gum_c13.jpg",
    short: "Бывшие Верхние торговые ряды.",
    details: [
      "На месте современных торговых галерей торговля существовала веками. В 1890-1893 годах здесь построили Верхние торговые ряды по проекту Александра Померанцева.",
      "Инженер Владимир Шухов участвовал в создании металлических и стеклянных конструкций перекрытий. Благодаря этому здание стало сочетанием исторического фасада и современной для XIX века инженерии.",
      "ГУМ показывает, что Красная площадь была не только церемониальным, но и торговым пространством. Эта функция сохранилась, хотя стала более представительской."
    ],
    facts: ["1890 - начало строительства", "1893 - открытие Верхних торговых рядов"],
    people: ["Александр Померанцев", "Владимир Шухов", "московские купцы"],
    photos: [
      { file: "Moscow_Gum_c13.jpg", caption: "Современный ГУМ" },
      { file: "Upper_Trading_Rows_(early_1900th).jpg", caption: "Верхние торговые ряды в начале XX века" },
      { file: "Structure_of_the_Roof_of_Upper_Trading_Rows_by_Vladimir_Shukhov_7.JPG", caption: "Стеклянная кровля, связанная с инженерией Шухова" }
    ],
    source: "https://www.expresstorussia.com/guide/gum-department-store-moscow.html"
  },
  {
    title: "Казанский собор",
    date: "1636 / 1990-1993",
    image: "Russia (Moscow) Kazan Cathedral on Red Square (35957517400).jpg",
    short: "Храм, связанный с памятью о Смутном времени.",
    details: [
      "Казанский собор связан с памятью об освобождении Москвы в 1612 году и почитанием Казанской иконы Божией Матери. Каменный храм был построен в 1636 году.",
      "В советское время историческое здание было разрушено в 1936 году. В 1990-1993 годах собор восстановили, и он стал одним из знаков возвращения исторического облика Красной площади.",
      "Этот объект показывает, что площадь хранит не только древние постройки, но и историю утрат и восстановлений."
    ],
    facts: ["1612 - память об освобождении Москвы", "1636 - каменный собор", "1936 - разрушение", "1990-1993 - восстановление"],
    people: ["Дмитрий Пожарский", "Патриарх Гермоген", "реставраторы 1990-х"],
    photos: [
      { file: "Russia (Moscow) Kazan Cathedral on Red Square (35957517400).jpg", caption: "Казанский собор" },
      { file: "Minin_i_Pozharskiy.jpg", caption: "События Смутного времени" },
      { file: "The_Red_Square_(Красная_площадь)_(5873220702).jpg", caption: "Собор в современном городском пространстве" }
    ],
    source: "https://en.wikipedia.org/wiki/Kazan_Cathedral,_Moscow"
  },
  {
    title: "Кремлёвская стена и башни",
    date: "1485-1495",
    image: "Kremlin wall - Red Square.jpg",
    short: "Оборонительная линия, задающая западную сторону площади.",
    details: [
      "Современные кирпичные стены Московского Кремля строились в 1485-1495 годах при Иване III. Они заменили более ранние укрепления и закрепили Кремль как главный оборонительный и политический центр Москвы.",
      "Спасская башня, обращённая к Красной площади, была построена в 1491 году итальянским мастером Пьетро Антонио Солари. Позднее она стала главным парадным въездом и одним из символов государства.",
      "Без кремлёвской стены Красная площадь не имела бы своего нынешнего масштаба: именно она задаёт западную границу площади и делает её пространством между властью, торговлей и городом."
    ],
    facts: ["1485-1495 - строительство стен", "1491 - Спасская башня"],
    people: ["Иван III", "Пьетро Антонио Солари"],
    photos: [
      { file: "Kremlin wall - Red Square.jpg", caption: "Кремлёвская стена" },
      { file: "Vasnetsov_Moskovsky_Kreml_pri_Ivane_III.jpg", caption: "Кремль при Иване III" },
      { file: "The_walls_of_the_Moscow_Kremlin_(19958117832).jpg", caption: "Стены Московского Кремля" }
    ],
    source: "https://www.britannica.com/place/Saviour-Tower"
  }
];

const people = [
  {
    date: "1440-1505",
    name: "Иван III",
    text: "При нём Кремль был перестроен в камне, а Москва стала центром объединяющегося государства.",
    details: [
      "Иван III правил Московским княжеством с 1462 по 1505 год. Его эпоха связана с укреплением Москвы и превращением Кремля в главный политический центр.",
      "В 1475 году началось строительство нового Успенского собора, а в 1485-1495 годах - кирпичных стен и башен Кремля. Это напрямую связано с будущим обликом Красной площади.",
      "Расчистка пространства у кремлёвских стен создала основу для площади, которая позже стала главной городской сценой."
    ],
    photos: [
      { file: "Ivan_III_of_Russia.jpg", caption: "Иван III" },
      { file: "Vasnetsov_Moskovsky_Kreml_pri_Ivane_III.jpg", caption: "Кремль при Иване III" },
      { file: "Kremlin wall - Red Square.jpg", caption: "Кремлёвская стена" }
    ],
    source: sources.britannicaRed
  },
  {
    date: "1491",
    name: "Пьетро Антонио Солари",
    text: "Итальянский мастер, связанный со строительством Спасской башни.",
    details: [
      "Пьетро Антонио Солари работал в Москве при Иване III. В 1491 году он построил Спасскую башню Кремля, которая выходит к Красной площади.",
      "Итальянские мастера принесли в Москву инженерный опыт эпохи Возрождения. Благодаря им Кремль получил более мощную и современную фортификационную систему.",
      "Спасская башня стала главным визуальным ориентиром западной стороны Красной площади."
    ],
    photos: [
      { file: "Kremlin wall - Red Square.jpg", caption: "Спасская башня и кремлёвская стена" },
      { file: "The_walls_of_the_Moscow_Kremlin_(19958117832).jpg", caption: "Кремлёвские укрепления" },
      { file: "Vasnetsov_Moskovsky_Kreml_pri_Ivane_III.jpg", caption: "Кремль в эпоху Ивана III" }
    ],
    source: "https://www.britannica.com/place/Saviour-Tower"
  },
  {
    date: "1530-1584",
    name: "Иван IV Грозный",
    text: "Победа над Казанью стала поводом для строительства Покровского собора.",
    details: [
      "Иван IV стал первым русским царём в 1547 году. В 1552 году его войска взяли Казань, что стало одним из крупнейших событий его правления.",
      "В память о победе в 1555-1561 годах на Красной площади построили Покровский собор. Он закрепил за площадью роль пространства государственной памяти.",
      "Собор до сих пор соединяет образ царской власти XVI века и архитектурный символ Москвы."
    ],
    photos: [
      { file: "Ivan_the_Terrible_(cropped).JPG", caption: "Иван IV Грозный" },
      { file: "Saint-Basil-Cathedral_Moscow.jpg", caption: "Собор Василия Блаженного" },
      { file: "St._Basil’s_Cathedral_on_Red_Square_in_Moscow.jpg", caption: "Покровский собор" }
    ],
    source: sources.basil
  },
  {
    date: "1612",
    name: "Минин и Пожарский",
    text: "Руководители народного ополчения, освободившего Москву.",
    details: [
      "Кузьма Минин и Дмитрий Пожарский связаны с событиями Смутного времени. В 1612 году их ополчение освободило Москву от польско-литовских войск.",
      "Память об этом событии стала частью национальной истории. В 1818 году на Красной площади был открыт памятник Минину и Пожарскому.",
      "Их образ важен для сайта, потому что связывает Красную площадь не только с архитектурой, но и с гражданским подвигом."
    ],
    photos: [
      { file: "Minin_i_Pozharskiy.jpg", caption: "Минин и Пожарский" },
      { file: "Appeal_of_Minin.jpg", caption: "Призыв Минина" },
      { file: "Monument to Minin and Pozharsky, Red Square, 2009-06-19.jpg", caption: "Памятник на площади" }
    ],
    source: "https://en.wikipedia.org/wiki/Monument_to_Minin_and_Pozharsky"
  },
  {
    date: "1875-1883",
    name: "Владимир Шервуд",
    text: "Архитектор Государственного исторического музея.",
    details: [
      "Владимир Шервуд был архитектором здания Государственного исторического музея на Красной площади. Строительство продолжалось с 1875 по 1883 год.",
      "Его проект использовал мотивы древнерусской архитектуры, чтобы музей выглядел естественно рядом с Кремлём и Покровским собором.",
      "Здание Шервуда стало важной частью северной границы Красной площади и усилило её музейный характер."
    ],
    photos: [
      { file: "Moscow_State_Historical_Museum_Red_Square.jpg", caption: "Государственный исторический музей" },
      { file: "Red Square - State Historical Museum and GUM (19775671970).jpg", caption: "Музей в ансамбле площади" },
      { file: "The_Red_Square,_Moscow,_Russia_(4600822737).jpg", caption: "Историческая фотография площади" }
    ],
    source: "https://www.visitrussia.com/citiesguide/moscow/places/historical_museum"
  },
  {
    date: "1890-1893",
    name: "Александр Померанцев",
    text: "Автор проекта Верхних торговых рядов, будущего ГУМа.",
    details: [
      "Александр Померанцев создал проект Верхних торговых рядов, построенных в 1890-1893 годах. Здание стало новой формой старой торговой функции площади.",
      "Фасад продолжил исторический стиль Красной площади, а внутри появились просторные торговые галереи.",
      "Вместе с инженерными решениями Владимира Шухова проект стал одним из заметных примеров архитектуры конца XIX века в Москве."
    ],
    photos: [
      { file: "Moscow_Gum_c13.jpg", caption: "ГУМ" },
      { file: "Upper_Trading_Rows_(early_1900th).jpg", caption: "Верхние торговые ряды" },
      { file: "Structure_of_the_Roof_of_Upper_Trading_Rows_by_Vladimir_Shukhov_7.JPG", caption: "Конструкция кровли" }
    ],
    source: "https://www.expresstorussia.com/guide/gum-department-store-moscow.html"
  },
  {
    date: "1873-1949",
    name: "Алексей Щусев",
    text: "Архитектор Мавзолея Ленина.",
    details: [
      "Алексей Щусев был архитектором нескольких вариантов Мавзолея Ленина. После временных деревянных сооружений он создал каменное здание, завершённое в 1930 году.",
      "Мавзолей сочетает строгую геометрию, монументальность и небольшие размеры. Он должен был выглядеть торжественно рядом с Кремлёвской стеной.",
      "Работа Щусева изменила композицию Красной площади в XX веке, добавив к древнему ансамблю советский политический символ."
    ],
    photos: [
      { file: "A.V. Schusev by M.Nesterov (1941).jpg", caption: "Алексей Щусев" },
      { file: "Lenin_Mausoleum_by_Isaak_Brodsky_(1924).jpg", caption: "Ранний деревянный мавзолей" },
      { file: "Lenin's Mausoleum (19777767158).jpg", caption: "Каменный мавзолей" }
    ],
    source: sources.mausoleum
  },
  {
    date: "24 июня 1945",
    name: "Георгий Жуков",
    text: "Маршал принимал Парад Победы на Красной площади.",
    details: [
      "24 июня 1945 года на Красной площади прошёл Парад Победы после завершения Великой Отечественной войны. Парад принимал маршал Георгий Жуков.",
      "Событие превратило площадь в символ военной победы и государственной памяти XX века.",
      "Именно поэтому Красная площадь воспринимается не только как архитектурное место, но и как сцена важнейших исторических ритуалов."
    ],
    photos: [
      { file: "Парад_Победы_на_Красной_площади_24_июня_1945_г._(25).jpg", caption: "Парад Победы 1945 года" },
      { file: "Zhukov LIFE.jpg", caption: "Георгий Жуков, фотография 1945 года" },
      { file: "00_0623_Red_Square_in_Moscow.jpg", caption: "Красная площадь как парадное пространство" }
    ],
    source: sources.commons
  },
  {
    date: "1990",
    name: "UNESCO",
    text: "Кремль и Красная площадь были включены в список Всемирного наследия.",
    details: [
      "В 1990 году ансамбль «Кремль и Красная площадь» включили в список Всемирного наследия UNESCO.",
      "Это признание подчёркивает ценность площади как исторического центра Москвы, где сохранились памятники разных эпох.",
      "Сегодня сохранение площади связано с работой реставраторов, музеев, историков и специалистов по культурному наследию."
    ],
    photos: [
      { file: "The_Red_Square_(Красная_площадь)_(5873220702).jpg", caption: "Современная Красная площадь" },
      { file: "Moscow_State_Historical_Museum_Red_Square.jpg", caption: "Исторический музей" },
      { file: "Moscow_Gum_c13.jpg", caption: "ГУМ" }
    ],
    source: sources.unesco
  }
];

const gallery = [
  {
    title: "Кремлёвская стена и Спасская башня",
    date: "1485-1495 / 1491",
    image: "Kremlin wall - Red Square.jpg",
    text:
      "Кирпичные стены Кремля строились в 1485-1495 годах при Иване III. Спасская башня, обращённая к Красной площади, была построена в 1491 году. Вместе они задают западную границу площади и делают её пространством между Кремлём и городом.",
    source: "https://www.britannica.com/place/Saviour-Tower"
  },
  {
    title: "Собор Василия Блаженного",
    date: "1555-1561",
    image: "Saint-Basil-Cathedral_Moscow.jpg",
    text:
      "Собор был построен после взятия Казани в 1552 году. Строительство продолжалось с 1555 по 1561 год. Его яркий силуэт стал главным южным акцентом Красной площади и одним из самых узнаваемых образов Москвы.",
    source: sources.basil
  },
  {
    title: "Исторический музей",
    date: "1872 / 1875-1883",
    image: "Moscow_State_Historical_Museum_Red_Square.jpg",
    text:
      "Государственный исторический музей был основан в 1872 году. Здание на Красной площади строилось в 1875-1883 годах по проекту Владимира Шервуда. Оно подчёркивает музейную роль площади и связывает её с историей России.",
    source: "https://www.visitrussia.com/citiesguide/moscow/places/historical_museum"
  },
  {
    title: "ГУМ",
    date: "1890-1893",
    image: "Moscow_Gum_c13.jpg",
    text:
      "ГУМ возник как Верхние торговые ряды, построенные в 1890-1893 годах. Здание сохранило торговую функцию площади, но оформило её в парадной архитектуре конца XIX века. Инженерные перекрытия связаны с работой Владимира Шухова.",
    source: "https://www.expresstorussia.com/guide/gum-department-store-moscow.html"
  },
  {
    title: "Мавзолей Ленина",
    date: "1924 / 1930",
    image: "Lenin's Mausoleum (19777767158).jpg",
    text:
      "После смерти Ленина 21 января 1924 года на площади появился временный мавзолей. Каменное здание по проекту Алексея Щусева завершили в 1930 году. Оно стало главным советским памятником в ансамбле Красной площади.",
    source: sources.mausoleum
  },
  {
    title: "Парад Победы",
    date: "24 июня 1945",
    image: "Парад_Победы_на_Красной_площади_24_июня_1945_г._(25).jpg",
    text:
      "24 июня 1945 года на Красной площади прошёл Парад Победы. Его принимал маршал Георгий Жуков. Это событие закрепило за площадью роль главной государственной сцены военной памяти XX века.",
    source: sources.commons
  }
];

const timelineButtons = document.querySelector("#timelineButtons");
const timelineDetail = document.querySelector("#timelineDetail");
const landmarkCards = document.querySelector("#landmarkCards");
const peopleCards = document.querySelector("#peopleCards");
const galleryGrid = document.querySelector("#galleryGrid");
const modal = document.querySelector("#infoModal");
const modalContent = document.querySelector("#modalContent");
const modalClose = document.querySelector("#modalClose");

function renderPhotoCarousel(photos, title) {
  const controls =
    photos.length > 1
      ? `
        <div class="carousel-controls">
          <button class="carousel-btn" data-carousel-prev aria-label="Предыдущее фото">‹</button>
          <span class="carousel-counter">1 / ${photos.length}</span>
          <button class="carousel-btn" data-carousel-next aria-label="Следующее фото">›</button>
        </div>
      `
      : "";

  return `
    <div class="photo-carousel" data-carousel>
      <div class="carousel-stage">
        ${photos
          .map(
            (photo, index) => `
              <figure class="carousel-slide${index === 0 ? " active" : ""}" data-slide>
                <img src="${commons(photo.file, 1400)}" alt="${photo.caption || title}" loading="lazy" />
                <figcaption>${photo.caption || title}</figcaption>
              </figure>
            `
          )
          .join("")}
      </div>
      ${controls}
    </div>
  `;
}

function renderTimelineButtons() {
  timelineButtons.innerHTML = timeline
    .map(
      (item, index) => `
        <button class="timeline-btn${index === 0 ? " active" : ""}" data-id="${item.id}">
          <strong>${item.period}</strong>
          <span>${item.subtitle}</span>
        </button>
      `
    )
    .join("");
}

function renderTimelineDetail(item) {
  timelineDetail.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.text}</p>
    <div class="detail-meta">
      ${item.dates.map((date) => `<span class="pill">${date}</span>`).join("")}
    </div>
    <p><strong>Связанные личности:</strong> ${item.people.join(", ")}.</p>
    <div class="detail-images">
      ${item.images
        .map(
          (image) => `
            <figure>
              <img src="${commons(image.file)}" alt="${image.caption}" loading="lazy" />
              <figcaption>${image.caption}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
    <a class="modal-source" href="${item.source}" target="_blank" rel="noreferrer">Источник по теме</a>
  `;
}

function renderLandmarks() {
  landmarkCards.innerHTML = landmarks
    .map(
      (item, index) => `
        <button class="landmark-card" data-index="${index}">
          <img src="${commons(item.image, 900)}" alt="${item.title}" loading="lazy" />
          <div class="landmark-body">
            <h3>${item.title}</h3>
            <p>${item.short}</p>
          </div>
        </button>
      `
    )
    .join("");
}

function renderPeople() {
  peopleCards.innerHTML = people
    .map(
      (item, index) => `
        <button class="person-card" data-index="${index}">
          <span class="person-date">${item.date}</span>
          <h3>${item.name}</h3>
          <p>${item.text}</p>
        </button>
      `
    )
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = gallery
    .map(
      (item, index) => `
        <article class="gallery-card" data-index="${index}" tabindex="0" role="button" aria-label="Открыть изображение: ${item.title}">
          <figure>
            <img src="${commons(item.image, 900)}" alt="${item.title}" loading="lazy" />
            <figcaption>
              <strong>${item.title}</strong>
              <span>${item.date}</span>
            </figcaption>
          </figure>
        </article>
      `
    )
    .join("");
}

function openLandmark(item) {
  modalContent.innerHTML = `
    ${renderPhotoCarousel(item.photos, item.title)}
    <p class="eyebrow">${item.date}</p>
    <h3 id="modalTitle">${item.title}</h3>
    ${item.details.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <ul>
      ${item.facts.map((fact) => `<li>${fact}</li>`).join("")}
    </ul>
    <p><strong>Связанные личности:</strong> ${item.people.join(", ")}.</p>
    <a class="modal-source" href="${item.source}" target="_blank" rel="noreferrer">Источник по теме</a>
  `;
  modal.showModal();
}

function openPerson(item) {
  modalContent.innerHTML = `
    ${renderPhotoCarousel(item.photos, item.name)}
    <p class="eyebrow">${item.date}</p>
    <h3 id="modalTitle">${item.name}</h3>
    ${item.details.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <a class="modal-source" href="${item.source}" target="_blank" rel="noreferrer">Источник по теме</a>
  `;
  modal.showModal();
}

function openGallery(item) {
  modalContent.innerHTML = `
    ${renderPhotoCarousel([{ file: item.image, caption: item.title }], item.title)}
    <p class="eyebrow">${item.date}</p>
    <h3 id="modalTitle">${item.title}</h3>
    <p>${item.text}</p>
    <a class="modal-source" href="${item.source}" target="_blank" rel="noreferrer">Источник изображения или темы</a>
  `;
  modal.showModal();
}

function updateCarousel(carousel, direction) {
  const slides = [...carousel.querySelectorAll("[data-slide]")];
  const current = slides.findIndex((slide) => slide.classList.contains("active"));
  const next = (current + direction + slides.length) % slides.length;
  slides[current].classList.remove("active");
  slides[next].classList.add("active");
  const counter = carousel.querySelector(".carousel-counter");
  if (counter) counter.textContent = `${next + 1} / ${slides.length}`;
}

renderTimelineButtons();
renderTimelineDetail(timeline[0]);
renderLandmarks();
renderPeople();
renderGallery();

timelineButtons.addEventListener("click", (event) => {
  const button = event.target.closest(".timeline-btn");
  if (!button) return;
  document.querySelectorAll(".timeline-btn").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderTimelineDetail(timeline.find((item) => item.id === button.dataset.id));
});

landmarkCards.addEventListener("click", (event) => {
  const card = event.target.closest(".landmark-card");
  if (!card) return;
  openLandmark(landmarks[Number(card.dataset.index)]);
});

peopleCards.addEventListener("click", (event) => {
  const card = event.target.closest(".person-card");
  if (!card) return;
  openPerson(people[Number(card.dataset.index)]);
});

galleryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".gallery-card");
  if (!card) return;
  openGallery(gallery[Number(card.dataset.index)]);
});

galleryGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".gallery-card");
  if (!card) return;
  event.preventDefault();
  openGallery(gallery[Number(card.dataset.index)]);
});

modal.addEventListener("click", (event) => {
  const prev = event.target.closest("[data-carousel-prev]");
  const next = event.target.closest("[data-carousel-next]");
  if (prev || next) {
    updateCarousel(event.target.closest("[data-carousel]"), prev ? -1 : 1);
    return;
  }

  const bounds = modal.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (clickedOutside) modal.close();
});

modalClose.addEventListener("click", () => modal.close());
