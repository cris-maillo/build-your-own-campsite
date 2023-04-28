let tools = ["tent", "mountains", "forest", "fire", "campervan", "cabin"]
let copiedTool = null;
let imgSource = null;

function copyTool(img) {
  var imgId = img.id;
  copiedTool = tools[imgId]
}

function pasteTool(grid) {
  if (grid.firstChild) {
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
  } else {
    var img = document.createElement("img");
    img.src = getImgSrc();
    // if(error){
    //   console.log("error")
    // }
    grid.appendChild(img);
  }
  
}

function getImgSrc(){
  switch (copiedTool) {
    case "tent":
      imgSource = "https://cdn.glitch.global/cc5fd747-7a88-4f02-8890-687c468a7238/tent.png?v=1681756467559";
      break;
    case "mountains":
      imgSource = "https://cdn.glitch.global/cc5fd747-7a88-4f02-8890-687c468a7238/mountain.png?v=1681756469455";
      break;
    case "forest":
      imgSource = "https://cdn.glitch.global/cc5fd747-7a88-4f02-8890-687c468a7238/forest.png?v=1681756472883";
      break;
    case "fire":
      imgSource = "https://cdn.glitch.global/cc5fd747-7a88-4f02-8890-687c468a7238/fire.png?v=1681756476351";
      break;
    case "campervan":
      imgSource = "https://cdn.glitch.global/cc5fd747-7a88-4f02-8890-687c468a7238/caravan.png?v=1681756479942";
      break;
    case "cabin":
      imgSource = "https://cdn.glitch.global/cc5fd747-7a88-4f02-8890-687c468a7238/bath.png?v=1681756483145";
      break;
    default:
      throw new Error("No image selected");
      break;
  }
  return imgSource;
}