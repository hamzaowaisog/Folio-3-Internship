from ultralytics import YOLO

save_dir = r'E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\checkpoints'

model = YOLO('yolov8n.pt')

if __name__ == "__main__" :
    model.info()
    results = model.train(data=r"License Plates.v5-augmented-license-plates.yolov8/data.yaml", epochs=150 , imgsz=640, save=True,patience = 20, project=save_dir , name= 'checkpoints')

