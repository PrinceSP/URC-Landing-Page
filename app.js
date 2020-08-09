const slide = () => {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.myLinks');
  const container = document.querySelector('.container');
  const bg_box = document.querySelector('.background');
  const texts = document.querySelector('.text');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  const logoText = document.querySelector('.logo-text');

  burger.addEventListener('click',() => {
    navigation.classList.toggle('nav-active');
    container.classList.toggle('container-width');
    bg_box.classList.toggle('bg-width');
    texts.classList.toggle('text-after');
    line1.classList.toggle('lineOne');
    line2.classList.toggle('lineTwo');
    line3.classList.toggle('lineThree');
    logoText.classList.toggle('logo');
    console.log(navigation);
  });

}

slide();
