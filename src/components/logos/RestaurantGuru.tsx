export default function GuruBadge() {
    return (
        <div className="flex-shrink-0 w-[25vw] max-w-[150px] min-w-[80px] aspect-square">
            <div
                className="w-full h-full"
                style={{ transform: "scale(1)" }}
                dangerouslySetInnerHTML={{
                    __html: `
          <link href="https://awards.infcdn.net/circle_v3.css" rel="stylesheet">
          <div id="circle_v3" data-length="29" class="rest_black" 
            onclick="if(event.target.nodeName.toLowerCase() != 'a') {window.open(this.querySelector('.circle_v3_link').href);return 0;}"> 
            <div class="circle_v3_year">2024</div> 
            <div class="circle_v3_name"> 
              <a class="circle_v3_link" target="_blank" href="https://restaurantguru.com/El-Bodegon-del-Nautico-San-Carlos-de-Bariloche"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 178 178"> 
                  <defs><path id="circle_v3_name-arc" d="M 12 89 a 77 77 0 0 0 154 0"></path></defs> 
                  <text class="circle_v3_name_txt" fill="#000" text-anchor="middle"> 
                    <textPath startOffset="50%" xlink:href="#circle_v3_name-arc">El Bodegón del Náutico</textPath> 
                  </text> 
                </svg> 
              </a> 
            </div> 
            <div class="circle_v3_nom"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200"> 
                <defs><path id="circle_v3_nom-arc1" d="M 30 100 a 70 70 0 1 1 140 0"></path></defs> 
                <text class="circle_v3_nom_txt" fill="#000" text-anchor="middle"> 
                  <textPath startOffset="50%" xlink:href="#circle_v3_nom-arc1">Recommended</textPath> 
                </text> 
              </svg> 
            </div> 
            <a class="circle_v3_home" style="font-size:0" href="https://restaurantguru.com" target="_blank">Restaurant Guru</a>
          </div>
        `,
                }}
            />
        </div>
    );
}
