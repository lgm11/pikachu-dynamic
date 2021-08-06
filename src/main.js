const music = ()=>{
    let audio = document.getElementById('music')
    audio.play()
}
const Div = document.getElementById('mouth')
Div.onclick = ()=>{
    music()
}



const string = `
* {
    box-sizing: border-box;
  }
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  .skin {
    position: relative;
    background: rgb(255, 230, 0);
    height: 100vh;
  }
  
  .nose {
    position: absolute;
    border-radius: 80px 0 0;
    width: 10px;
    height: 10px;
    background: black;
    left: 50%;
    top: 200px;
    transform: rotate(45deg);
    margin-left: -5px;
  }
  
  .eye {
    position: absolute;
    width: 60px;
    height: 60px;
    background: #2e2e2e;
    border: 3px solid black;
    left: 50%;
    top: 160px;
    margin-left: -30px;
  }
  
  .eye.left {
    transform: translateX(-100px);
    border-radius: 50%;
  }
  
  .eye.right {
    transform: translateX(100px);
    border-radius: 50%;
  }
  
  .eye::before {
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;
    border: 3px solid black;
    animation: eye 5s infinite linear;
  }
  
  .mouth {
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    position: absolute;
    top: 240px;
    overflow: hidden;
  }
  
  .mouth .lip .left {
    position: absolute;
    width: 100px;
    height: 250px;
    border: 3px solid black;
    left: 50%;
    margin-left: -60px;
    bottom: 132px;
    border-radius: 100px/200px;
    transform: rotateZ(45deg);
    background: rgb(255, 230, 0);
    z-index: 2;
  }
  
  .mouth .lip .right {
    position: absolute;
    width: 100px;
    height: 250px;
    border: 3px solid black;
    left: 50%;
    bottom: 132px;
    margin-left: -40px;
    border-radius: 100px/200px;
    transform: rotateZ(-45deg);
    background: rgb(255, 230, 0);
    z-index: 2;
  }
  
  .tongue .tongue1 {
    border: 3px solid black;
    width: 150px;
    height: 500px;
    left: 25px;
    bottom: 50px;
    position: absolute;
    background: rgb(155, 0, 10);
    border-radius: 75px/250px;
    z-index: 1;
    overflow: hidden;
    animation: tongue 5s infinite ease-in;
  }
  
  .tongue .tongue1 .tongue2 {
    width: 144px;
    height: 300px;
    position: absolute;
    top: 375px;
    border-radius: 145px/170px;
    background: rgb(255, 72, 95);
  }
  
  .face {
    border: 3px solid black;
    width: 66px;
    height: 66px;
    left: 50%;
    background: #ff0000;
    position: absolute;
    margin-left: -33px;
    top: 270px;
  }
  
  .face.left {
    transform: translateX(-150px);
    border-radius: 50%;
  }
  
  .face.right {
    transform: translateX(150px);
    border-radius: 50%;
  }
  
  @keyframes wave {
    0% {
      transform: rotate(45deg);
    }
    33% {
      transform: rotate(53deg);
    }
    66% {
      transform: rotate(37deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  
  .nose:hover {
    animation: wave 150ms infinite linear;
  }
  
  @keyframes eye {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(5px);
    }
    20% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(5px);
    }
    40% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    60% {
      transform: translateY(20px);
    }
    70% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateY(-2px);
    }
  }
  
  @keyframes tongue {
    0%,
    80% {
      border-radius: 75px/250px;
      bottom: 50px;
    }
    95% {
      border-radius: 75px/250px;
      bottom: 50px;
    }
    100% {
      border-radius: 45px/250px;
      bottom: 200px;
    }
  }
  
`
let n = 1
demo.innerText = string.substr(0,n)
demo2.innerHTML = string.substr(0,n)

let id = setInterval(()=>{
    n += 1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    demo.scrollTop = demo.scrollHeight
},0)