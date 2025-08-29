document.addEventListener("DOMContentLoaded", () => {
  const heartCounter = document.getElementById("heart-counter");
  const balanceEl = document.getElementById("balance");
  const copyCounter = document.getElementById("copy-counter");
  const historyBox = document.getElementById("history");
  const clearBtn = document.getElementById("clear");
  let hearts = Number(heartCounter.textContent) || 0;
  let balance = Number(balanceEl.textContent) || 0;
  let copies = Number(copyCounter.textContent) || 0;
  const CALL_COST = 20;
  function renderCounts() {
    heartCounter.textContent = hearts;
    balanceEl.textContent = balance;
    copyCounter.textContent = copies;
  }
  function nowTime() {
    return new Date().toLocaleTimeString();
  }
  function getCardInfo(btn) {
    const card = btn.closest(".card");
    if (!card) return { title: "Service", number: "" };
    const title = (
      card.querySelector("[data-title]")?.textContent || "Service"
    ).trim();
    const number = (
      card.querySelector("[data-number]")?.textContent || ""
    ).trim();
    return { title, number };
  }
  function addHistory(title, number) {
    if (!number) return;
    const div = document.createElement("div");
    div.className =
      "p-3 rounded-md border border-gray-200 bg-white flex flex-col gap-1";
    div.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="text-sm font-medium">${title}</span>
        <span class="text-[11px] text-gray-500">${nowTime()}</span>
      </div>
      <div class="text-sm text-gray-600">${number}</div>
    `;
    historyBox.prepend(div);
  }
  document.querySelectorAll("button.heart").forEach((btn) => {
    btn.addEventListener("click", () => {
      hearts += 1;

      btn.classList.toggle("text-rose-500");
      renderCounts();
    });
  });
  document.querySelectorAll("button.copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const { number } = getCardInfo(btn);
      if (!number) return;
      try {
        await navigator.clipboard.writeText(number);
      } catch (e) {
        const temp = document.createElement("input");
        temp.value = number;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      copies += 1;
      renderCounts();
      alert("Copied: " + number);
    });
  });
  document.querySelectorAll("button.call").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { title, number } = getCardInfo(btn);
      if (!number) return;
      if (balance < CALL_COST) {
        alert("Not enough coins. Need " + CALL_COST + " coins. For the call");
        return;
      }
      balance -= CALL_COST;
      renderCounts();
      addHistory(title, number);
      alert("Calling " + title + " (" + number + ")");
    });
  });
  clearBtn.addEventListener("click", () => {
    historyBox.innerHTML = "";
  });
  renderCounts();
});
