from ultralytics import YOLO
import matplotlib.pyplot as plt
import cv2

save_dir = r'E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\checkpoints'

if __name__ == '__main__':
    model = YOLO(r"E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\checkpoints\checkpoints2\weights\best.pt")
    results = model.predict(source=r'E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\License Plates.v5-augmented-license-plates.yolov8\valid\images' , save=True, project= save_dir)    

    for result in results:
        print(result.boxes)
        img_path = result.path
        img = cv2.imread(img_path)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        plt.imshow(img)
        plt.title(f"Predictions on {img_path}")
        plt.show()
