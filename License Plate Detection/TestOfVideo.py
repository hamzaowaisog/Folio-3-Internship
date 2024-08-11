from ultralytics import YOLO
import cv2
import os

# Define a color map for different classes
color_map = {
    0: (255, 0, 0),    # Red for class 0
    1: (0, 255, 0),    # Green for class 1
    2: (0, 0, 255),    # Blue for class 2
    3: (255, 255, 0),  # Cyan for class 3
    # Add more colors if needed
}

if __name__ == '__main__':
    # Load the model
    model = YOLO(r"E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\checkpoints\checkpoints5\weights\best.pt")

    # Load the video
    video_path = r'E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\Video\input.mp4'
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print("Error: Could not open video.")
        exit()

    # Define the codec and create VideoWriter object
    output_path = r'E:\FOLIO 3 INTERNSHIP\Folio-3-Internship\License Plate Detection\checkpoints\Test\Video\output_video.mp4'
    output_dir = os.path.dirname(output_path)
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    width = int(cap.get(3))
    height = int(cap.get(4))
    out = cv2.VideoWriter(output_path, fourcc, 20.0, (width, height))

    if not out.isOpened():
        print("Error: Could not open VideoWriter.")
        exit()

    frame_count = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            print("No more frames to read or error in reading frame.")
            break

        frame_count += 1
        print(f"Processing frame {frame_count}")

        # Predict the objects in the frame
        results = model.predict(frame)

        for result in results:
            for box in result.boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                confidence = box.conf[0]
                class_id = int(box.cls[0])
                label = f"Class {class_id}: {confidence:.2f}"

                # Get color for the class
                color = color_map.get(class_id, (255, 255, 255))  # Default to white if class_id is not in color_map

                # Draw bounding box
                cv2.rectangle(frame, (x1, y1), (x2, y2), color, 2)

                # Put label
                cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

        # Write the processed frame to the output video
        out.write(frame)
        print("Frame written to output.")

    # Release everything if the job is finished
    cap.release()
    out.release()
    cv2.destroyAllWindows()

    print(f"Video processing complete. Output saved to {output_path}")
    print(f"Good Bye")
