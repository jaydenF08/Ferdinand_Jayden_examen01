document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".col").addEventListener("change", function () {
      const htmlElement = document.documentElement;
      const currentCarte = htmlElement.getAttribute("carte");
  
      if (currentCarte === "d-none") {
        htmlElement.setAttribute("carte", "none");
      } else {
        htmlElement.setAttribute("carte", "d-none");
      }
    });
  });
  