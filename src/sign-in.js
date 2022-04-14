const form = document.getElementById("sign-in-form");

form.addEventListener("submit", function (e) {
  // TODO: 阻止原本的事件發生
  e.preventDefault();

  // TODO: 取得帳號密碼的 input 元件

  // TODO: 將帳號密碼傳遞到後端，驗證是否正確

  // TODO: 驗證完畢後的事件
});

const addr = document.getElementById("addr");
const password = document.getElementById("password");

const addrHintText = document.getElementById("addr-hint-text");
const passwordHintText = document.getElementById("password-hint-text");
