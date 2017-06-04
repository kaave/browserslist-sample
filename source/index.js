class Main {
  constructor () {
    const date = new Date();
    console.log(`Start: ${date.toLocaleString()}`);

    this.onDOMContentLoaded = this.onDOMContentLoaded.bind(this);
  }

  onDOMContentLoaded () {
    const date = new Date();
    console.log(`DOMContentLoaded: ${date.toLocaleString()}`);
  }
}

const main = new Main();
window.addEventListener('DOMContentLoaded', main.onDOMContentLoaded);

