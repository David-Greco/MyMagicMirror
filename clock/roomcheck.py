from Adafruit_AMG88xx import Adafruit_AMG88xx
from time import sleep

sensor = Adafruit_AMG88xx()

#wait for it to boot
sleep(.1)

highestTemp = 0.0

f = open("/home/pi/MagicMirror/modules/default/clock/numberInRoom.txt", "r")
numberInRoom = f.read()
f.close()
numberInRoom = int(numberInRoom)

for x in range(10):
    myData = sensor.readPixels()
    for i in myData:
        if highestTemp < i:
            highestTemp = i
    sleep(1)

#Print occupancy
if highestTemp > 29:
    print("Occupancy "+str(numberInRoom+1)+"/15")
    f = open("/home/pi/MagicMirror/modules/default/clock/numberInRoom.txt", "w")
    f.write(str(numberInRoom+1))
    f.close()
else:
    print("Occupancy "+str(numberInRoom)+"/15")
#Then print highest temp
print("Highest recorded")
print("temp: "+str(highestTemp)+"C")
