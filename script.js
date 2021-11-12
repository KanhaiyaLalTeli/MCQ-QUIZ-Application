
// function result() {
// 	var ans=document.querySelector("#quetions .q1_box .option");
//     var option = ans.querySelectorAll(".op");
//     //var op=option.setAttribute("onclick", "optionSelected(this)");
// 	console.log(option);
// }
function result()
{   let count=0;
	var a1=document.getElementsByName('q1');
	var a2=document.getElementsByName('q2');
	var a3=document.getElementsByName('q3');
	var a4=document.getElementsByName('q4');
	var a5=document.getElementsByName('q5');
	if(a1[0].checked)
	{
	   count++;
    }
    if(a2[3].checked)
	{
	   count++;
    }
    if(a3[0].checked)
	{
	   count++;
    }
    if(a4[3].checked)
	{
	   count++;
    }
    if(a1[0].checked)
	{
	   count++;
    }

    document.getElementById('result').innerHTML=count;

}