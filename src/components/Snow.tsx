import React, { useState, useEffect } from 'react'

const Snow: React.FC = (): JSX.Element => {
  // const [zoomNumber, setZoomNumber] = useState<number>(1)

  // const scrollableElement = document.body; //document.getElementById('scrollableElement');

  // scrollableElement.addEventListener('wheel', checkScrollDirection);
  
  // function checkScrollDirection(event: any) {
  //   if (checkScrollDirectionIsUp(event)) {
  //     setZoomNumber(zoomNumber + .2)
  //     console.log('UP', zoomNumber);
  //   } else {
  //     setZoomNumber(zoomNumber - .2)
  //     console.log('Down', zoomNumber);
  //   }
  // }
  
  // function checkScrollDirectionIsUp(event: any) {
  //   if (event.wheelDelta) {
  //     return event.wheelDelta > 0;
  //   }
  //   return event.deltaY < 0;
  // }

  // SNOWFLAKE COUNT
  let snowFlakesCount = 125

  // Creating snowflakes
  const spawnSnow = ( snowDensity = 200 ) => {
    snowDensity -= 1

    let snow = document.getElementById('snow')
    if (snow) {

      for (let x = 0; x < snowDensity; x++) {
        let board = document.createElement('div')
        board.className = "snowflake"
        
        snow.appendChild(board)
      }
    }
  }

  // Append style for each snowflake to the head
  function addCSS(rule: any) {
    let css = document.createElement('style')
    css.appendChild(document.createTextNode(rule)) // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css)
  }


  // Math
  function randomInt(value = 100){
    return Math.floor(Math.random() * value) + 1;
  }

  function randomRange(min: any, max: any) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function spawnSnowCSS(snow_density = 200){
    let snowflakeName = "snowflake"
    let baseCSS
    let rule = ``
    if (typeof baseCSS !== 'undefined'){
        rule = baseCSS
    }
    
    for(let i = 1; i < snow_density; i++){
        let random_x = Math.random() * 100 // vw
        let random_offset = randomRange(-100000, 100000) * 0.0001 // vw;
        let random_x_end = random_x + random_offset
        let random_x_end_yoyo = random_x + (random_offset / 2)
        let random_yoyo_time = randomRange(30000, 80000) / 100000
        let random_yoyo_y = random_yoyo_time * 100 // vh
        let random_scale = Math.random() * .75
        let fall_duration = randomRange(10, 30) * 1 // s
        let fall_delay = randomInt(30) * -1 // s
        let opacity_ = Math.random()

        rule += `
        .${snowflakeName}:nth-child(${i}) {
            opacity: ${opacity_};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
            position: absolute;
            width: 10px;
            height: 10px;
            background: linear-gradient(#ffffff, #ffffff);
            border-radius: 50%;
            filter: drop-shadow(0 0 10px rgb(255, 255, 255));
            z-index: 1;
            border-top: .5px solid #15F4EE;
            border-bottom: 6px double #15F4EE;
            border-left: 3px solid #15F4EE;
            border-right: 3px solid #15F4EE;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time*100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
            
        }
        `
    }

    addCSS(rule);
  }

  useEffect(() => {
    spawnSnowCSS(snowFlakesCount)
    spawnSnow(snowFlakesCount)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        overscrollBehavior: 'none',
      }}
    >
      <div id='snow' />
    </div>
  )
}

export default Snow