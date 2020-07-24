from Adafruit_AMG88xx import Adafruit_AMG88xx
from time import sleep

sensor = Adafruit_AMG88xx()

#wait for it to boot
sleep(.1)

highestTemp = 0.0

for x in range(10):
    myData = sensor.readPixels()
    for i in myData:
        if highestTemp < i:
            highestTemp = i
    sleep(1)

if highestTemp > 29:
    print("Occupancy 1/15")
else:
    print("Occupancy 0/15")
