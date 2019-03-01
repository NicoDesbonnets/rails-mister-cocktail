import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["All cocktails"],
    typeSpeed: 60,
    loop: false
  });
};

export { loadDynamicBannerText };
