const template = document.createElement('template');
template.innerHTML = `

  <style>
    .tooltip-container{
      position: relative;
      display: inline-block;
      z-index: 2;
    }
    .exit{
      display: none;
    }
    svg{
      width: 1rem;
      cursor: pointer;
    }
    .tooltip-holder{
      position: absolute;
      z-index: 10;
      bottom: 125%;
      width: 300px;
      background-color: #ffffff;
      box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      border-radius: 4px;
      padding:6px;
      transform: scale(0);
      transform-origin: bottom left;
      transition: transform 0.5 ease-in-out;
    }
    .tooltip-holder.active{
      transform: scale(1);
    }

  </style>

  <div class="tooltip-container">
    <svg class="alert" viewBox="0 0 22 22"><g transform="translate(-880 -400)"><path d="M11,0a11.109,11.109,0,0,1,9.143,4.881A10.735,10.735,0,0,1,22,11,11,11,0,1,1,11,0Z" transform="translate(880 400)" fill="#35affc"/><path d="M0,0H4L2.5,12h-1Z" transform="translate(889 404)" fill="#fff"/><circle cx="1" cy="1" r="1" transform="translate(890 417)" fill="#fff"/></g></svg>
    <svg class="exit" viewBox="0 0 22 22"><g transform="translate(-880 -400)"><path d="M11,0a11.109,11.109,0,0,1,9.143,4.881A10.735,10.735,0,0,1,22,11,11,11,0,1,1,11,0Z" transform="translate(880 400)" fill="#35affc"/><path d="M0,0H2V12H0Z" transform="translate(886.046 407.882) rotate(-45)" fill="#fff"/><path d="M0,0H2V12H0Z" transform="translate(894.531 406.468) rotate(45)" fill="#fff"/></g></svg>

    <div class="tooltip-holder">
      <slot name="message" />
    </div>
  </div>
`

class toolTip extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  tooltip(expandState){
    const tooltipHolder = this.shadowRoot.querySelector('.tooltip-holder'),
    alert = this.shadowRoot.querySelector('.alert'),
    exit = this.shadowRoot.querySelector('.exit');
    if(expandState == true){
      tooltipHolder.classList.add('active');
      alert.style.display = 'none';
      exit.style.display = 'block';
      expandState = false
    }
    else{
      tooltipHolder.classList.remove('active');
      exit.style.display = 'none';
      alert.style.display = 'block';
    }
  }
  connectedCallback(){
    this.shadowRoot.querySelector('.alert').addEventListener('click',() =>{
      this.tooltip(true)
    })
    this.shadowRoot.querySelector('.exit').addEventListener('click',() =>{
      this.tooltip(false)
    })
    if(this.getAttribute('tip_bg')){
      this.shadowRoot.querySelector('.tooltip-holder').style.backgroundColor = this.getAttribute('tip_bg')
    }
    if(this.getAttribute('tip_color')){
      this.shadowRoot.querySelector('.tooltip-holder').style.color = this.getAttribute('tip_color')
    }
  }
}

window.customElements.define('tool-tip', toolTip)