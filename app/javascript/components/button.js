const button = document.querySelector(".fa-arrow-circle-down");

const scrollPage = () => {
  button.addEventListener('click', (event) => {
    window.scrollBy(0, window.innerHeight);
  })
};

export { scrollPage }
