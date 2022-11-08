function validateForm()
{
	var a=document.myForm.Email.value;
	var b="sankey901@solutions.com";
	var d=document.myForm.Password.value;
	var p="mindset";
	if(a==b && d==p)
	{
		//document.getElementById("redirect").innerHTML="Welcome to Sankey";
		//return true;
		document.write("Welcome to Sankey Solutions");
	}
	if(a!=b)
	{
		document.getElementById("emailcheck").innerHTML="Invalid Email";
		return false;
	}
	if(d!=p)
	{
		document.getElementById("passwordcheck").innerHTML="Invalid Password";
		return false;
	}
	
}