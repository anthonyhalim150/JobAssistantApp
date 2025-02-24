// ResumeUploader.tsx
import React, { useEffect } from 'react';
import { Alert, Platform, View, Text, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Using expo-document-picker for Expo compatibility
import styles from '../styles/ResumeUploaderStyles';
import axios from 'axios';

interface ResumeUploaderProps {
    onUploadSuccess: (fileName: string) => void;
    onClose: () => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUploadSuccess, onClose }) => {

    useEffect(() => {
        console.log("ResumeUploader component rendered");
        if (Platform.OS === 'web') {
            handleWebUnsupported();
        } 
    }, []);

    // Handle unsupported web behavior
    const handleWebUnsupported = () => {
        console.log('Web platform detected. File upload is not supported.');
        Alert.alert('Unsupported Platform', 'Resume upload is not supported on the web.');
        onClose();
    };

    // Handle mobile file picker
    const handleFilePicker = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
            });

            console.log('Document Picker Result:', result);

            if (result.type === 'success') {
                const fileName = result.name ?? 'untitled';
                const fileUri = result.uri;
                const fileType = result.mimeType ?? 'application/octet-stream';

                console.log('Selected File:', fileName);

                const formData = new FormData();
                formData.append('file', {
                    uri: fileUri,
                    type: fileType,
                    name: fileName,
                } as any);

                const response = await axios.post(
                    'http://your-fastapi-backend-url/upload_resume',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                console.log('Upload Response:', response.data);
                Alert.alert('Success', `Resume "${fileName}" uploaded!`);
                onUploadSuccess(fileName);
            } else {
                console.log('Document picker was cancelled');
            }
        } catch (err) {
            console.error('Error picking file:', err);
            Alert.alert('Error', 'Failed to upload resume.');
        } finally {
            onClose(); 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Your Resume (PDF/DOC/DOCX)</Text>
            {Platform.OS === 'web' ? (
                <Text style={styles.webWarningText}>Resume upload is not supported on the web.</Text>
            ) : (
                <Button title="Pick a Document" onPress={handleFilePicker} />
            )}
        </View>
    );
};

export default ResumeUploader;
