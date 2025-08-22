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
        },{id: "nav-presentations",
          title: "presentations",
          description: "Collection of some presentations and talks I have given to seminars, conferences, and workshops in the past.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
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
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65.%67%65%6E%74%69%6C%65@%72%65%61%64%69%6E%67.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/emanuele-silvio-gentile-b5a596141", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8XxJyIcAAAAJ", "_blank");
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
