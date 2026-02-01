/* Universal Nav (Home / Back) — Kim Sze */
(function(){
  // Allow per-page override:
  // <script src=".../nav.js" data-home="https://.../Mental_Sums/"></script>
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
          top:12px;
          right:12px;
          display:flex;
          gap:10px;
          z-index:9999;
        }
        .nav-btn{
          padding:10px 14px;
          border:none;
          border-radius:14px;
          background:#0ea5e9;
          color:#fff;
          font-size:14px;
          font-weight:600;
          cursor:pointer;
          box-shadow:0 6px 16px rgba(0,0,0,.15);
        }
        .nav-btn:hover{ filter:brightness(1.05); }
      </style>

      <div class="nav-top">
        <button class="nav-btn" id="btnHome" type="button">🏠 Home</button>
        <button class="nav-btn" id="btnBack" type="button">🔙 Back</button>
      </div>
    `;

    document.body.appendChild(wrap);

    document.getElementById("btnHome").onclick = () => {
      location.href = HOME_URL;
    };

    document.getElementById("btnBack").onclick = () => {
      if(history.length > 1) history.back();
      else location.href = HOME_URL;
    };
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", mount);
  }else{
    mount();
  }
})();
