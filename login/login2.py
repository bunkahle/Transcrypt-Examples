def validateForm():
    un = document.loginform.usr.value
    pw = document.loginform.pword.value
    username = "admin" 
    password = "test"
    if un == username and pw == password:
        return True
    else:
        alert("Login was unsuccessful, please check your username and password")
        return False
