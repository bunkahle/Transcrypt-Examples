
================
Game programming
================

Game programming basics
^^^^^^^^^^^^^^^^^^^^^^^

The next example in `01_canvas.html <01_canvas.html>`_ will not work - it is just for showing how **not** to do it. The code for it is here: `solar_system01.py <solar_system01.py>`_

When running in the browser, all transcrypt/javascript code is executed in a single thread, the UI (user interface) thread. Which means we can’t run a naive infinite game loop: ::

    while True:
        render()
    

This would block the UI thread, making the browser unresponsive. We need to give the browser a kind of pause so the output of the browser's window can be updated and refreshed.

setTimeout and clearTimeout
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The next code sample will take this into account. Here we work with window.setTimeout(self.render, 50) which is called every time self.render is reached at the end. This means we implement a short update/refresh break but continue to run the render routine once again after 50 msecs by calling the routine again at the end of it. `solar_system02.py <solar_system02.py>`_ : ::

	import math

	class SolarSystem:
	    
	    def __init__(self):
	        self.sun = __new__(Image())
	        self.moon = __new__(Image())
	        self.earth = __new__(Image())
	        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
	        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
	            self.sun.src ='Canvas_sun.png'
	        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
	        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
	            self.moon.src ='Canvas_moon.png'
	        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
	        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
	            self.earth.src ='Canvas_earth.png'
	        window.setTimeout(self.render, 50)

	    def render(self):
	        self.ctx = document.getElementById('canvas').getContext('2d')
	        self.ctx.globalCompositeOperation = 'destination-over'
	        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
	        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
	        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
	        self.ctx.save()
	        self.ctx.translate(150, 150)

	        # Earth
	        self.time = __new__(Date())
	        self.ctx.rotate(((2 * math.pi) / 60) * self.time.getSeconds() + ((2 * math.pi) / 60000) * self.time.getMilliseconds())
	        self.ctx.translate(105, 0)
	        self.ctx.fillRect(0, -12, 50, 24) # Shadow
	        self.ctx.drawImage(self.earth, -12, -12)

	        # Moon
	        self.ctx.save()
	        self.ctx.rotate(((2 * math.pi) / 6) * self.time.getSeconds() + ((2 * math.pi) / 6000) * self.time.getMilliseconds())
	        self.ctx.translate(0, 28.5)
	        self.ctx.drawImage(self.moon, -3.5, -3.5)
	        self.ctx.restore()

	        self.ctx.restore()

	        self.ctx.beginPath()
	        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
	        self.ctx.stroke()

	        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

	        window.setTimeout(self.render, 50)

	solarSystem = SolarSystem()

The html for it looks like this: `02_canvas.html <02_canvas.html>`_ ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/solar_system02.js"></script>
	    <title>Solar System Animation</title>
	  </head>
	  <body>
	    <p>Here we work with window.setTimeout(self.render, 50) which is called every time self.render is reached at the end.</p>
	    <canvas id="canvas" width="300" height="300"></canvas>
	  </body>
	  <script></script>
	</html>

We can stop the call of self.render just by not calling it anymore. window.setTimeout() only calls the specified routine once after the given time in milliseconds, so you need to repeat this call if you want continuous movement. If we wanted to pause the animation we could do it like this: `solar_system02a.py <solar_system02a.py>`_ ::

	import math

	class SolarSystem:
	    
	    def __init__(self):
	        self.sun = __new__(Image())
	        self.moon = __new__(Image())
	        self.earth = __new__(Image())
	        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
	        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
	            self.sun.src ='Canvas_sun.png'
	        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
	        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
	            self.moon.src ='Canvas_moon.png'
	        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
	        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
	            self.earth.src ='Canvas_earth.png'
	        self.paused = False
	        self.update = window.setTimeout(self.render, 50)

	    def render(self):
	        self.ctx = document.getElementById('canvas').getContext('2d')
	        self.ctx.globalCompositeOperation = 'destination-over'
	        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
	        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
	        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
	        self.ctx.save()
	        self.ctx.translate(150, 150)

	        # Earth
	        self.time = __new__(Date())
	        self.ctx.rotate(((2 * math.pi) / 60) * self.time.getSeconds() + ((2 * math.pi) / 60000) * self.time.getMilliseconds())
	        self.ctx.translate(105, 0)
	        self.ctx.fillRect(0, -12, 50, 24) # Shadow
	        self.ctx.drawImage(self.earth, -12, -12)

	        # Moon
	        self.ctx.save()
	        self.ctx.rotate(((2 * math.pi) / 6) * self.time.getSeconds() + ((2 * math.pi) / 6000) * self.time.getMilliseconds())
	        self.ctx.translate(0, 28.5)
	        self.ctx.drawImage(self.moon, -3.5, -3.5)
	        self.ctx.restore()

	        self.ctx.restore()

	        self.ctx.beginPath()
	        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
	        self.ctx.stroke()

	        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

	        if not self.paused:
	            self.update = window.setTimeout(self.render, 50)
	        else:
	            window.clearTimeout(self.update)

	    def pause(self):
	        self.paused = not self.paused
	        if not self.paused:
	            self.update = window.setTimeout(self.render, 50)
	        else:
	            window.clearTimeout(self.update)

	solarSystem = SolarSystem()

window.clearTimeout(self.update) cancels any scheduled call of self.update = window.setTimeout(self.render, 50) immediately. We define a variable self.update with the scheduling of calling the render routine so that we can cancel this call afterwards. The html for this looks like this: `02a_canvas.html <02a_canvas.html>`_ :: 

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/solar_system02a.js"></script>
	    <title>Solar System Animation</title>
	  </head>
	  <body>
	    <p>Here we work with window.setTimeout(self.render, 50) which is called once at the beginning of the animation. window.clearTimeout stops the execution of the settings of setTimeout.</p>
	    <canvas id="canvas" width="300" height="300"></canvas><br><br>
	    <button onclick="solar_system02a.solarSystem.pause()">Toggle Pause Animation</button>
	  </body>
	  <script></script>
	</html>

setInterval and clearInterval
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

But there is also another way to achieve this. Instead of calling the routine again and again at the end of self.render we can schedule a regular call after a certain time with setInterval. The code for it looks like this: `solar_system03.py <solar_system03.py>`_ ::

	import math

	class SolarSystem:
	    
	    def __init__(self):
	        self.sun = __new__(Image())
	        self.moon = __new__(Image())
	        self.earth = __new__(Image())
	        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
	        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
	            self.sun.src ='Canvas_sun.png'
	        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
	        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
	            self.moon.src ='Canvas_moon.png'
	        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
	        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
	            self.earth.src ='Canvas_earth.png'
	        window.setInterval(self.render, 50)

	    def render(self):
	        self.ctx = document.getElementById('canvas').getContext('2d')
	        self.ctx.globalCompositeOperation = 'destination-over'
	        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
	        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
	        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
	        self.ctx.save()
	        self.ctx.translate(150, 150)

	        # Earth
	        self.time = __new__(Date())
	        self.ctx.rotate(((2 * math.pi) / 60) * self.time.getSeconds() + ((2 * math.pi) / 60000) * self.time.getMilliseconds())
	        self.ctx.translate(105, 0)
	        self.ctx.fillRect(0, -12, 50, 24) # Shadow
	        self.ctx.drawImage(self.earth, -12, -12)

	        # Moon
	        self.ctx.save()
	        self.ctx.rotate(((2 * math.pi) / 6) * self.time.getSeconds() + ((2 * math.pi) / 6000) * self.time.getMilliseconds())
	        self.ctx.translate(0, 28.5)
	        self.ctx.drawImage(self.moon, -3.5, -3.5)
	        self.ctx.restore()

	        self.ctx.restore()

	        self.ctx.beginPath()
	        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
	        self.ctx.stroke()

	        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

	solarSystem = SolarSystem()

At the end of the initialization of the class SolarSystem we find the regular scheduling of the routine self.render: ::

	window.setInterval(self.render, 50)

which will call the self.render routine every 50 msecs. The html for the file is here: `03_canvas.html <03_canvas.html>`_ :: 

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/solar_system03.js"></script>
	    <title>Solar System Animation</title>
	  </head>
	  <body>
	    <p>Here we work with window.setInterval(self.render, 50) which is called once at the beginning of the animation.</p>
	    <canvas id="canvas" width="300" height="300"></canvas>
	  </body>
	  <script></script>
	</html>

And again - how do we pause? Well, it's simple: `solar_system03a.py <solar_system03a.py>`_ ::

	import math

	class SolarSystem:
	    
	    def __init__(self):
	        self.sun = __new__(Image())
	        self.moon = __new__(Image())
	        self.earth = __new__(Image())
	        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
	        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
	            self.sun.src ='Canvas_sun.png'
	        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
	        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
	            self.moon.src ='Canvas_moon.png'
	        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
	        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
	            self.earth.src ='Canvas_earth.png'
	        self.paused = False
	        self.update = window.setInterval(self.render, 50)

	    def render(self):
	        self.ctx = document.getElementById('canvas').getContext('2d')
	        self.ctx.globalCompositeOperation = 'destination-over'
	        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
	        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
	        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
	        self.ctx.save()
	        self.ctx.translate(150, 150)

	        # Earth
	        self.time = __new__(Date())
	        self.ctx.rotate(((2 * math.pi) / 60) * self.time.getSeconds() + ((2 * math.pi) / 60000) * self.time.getMilliseconds())
	        self.ctx.translate(105, 0)
	        self.ctx.fillRect(0, -12, 50, 24) # Shadow
	        self.ctx.drawImage(self.earth, -12, -12)

	        # Moon
	        self.ctx.save()
	        self.ctx.rotate(((2 * math.pi) / 6) * self.time.getSeconds() + ((2 * math.pi) / 6000) * self.time.getMilliseconds())
	        self.ctx.translate(0, 28.5)
	        self.ctx.drawImage(self.moon, -3.5, -3.5)
	        self.ctx.restore()

	        self.ctx.restore()

	        self.ctx.beginPath()
	        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
	        self.ctx.stroke()

	        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

	    def pause(self):
	        self.paused = not self.paused
	        if self.paused:
	            window.clearInterval(self.update)
	        else:
	            self.update = window.setInterval(self.render, 50)

	solarSystem = SolarSystem()

the setInterval command can be cancelled by calling ::

	window.clearInterval(self.update)

and we can recall the setInterval again by calling: ::

	self.update = window.setInterval(self.render, 50)

The html for it is: `03a_canvas.html <03a_canvas.html>`_ ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/solar_system03a.js"></script>
	    <title>Solar System Animation</title>
	  </head>
	  <body>
	    <p>Here we work with window.setInterval(self.render, 50) and window.clearInterval which is called once at the beginning of the animation and which can be stopped and reactivated anytime with the help of these both commands.</p>
	    <canvas id="canvas" width="300" height="300"></canvas><br><br>
	    <button onclick="solar_system03a.solarSystem.pause()">Toggle Pause Animation</button>
	  </body>
	  <script></script>
	</html>

requestAnimationFrame and cancelAnimationFrame
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Here we work with window.requestAnimationFrame(self.render) which hooks automatically without specifying any react times into the browser’s native refresh loop. It is so to say a simplified window.setTimeout routine. The code is: `solar_system04.py <solar_system04.py>`_ ::

	import math

	class SolarSystem:
	    
	    def __init__(self):
	        self.sun = __new__(Image())
	        self.moon = __new__(Image())
	        self.earth = __new__(Image())
	        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
	        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
	            self.sun.src ='Canvas_sun.png'
	        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
	        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
	            self.moon.src ='Canvas_moon.png'
	        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
	        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
	            self.earth.src ='Canvas_earth.png'
	        window.requestAnimationFrame(self.render)

	    def render(self):
	        self.ctx = document.getElementById('canvas').getContext('2d')
	        self.ctx.globalCompositeOperation = 'destination-over'
	        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
	        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
	        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
	        self.ctx.save()
	        self.ctx.translate(150, 150)

	        # Earth
	        self.time = __new__(Date())
	        self.ctx.rotate(((2 * math.pi) / 60) * self.time.getSeconds() + ((2 * math.pi) / 60000) * self.time.getMilliseconds())
	        self.ctx.translate(105, 0)
	        self.ctx.fillRect(0, -12, 50, 24) # Shadow
	        self.ctx.drawImage(self.earth, -12, -12)

	        # Moon
	        self.ctx.save()
	        self.ctx.rotate(((2 * math.pi) / 6) * self.time.getSeconds() + ((2 * math.pi) / 6000) * self.time.getMilliseconds())
	        self.ctx.translate(0, 28.5)
	        self.ctx.drawImage(self.moon, -3.5, -3.5)
	        self.ctx.restore()

	        self.ctx.restore()

	        self.ctx.beginPath()
	        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
	        self.ctx.stroke()

	        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

	        window.requestAnimationFrame(self.render)

	solarSystem = SolarSystem()

and the html for it: `04_canvas.html <04_canvas.html>`_ :: 

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/solar_system04.js"></script>
	    <title>Solar System Animation</title>
	  </head>
	  <body>
	    <p>Here we work with window.requestAnimationFrame(self.render) which hooks automatically without specifying any react times into the browser’s native refresh loop.</p>
	    <canvas id="canvas" width="300" height="300"></canvas>
	  </body>
	  <script></script>
	</html>

And again the pause is similiar to setTimeout and clearTimeout: `solar_system04a.py <solar_system04a.py>`_ ::

	import math

	class SolarSystem:
	    
	    def __init__(self):
	        self.sun = __new__(Image())
	        self.moon = __new__(Image())
	        self.earth = __new__(Image())
	        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
	        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
	            self.sun.src ='Canvas_sun.png'
	        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
	        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
	            self.moon.src ='Canvas_moon.png'
	        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
	        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
	            self.earth.src ='Canvas_earth.png'
	        self.paused = False
	        self.animate = window.requestAnimationFrame(self.render)

	    def render(self):
	        self.ctx = document.getElementById('canvas').getContext('2d')
	        self.ctx.globalCompositeOperation = 'destination-over'
	        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
	        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
	        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
	        self.ctx.save()
	        self.ctx.translate(150, 150)

	        # Earth
	        self.time = __new__(Date())
	        self.ctx.rotate(((2 * math.pi) / 60) * self.time.getSeconds() + ((2 * math.pi) / 60000) * self.time.getMilliseconds())
	        self.ctx.translate(105, 0)
	        self.ctx.fillRect(0, -12, 50, 24) # Shadow
	        self.ctx.drawImage(self.earth, -12, -12)

	        # Moon
	        self.ctx.save()
	        self.ctx.rotate(((2 * math.pi) / 6) * self.time.getSeconds() + ((2 * math.pi) / 6000) * self.time.getMilliseconds())
	        self.ctx.translate(0, 28.5)
	        self.ctx.drawImage(self.moon, -3.5, -3.5)
	        self.ctx.restore()

	        self.ctx.restore()

	        self.ctx.beginPath()
	        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
	        self.ctx.stroke()

	        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

	        if self.paused and self.animate is not None:
	            window.cancelAnimationFrame(self.animate)
	            self.animate = None
	        elif not self.paused:
	            self.animate = window.requestAnimationFrame(self.render)

	    def pause(self):
	        self.paused = not self.paused
	        console.log(self.paused)
	        if self.paused:
	            window.cancelAnimationFrame(self.animate)
	            self.animate = None
	        else:
	            self.animate = window.requestAnimationFrame(self.render)

	solarSystem = SolarSystem()

While setInterval only has to be called once we need to call setTimeout or requestAnimationFrame continously in order get them going.
Not to forget the html for it: `04a_canvas.html <04a_canvas.html>`_ ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/solar_system04b.js"></script>
	    <title>Solar System Animation</title>
	  </head>
	  <body>
	    <p>Here we work with window.requestAnimationFrame(self.render) which hooks automatically without specifying any react times into the browser’s native refresh loop. We can switch off the animation frame by checking the pause flag also.</p>
	    <canvas id="canvas" width="300" height="300"></canvas><br><br>
	    <p>Use the cursor keys for right and left or the buttons below to accelerate or slow down the animation.</p>
	    <button onclick="solar_system04b.solarSystem.pause()">Toggle Pause Animation</button>
	  </body>
	  <script></script>
	</html>

Basic Game processing
^^^^^^^^^^^^^^^^^^^^^

The examples above are nice animations, but they do not really offer any user input beside of pausing the animation. Let's go for a little more complex but still simple example on how user input and rendering can work together. `solar_system05.py <solar_system05.py>`_  ::

	import math

	class SolarSystem:
	    
	    def __init__(self):
	        self.sun = __new__(Image())
	        self.moon = __new__(Image())
	        self.earth = __new__(Image())
	        self.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
	        if self.sun.naturalWidth == "undefined" or self.sun.naturalWidth == 0:
	            self.sun.src ='Canvas_sun.png'
	        self.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
	        if self.moon.naturalWidth == "undefined" or self.moon.naturalWidth == 0:
	            self.moon.src ='Canvas_moon.png'
	        self.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
	        if self.earth.naturalWidth == "undefined" or self.earth.naturalWidth == 0:
	            self.earth.src ='Canvas_earth.png'
	        self.Keys = {"SPACE":  32,
	                     "LEFT":   37,
	                     "UP":     38,
	                     "RIGHT":  39,
	                     "DOWN":   40}
	        self.accel_value = 1.0
	        self.accelerate = 1.0
	        self.keyCode = -1
	        document.onkeypress = self.keyHandler
	        self.paused = False
	        self.main_loop()

	    def render(self):
	        self.ctx = document.getElementById('canvas').getContext('2d')
	        self.ctx.globalCompositeOperation = 'destination-over'
	        self.ctx.clearRect(0, 0, 300, 300) # clear canvas
	        self.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
	        self.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
	        self.ctx.save()
	        self.ctx.translate(150, 150)

	        # Earth
	        self.time = __new__(Date())
	        secs = self.time.getSeconds() 
	        msecs = self.time.getMilliseconds()
	        self.ctx.rotate(((2 * math.pi) / 60 * self.accelerate) * secs + ((2 * math.pi) / 60000 * self.accelerate) * msecs)
	        self.ctx.translate(105, 0)
	        self.ctx.fillRect(0, -12, 50, 24) # Shadow
	        self.ctx.drawImage(self.earth, -12, -12)

	        # Moon
	        self.ctx.save()
	        self.ctx.rotate(((2 * math.pi) / 6* self.accelerate) * secs + ((2 * math.pi) / 6000* self.accelerate) * msecs)
	        self.ctx.translate(0, 28.5)
	        self.ctx.drawImage(self.moon, -3.5, -3.5)
	        self.ctx.restore()
	        
	        self.ctx.restore()
	        self.ctx.beginPath()
	        self.ctx.arc(150, 150, 105, 0, math.pi * 2, False) # Earth orbit
	        self.ctx.stroke()

	        self.ctx.font = "20px Arial"
	        self.ctx.fillStyle = "white"
	        self.ctx.fillText("Accel:"+str(self.accelerate),10,20)

	        self.ctx.drawImage(self.sun, 0, 0, 300, 300)

	        self.main_loop()

	    def pause(self):
	        self.paused = not self.paused
	        if self.paused:
	            document.getElementById("info").innerHTML = "<b>Game stopped</b>"
	        else:
	            document.getElementById("info").innerHTML = "<b>Game running</b>"

	    def keyHandler(self, e):
	        self.keyCode = e.keyCode 
	        self.charCode = e.charCode
	        console.log("keyCode: "+str(self.keyCode)+" charCode: "+str(self.charCode))

	    def accel(self):
	        self.accelerate += self.accel_value

	    def slowdown(self):
	        self.accelerate -= self.accel_value

	    def user_input(self):
	        if self.keyCode == self.Keys["RIGHT"]:
	            self.accelerate += self.accel_value
	        elif self.keyCode == self.Keys["LEFT"]:
	            self.accelerate -= self.accel_value
	        # reset it
	        self.keyCode = -1

	    def main_loop(self):
	        # update the game reaction according to user input
	        self.user_input()
	        # render the game output
	        if not self.paused:
	            # goto to the rendering routine - at the end of the routine main_loop will be called for return
	            self.animate = window.requestAnimationFrame(self.render)
	        else:
	            # and restart the main loop in case the game is paused
	            setTimeout(self.main_loop, 50)

	solarSystem = SolarSystem()

We now allow keyboard input by establishing a command like document.onkeypress = self.keyHandler in the __init__ routine of the class. We also provide event routines like self.accel and self.slowdown which simply accelerate or slow down the speed of the animation when the user is pressing buttons. The important part is now the self.main_loop routine: ::

	def main_loop(self):
	    # update the game reaction according to user input
	    self.user_input()
	    # render the game output
	    if not self.paused:
	        # goto to the rendering routine - at the end of the routine main_loop will be called for return
	        self.animate = window.requestAnimationFrame(self.render)
	    else:
	        # and restart the main loop in case the game is paused
	        setTimeout(self.main_loop, 50)

The basic logic behind game processing is to expect user input (keyboard, mouse, joystick), to adapt internal variables according to the user input in the routine self.user_input() and then render the output according to the set variables. In our game design we return from the render routine to our main_loop routine at the end to establish continous play. If we want to stop the animation we set the flag self.paused to True and the main_loop is repeating itself without going to the render routine until self.paused is toggled back to False.
The html for the example above looks like this: `05_canvas.html <05_canvas.html>`_ ::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <script src="__javascript__/solar_system05.js"></script>
	    <title>Solar System Animation</title>
	  </head>
	  <body>
	    <p>Now a game loop also waits for user input otherwise it is no game.</p>
	    <p id="info"><b>Game running</b></p>
	    <canvas id="canvas" width="300" height="300"></canvas><br><br>
	    <p>Use the cursor keys for right and left or the buttons below to accelerate or slow down the animation.</p>
	    <button onclick="solar_system05.solarSystem.accel()">Accelerate Animation</button> <button onclick="solar_system05.solarSystem.slowdown()">Slow down Animation</button> <button onclick="solar_system05.solarSystem.pause()">Toggle Pause Animation</button>
	  </body>
	  <script></script>
	</html>

OK. Let's have a look at a real game. In this case the game loop is not so important because there is no automatic continuous movement like in animations but only a waiting for keyboard input in order to react and generate an new ouput in the browser:

Game 2048
^^^^^^^^^

2048 is a game where you need shift the blocks with their numbers together so that finally one piece adds up to 2048.
You can use the arrow keys on the keyboard to shift in every direction. Don´t get stuck! The code is `game_2048_dom.py <game_2048_dom.py>`_
::

	import random

	class Game2048:
	    
	    def __init__(self):
	        self.b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] # matrix
	        for i in range(16):
	            # btn = document.getElementById("butt"+str(i))
	            document.getElementById("butt"+str(i)).style.fontSize = "large"
	            document.getElementById("butt"+str(i)).style.backgroundColor  = "white"
	            document.getElementById("butt"+str(i)).style.height = "100px"
	            document.getElementById("butt"+str(i)).style.width = "100px"
	            document.getElementById("butt"+str(i)).innerHTML = "   "
	        self.start_value = document.getElementById("selstart").value
	        self.start_value = int(self.start_value)
	        self.new_number()
	        document.onkeypress = self.on_keypress

	    def shiftp(self, c): 
	        lst = []
	        zeros = 0
	        for i in c:
	            if i == 0:
	                zeros += 1
	            if i>0:
	                lst.append(i)
	        for i in range(zeros):
	            lst.append(0)
	        return lst

	    def sms(self, l):
	        l = self.shiftp(l)
	        for i in range(len(l)-1):
	            if l[i+1]==l[i]: 
	                l[i], l[i+1] = 2*l[i], 0
	        ret = self.shiftp(l)
	        return ret

	    def rot(self): 
	        "rotate matrix b [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] clockwise"
	        # self.b = list(map(list, zip(*self.b[::-1]))) does not work
	        self.b = [[self.b[3][0],self.b[2][0],self.b[1][0],self.b[0][0]], 
	              [self.b[3][1],self.b[2][1],self.b[1][1],self.b[0][1]],
	              [self.b[3][2],self.b[2][2],self.b[1][2],self.b[0][2]],
	              [self.b[3][3],self.b[2][3],self.b[1][3],self.b[0][3]]]

	    def move(self, n):
	        # deep copy of self.b in diff
	        diff = self.b[:]
	        for i in range(n): self.rot()
	        for i in range(4): self.b[i] = self.sms(self.b[i])
	        for i in range(4-n): self.rot()
	        if self.b != diff:
	            return 1
	        else:
	            return 0

	    def new_number(self):
	        "create a new number in b and display all numbers with their colors on the buttons"
	        # get a random empty element with its tuple coordinates
	        empty = []
	        for r, row in enumerate(self.b):
	            for c, col in enumerate(row):
	                if col == 0:
	                    empty.append((r, c))
	        if len(empty)>0:
	            k = empty[random.randint(0, len(empty)-1)]
	            # assign a random number of 2 or 4 to this element or a given self.start_value
	            self.b[k[0]][k[1]] = random.randint(1,2)*self.start_value
	        j = -1
	        for i in range(16):
	            d = self.b[i//4][i%4]
	            if d == 2048:
	                j = i
	            # display button texts of their contents according to array b and their colors according to their number
	            if d:
	                document.getElementById("butt"+str(i)).innerHTML = str(d)
	            else:
	                document.getElementById("butt"+str(i)).innerHTML = '   '
	            colorcodes = {0: "white", 2:"AntiqueWhite", 4:"BurlyWood", 8:"BurlyWood", 16:"Cyan", 32:"Gold", 64:"GoldenRod",         128:"HotPink", 256:"Crimson", 512:"DarkRed", 1024:"DeepPink", 2048:"DarkMagenta"}
	            document.getElementById("butt"+str(i)).style.backgroundColor  = colorcodes[d]
	        if j >-1:
	            for i in range(16): 
	                document.getElementById("butt"+str(i)).innerHTML  = document.getElementById("butt"+str(i)).innerHTML+" :)"
	            alert("Congratulations! You made it to 2048!")
	            self.b = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

	    def on_keypress(self, event):
	        "key handling"
	        direction={'Left': 0, 'Down': 1, 'Right': 2, 'Up': 3}
	        # shift the digits according to the move 0 1 2 or 4 and check if it has changed, if yes create a new number
	        self.keypressed = -1
	        kc = event.keyCode 
	        cc = event.charCode
	        self.ckeys = {38:3, 39:2, 37:0, 40:1}
	        for key, val in self.ckeys.items():
	            if kc == key:
	                self.keypressed = key
	                break
	        if self.keypressed != -1:
	            if self.move(self.ckeys[self.keypressed]): 
	                self.new_number()
	            # deep copy of self.b in p
	            p = self.b[:]
	            # check out all 4 possible moves and compare if numbers would change
	            for i in range(4):
	                self.move(i)
	                # check if is still possible to move in any direction if any change return
	                if self.b != p:
	                    self.b = p[:]
	                    # console.log(self.b)
	                    return # for a new move
	            # otherwise the game has ended
	            for i in range(16): 
	                document.getElementById("butt"+str(i)).style.backgroundColor  = "red"
	                document.getElementById("butt"+str(i)).innerHTML  = document.getElementById("butt"+str(i)).innerHTML+ " :("
	            alert("Aaah! This did not work!")
	    
	    def startvalue(self):
	        self.start_value = int(document.getElementById("selstart").value)

	game2048 = Game2048(None)

And here is the html for it: `06_2048_game.html <06_2048_game.html>`_::

	<html>
	  <head>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <title>Game 2048</title>
	  </head>
	  <body>
	    <h1>2048!</h1>
	    <p>Shift the blocks with their numbers together so that finally one piece adds up to 2048.<br>
	    You can use the arrow keys on the keyboard to shift in every direction. Don´t get stuck!</p>
	    <button onclick="game_2048_dom.game2048.__init__()">Re-Start</button> Lowest start value: <select id="selstart" name="selstart" onchange="game_2048_dom.game2048.startvalue()"> <option>2</option> <option>4</option> <option>8</option> <option>16</option> <option>32</option> <option>64</option></select><br><br>
	    <button id="butt0">___</button>  <button id="butt1">___</button>  <button id="butt2">___</button>  <button id="butt3">___</button>  <br>

	    <button id="butt4">___</button>  <button id="butt5">___</button>  <button id="butt6">___</button>  <button id="butt7">___</button>  <br>

	    <button id="butt8">___</button>  <button id="butt9">___</button>  <button id="butt10">___</button>  <button id="butt11">___</button>  <br>

	    <button id="butt12">___</button>  <button id="butt13">___</button>  <button id="butt14">___</button>  <button id="butt15">___</button>  <br>
	  <script src="__javascript__/game_2048_dom.js"></script>
	  </body>
	</html>

End of section.
