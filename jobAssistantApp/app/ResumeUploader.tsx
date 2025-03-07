import React, { useEffect } from 'react';
import { Alert, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

interface ResumeUploaderProps {
    onUploadSuccess: (file: { name: string; uri: string; type: string }) => void;
    onClose: () => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUploadSuccess, onClose }) => {
    
    useEffect(() => {
        handleFilePicker();
    }, []);

    const handleFilePicker = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: '*/*',
                copyToCacheDirectory: true,
            });

            if (result.canceled || !result.assets || result.assets.length === 0) {
                onClose();
                return;
            }

            const file = result.assets[0];

            onUploadSuccess({
                name: file.name ?? 'untitled',
                uri: file.uri,
                type: file.mimeType ?? 'application/octet-stream',
            });

            onClose();
        } catch (err) {
            console.error('Error picking file:', err);
            Alert.alert('Error', 'Failed to attach document.');
            onClose();
        }
    };

    return <View />;
};

export default ResumeUploader;
