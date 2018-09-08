from picamera import PiCamera
import requests
import time 

while True:
    camera = PiCamera()
    camera.preview_fullscreen=False
    camera.preview_window=(620, 320, 640, 480)
    camera.resolution=(640,480)
    camera.start_preview()
    time.sleep(5)
    camera.capture('/home/pi/Desktop/image.jpg')
    camera.stop_preview()
    with open('/home/pi/Desktop/image.jpg', 'rb') as f:
        r = requests.post('https://safe-cliffs-18013.herokuapp.com/image', files={'fridge.jpg': f})
    #Take snaps once in every 30 mins:
    time.sleep(1800)