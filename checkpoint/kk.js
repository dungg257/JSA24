











let menu = ["rau xao", "thit luoc", "ga ran"];
localStorage.setItem("menu",JSON.stringify(menu))





let input;
do {
  input = prompt("mời người dùng nhập vào yêu cầu C,R,U,D").toLowerCase().trim();
  console.log("input: ", input);

  if (input == "c") {menu.push(prompt("moi moi nguoi nhap vao mon an moi")
  )
   let 
  }
  else if (input == "r") {alert(menu.join(","))
  }
  else if (input == "u") {let viTriDanhBaCanUpdate=menu.indexOf
   
  }
  else if (input.toLowerCase().trim() == "d") {
    deleteContact();
  }
  else {
    alert("Chưa đúng yêu cầu nhập. Mời nhập lại!!!")
  }

}

while (input == "c" || input == "r" || input == "u" || input == "d" );

function creatMenu(){
    const data = {
        food : prompt("Moi nguoi dung nhap mon an muon them vao menu")
    }
    let getMenu = JSON.parse(localStorage.getItem("menu"));
    getMenu.push(data);

    localStorage.setItem("menu".JSON.stringify(getMenu));
    getMenu.push(data);
    localStorage.setItem("menu".JSON.stringify(getMenu));

    return data
}




function readmenu(){
    alert(menu.join(","))
}






































