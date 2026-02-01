```js
/* Universal Nav (Home / Back) — Kim Sze */
(function(){
  // Per-page override:
  // <script src="https://limkimsze-maker.github.io/nav.js" data-home="https://.../P3_Mental_Sum_Challenge/"></script>
  const myScript = document.currentScript;
  const HOME_URL =
    (myScript && myScript.getAttribute("data-home")) ||
    "https://limkimsze-maker.github.io/P3_Mental_Sum_Challenge/"; // default

  function mount(){
    if(document.getElementById("universal-nav")) return; // avoid duplicates

    const wrap = document.createElement("div");
    wrap.id = "universal-nav";
    wrap.innerHTML = `
      <style>
        .nav-top{
          position:fixed;
          left:50%;
          bottom:14px; /* ✅ universal fallback */
          transform: translateX(-50%);
          display:flex;
          gap:14px;
          z-index:9999;
          padding-bottom: env(safe-area-inset-bottom); /* ✅ iPhone safe area (ignored if unsupported) */
          pointer-events:auto;
        }

        .nav-btn{
          padding:18px 28px;
          border:none;
          border-radius:22px;
          background:#0ea5e9;
          color:#fff;
          font-size:22px;
          font-weight:950;
          cursor:pointer;
          box-shadow:0 12px 28px rgba(0,0,0,.22);
          user-select:none;
          -webkit-tap-highlight-color: transparent;
        }

        .nav-btn:hover{ filter:brightness(1.05); }
        .nav-btn:active{ transform: translateY(1px); }
        .nav-btn:focus{ outline: none; box-shadow:0 0 0 5px rgba(14,165,233,.22), 0 12px 28px rgba(0,0,0,.22); }
      </style>

      <div class="nav-top" aria-label="navigation buttons">
        <button class="nav-btn" id="btnHome" type="button">🏠 Home</button>
        <button class="nav-btn" id="btnBack" type="button">🔙 Back</button>
      </div>
    `;

    document.body.appendChild(wrap);

    const btnHome = document.getElementById("btnHome");
    const btnBack = document.getElementById("btnBack");

    if(btnHome){
      btnHome.addEventListener("click", () => {
        location.href = HOME_URL;
      });
    }

    if(btnBack){
      btnBack.addEventListener("click", () => {
        if(history.length > 1) history.back();
        else location.href = HOME_URL;
      });
    }
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", mount);
  }else{
    mount();
  }
})();
```
