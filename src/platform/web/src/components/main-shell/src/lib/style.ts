import { css } from 'lit-element'

export default css`
  :host([hidden]) {
    display: none;
  }
  :host {
    display: block;
    box-sizing: border-box;
    border: 3px solid green;
    height: 100%;
    width: 100%;
  }
  ui-avatar {
    color: red;
    font-size: 2rem;
  }
`