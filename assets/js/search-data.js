// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/scholar.google.com/citations?user=ncqrrtEAAAAJ&hl=en&authuser=1";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/www.dropbox.com/scl/fi/wtm4m8i1y5mctrovtd54r/CV-May-4-2025.pdf?rlkey=d1yge2ifcfgg0fcl6f18k4ljs&st=oxcq7zdy&dl=0";
          },
        },{id: "awards-gold-medal-chinese-national-olympiad-in-informatics-2016",
          title: 'Gold Medal, Chinese National Olympiad in Informatics 2016',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards/noi-2016.html";
            },},{id: "awards-waibel-presidential-fellowship-2024",
          title: 'Waibel Presidential Fellowship 2024',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards/waibel-2024.html";
            },},{id: "awards-tsinghua-university-yao-recognition-prize-2021",
          title: 'Tsinghua University Yao Recognition Prize 2021',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards/yao-2021.html";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-join-the-language-technologies-institute-at-carnegie-mellon-university-as-a-phd-student",
          title: 'Join the Language Technologies Institute at Carnegie Mellon University as a PhD student....',
          description: "",
          section: "News",},{id: "news-intern-at-nvidia-speech-ai-advised-by-zhehuai-chen-oleksii-hrinchuk-and-vitaly-lavrukhin",
          title: 'Intern at NVIDIA Speech AI, advised by Zhehuai Chen, Oleksii Hrinchuk, and Vitaly...',
          description: "",
          section: "News",},{id: "news-give-a-talk-at-speech-lunch-here-is-the-slide",
          title: 'Give a talk at Speech Lunch. Here is the slide.',
          description: "",
          section: "News",},{id: "news-presented-oral-paper-anticipating-future-with-large-language-model-for-simultaneous-machine-translation-at-naacl-2025",
          title: 'Presented Oral Paper Anticipating Future with Large Language Model for Simultaneous Machine Translation...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
