import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';


let model: mobilenet.MobileNet | null = null;

export async function loadModel() {
    if (!model) {
        model = await mobilenet.load();
        console.log('TensorFlow model loaded.');
    }
}


export async function recognizeImage(imageUri: string): Promise<string[]> {
    if (!model) await loadModel();

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUri;

    return new Promise((resolve, reject) => {
        img.onload = async () => {
            try {
                const predictions = await model?.classify(img);
                if (predictions) {
                    const labels = predictions.map((p) => p.className);
                    resolve(labels);
                } else {
                    reject('No predictions available');
                }
            } catch (error) {
                reject('Error recognizing image: ' + error);
            }
        };
    });
}
