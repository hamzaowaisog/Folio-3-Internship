from ultralytics import YOLO
import matplotlib.pyplot as plt
import cv2

save_dir = r'E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\checkpoints\Test'

# Define a color map for different classes
# You can expand this dictionary based on the number of classes you have
color_map = {
    0: (255, 0, 0),    # Red for class 0
    1: (0, 255, 0),    # Green for class 1
    2: (0, 0, 255),    # Blue for class 2
    3: (255, 255, 0),  # Cyan for class 3
    # Add more colors if needed
}

if __name__ == '__main__':
    model = YOLO(r"E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\checkpoints\checkpoints5\weights\best.pt")
    results = model.predict(source=r'E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\License Plates.v5-augmented-license-plates.yolov8\test\images', save=True, project=save_dir)

    for result in results:
        print(result.boxes)
        img_path = result.path
        img = cv2.imread(img_path)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
        for box in result.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            confidence = box.conf[0]
            class_id = int(box.cls[0])
            label = f"Class {class_id}: {confidence:.2f}"
            
            # Get color for the class
            color = color_map.get(class_id, (255, 255, 255))  # Default to white if class_id is not in color_map
            
            # Draw bounding box
            cv2.rectangle(img, (x1, y1), (x2, y2), color, 2)
            
            # Put label
            cv2.putText(img, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
        
        plt.imshow(img)
        plt.title(f"Predictions on {img_path}")
        plt.axis('off')
        plt.show()
