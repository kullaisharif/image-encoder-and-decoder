// console.log(steg.decode('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABv0lEQVQ4T2NkYGD4ysDAwMgAAf+hNBOUDaL/QsVAFBuU/QsmBtL4E2rAHyQD2J64y8A0gmnhtqUMnMb2ICbI0H/IBmBzATYDWDiN7UEuZIFaCjYD5AKQASBBkAtggOmJuwzIFrhtUBeA1IO8AXI13IBfn7cs/s/rEwtyKiwMGJ64y4B4jAyMEDHhtqUgF8As/f314GYGbntfBsavBzf/ed+W+Y+Rm+8Pp53Pf3ZDW5AEyAXMUL/CwgBkAPOHOS1/vh/e9vfvi0cMPKEZDIxvmtP+/ziyDcn1DAyM3HyQKPn6CS7OLCHHANKEDEDqGJ+4y8CdjSJLJIfxVXnE/18XjhCpHFUZq4oOOBbALgAFyu/bFxl+nj/C8PvOFawGgrzBbmjDwKqiy8DrEwuPBRQvvJtQxvBt+zKsBoBsFJ+6AzUckKPu85bFDB8nV+L1DpdnFINQQRdcDdwL388eZHhbFY2iGWQjq6oehot4EysZ+COyUb3wNEgLJdpAsjI7n4AVPY+3wohC/tx2cDjAXfCqPIIBOTaQbUF3HSgwJRcewwzEjyumMnxZNZWBRVIOI7A+zGlh+LJ6Bjj1CaTUwL0KAG58pxl1mhXcAAAAAElFTkSuQmCC'));

var imgdatauri;
var imgdatauri2;
var encryptedMessage;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.querySelector("#image1").src = e.target.result;
      imgdatauri = e.target.result;
    };
  }
  reader.readAsDataURL(input.files[0]);
}


function readURL2(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
            document.querySelector("#image3").src = e.target.result;
            encryptedMessage = steg.decode(e.target.result);
            console.log(encryptedMessage);
            /*function decrypt(encryptedText, key) {
              let result = '';
              for (let i = 0; i < encryptedText.length; i++) {
                let charCode = encryptedText.charCodeAt(i);
                console.log(charCode);
                let decryptedChar = String.fromCharCode(charCode - key);
                console.log(decryptedChar);
                result += decryptedChar;
              }
              return result;
            }
            let key = 5;
            let decryptedMessage = decrypt(encryptedMessage,key);
            console.log(decryptedMessage);
           
        
        */
      };
    }
    reader.readAsDataURL(input.files[0]);
  }
  

function revealText(){
  console.log(encryptedMessage);
           function decrypt(encryptedText, key) {
              let result = '';
              for (let i = 0; i < encryptedText.length; i++) {
                let charCode = encryptedText.charCodeAt(i);
                console.log(charCode);
                let decryptedChar = String.fromCharCode(charCode - key);
                console.log(decryptedChar);
                result += decryptedChar;
              }
              return result;
            }
            let key = parseInt(document.getElementById("keydec").value);
            let decryptedMessage = decrypt(encryptedMessage,key);
            console.log(decryptedMessage);
            document.getElementById("decoded").innerText = decryptedMessage;
}

function hideText() {
  /*var text = (document.querySelector('#message').value, imgdatauri);
  console.log(text);*/
  var message = document.getElementById("message").value;
  var key = parseInt(document.getElementById("key").value);
  console.log(message);
  console.log(key);
  function encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      console.log(charCode);
      let encryptedChar = String.fromCharCode(charCode + key);
      console.log(encryptedChar);
      result += encryptedChar;
    }
    return result;
  }
  let encryptedmessage = encrypt(message,key);
  document.querySelector("#image2").src = steg.encode(encryptedmessage, imgdatauri);
  console.log(encryptedmessage);
  console.log(steg.encode(encryptedmessage, imgdatauri));

}
