import "./style.css";
import { apiCall } from "./helper";



import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";


document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', function(e) {
      e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
      const url = this.querySelector('a').getAttribute('data-url');
      window.open(url, '_blank');
  });
});






