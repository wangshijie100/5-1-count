function score_onclick()
{
	var a=document.getElementById("score").value;
	if(a>=0 && a<10){
		alert("该学生是10等生。");
	}
	else if(a>=10 && a<20){
		alert("该学生是9等生。");
	}
	else if(a>=20 && a<30){
		alert("该学生是8等生。");
	}
	else if(a>=30 && a<40){
		alert("该学生是7等生。");
	}
	else if(a>=40 && a<50){
		alert("该学生是6等生。");
	}
	else if(a>=50 && a<60){
		alert("该学生是5等生。");
	}
	else if(a>=60 && a<70){
		alert("该学生是4等生。");
	}
	else if(a>=70 && a<80){
		alert("该学生是3等生。");
	}
	else if(a>=80 && a<90){
		alert("该学生是2等生。");
	}
	else if((a>=90 && a<100)||a==100){
		alert("该学生是1等生。");
	}
	else{
		alert("请输入0-100之间的数值。");
    }
 }