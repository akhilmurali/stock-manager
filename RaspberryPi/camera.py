from picamera import PiCamera
import requests
import time 

camera = PiCamera()
camera.preview_fullscreen=False
camera.preview_window=(620, 320, 640, 480)
camera.resolution=(640,480)
camera.start_preview()
time.sleep(5)
camera.capture('/home/pi/Desktop/image.jpg')
camera.stop_preview()
d = requests.get(url = 'https://safe-cliffs-18013.herokuapp.com')
print(d.encoding)
print(d.text)
print(d.json())
