const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    //var productImg = product.querySelector("img").scr
    var productName = product.querySelector("h2").innerText
    var productPrice = product.querySelector("span").innerText
    //console.log(productImg)
    addcart(productName,productPrice)
}})
})

function addcart(productName,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length; i++){
      var productT = document.querySelectorAll(".title")  
      if(productT[i].innerHTML == productName){
        alert("Tour du lịch đã được chọn, vui lòng vào phần chuyến đi để thay đổi số lượng")
        return
      }
      
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img src="./images/phuquoc.jpg" alt="" width="200"><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span><sup>d</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">Xoa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}
//.............giá.....................
function carttotal(){
  var cartItem = document.querySelectorAll("tbody tr")
  var total = 0
  for (var i=0; i<cartItem.length; i++){
    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector(".price").innerHTML
    var totalA = inputValue * productPrice
    total = totalA + total

  }
  var carttotalA = document.querySelector(".price-total span")
  var cartPrice = document.querySelector(".cart-icon span")
  cartPrice.innerHTML = total
  carttotalA.innerText = total
  inputchange()

}

//--------------------- xóa sản phẩm------------------
function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i=0; i<cartItem.length; i++){
    var productT = document.querySelectorAll(".cart-delete")
    productT[i].addEventListener("click",function(event){
      var cartdelete = event.target
      var cartdeleteR = cartdelete.parentElement.parentElement
      cartdeleteR.remove()
      carttotal()
      //console.log(cartdeleteR)
    })
  }
}
//--------------------- tính tổng tiền sau khi thay đổ số lượng------------------
function inputchange(){
  var cartItem = document.querySelectorAll("tbody tr")
  for (var i=0; i<cartItem.length; i++){
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change",function(){
      carttotal()
      
    })
    
  }
}

const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-plane")
cartshow.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "-100%"
})
