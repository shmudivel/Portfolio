import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    english: {
      translation: {
        // NavBar
        Home: "Home",
        Skills: "Skills",
        Projects: "Projects",
        Contact: "Contact",

        // Home
        "Hi, my name is": "Hi, my name is",
        "Darkhan Iglikov": "Darkhan Iglikov",

        "I'm a Front-end Developer.": "I'm a Front-end Developer.",

        "Interested in projects that improve processes at all levels from large business scales to small daily activities. ":
          "Interested in projects that improve processes at all levels from large business scales to small daily activities. ",

        "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.":
          "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.",
        Linkedin: "Linkedin",
        Email: "Email",
        Resume: "Resume",

        // Skills / stack
        // "Skills":"Skills",
        // "These are the technologies I've worked with":"These are the technologies I've worked with",

        // Projects
        "Check out some of my recent projects":
          "Check out some of my recent projects",
        "Next.js and Stripe integration for payment processing. Sanity.io database for eCommerce data management. Customizable and user-friendly interface with advanced inventory and order management capabilities.":
          "Next.js and Stripe integration for payment processing. Sanity.io database for eCommerce data management. Customizable and user-friendly interface with advanced inventory and order management capabilities.",

        // Contact
        "Submit the form below or shoot me an email":
          "Submit the form below or shoot me an email",
        Name: "Name",
        Message: "Message",
        Send: "Send",
      },
    },

    russian: {
      translation: {
        // NavBar
        Home: "Главная",
        Skills: "Навыки",
        Projects: "Проекты",
        Contact: "Контакты",

        // Home
        "Hi, my name is": "Добро пожаловать，меня зовут",
        "Darkhan Iglikov": "Игликов Дархан",
        "I'm a Front-end Developer.": "Я Front-end разработчик.",

        "Interested in projects that improve processes at all levels from large business scales to small daily activities. ":
          "Заинтересованный в проектах, которые улучшают процессы на всех уровнях - от крупных бизнесов до мелких повседневных. ",

        "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.":
          "Я творчески подхожу к решению проблем, а благодаря моему многопрофильному образованию мне удается взлянуть и решить проблему лучшем путем.",
        Linkedin: "Linkedin",
        "Email me": "Email me",
        Resume: "Resume",

        // Skills / stack
        //    "Skills":"Навыки",
        // "These are the technologies I've worked with":"These are the technologies I've worked with",

        // Projects
        "Check out some of my recent projects":
          "Несколько моих недавних проектов",
        "Next.js and Stripe integration for payment processing. Sanity.io database for eCommerce data management. Customizable and user-friendly interface with advanced inventory and order management capabilities.":
          "Интеграция Next.js и Stripe для проведения платежей. База данных Sanity.io для управления данными eCommerce. Настраиваемый и удобный интерфейс с расширенными возможностями управления товарными запасами и заказами.",

        // Contact
        "Submit the form below or shoot me an email":
          "Отправьте форму ниже или напишите мне по электронной почте",
        Name: "Имя",
        Message: "Сообщение",
        Send: "Отправить",
      },
    },

    chinese: {
      translation: {
        // NavBar
        Home: "首页",
        Skills: "技能",
        Projects: "项目",
        Contact: "联系方式",

        // Home
        "Hi, my name is": "欢迎光临，我是",
        "Darkhan Iglikov": "大汉",
        "I'm a Front-end Developer.": "我是一名前端开发员.",

        "Interested in projects that improve processes at all levels from large business scales to small daily activities. ":
          "对改善从大型企业规模到小型日常活动的各级流程的项目感兴趣。",

        "I am a creative problem solver, as my diverse background helps me to introduce solutions from different perspectives.":
          "我是一个创造性的问题解决者，因为我的多元化背景帮助我从不同的角度引入解决方案。",
        Linkedin: "领英",
        Email: "电邮",
        Resume: "简历",

        // Skills / stack
        // "Skills":"技能",
        // "These are the technologies I've worked with":"These are the technologies I've worked with",

        //Projects
        "Check out some of my recent projects": "我最近的一部分项目",
        "Next.js and Stripe integration for payment processing. Sanity.io database for eCommerce data management. Customizable and user-friendly interface with advanced inventory and order management capabilities.":
          "Next.js和Stripe集成 用于支付处理。用于电子商务数据管理的Sanity.io数据库。可定制和用户友好的界面 具有先进的库存和订单管理能力",

        // Contact
        "Submit the form below or shoot me an email":
          "提交以下表格或向我发送电子邮件",
        Name: "名字",
        Message: "留言",
        Send: "发送",
      },
    },
  },
  lng: localStorage.getItem("lng") || "english",
});

export default i18next;
