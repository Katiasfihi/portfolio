const { styler, everyFrame } = window.popmotion;

const container = document.querySelector('.ul1');
console.log(container);
console.log(container.childNodes);

const ballStylers = Array
  .from(container.childNodes)
  .map(styler);
  console.log(ballStylers);

const distance = 100;

everyFrame()
  .start((timestamp) => ballStylers.map((thisStyler, i) => {
    if (thisStyler !== undefined) {
        thisStyler.set('y', distance * Math.sin(0.0006 * timestamp + (i * 0.1)));
    }
}));