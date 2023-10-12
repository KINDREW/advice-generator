const fetchAdvice = async () => {
  let res = await fetch("https://api.adviceslip.com/advice");

  const data = await res.json();
  console.log(data);

  const id = document.querySelector(".header");
  id.innerHTML = `advice #${data.slip.id}`;

  const advice = document.querySelector(".advice");
  advice.textContent = `"${data.slip.advice}"`;
};

fetchAdvice();

const dice = document.querySelector(".dice");

dice.addEventListener("click", fetchAdvice);
