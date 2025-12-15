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
        },{id: "post-challenges-and-opportunities-for-ai-and-kilometer-scale-climate-modelling-of-precipitation",
        
          title: "Challenges and Opportunities for AI and Kilometer-Scale Climate Modelling of Precipitation",
        
        description: "What sub-daily precipitation reveals about GraphCast, reanalysis, and kilometer-scale climate physics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-km-precip/";
          
        },
      },{id: "post-kilometer-scale-climate-intelligence-for-a-regenerative-urban-future",
        
          title: "Kilometer-Scale Climate Intelligence for a Regenerative Urban Future",
        
        description: "Climate-informed design and bioplanning at kilometre scale",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/bioplanning_climate/";
          
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
      },{id: "news-looking-forward-to-attending-the-weather-and-risk-management-european-meeting-wrma-in-paris-to-explore-how-weather-and-climate-science-help-build-a-more-resilient-insurance-risk-and-finance-sector-and-support-a-sustainable-future",
          title: 'Looking forward to attending the Weather and Risk Management European Meeting WRMA in...',
          description: "",
          section: "News",},{id: "news-new-preprint-on-ai-weather-prediction-a-process-based-evaluation-of-how-the-ai-model-graphcast-represents-the-global-diurnal-cycle-of-summer-precipitation-compared-with-satellite-observations-era5-and-a-global-5-km-convection-permitting-model-available-on-ess-open-archive-https-essopenarchive-org-records-176538317-73098714",
          title: '📄 New preprint on AI weather prediction — A process-based evaluation of how...',
          description: "",
          section: "News",},{id: "news-new-project-on-gpu-accelerated-ml-weather-modelling-starting-work-on-a-regional-machine-learning-demonstrator-using-gpus-and-the-bris-data-driven-weather-forecasting-model-with-a-focus-on-ai-based-regional-prediction-and-process-aware-evaluation-more-on-bris-model-here",
          title: '🚀 New project on GPU-accelerated ML weather modelling — Starting work on a...',
          description: "",
          section: "News",},{
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
