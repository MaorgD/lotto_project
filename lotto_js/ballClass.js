class Ball{
  constructor(_parent,_num,_color){
    this.parent = _parent;
    this.num = _num;
    this.color = _color;
  }

  render(){
    let div = document.createElement("div");
    div.className = "ball";
    div.style.background = this.color;
    document.querySelector(this.parent).append(div);

    div.innerHTML = `<div class="ball_center">${this.num}</div>`
  }
}

export default Ball;