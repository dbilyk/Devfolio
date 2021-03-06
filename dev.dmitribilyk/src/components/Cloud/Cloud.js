import React from "react"
import "./Cloud.css"

function Cloud(props) {
  let hoverClass
  let parallaxDivisor
  if (props.hoverSize == "big") {
    hoverClass = " hoverBig"
    parallaxDivisor = 30
  }
  else if (props.hoverSize == "med") {
    hoverClass = " hoverMed"
    parallaxDivisor = 20
  }
  else {
    hoverClass = " hoverSml"
    parallaxDivisor = 10
  }

  return (
    (props.cloudEnum === 0) ? (
      <div style={{top:props.YOffset+"%", transform: "translate(0," + (((0.5 - props.scrollPercent) * 2) * parallaxDivisor) + "vh)" }} className="cloudParallax">
        <div style={{ width: props.size + "vw", animationDelay: "-"+props.animDelay + "s" }} className={"Cloud " + hoverClass}>
          <div style={{ animationDuration: props.speed + "s", animationDelay: "-"+props.animDelay + "s"}} className="cloudDrift">
            <svg style={{ opacity: 1-Math.pow(props.scrollPercent,9)}} id="cloud1" viewBox="0 0 180 122" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle-3" fill="#FAFAFA" x="40" y="73.641394" width="105" height="46.3182834"></rect>
              <path d="M145.5,119.959677 C161.7924,119.959677 175,106.645565 175,90.2217742 C175,73.7979838 161.7924,60.483871 145.5,60.483871 C129.2076,60.483871 116,73.7979838 116,90.2217742 C116,106.645565 129.2076,119.959677 145.5,119.959677 Z" id="Oval" fill="#FAFAFA"></path>
              <path d="M98.0221494,101.809325 C114.508977,101.977714 132.880696,87.3946837 133.904615,63.8545176 C134.928534,40.3143514 112.508158,17.2054732 89.3337262,20.0155526 C66.1592941,22.8256321 43.0914303,37.6317884 46.8859812,61.0209882 C50.6805321,84.410188 91.2666007,68.787983 98.0221494,101.809325 Z" id="Oval" fill="#ECECEC" transform="translate(90.206201, 60.796796) rotate(-48.000000) translate(-90.206201, -60.796796) "></path>
              <ellipse id="Oval" fill="#DCDCDC" cx="48" cy="53.4274194" rx="16" ry="16.1290323"></ellipse>
              <path d="M38,119.959677 C56.2253967,119.959677 71,105.065924 71,86.6935484 C71,68.3211726 56.2253967,53.4274194 38,53.4274194 C19.7746033,53.4274194 5,68.3211726 5,86.6935484 C5,105.065924 19.7746033,119.959677 38,119.959677 Z" id="Oval" fill="#FAFAFA" transform="translate(38.000000, 86.693548) rotate(188.000000) translate(-38.000000, -86.693548) "></path>
            </svg>
            <svg style={{ opacity: props.scrollPercent }} id="cloud1" viewBox="0 0 180 122" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <rect id="Rectangle-3" fill="rgb(72,59,80)" x="40" y="73.641394" width="105" height="46.3182834"></rect>
              <path d="M145.5,119.959677 C161.7924,119.959677 175,106.645565 175,90.2217742 C175,73.7979838 161.7924,60.483871 145.5,60.483871 C129.2076,60.483871 116,73.7979838 116,90.2217742 C116,106.645565 129.2076,119.959677 145.5,119.959677 Z" id="Oval" fill="rgb(72,59,80)"></path>
              <path d="M98.0221494,101.809325 C114.508977,101.977714 132.880696,87.3946837 133.904615,63.8545176 C134.928534,40.3143514 112.508158,17.2054732 89.3337262,20.0155526 C66.1592941,22.8256321 43.0914303,37.6317884 46.8859812,61.0209882 C50.6805321,84.410188 91.2666007,68.787983 98.0221494,101.809325 Z" id="Oval" fill="rgb(64,52,71)" transform="translate(90.206201, 60.796796) rotate(-48.000000) translate(-90.206201, -60.796796) "></path>
              <ellipse id="Oval" fill="rgb(53,41,59)" cx="48" cy="53.4274194" rx="16" ry="16.1290323"></ellipse>
              <path d="M38,119.959677 C56.2253967,119.959677 71,105.065924 71,86.6935484 C71,68.3211726 56.2253967,53.4274194 38,53.4274194 C19.7746033,53.4274194 5,68.3211726 5,86.6935484 C5,105.065924 19.7746033,119.959677 38,119.959677 Z" id="Oval" fill="rgb(72,59,80)" transform="translate(38.000000, 86.693548) rotate(188.000000) translate(-38.000000, -86.693548) "></path>
            </svg>
          </div>
        </div>
      </div>
    ) : (

        <div style={{top:props.YOffset+"%", transform: "translate(0," + (((0.5 - props.scrollPercent) * 2) * parallaxDivisor) + "vh)" }} className="cloudParallax">
          <div style={{ transform: "translate(0," + ((0.5 - props.scrollPercent) * 2) * 100 + "px)", width: props.size + "vw", animationDelay:"-"+ props.animDelay + "s" }} className={"Cloud " + hoverClass}>
            <div style={{ animationDuration: props.speed + "s",animationDelay: "-"+props.animDelay + "s"}} className="cloudDrift">
              <svg style={{ opacity: 1-Math.pow(props.scrollPercent,9)}} viewBox="0 0 160 106" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Rectangle-3" fill="#FFFFFF" x="38" y="50.4807692" width="87" height="45.4326923"></rect>
                <path d="M115.407209,63.0072778 C124.243765,63.0072778 131.407209,55.7749546 131.407209,46.8534317 C131.407209,37.9319088 124.243765,30.6995855 115.407209,30.6995855 C106.570653,30.6995855 99.4072085,37.9319088 99.4072085,46.8534317 C99.4072085,55.7749546 106.570653,63.0072778 115.407209,63.0072778 Z" id="Oval" fill="#E0E0E0" transform="translate(115.407209, 46.853432) rotate(-37.000000) translate(-115.407209, -46.853432) "></path>
                <path d="M126.5,95.9134615 C138.926407,95.9134615 149,85.7430069 149,73.1971154 C149,60.6512238 138.926407,50.4807692 126.5,50.4807692 C114.073593,50.4807692 104,60.6512238 104,73.1971154 C104,85.7430069 114.073593,95.9134615 126.5,95.9134615 Z" id="Oval" fill="#FFFFFF"></path>
                <path d="M70.4853751,86.100994 C92.5289009,86.100994 110.398709,68.0593605 110.398709,45.8038776 C110.398709,23.5483948 92.5289009,5.50676123 70.4853751,5.50676123 C64.9389626,5.50676123 57.4593042,7.8288886 48.0463996,12.4731433 C54.9954881,19.8568598 54.6151964,29.4520945 46.9055245,41.2588475 C39.1958526,53.0656005 39.1500396,65.385377 46.7680855,78.2181771 C56.6582529,83.4733884 64.5640161,86.100994 70.4853751,86.100994 Z" id="Oval" fill="#F5F5F5" transform="translate(75.743707, 45.803878) rotate(-108.000000) translate(-75.743707, -45.803878) "></path>
                <path d="M35.2795056,95.8968137 C49.6550819,95.8968137 61.308789,84.1310517 61.308789,69.6172488 C61.308789,55.1034458 49.6550819,43.3376839 35.2795056,43.3376839 C20.9039294,43.3376839 9.25022229,55.1034458 9.25022229,69.6172488 C9.25022229,84.1310517 20.9039294,95.8968137 35.2795056,95.8968137 Z" id="Oval" fill="#FFFFFF" transform="translate(35.279506, 69.617249) rotate(244.000000) translate(-35.279506, -69.617249) "></path>
              </svg>
              <svg style={{ opacity: props.scrollPercent }} viewBox="0 0 160 106" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect id="Rectangle-3" fill="rgb(72,59,80)" x="38" y="50.4807692" width="87" height="45.4326923"></rect>
                <path d="M115.407209,63.0072778 C124.243765,63.0072778 131.407209,55.7749546 131.407209,46.8534317 C131.407209,37.9319088 124.243765,30.6995855 115.407209,30.6995855 C106.570653,30.6995855 99.4072085,37.9319088 99.4072085,46.8534317 C99.4072085,55.7749546 106.570653,63.0072778 115.407209,63.0072778 Z" id="Oval" fill="rgb(53,41,59)" transform="translate(115.407209, 46.853432) rotate(-37.000000) translate(-115.407209, -46.853432) "></path>
                <path d="M126.5,95.9134615 C138.926407,95.9134615 149,85.7430069 149,73.1971154 C149,60.6512238 138.926407,50.4807692 126.5,50.4807692 C114.073593,50.4807692 104,60.6512238 104,73.1971154 C104,85.7430069 114.073593,95.9134615 126.5,95.9134615 Z" id="Oval" fill="rgb(72,59,80)"></path>
                <path d="M70.4853751,86.100994 C92.5289009,86.100994 110.398709,68.0593605 110.398709,45.8038776 C110.398709,23.5483948 92.5289009,5.50676123 70.4853751,5.50676123 C64.9389626,5.50676123 57.4593042,7.8288886 48.0463996,12.4731433 C54.9954881,19.8568598 54.6151964,29.4520945 46.9055245,41.2588475 C39.1958526,53.0656005 39.1500396,65.385377 46.7680855,78.2181771 C56.6582529,83.4733884 64.5640161,86.100994 70.4853751,86.100994 Z" id="Oval" fill="rgb(64,52,71)" transform="translate(75.743707, 45.803878) rotate(-108.000000) translate(-75.743707, -45.803878) "></path>
                <path d="M35.2795056,95.8968137 C49.6550819,95.8968137 61.308789,84.1310517 61.308789,69.6172488 C61.308789,55.1034458 49.6550819,43.3376839 35.2795056,43.3376839 C20.9039294,43.3376839 9.25022229,55.1034458 9.25022229,69.6172488 C9.25022229,84.1310517 20.9039294,95.8968137 35.2795056,95.8968137 Z" id="Oval" fill="rgb(72,59,80)" transform="translate(35.279506, 69.617249) rotate(244.000000) translate(-35.279506, -69.617249) "></path>
              </svg>
            </div>
          </div>
        </div>
      )

  )
}

export default Cloud