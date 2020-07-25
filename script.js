function resetbtn() {
  let xtype = document.getElementById("myCanvas");
  let xtx = xtype.getContext("2d");

  winOptions = [
    ["FLAG1", "FLAG2", "FLAG3"],
    ["FLAG4", "FLAG5", "FLAG6"],
    ["FLAG7", "FLAG8", "FLAG9"],
  ];
  gameEnd = false;
  isXturn = true;
  xtx.clearRect(0, 0, 500, 500);
  drawLines();

}
function changeTurn() {
  if (isXturn) {
    isXturn = false;
  } else {
    isXturn = true;
  }
}

function drawLine(a, b, c, d, ltx) {
  ltx.beginPath();
  ltx.moveTo(a, b);
  ltx.lineTo(c, d);
  ltx.stroke();
}

function drawLines() {
  let l = document.getElementById("myCanvas");
  let ltx = l.getContext("2d");
  drawLine(166, 0, 166, 500, ltx);
  drawLine(332, 0, 332, 500, ltx);
  drawLine(0, 166, 500, 166, ltx);
  drawLine(0, 332, 500, 332, ltx);
}
function drawCircle(e, f, g, h) {
  let cir = document.getElementById("myCanvas");
  let ctx = cir.getContext("2d");
  ctx.beginPath();
  ctx.arc(e, f, 50, g, h * Math.PI);
  ctx.stroke();
}
function drawX(j, z) {
  let xtype = document.getElementById("myCanvas");
  let xtx = xtype.getContext("2d");
  xtx.beginPath();

  xtx.moveTo(j - 35, z - 35);
  xtx.lineTo(j + 35, z + 35);

  xtx.moveTo(j + 35, z - 35);
  xtx.lineTo(j - 35, z + 35);
  xtx.stroke();
}

function getCell(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  if (x >= 0 && x <= 180 && y >= 0 && y <= 180) {
    return "top-left";
  } else if (x >= 180 && x <= 349 && y >= 0 && y <= 180) {
    return "top-mid";
  } else if (x >= 350 && x <= 540 && y >= 0 && y <= 180) {
    return "top-right";
  } else if (x >= 0 && x <= 180 && y >= 180 && y <= 349) {
    return "mid-left";
  } else if (x >= 180 && x <= 349 && y >= 180 && y <= 349) {
    return "mid";
  } else if (x >= 350 && x <= 540 && y >= 180 && y <= 349) {
    return "mid-right";
  } else if (x >= 0 && x <= 180 && y >= 350 && y <= 540) {
    return "bot-left";
  } else if (x >= 180 && x <= 349 && y >= 350 && y <= 540) {
    return "bot-mid";
  } else if (x >= 350 && x <= 540 && y >= 350 && y <= 540) {
    return "bot-right";
  }
}

function doTurn(canvas, event) {
  console.log(event);
  const cell = getCell(canvas, event);
  if (cell == "top-left" && typeof winOptions[0][0] == "string") {
    winOptions[0][0] = isXturn;
    if (isXturn) {
      drawX(83, 83);
    } else {
      drawCircle(83, 83, 0, 2);
    }
    changeTurn();
  } else if (cell == "top-mid" && typeof winOptions[0][1] == "string") {
    winOptions[0][1] = isXturn;
    if (isXturn) {
      drawX(249, 83);
    } else {
      drawCircle(249, 83, 0, 2);
    }
    changeTurn();
  } else if (cell == "top-right" && typeof winOptions[0][2] == "string") {
    winOptions[0][2] = isXturn;
    if (isXturn) {
      drawX(415, 83);
    } else {
      drawCircle(415, 83, 0, 2);
    }
    changeTurn();
  } else if (cell == "mid-left" && typeof winOptions[1][0] == "string") {
    winOptions[1][0] = isXturn;
    if (isXturn) {
      drawX(83, 249);
    } else {
      drawCircle(83, 249, 0, 2);
    }
    changeTurn();
  } else if (cell == "mid" && typeof winOptions[1][1] == "string") {
    winOptions[1][1] = isXturn;
    if (isXturn) {
      drawX(249, 249);
    } else {
      drawCircle(249, 249, 0, 2);
    }
    changeTurn();
  } else if (cell == "mid-right" && typeof winOptions[1][2] == "string") {
    winOptions[1][2] = isXturn;
    if (isXturn) {
      drawX(415, 249);
    } else {
      drawCircle(415, 249, 0, 2);
    }
    changeTurn();
  } else if (cell == "bot-left" && typeof winOptions[2][0] == "string") {
    winOptions[2][0] = isXturn;
    if (isXturn) {
      drawX(83, 415);
    } else {
      drawCircle(83, 415, 0, 2);
    }
    changeTurn();
  } else if (cell == "bot-mid" && typeof winOptions[2][1] == "string") {
    winOptions[2][1] = isXturn;
    if (isXturn) {
      drawX(249, 415);
    } else {
      drawCircle(249, 415, 0, 2);
    }
    changeTurn();
  } else if (cell == "bot-right" && typeof winOptions[2][2] == "string") {
    winOptions[2][2] = isXturn;
    if (isXturn) {
      drawX(415, 415);
    } else {
      drawCircle(415, 415, 0, 2);
    }
    changeTurn();
  }
  console.log(winOptions);

  if (
    (winOptions[0][0] == winOptions[0][1] &&
      winOptions[0][1] == winOptions[0][2]) ||
    (winOptions[0][0] == winOptions[1][0] &&
      winOptions[1][0] == winOptions[2][0]) ||
    (winOptions[0][2] == winOptions[1][2] &&
      winOptions[1][2] == winOptions[2][2]) ||
    (winOptions[2][0] == winOptions[2][1] &&
      winOptions[2][1] == winOptions[2][2]) ||
    (winOptions[1][0] == winOptions[1][1] &&
      winOptions[1][1] == winOptions[1][2]) ||
    (winOptions[0][1] == winOptions[1][1] &&
      winOptions[1][1] == winOptions[2][1]) ||
    (winOptions[0][0] == winOptions[1][1] &&
      winOptions[1][1] == winOptions[2][2]) ||
    (winOptions[0][2] == winOptions[1][1] &&
      winOptions[1][1] == winOptions[2][0])
  ) {
    if (isXturn) {
      alert("O WON");
    } else {
      alert("X WON");
    }
    gameEnd = true;
  }
}

/////////////////////////////

let gameEnd;
let isXturn = true;
let winOptions = [
  ["FLAG1", "FLAG2", "FLAG3"],
  ["FLAG4", "FLAG5", "FLAG6"],
  ["FLAG7", "FLAG8", "FLAG9"],
];
drawLines();

let canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("mouseup", function (e) {
  if (gameEnd) {
    alert("game ended,press reset button");
  } else {
    doTurn(canvasElem, e);
  }
});

document.getElementById("btn").addEventListener("click", resetbtn)
