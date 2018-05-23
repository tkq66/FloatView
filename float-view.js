import Visualization from "../lib/visualization.js";

/**
 * `float-view`
 * Takes in list of json. Present as floating object points that contains pop-over information.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
let self = null;
let data = null;
class FloatView extends Polymer.Element {
  constructor() {
    super();
  }

  static get is() {
    return 'float-view';
  }

  static get properties() {
    return {
      objectArray: {
        observer: '_dataChanged'
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _dataChanged(newVal, oldVal) {
    this._drawVisualization(newVal);
  }

  _drawVisualization(dataArray) {
    data = dataArray;
    console.log(data);
    let parentWidth = this.root.host.offsetWidth;
    let parentHeight = this.root.host.offsetHeight;
    let viz = new Visualization(parentWidth, parentHeight);
    this._p5 = new p5(viz.sketch.bind(viz), this.$.canvas_container);
  }
}

window.customElements.define(FloatView.is, FloatView);
