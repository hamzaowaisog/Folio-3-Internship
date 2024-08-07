# License Plate Detection using YOLO

This project aims to detect license plates from images using a custom dataset and the YOLO (You Only Look Once) object detection algorithm. YOLO is a state-of-the-art, real-time object detection system that is capable of detecting objects in images with high accuracy.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Dataset](#dataset)
- [Installation](#installation)
- [Usage](#usage)
- [Model Training](#model-training)
- [Inference](#inference)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project implements a license plate detection system using YOLO. The model is trained on a custom dataset consisting of images with annotated license plates. The goal is to accurately detect the location of license plates in various images.

## Features

- Real-time license plate detection
- Custom dataset for training and validation
- Pre-processing and augmentation techniques
- Training and inference scripts

## Dataset

The custom dataset consists of images with annotated license plates. Each image is labeled with bounding boxes around the license plates. The dataset is split into training and validation sets.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/hamzaowaisog/license-plate-detection.git
   cd license-plate-detection
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Download the YOLO weights file and place it in the weights directory:
   ```bash
   mkdir weights
   # Download the YOLO weights file and place it in the weights directory
   ```

## Usage

### Training

To train the model on the custom dataset, run the following command:
```bash
python train.py --data <path_to_dataset> --config <path_to_config_file> --weights <path_to_weights_file>
```

### Inference

To run inference on a single image, use the following command:
```bash
python detect.py --image <path_to_image> --weights <path_to_weights_file> --config <path_to_config_file>
```

### Evaluation

To evaluate the model on the validation set, use the following command:
```bash
python evaluate.py --data <path_to_dataset> --weights <path_to_weights_file> --config <path_to_config_file>
```

## Results

Include results of the model on various images. Showcase examples of detected license plates with bounding boxes.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.