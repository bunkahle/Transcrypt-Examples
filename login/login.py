def check():
	username = document.log.uname.value
	password = document.log.psw.value
	if username == "admin" and password == "test":
		alert("User and Password is correct")
	else:
		alert("User and Password is wrong")
    
