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
    period: "XV век",
    subtitle: "У стен Кремля появляется открытое пространство",
    title: "Поздний XV век: площадь у новой кремлёвской стены",
    text:
      "После перестройки Кремля при Иване III пространство у восточной стены постепенно становится важной городской зоной. Здесь сходятся торговля, дороги и политический центр Москвы. Позднее именно эта территория превратится в Красную площадь.",
    dates: ["конец XV века", "Иван III", "Московский Кремль"],
    people: ["Иван III", "Пьетро Антонио Солари", "Аристотель Фиораванти"],
    images: [
      { file: "Kremlin wall - Red Square.jpg", caption: "Кремлёвская стена со стороны Красной площади" },
      { file: "The_walls_of_the_Moscow_Kremlin_(19958117832).jpg", caption: "Стены Московского Кремля" }
    ],
    source: sources.britannicaRed
  },
  {
    id: "xvi",
    period: "XVI век",
    subtitle: "Площадь становится торговым и общественным центром",
    title: "XVI век: от торга к символу победы",
    text:
      "В XVI веке площадь сохраняет роль оживлённого торга и места городских собраний. После взятия Казани в 1552 году Иван IV приказывает построить Покровский собор, известный как Собор Василия Блаженного. Его строительство в 1555-1561 годах резко меняет архитектурный образ площади.",
    dates: ["1552", "1555-1561", "Иван IV Грозный"],
    people: ["Иван Грозный", "Барма и Постник", "Василий Блаженный"],
    images: [
      { file: "Saint-Basil-Cathedral_Moscow.jpg", caption: "Собор Василия Блаженного" },
      { file: "St._Basil’s_Cathedral_on_Red_Square_in_Moscow.jpg", caption: "Покровский собор на Красной площади" }
    ],
    source: sources.basil
  },
  {
    id: "xvii",
    period: "XVII век",
    subtitle: "Название и память о Смутном времени",
    title: "XVII век: Красная значит красивая",
    text:
      "Название «Красная площадь» закрепляется в XVII веке: слово «красная» в старом русском употреблении связывалось не только с цветом, но и с красотой. После событий Смутного времени площадь становится местом памяти о народном ополчении 1612 года.",
    dates: ["1612", "1613", "XVII век"],
    people: ["Кузьма Минин", "Дмитрий Пожарский", "Патриарх Гермоген", "Михаил Романов"],
    images: [
      { file: "Monument to Minin and Pozharsky, Red Square, 2009-06-19.jpg", caption: "Памятник Минину и Пожарскому" },
      { file: "Lobnoye mesto - Moscow - 2025 1.jpg", caption: "Лобное место" }
    ],
    source: sources.britannicaRed
  },
  {
    id: "xix",
    period: "XVIII-XIX века",
    subtitle: "Парадный облик и крупные общественные здания",
    title: "XVIII-XIX века: площадь становится архитектурным ансамблем",
    text:
      "После пожара 1812 года центр Москвы восстанавливают и упорядочивают. В XIX веке Красная площадь получает новые крупные акценты: Исторический музей, Верхние торговые ряды, обновлённые торговые пространства. Площадь становится более цельной и торжественной.",
    dates: ["1812", "1875-1883", "1890-1893"],
    people: ["Осип Бове", "Владимир Шервуд", "Александр Померанцев", "Александр II"],
    images: [
      { file: "Moscow_State_Historical_Museum_Red_Square.jpg", caption: "Государственный исторический музей" },
      { file: "Moscow_Gum_c13.jpg", caption: "ГУМ, бывшие Верхние торговые ряды" }
    ],
    source: sources.britannicaRed
  },
  {
    id: "xx",
    period: "XX век",
    subtitle: "Мавзолей, парады и советская эпоха",
    title: "XX век: главная государственная сцена",
    text:
      "После смерти Владимира Ленина в 1924 году у Кремлёвской стены появляется Мавзолей. В советское время Красная площадь становится местом государственных церемоний и военных парадов. Особенно важная дата - 24 июня 1945 года, Парад Победы.",
    dates: ["1924", "1930", "24 июня 1945"],
    people: ["Владимир Ленин", "Алексей Щусев", "Иосиф Сталин", "Георгий Жуков"],
    images: [
      { file: "Lenin's Tomb.jpg", caption: "Мавзолей Ленина" },
      { file: "Парад_Победы_на_Красной_площади_24_июня_1945_г._(25).jpg", caption: "Парад Победы 24 июня 1945 года" }
    ],
    source: sources.mausoleum
  },
  {
    id: "today",
    period: "XX-XXI века",
    subtitle: "Мировое наследие и современный символ",
    title: "С 1990 года: объект Всемирного наследия",
    text:
      "Кремль и Красная площадь включены в список Всемирного наследия UNESCO в 1990 году. Сегодня площадь воспринимается как исторический ансамбль, туристический центр и место государственных церемоний, где рядом видны следы царской, имперской, советской и современной эпох.",
    dates: ["1990", "UNESCO", "современная Москва"],
    people: ["реставраторы", "историки", "музейные работники"],
    images: [
      { file: "Red Square - State Historical Museum and GUM (19775671970).jpg", caption: "Красная площадь, музей и ГУМ" },
      { file: "Moscow's_Red_Square,_Moscow,_Russia.jpg", caption: "Современный вид площади" }
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
    details:
      "Официальное название - Собор Покрова Пресвятой Богородицы на Рву. Он был возведён в 1555-1561 годах в память о победе над Казанским ханством. Народное название связано с Василием Блаженным, московским юродивым, похороненным рядом с храмом.",
    people: ["Иван IV Грозный", "Барма и Постник", "Василий Блаженный"],
    source: sources.basil
  },
  {
    title: "Памятник Минину и Пожарскому",
    date: "1818",
    image: "Monument to Minin and Pozharsky, Red Square, 2009-06-19.jpg",
    short: "Память о народном ополчении 1612 года.",
    details:
      "Бронзовый памятник посвящён Кузьме Минину и князю Дмитрию Пожарскому, которые возглавили народное ополчение против польско-литовских войск. Монумент работы Ивана Мартоса был установлен в 1818 году.",
    people: ["Кузьма Минин", "Дмитрий Пожарский", "Иван Мартос"],
    source: "https://en.wikipedia.org/wiki/Monument_to_Minin_and_Pozharsky"
  },
  {
    title: "Лобное место",
    date: "XVI век",
    image: "Lobnoye mesto - Moscow - 2025 1.jpg",
    short: "Каменное возвышение для объявлений и торжественных действий.",
    details:
      "Лобное место - круглая каменная площадка перед Собором Василия Блаженного. Его связывают с публичными объявлениями, царскими указами и важными церемониями. Вопреки распространённому мифу, это не было постоянным местом казней.",
    people: ["московские цари", "патриархи", "городские жители"],
    source: "https://www.history.com/articles/red-square"
  },
  {
    title: "Мавзолей Ленина",
    date: "1924 / 1930",
    image: "Lenin's Tomb.jpg",
    short: "Главный памятник советской эпохи на площади.",
    details:
      "Первый временный мавзолей появился после смерти Владимира Ленина в 1924 году. Современное каменное сооружение по проекту архитектора Алексея Щусева было завершено в 1930 году.",
    people: ["Владимир Ленин", "Алексей Щусев"],
    source: sources.mausoleum
  },
  {
    title: "Государственный исторический музей",
    date: "1875-1883",
    image: "Moscow_State_Historical_Museum_Red_Square.jpg",
    short: "Музей истории России у северной стороны площади.",
    details:
      "Музей был основан в 1872 году, а здание в русском стиле строилось в 1875-1883 годах. Архитектор Владимир Шервуд сделал фасад частью общего исторического образа Красной площади.",
    people: ["Владимир Шервуд", "Александр II", "Алексей Уваров"],
    source: "https://www.visitrussia.com/citiesguide/moscow/places/historical_museum"
  },
  {
    title: "ГУМ",
    date: "1890-1893",
    image: "Moscow_Gum_c13.jpg",
    short: "Бывшие Верхние торговые ряды.",
    details:
      "Здание Верхних торговых рядов было построено в 1890-1893 годах по проекту Александра Померанцева при участии инженера Владимира Шухова. Оно продолжило торговую традицию площади, но в новом парадном масштабе.",
    people: ["Александр Померанцев", "Владимир Шухов", "московские купцы"],
    source: "https://www.expresstorussia.com/guide/gum-department-store-moscow.html"
  },
  {
    title: "Казанский собор",
    date: "XVII век / 1990-е",
    image: "Russia (Moscow) Kazan Cathedral on Red Square (35957517400).jpg",
    short: "Храм, связанный с памятью о Смутном времени.",
    details:
      "Казанский собор посвящён иконе Казанской Божией Матери и связан с памятью об освобождении Москвы в 1612 году. Историческое здание было утрачено в советское время, а затем восстановлено в 1990-е годы.",
    people: ["Дмитрий Пожарский", "Патриарх Гермоген", "реставраторы 1990-х"],
    source: "https://en.wikipedia.org/wiki/Kazan_Cathedral,_Moscow"
  },
  {
    title: "Кремлёвская стена и башни",
    date: "конец XV века",
    image: "Kremlin wall - Red Square.jpg",
    short: "Оборонительная линия, задающая западную сторону площади.",
    details:
      "Кремлёвская стена и башни формируют главный исторический фон Красной площади. Спасская башня, выходящая к площади, была построена в 1491 году итальянским мастером Пьетро Антонио Солари.",
    people: ["Иван III", "Пьетро Антонио Солари"],
    source: "https://www.britannica.com/place/Saviour-Tower"
  }
];

const people = [
  {
    date: "1491",
    name: "Пьетро Антонио Солари",
    text: "Строительство Спасской башни укрепило кремлёвскую линию, обращённую к будущей Красной площади."
  },
  {
    date: "1552",
    name: "Иван IV Грозный",
    text: "Победа над Казанским ханством стала поводом для строительства Покровского собора."
  },
  {
    date: "1555-1561",
    name: "Барма и Постник",
    text: "Имена мастеров традиционно связывают со строительством Собора Василия Блаженного."
  },
  {
    date: "1612",
    name: "Минин и Пожарский",
    text: "Народное ополчение освободило Москву, а память об этом событии закрепилась на площади памятником."
  },
  {
    date: "1875-1883",
    name: "Владимир Шервуд",
    text: "Архитектор Исторического музея создал здание, которое усилило парадный образ площади."
  },
  {
    date: "1890-1893",
    name: "Александр Померанцев",
    text: "Автор проекта Верхних торговых рядов, будущего ГУМа."
  },
  {
    date: "1924-1930",
    name: "Алексей Щусев",
    text: "Архитектор, создавший временные и затем постоянный каменный Мавзолей Ленина."
  },
  {
    date: "24 июня 1945",
    name: "Георгий Жуков",
    text: "Маршал принимал Парад Победы на Красной площади."
  },
  {
    date: "1990",
    name: "UNESCO",
    text: "Кремль и Красная площадь были включены в список Всемирного наследия."
  }
];

const gallery = [
  {
    title: "Кремлёвская стена и собор",
    image: "St._Basil_and_Kremlin_wall.jpg",
    text: "Панорамный вид показывает, как Кремль и Собор Василия Блаженного образуют узнаваемый силуэт площади.",
    source: sources.commons
  },
  {
    title: "Собор Василия Блаженного",
    image: "Saint-Basil-Cathedral_Moscow.jpg",
    text: "Один из главных архитектурных символов Москвы, построенный в XVI веке.",
    source: sources.basil
  },
  {
    title: "Исторический музей",
    image: "Moscow_State_Historical_Museum_Red_Square.jpg",
    text: "Краснокирпичное здание северной стороны площади подчёркивает музейный и торжественный характер ансамбля.",
    source: sources.commons
  },
  {
    title: "ГУМ",
    image: "Moscow_Gum_c13.jpg",
    text: "Торговая история площади продолжается в здании Верхних торговых рядов.",
    source: sources.commons
  },
  {
    title: "Мавзолей Ленина",
    image: "Lenin's Tomb.jpg",
    text: "Архитектурный знак XX века у Кремлёвской стены.",
    source: sources.mausoleum
  },
  {
    title: "Парад Победы",
    image: "Парад_Победы_на_Красной_площади_24_июня_1945_г._(25).jpg",
    text: "24 июня 1945 года Красная площадь стала местом одного из главных символических событий XX века.",
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
      (item) => `
        <article class="person-card">
          <span class="person-date">${item.date}</span>
          <h3>${item.name}</h3>
          <p>${item.text}</p>
        </article>
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
            <figcaption>${item.title}</figcaption>
          </figure>
        </article>
      `
    )
    .join("");
}

function openLandmark(item) {
  modalContent.innerHTML = `
    <img class="modal-hero" src="${commons(item.image, 1400)}" alt="${item.title}" />
    <p class="eyebrow">${item.date}</p>
    <h3 id="modalTitle">${item.title}</h3>
    <p>${item.details}</p>
    <ul>
      ${item.people.map((person) => `<li>${person}</li>`).join("")}
    </ul>
    <a class="modal-source" href="${item.source}" target="_blank" rel="noreferrer">Источник по теме</a>
  `;
  modal.showModal();
}

function openGallery(item) {
  modalContent.innerHTML = `
    <img class="modal-hero" src="${commons(item.image, 1600)}" alt="${item.title}" />
    <p class="eyebrow">Галерея</p>
    <h3 id="modalTitle">${item.title}</h3>
    <p>${item.text}</p>
    <a class="modal-source" href="${item.source}" target="_blank" rel="noreferrer">Источник изображения или темы</a>
  `;
  modal.showModal();
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

modalClose.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  const bounds = modal.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (clickedOutside) modal.close();
});
