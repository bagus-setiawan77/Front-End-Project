const faqDesc = document.querySelectorAll(".faq-desc");
const faqDesc2 = document.querySelectorAll(".faq-description");
const arr = document.querySelectorAll(".arrow");

for (let i = 0; i < faqDesc.length; i++) {
  faqDesc[i].addEventListener("click", () => {
    faqDesc2[i].classList.toggle("faq-description-opened");
    arr[i].classList.toggle("arrow-rotated");
  });
}
