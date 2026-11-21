document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-editor]").forEach((editor) => {
    const key = "jai-comp101-" + editor.dataset.editor;
    const saved = localStorage.getItem(key);
    if (saved) editor.innerHTML = saved;
    const save = () => {
      localStorage.setItem(key, editor.innerHTML);
      const status = document.getElementById("status-" + editor.dataset.editor.replace("artifact",""));
      if (status) status.textContent = "Saved in this browser.";
    };
    editor.addEventListener("input", save);
  });
  document.querySelectorAll("[data-clear]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = "jai-comp101-" + button.dataset.clear;
      if (confirm("Clear the saved text in this section?")) {
        localStorage.removeItem(key);
        const editor = document.querySelector(`[data-editor="${button.dataset.clear}"]`);
        if (editor) editor.innerHTML = "";
      }
    });
  });
});
