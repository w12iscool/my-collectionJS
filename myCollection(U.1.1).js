alert('A collection of all the bookmarklets I made!\nMore coming in the future.');

const movingThing = document.createElement('div');

movingThing.style.cssText = `
position: fixed;
transform: translate(-50%, -50%);
display: flex;
justify-contents: center;
align-items: center;
top: 50%;
left: 50%;
padding: 250px;
background-color: #333;
`;

document.body.appendChild(movingThing)

const movingThingHeader = document.createElement('div');

movingThingHeader.style.cssText = `
position: absolute;
display: flex;
transform: translate(-50%, -50%);
justify-contents: center;
align-items: center;
top: 26px;
left: 250px;
padding: 25px;
background-color: #222;
`;
movingThingHeader.style.width = '450px';

const movingThingHeaderText = document.createElement('h1');
movingThingHeaderText.style = `
font-family: "Lucida Console", "Courier New", monospace;
font-size: 20px;
color: #fff;
display: flex;
text-align: center;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const exitButton = document.createElement('button');
exitButton.textContent = "X"
exitButton.style = `
font-size: 20px;
transform: translate(-50%, -50%);
position: fixed;
align-items: center;
padding: 10px;
display: flex;
top: 50%;
left: 94%;
color: #fff;
background-color: #900
`;

exitButton.addEventListener('click', () => {
    movingThing.remove();
    movingThingHeader.remove();
    movingThingHeaderText.remove();
})

const biggerAndSmaller = document.createElement('button');
biggerAndSmaller.textContent = 'Bigger or Smaller'
biggerAndSmaller.style = `
font-size: 15px;
font-family: Comic-sans, sans-serrif;
transform: translate(-50%, -50%);
position: fixed;
align-items: center;
padding: 15px;
display: flex;
top: 25%;
left: 20%;
color: #fff;
background-color: #090
`
biggerAndSmaller.addEventListener('click', () => {
    movingThing.remove();
    movingThingHeader.remove();
    movingThingHeaderText.remove();

    alert('Bigger and smaller\n-By W12')
const uiButton = document.createElement('button');
uiButton.textContent = "Click me!";

uiButton.style = `
font-size: 24px;
transform: translate(-50%, -50%);
position: fixed;
align-items: center;
justify-content: center;
padding: 20px;
display: flex;
top: 50%;
left: 50%;
color: #fff;
background-color: #000;
`;

var textSize = uiButton.style.fontSize;
var buttonSize = uiButton.style.padding;

uiButton.addEventListener('click', () => {
  textSize = parseInt(textSize) + 15 + 'px';
  buttonSize = parseInt(buttonSize) + 10 + 'px';
  uiButton.style.fontSize = textSize;
  uiButton.style.padding = buttonSize;
  uiButton.textContent = "I am now bigger!"
  uiButton.style.backgroundColor = 'rgb(0, 0, 255)';
});
uiButton.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  textSize = parseInt(textSize) - 15 + 'px';
  buttonSize = parseInt(buttonSize) - 10 + 'px';
  uiButton.style.fontSize = textSize;
  uiButton.style.padding = buttonSize;
  uiButton.textContent = "I am now smaller!"
  uiButton.style.backgroundColor = 'rgb(255, 0, 0)';
});
uiButton.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    event.preventDefault();
    uiButton.style.backgroundColor = 'rgb(0, 255, 0)';
    uiButton.textContent = "Exiting shortly...";
    setTimeout(() => {
      uiButton.remove();
    }, 1000);
  }
});
uiButton.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === '37') {
        event.preventDefault();
        uiButton.style.backgroundColor = 'rgb(255, 69, 0)';
        uiButton.textContent = 'I am now moving towards the left!';
        uiButton.style.left = parseInt(uiButton.style.left) - 10 + '%';
    } else if (event.key === 'ArrowRight' || event.key === '39') {
        uiButton.style.backgroundColor = 'rgb(255, 192, 203)';
        uiButton.textContent = "I am now moving towards the right!";
        uiButton.style.left = parseInt(uiButton.style.left) + 10 + '%';
    }
})
uiButton.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === '38') {
        event.preventDefault();
        uiButton.style.backgroundColor = 'rgb(59, 122, 87)';
        uiButton.textContent = "I am now ascending!";
        uiButton.style.top = parseInt(uiButton.style.top) - 10 + '%';
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        uiButton.style.backgroundColor = 'rgb(204, 204, 0)';
        uiButton.textContent = "I am now descending";
        uiButton.style.top = parseInt(uiButton.style.top) + 10 + '%';
    }
})
document.body.appendChild(uiButton);

})

movingThingHeader.addEventListener('mousedown', startDragging);
movingThingHeader.addEventListener('touchstart', startDragging);

function startDragging(event) {
  const initialX = event.clientX || event.touches[0].clientX;
  const initialY = event.clientY || event.touches[0].clientY;

  const initialPosX = movingThing.offsetLeft;
  const initialPosY = movingThing.offsetTop;

  const offsetX = initialX - initialPosX;
  const offsetY = initialY - initialPosY;

  document.addEventListener('mousemove', dragElement);
  document.addEventListener('touchmove', dragElement);
  document.addEventListener('mouseup', stopDragging);
  document.addEventListener('touchend', stopDragging);

  document.addEventListener('touchmove', (event) => event.preventDefault());

  function dragElement(event) {
    const currentX = event.clientX || event.touches[0].clientX;
    const currentY = event.clientY || event.touches[0].clientY;
    const newPosX = currentX - offsetX;
    const newPosY = currentY - offsetY;

    movingThing.style.left = newPosX + 'px';
    movingThing.style.top = newPosY + 'px';
  }

  function stopDragging() {
    document.removeEventListener('mousemove', dragElement);
    document.removeEventListener('touchmove', dragElement);
    document.removeEventListener('mouseup', stopDragging);
    document.removeEventListener('touchend', stopDragging);
  }
}

movingThing.style.cursor = 'move';


const imageReplacer = document.createElement('button');
imageReplacer.textContent = 'Image Replacer';
imageReplacer.style = `
font-size: 15px;
font-family: Comic-sans, sans-serrif;
transform: translate(-50%, -50%);
position: fixed;
align-items: center;
padding: 15px;
display: flex;
top: 45%;
left: 20%;
color: #fff;
background-color: #090
`
imageReplacer.addEventListener('click', () => {
    movingThing.remove();
    movingThingHeader.remove();
    movingThingHeaderText.remove();
    newFunction();

    function newFunction() {
      const frame = document.createElement('div');
      frame.style.cssText = `
        position: fixed;
        transform: translate(-50%, -50%);
        align-items: center;
        justify-content: center;
        padding: 20px;
        display: flex;
        top: 50%;
        left: 50%;
        background-color: rgb(59, 59, 59);
      `;
      
      frame.style.height = "400px";
      frame.style.width = "400px";
      document.body.appendChild(frame);
      
      const header = document.createElement('div');
      header.style = `
        position: fixed;
        transform: translate(-50%, -50%);
        align-items: center;
        justify-content: center;
        padding: 20px;
        display: flex;
        top: 4%;
        left: 50%;
        background-color: rgb(0, 0, 0);
      `;
      
      header.style.width = "400px";
      header.style.height = "20px";
      frame.appendChild(header);
      
      const headerTitle = document.createElement('div');
      headerTitle.style = `
        font-family: Arial, sans-serif;
        font-size: 30px;
        position: fixed;
        text-align: center;
        justify-content: center;
        display: flex;
        color: #fff;
        flex-direction: column;
      `;
      headerTitle.textContent = "Image-Replacer";
      header.appendChild(headerTitle);
      
      const exitButton = document.createElement('button');
      exitButton.textContent = "X";
      exitButton.setAttribute('style', `
        font-size: 30px;
        position: absolute;
        transform: translate(-50%, -50%);
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 5px;
        top: 31px;
        left: 410px;
        background-color: #333;
      `);
      
      exitButton.addEventListener('click', () => {
        frame.remove();
        header.remove();
        headerTitle.remove();
        exitButton.remove();
      });
      header.appendChild(exitButton);
      
      const preview = document.createElement('div');
      preview.style.cssText = `
        position: fixed;
        transform: translate(-50%, -50%);
        align-items: center;
        justify-content: center;
        padding: 20px;
        display: flex;
        top: 63%;
        left: 50%;
        background-color: rgb(36, 36, 36);
      `;
      preview.style.width = "360px";
      preview.style.height = "250px";
      
      frame.appendChild(preview);
      
      const linkArea = document.createElement('div');
      linkArea.style.cssText = `
        position: fixed;
        transform: translate(-50%, -50%);
        align-items: center;
        justify-content: center;
        padding: 20px;
        display: flex;
        top: 20%;
        left: 50%;
        background-color: rgb(36, 36, 36);
      `;
      linkArea.style.width = "360px";
      linkArea.style.height = "10px";
      frame.appendChild(linkArea);
      
      const link = document.createElement('input');
      link.type = "text";
      link.id = "myInput";
      link.value = "Paste img-source (delete this)";
      link.style.border = "none";
      link.style.display = "flex";
      link.style.justifyContent = "center";
      link.style.outline = "none";
      link.style.width = "400px";
      link.style.height = "54px";
      link.style.color = "#fff";
      link.style.backgroundColor = "rgb(36, 36, 36)";
      link.style.position = "absolute";
      link.style.left = "-0.5%";
      link.style.top = "-7%";
      
      link.addEventListener('keyup', (event) => {
        if (event.key === "Enter") {
          var imageUrl = link.value;
          var images = document.getElementsByTagName("img");
          for (var i = 0; i < images.length; i++) {
            images[i].src = imageUrl;
          }
          const previewImage = document.createElement("img");
          previewImage.src = imageUrl;
          preview.appendChild(previewImage);
        }
      });
      
      linkArea.appendChild(link);
    }
    


})

const historyReplacer = document.createElement('button');
historyReplacer.textContent = 'History Replacer';
historyReplacer.style = `
font-size: 15px;
font-family: Comic-sans, sans-serrif;
transform: translate(-50%, -50%);
position: fixed;
align-items: center;
padding: 15px;
display: flex;
top: 65.5%;
left: 20%;
color: #fff;
background-color: #090
`
historyReplacer.addEventListener('click', () => {
  movingThing.remove();
  movingThingHeader.remove();
  movingThingHeaderText.remove();

  const frame = document.createElement('div');
  frame.style.cssText = `
    position: fixed;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    padding: 20px;
    display: flex;
    top: 50%;
    left: 50%;
    background-color: rgb(59, 59, 59);
  `;
  frame.style.height = "400px";
  frame.style.width = "400px";
  document.body.appendChild(frame);
  
  const header = document.createElement('div');
  header.style = `
    position: fixed;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    padding: 20px;
    display: flex;
    top: 4%;
    left: 50%;
    background-color: rgb(0, 0, 0);
  `;
  
  header.style.width = "400px";
  header.style.height = "20px";
  frame.appendChild(header);
  
  const headerTitle = document.createElement('div');
  headerTitle.style = `
    font-family: math;
    font-size: 30px;
    position: fixed;
    text-align: center;
    justify-content: center;
    display: flex;
    color: #fff;
    flex-direction: column;
  `;
  headerTitle.textContent = "HISTORY REPLACER";
  header.appendChild(headerTitle);
  const exitButton = document.createElement('button');
  exitButton.textContent = "X";
  exitButton.setAttribute('style', `
    font-size: 30px;
    position: absolute;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 5px;
    top: 31px;
    left: 410px;
    background-color: #333;
  `);
  
  exitButton.addEventListener('click', () => {
    frame.remove();
    header.remove();
    headerTitle.remove();
    exitButton.remove();
  });
  header.appendChild(exitButton);

  const canvasLMS = document.createElement('button');
  canvasLMS.textContent = "Canvas LMS";
  canvasLMS.style = `
  font-size: 24px;
  font-family: fantasy;
  position: absolute;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-contents: center;
  display: flex;
  padding: 24px;
  top: 25%;
  left: 50%;
  background-color: #111;
  color: #fff;
  `
  canvasLMS.addEventListener('click', () => {
    window.location.replace('https://rrcs.instructure.com/');
  })
  frame.appendChild(canvasLMS);

  const google = document.createElement('button');
  google.textContent = "Google";
  google.style = `
  font-size: 24px;
  font-family: fantasy;
  position: absolute;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-contents: center;
  display: flex;
  padding: 24px;
  top: 45%;
  left: 50%;
  background-color: #111;
  color: #fff;
  `
  google.addEventListener('click', () => {
    window.location.replace('https://www.google.com/');
  })
  frame.appendChild(google);

  const clever = document.createElement('button');
  clever.textContent = "Clever";
  clever.style = `
  font-size: 24px;
  font-family: fantasy;
  position: absolute;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-contents: center;
  display: flex;
  padding: 24px;
  top: 65%;
  left: 50%;
  background-color: #111;
  color: #fff;
  `
  clever.addEventListener('click', () => {
    window.location.replace('https://clever.com/in/rrcsd/student/portal');
  })
  frame.appendChild(clever);

  const link = document.createElement('input');
  link.type = "text";
  link.id = "myInput";
  link.value = "YOUR LINK (REPLACE THIS)";
  link.style.border = "none";
  link.style.display = "flex";
  link.style.fontFamily = "fangsong";
  link.style.justifyContent = "center";
  link.style.textAlign = "center";
  link.style.outline = "none";
  link.style.width = "400px";
  link.style.height = "54px";
  link.style.color = "#fff";
  link.style.backgroundColor = "rgb(10, 10, 10)";
  link.style.position = "absolute";
  link.style.left = "4%";
  link.style.top = "76.5%";
  frame.appendChild(link);

  link.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        let userLink = link.value;
        window.location.replace(userLink);
    }
  })

})

const toggleEditMode = document.createElement('button');
toggleEditMode.textContent = 'Toggle Edit Mode';
toggleEditMode.style = `
font-size: 15px;
font-family: Comic-sans, sans-serrif;
transform: translate(-50%, -50%);
position: fixed;
align-items: center;
padding: 15px;
display: flex;
top: 86%;
left: 20%;
color: #fff;
background-color: #090
`
toggleEditMode.addEventListener('click', () => {
  movingThing.remove();
  movingThingHeader.remove();
  movingThingHeaderText.remove();

  const frame = document.createElement('div');
frame.style.cssText = `
position: fixed;
transform: translate(-50%, -50%);
align-items: center;
justify-contents: center;
display: flex;
top: 50%;
left: 50%;
padding: 100px;
background-color: #333;
`
frame.style.width = "200px";
frame.style.height = "100px";

const header = document.createElement('div');
header.style.cssText = `
position: fixed;
transform: translate(-50%, -50%);
align-items: center;
justify-contents: center;
display: flex;
top: 8.5%;
left: 50%;
padding: 25px;
background-color: #222;
`
header.style.height = "1px";
header.style.width = "350px";

const headerText = document.createElement('h1');
headerText.style = `
font-family: math;
font-size: 30px;
position: fixed;
text-align: center;
justify-content: center;
display: flex;
color: #fff;
flex-direction: column;
`;
headerText.style.textAlign = "center";
headerText.textContent = "Toggle Edit Mode";

const toggleModeOn = document.createElement('button');
toggleModeOn.style = `
position: fixed;
font-size: 30px;
font-family: math;
position: absolute;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
display: flex;
padding: 20px;
top: 35%;
left: 50%;
background-color: rgb(0, 56, 13);
color: #fff;
`
toggleModeOn.textContent = "Toggle Edit On";
toggleModeOn.style.width = "350px";
toggleModeOn.style.height = "60px";

toggleModeOn.addEventListener('click', () => {
    document.body.contentEditable = 'true';
    document.designMode = 'on';
    document.execCommand('enableObjectResizing', false, 'true');
    document.execCommand('enableInlineTableEditing', false, 'true');
});

const toggleModeOff = document.createElement('button');
toggleModeOff.style = `
position: fixed;
font-size: 30px;
font-family: math;
position: absolute;
transform: translate(-50%, -50%);
align-items: center;
justify-content: center;
display: flex;
padding: 20px;
top: 70%;
left: 50%;
background-color: rgb(51, 0, 1);
color: #fff;
`
toggleModeOff.textContent = "Toggle Edit Off";
toggleModeOff.style.width = "350px";
toggleModeOff.style.height = "60px";

toggleModeOff.addEventListener('click', () => {
    document.body.contentEditable = 'false';
    document.designMode = 'off';
});

const exitButton = document.createElement('button');
  exitButton.textContent = "X";
  exitButton.setAttribute('style', `
    font-size: 30px;
    position: absolute;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 2px;
    top: 25px;
    left: 365px;
    background-color: #333;
  `);
  
  exitButton.addEventListener('click', () => {
    frame.remove();
    header.remove();
    headerTitle.remove();
    exitButton.remove();
  });

  const minButton = document.createElement('button');
  minButton.textContent = "-";
  minButton.setAttribute('style', `
    font-size: 30px;
    position: absolute;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 2px;
    top: 25px;
    left: 335px;
    background-color: #333;
  `);

  minButton.addEventListener('click', () => {
    frame.style.display = "none";
    header.style.display = "none";
    headerText.style.display = "none";
    toggleModeOff.style.display = "none";
    toggleModeOn.style.display = "none";
    exitButton.style.display = "none";
    minButton.style.display = "none";
  })

  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey) {
      frame.style.display = "block";
      header.style.display = "block";
      headerText.style.display = "block";
      toggleModeOff.style.display = "block";
      toggleModeOn.style.display = "block";
      exitButton.style.display = "block";
      minButton.style.display = "block";
    }
  });

header.appendChild(minButton);
header.appendChild(exitButton);
frame.appendChild(toggleModeOff);
frame.appendChild(toggleModeOn);
header.appendChild(headerText);
frame.appendChild(header);
document.body.appendChild(frame);
})


movingThingHeaderText.textContent = "W12 COLLECTION OF BOOKMARKLETS"
movingThing.appendChild(movingThingHeader);
movingThingHeader.appendChild(movingThingHeaderText);
document.body.appendChild(movingThing);
movingThingHeader.appendChild(exitButton);
movingThing.appendChild(biggerAndSmaller);
movingThing.appendChild(imageReplacer);
movingThing.appendChild(historyReplacer);
movingThing.appendChild(toggleEditMode);
