class Alert {
  #alertContainerStyle = {
    // "z-index": "9999999",
    display: "none",
    "justify-content": "center",
    "align-items": "center",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    overflow: "auto",
    "background-color": "rgba(0,0,0)",
    "background-color": "rgba(0,0,0,0.4)",
  };

  #alertEleStyle = {
    "background-color": "blue",
    margin: "auto",
    padding: "20px",
    // border: "1px solid white",
    "border-radius": "5px",
    width: "400px",
    color: "white",
    "font-family": `'Oxygen', sans-serif`,
    "font-size": `15px`,
    "font-weight": "700",
  };
  #alertHeaderStyle = {
    display: "flex",
    "justify-content": "space-between",
    "font-family": `'Oxygen', sans-serif`,
    "font-weight": "700",
    "font-size": "25px",
    "margin-bottom": "10px",
  };

  #AlertContainer;
  #AlertEle;
  #AlertHeader;
  #AlertTitle;
  #AlertMessage;

  constructor(
    title = "Error",
    message = "some error message",
    bgColor = "blue"
  ) {
    /**
     * creating link to import google fonts
     */
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute(
      "href",
      `https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&family=Poppins:wght@400;500&display=swap`
    );
    document.head.appendChild(link);

    this.#AlertTitle = createText(title);
    this.#AlertMessage = createText(message);

    // console.log(this.#AlertContainer);
    // console.log(this.#AlertEle);
  }

  createAlert(bgColor) {
    /**
     * creating elements
     */

    this.#AlertContainer = createContainer(this.#alertContainerStyle);
    /**
     * overiding the backgrond color of alert element
     */
    this.#alertEleStyle["background-color"] = bgColor;

    this.#AlertEle = createContainer(this.#alertEleStyle);
    this.#AlertHeader = createContainer(this.#alertHeaderStyle);

    this.#AlertHeader.append(this.#AlertTitle);
    this.#AlertEle.append(this.#AlertHeader);
    this.#AlertEle.append(this.#AlertMessage);
    this.#AlertContainer.append(this.#AlertEle);
  }

  update(title, message, bgColor) {
    if (title) {
      this.#AlertTitle = createText(title);
    }
    if (message) {
      this.#AlertMessage = createText(message);
    }
    this.createAlert(bgColor);
  }

  show(
    title = "Error",
    message = "some error message for test",
    bgColor = "blue"
  ) {
    this.update(title, message, bgColor);
    this.#AlertContainer.style.display = "flex";
    document.body.append(this.#AlertContainer);

    document.body.addEventListener("click", (event) => {
      if (!this.#AlertEle.contains(event.target)) {
        this.hide();
      }
    });
    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.hide();
      }
    });
  }

  hide() {
    this.#AlertContainer.style.display = "none";
    document.body.removeChild(this.#AlertContainer);
  }
}

function createContainer(StyleProps) {
  const containerEle = document.createElement("div");

  for (let props in StyleProps) {
    if (StyleProps.hasOwnProperty(props)) {
      containerEle.style[props] = StyleProps[props];
    }
  }

  return containerEle;
}

function createText(text) {
  const textNode = document.createTextNode(text);
  return textNode;
}
