Standard Basic example 

You need to have Python 3 installed.

Install Transcrypt with pip install transcrypt==3.6 or create a virtual environment by
creating a new directory like mkdir hello
and create a new virtual environment by:

virtualenv -p C:\Python36\python.exe hello
(the flag p specifies the python interpreter to use for the new virtualenv)

Activate the virtual environment by activating it by:
hello\Scripts\activate (Windows)
or
source my_project/bin/activate (Other)

You can deactivate the virtualenv afterwards by the command deactivate

Create a directory like hello with two files names hello.py and hello.html

Run transcrypt.exe to compile the example file hello.py to Javascript files:
transcrypt.exe hello.py

You get a extra directory named __javascript__ where the javascript files are located.

Start hello.html in your browser and test the code.
