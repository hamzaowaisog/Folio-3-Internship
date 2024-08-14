from ultralytics import YOLO
import cv2
from sort.sort import *
from Util import get_car

mot_tracker = Sort()

# Load model
coco_model = YOLO("yolov8n.pt")
license_plate_detector = YOLO(r'.\checkpoints\checkpoints5\weights\best.pt')

#load video
cap = cv2.VideoCapture(r'.\Video\Input.mp4')

vehicles = [2,3,5,7]
#read frames
frame_num = -1
ret = True
while ret:
    frame_num += 1
    ret,frame = cap.read()
    if ret and frame_num <10:
        #detect vehicle
        detections = coco_model(frame)[0]
        # detections = license_plate_detector(frame)[0]
        detections_ = []
        for detection in detections.boxes.data.tolist():
            print(detection)
            x1,y1,x2,y2,score,class_id = detection
            if int(class_id) in vehicles:
                detections_.append([x1,y1,x2,y2,score]) 

        #track vehicles
        track_ids = mot_tracker.update(np.asarray(detections_))

        #detect license plate
        license_plates = license_plate_detector(frame)[0]
        for license_plate_to_be in license_plates.boxes.data.tolist():
            x1,y1,x2,y2,score,class_id = license_plate_to_be
            if(class_id == 1):
                license_plate = license_plate_to_be

                #assign license plate to car
                xcar1,ycar1,xcar2,ycar2,car_id = get_car(license_plate,track_ids)
                
