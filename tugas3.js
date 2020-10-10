
function soalOne() {
  var arrHari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
  var input = prompt("masukkan hari: ");
  var b = arrHari.indexOf(input.toLowerCase());
  var c = arrHari[b+1];
  if( b == (arrHari.length-1))c=arrHari[0];
  alert(c);
}

function soalTwo(){
	do{  var input = prompt("masukkan nilai: ");  }while(isNaN(input) || input>100 || a < 0);
    switch (true)
    {
      	case (input >= 50 && input <=59) :
          alert("D");
          break;
        case (input >= 60 && input <=74) :
          alert("C");
          break;
        case (input >= 75 && input <=89) :
          alert("B");
          break;
        case (input >= 90 && input <=100) :
          alert("A");
          break;
      	default : 
          alert('tidak lulus');
	}
}

function soalThree() {
	do{  var input = prompt("masukkan angka: ");  }while(isNaN(input));
    var temp = '';
    for(i=0;i<=input;i++){ if(i%2==0){ temp += i + ' ';  } }
    alert(temp);
}

function soalFour() {
	do{  var input = prompt("masukkan angka: ");  }while(isNaN(input));
    var temp = '';
    for(i=0;i<=input;i++){ if(i%2==1){ temp += i + ' ';  } }
    alert(temp);
}