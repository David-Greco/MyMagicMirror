import face_recognition
import picamera
import numpy as np

# Get a reference to the Raspberry Pi camera.
# If this fails, make sure you have a camera connected to the RPi and that you
# enabled your camera in raspi-config and rebooted first.
'''
camera = picamera.PiCamera()
camera.resolution = (320, 240)
output = np.empty((240, 320, 3), dtype=np.uint8)
'''
# Load a sample picture and learn how to recognize it.
print("Loading known face image(s)")
my_image = face_recognition.load_image_file("/home/pi/MagicMirror/modules/default/compliments/bright.jpg")
my_encoding = face_recognition.face_encodings(my_image)

# Initialize some variables
face_locations = []
face_encodings = []

while True:
    print("Capturing image.")
    # Loop over each face found in the frame to see if it's someone we know.
    while True:
        # See if the face is a match for the known face(s)
        #match = face_recognition.compare_faces(my_encoding, my_encoding)
        name = "<Unknown Person>"

        if True:
            print("I see someone named David")
            quit()
            name = "David Greco"

        print("I see someone named {}!".format(name))
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B
B

