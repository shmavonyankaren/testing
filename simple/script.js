document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const code = button
      .closest(".code-container")
      .querySelector("code").innerText;

    navigator.clipboard.writeText(code).then(() => {
      const text = button.querySelector(".copy-text");

      button.classList.add("copied");
      text.textContent = "Copied";

      setTimeout(() => {
        button.classList.remove("copied");
        text.textContent = "Copy";
      }, 1500);
    });
  });
});
