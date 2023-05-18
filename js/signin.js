
function validate()
{
    var  u=document.getElementById("uname");
    var  p=document.getElementById("pass");
	if(u.value=="")
	{
		if(p.value=="")
		{
			var show=document.getElementById("passmsg");
			show.innerHTML="Name and Password can't be blank"
			return false;
		}
		else
		{
			var display=document.getElementById("namemsg");
			display.innerHTML="Name can't be blank"
			return false;
		}
	}
	else if(p.value=="")
	{
		var show=document.getElementById("passmsg");
		show.innerHTML="Password can't be blank"
		return false;
	}
    else if(u.value=="admin" && p.value=="123")
    {
        alert("Login successful");
    }
    else
    {
        var show=document.getElementById("msg");
        show.innerHTML="Please enter correct details"
        return false;
    }
}
