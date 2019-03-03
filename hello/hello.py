def greet():
    name = document.getElementById("Name").value
    if name == "" or name.length == 0 or name == null:
        document.getElementById("groet").innerHTML = '<p><font color="#ff0000">Hello Anonymous, may I know yor name? Please insert it below:</font></p>'
    else:
        document.getElementById("groet").innerHTML = '<p><font color="#00ff00">Hello, '+name+', thank you for introducing you</font></p>'

