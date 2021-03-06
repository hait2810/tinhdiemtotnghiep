const btns = document.querySelectorAll(".btn_select");
const Listitems = document.querySelectorAll(".items-list");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    btns.forEach((btn) => btn.classList.remove("btn-info"));
    button.classList.add("btn-info");
  });
});

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    
    Listitems.forEach((item) => {
      
      if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// count thpt

const btnthpt = document.querySelector(".btn_thpt");

btnthpt.addEventListener("click", (e) => {
  e.preventDefault();

  const toan = parseFloat(document.querySelector(".toan").value);
  const nguvan = parseFloat(document.querySelector(".nguvan").value);
  const ngoaingu = parseFloat(document.querySelector(".ngoaingu").value);
  const lichsu = parseFloat(document.querySelector(".lichsu").value);
  const hoa_dia = parseFloat(document.querySelector(".hoa_dia").value);
  const sinh_gdcd = parseFloat(document.querySelector(".sinh_gdcd").value);
  const tb12 = parseFloat(document.querySelector(".tb12").value)
  const khuyenkhich = parseFloat(document.querySelector(".khuyenkhich").value);
  const uutien = parseFloat(document.querySelector(".uutien").value);
  const show = document.querySelector(".show_point");
  const noti = document.querySelector(".noti");
  const monphu = (lichsu + hoa_dia + sinh_gdcd) / 3;
  const diem4baithi = (toan + nguvan + ngoaingu + monphu + khuyenkhich) / 4;
  const sum1 = (diem4baithi*7+(tb12*3))/10
  const sum = sum1 + uutien;
  console.log(uutien);
  console.log(tb12);
  show.classList.add('btn-info')
  show.innerHTML = sum
  
  if(sum >= 5 && nguvan > 1 && ngoaingu > 1 && lichsu > 1 && hoa_dia > 1 && sinh_gdcd > 1 && toan > 1 ) {
    noti.innerHTML = `<h1 class="btn btn-info"> Chúc mừng bạn đã đỗ tốt nghiệp! </h1>`;
}
if(nguvan <= 1 || ngoaingu <= 1 || lichsu <= 1 || hoa_dia <= 1 || sinh_gdcd <= 1 || toan <= 1) {
    noti.innerHTML = `<h1 class="btn btn-warning">Rất tiếc! Bạn đã trượt tốt nghiệp do có 1 môn dưới 1 hoặc bằng 1 </h1>`;
}else if(sum < 5 ){
  noti.innerHTML = `<h1 class="btn btn-warning">Rất tiếc! Bạn đã trượt tốt nghiệp do điểm trung bình nhỏ hơn 5 </h1>`;
}
});


// count gdtx
const btngdtx = document.querySelector(".btn_gdtx");
btngdtx.addEventListener("click", (e) => {
    e.preventDefault()
const toan = parseFloat(document.querySelector(".toana").value);
  const nguvan = parseFloat(document.querySelector(".nguvana").value);
  const tohop = parseFloat(document.querySelector(".tohopa").value);
  const tb12 = parseFloat(document.querySelector(".tb12a").value);
  const khuyenkhich = parseFloat(document.querySelector(".khuyenkhicha").value);
  const uutien = parseFloat(document.querySelector(".uutiena").value);
  const notif = document.querySelector(".notif");
  const show = document.querySelector(".show_pointa");
  const sum = (((((toan+nguvan+tohop) / 3) + (khuyenkhich/4)) * 7 + (tb12 *3)) / 10) + uutien
  show.classList.add('btn-info')
  show.innerHTML = sum
    if(sum >= 5 && nguvan > 1 && toan > 1 && tohop > 1 ) {
        notif.innerHTML = `<h1 class="btn btn-info"> Chúc mừng bạn đã đỗ tốt nghiệp! </h1>`;
    }
    if(nguvan <= 1 || toan <= 1 || tohop <= 1 ) {
        notif.innerHTML = `<h1 class="btn btn-warning">Rất tiếc! Bạn đã trượt tốt nghiệp do có 1 môn dưới 1 hoặc bằng 1 </h1>`;
    }else if(sum < 5 ){
      notif.innerHTML = `<h1 class="btn btn-warning">Rất tiếc! Bạn đã trượt tốt nghiệp do điểm trung bình nhỏ hơn 5 </h1>`;
    }
})