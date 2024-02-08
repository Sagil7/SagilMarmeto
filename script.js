var counterValue = 0;
var selectedBoxNumber = null;
var selectedItemValue=null;
// To display the discount percentage which is evaluated from javascript 
window.onload = function() {
    percentageoff();
  };

function incrementCounter() {
  counterValue++;
  document.getElementById('counter').innerText = counterValue;
}


function decrementCounter() {
  counterValue--;
  if(counterValue<0)
  {
      document.getElementById('counter').innerText = 0;
      counterValue=0;

  }
  else
  document.getElementById('counter').innerText = counterValue;
}



function percentageoff(){
 var orignalprice=document.getElementById('orignalprice').querySelector('strike').textContent;
 var orginalexactprice = parseInt(orignalprice.replace(/[^0-9]/g, ''));
 var currentprice=document.getElementById('currentprice').innerHTML;
 var currentexactprice = parseInt(currentprice.replace(/[^0-9]/g, ''));
 var discountelement= document.getElementById('discount')
 var discount=((orginalexactprice-currentexactprice)/orginalexactprice)*100;
 discount=discount.toFixed(2)
 discountelement.innerHTML=`${discount}%`
 console.log(orginalexactprice);
 console.log(currentexactprice);
}

// function to choose size with the readio button
function updateSelectedItem() {
    var selectedRadio = document.querySelector('input[name="item"]:checked');
    
    if (selectedRadio) {
      selectedItemValue = selectedRadio.value;
    } else {
      selectedItemValue = null;
    }
  }

 
// function to choose color
function selectBox(boxNumber, selectedBox) {
  var allBoxes = document.querySelectorAll('.box');
  allBoxes.forEach(function(box) {
    box.classList.remove('selected');
  });

  selectedBox.classList.add('selected');
  selectedBoxNumber = boxNumber;

}

// Add to cart button to dispaly shopping summary 
function Addtocart()
{  const colorarr=["green","purple","pink","grey"]
    console.log("counter value",counterValue)
  console.log("selected item",selectedBoxNumber)
  console.log("size is",selectedItemValue)

  var element = document.querySelector('.shopdetail');
  element.style.visibility='visible'
  if(counterValue<=0  )
  element.innerHTML='please add some item first'
  else if(selectedBoxNumber==null)
  element.innerHTML=`please Choose a color`
  else if(selectedItemValue==null)
  element.innerHTML=`please choose your size`
  else
  element.innerHTML=` ${counterValue} items of Embrace Sideboard with Color ${colorarr[selectedBoxNumber-1]} and Size ${selectedItemValue} added to cart`

  
}
