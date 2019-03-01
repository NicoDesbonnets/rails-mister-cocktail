import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Split Tree Cocktails"],
    typeSpeed: 60,
    loop: false
  });
};

export { loadDynamicBannerText };
