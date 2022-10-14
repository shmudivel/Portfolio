import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    english: {
      translation: {
        "Home":"Home",
        "Skills":"Skills",
        "Projects":"Projects",
        "Contact":"Contact",

        "Hi, my name is":"Hi, my name is",
        "Darkhan Iglikov":"Darkhan Iglikov",

        "I'm a Front-end Developer.":
        "I'm a Front-end Developer.",

        "Interested in projects that improve processes at all levels from large business scales to small daily activities. ":
        "Interested in projects that improve processes at all levels from large business scales to small daily activities. ",

        "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.":
        "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.",

      },
    },

    russian: {
      translation: {
        "Home":"Главная",
        "Skills":"Навыки",
        "Projects":"Проекты",
        "Contact":"Контакты",

        "Hi, my name is":"Добро пожаловать，меня зовут",
        "Darkhan Iglikov":"Игликов Дархан",
        "I'm a Front-end Developer.":
        "Я Front-end разработчик.",

        "Interested in projects that improve processes at all levels from large business scales to small daily activities. ":
        "Заинтересованный в проектах, которые улучшают процессы на всех уровнях - от крупных бизнесов до мелких повседневных. ",

        "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.":
        "Я творчески подхожу к решению проблем, а благодаря моему многопрофильному образованию мне удается взлянуть и решить проблему лучшем путем.",

      },
    },

    chinese: {
      translation: {
        "Home":"首页",
        "Skills":"技能",
        "Projects":"项目",
        "Contact":"联系方式",

        "Hi, my name is":"欢迎光临，我是",
        "Darkhan Iglikov":"大汉",
        "I'm a Front-end Developer.":
        "我是一名前端开发员.",

        "Interested in projects that improve processes at all levels from large business scales to small daily activities. ":
        "对改善从大型企业规模到小型日常活动的各级流程的项目感兴趣。",

        "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.":
        "我是一个创造性的问题解决者，因为我的多元化背景帮助我从不同的角度引入解决方案。",

      },
    },
  },
  lng: localStorage.getItem("lng") || "russian",
});

export default i18next;
