// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Below is a list of my publications in reversed chronological order, with links to all the relevant resources such as arXiv, GitHub, slides, etc. An always up-to-date list of my papers is available on  Google Scholar..",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You are welcome to view and download my CV here!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "&quot;The mind is not a vessel to be filled but a fire to be kindled.&quot; - Plutarch",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-improving-nocturnal-precipitation-and-low-level-jets-over-the-great-plains-with-an-advanced-turbulence-representation",
        
          title: "Improving Nocturnal Precipitation and Low-Level Jets over the Great Plains with an Advanced...",
        
        description: "English version of my contribution to AISAM newsletter based on my JAMES paper which shows how extending the higher-order scheme CLUBB improves the nocturnal precipitation peak on the Great Plains along with the associated Low-Level Jet wind structure.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/great-plains-clubb/";
          
        },
      },{id: "post-poleward-intensification-of-midlatitude-extreme-winds-under-warmer-climate",
        
          title: "Poleward Intensification of Midlatitude Extreme Winds Under Warmer Climate",
        
        description: "Repost of the npj Climate and Atmospheric Science research highlight in the GFDL/NOAA winter bulletin",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/gfdl-highlight/";
          
        },
      },{id: "post-machine-learning-complement-or-replacement-of-numerical-weather-prediction",
        
          title: "Machine Learning: complement or replacement of Numerical Weather Prediction?",
        
        description: "Personal opinion post on the future of machine learning for weather prediction.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/social-metwork-gentile/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-latest-paper-modelling-intense-storms-hitting-the-uk-and-europe-with-the-latest-km-scale-gfdl-climate-model-is-out",
          title: 'My latest paper modelling intense storms hitting the Uk and Europe with the...',
          description: "",
          section: "News",},{id: "news-i-am-thrilled-to-announce-that-i-am-joining-ncas-and-the-university-of-reading-as-research-scientist-i-will-use-and-further-improve-the-latest-state-of-the-art-climate-models-to-run-high-resolution-climate-simulations-of-how-climate-change-is-altering-heavy-rainfall-flooding-and-extreme-winds-across-the-uk-and-north-atlantic",
          title: 'I am thrilled to announce that I am joining NCAS and the University...',
          description: "",
          section: "News",},{id: "news-the-preprint-of-our-latest-study-enhancing-great-plains-nocturnal-precipitation-and-low-level-jets-in-am4-with-an-extended-clubb-closure-is-now-online-we-show-how-directly-prognosing-the-momentum-flux-and-using-a-multiscale-turbulent-lengthscale-in-the-higher-order-closure-clubb-turbulence-scheme-improves-precipitation-timing-and-the-representation-of-low-level-jets-in-high-resolution-climate-simulations",
          title: 'The preprint of our latest study, Enhancing Great Plains Nocturnal Precipitation and Low-Level...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
