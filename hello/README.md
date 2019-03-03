Standard Basic example
======================

You need to have Python 3 installed.

Install Transcrypt with pip install transcrypt==3.6 or higher and/or create a virtual environment by
creating a new directory like 

```mkdir hello```

and create a new virtual environment by:

```virtualenv -p C:\Python36\python.exe hello```

(the flag p specifies the python interpreter to use for the new virtualenv)

Activate the virtual environment by activating it by:

```hello\Scripts\activate (Windows)```

or

```source my_project/bin/activate (Other)```

Now you need to install transcrypt in your virtual environment. 
You can do so by:

```(hello) C:\Python36\programs\Transcrypt-Examples\hello>pip install transcrypt```

for the latest version of transcrypt or if you want to follow along with this tutorial
which was written with transcrypt 3.6 with

```(hello) C:\Python36\programs\Transcrypt-Examples\hello>pip install transcrypt==3.6```

You can deactivate the virtualenv afterwards by the command 

```(hello) C:\Python36\programs\Transcrypt-Examples\hello>deactivate```

Edit the two files names hello.py and hello.html which can be found here:

https://github.com/bunkahle/Transcrypt-Examples/blob/master/hello/hello.py

https://github.com/bunkahle/Transcrypt-Examples/blob/master/hello/hello.html

Run transcrypt.exe to compile the example file hello.py to Javascript files:

```(hello) C:\Python36\programs\Transcrypt-Examples\hello>transcrypt.exe hello.py```

In case you have not Java installed on your machine for code minification run
transcrypt with the switch -n or --nomin in order not to produce an error:

```(hello) C:\Python36\programs\Transcrypt-Examples\hello>transcrypt.exe -n hello.py```

You get a extra directory named ```__javascript__``` (transcrypt<=3.6) or ```__target__``` (transcrypt>=3.7) where the javascript files are located.

Start hello.html in your browser and test the code.

In case you go with Transcrypt>=3.7 please change the code entry in the html file line from

```<script src="__javascript__/hello.js"></script>```

to 

```<script type="module">import * as hello from './__target__/hello.js';window.hello = hello;</script>```

and the code should run fine.
