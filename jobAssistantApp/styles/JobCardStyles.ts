// JobCardStyles.ts
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // Increased elevation for better shadow visibility on Android
        flexDirection: 'row',
        alignItems: 'center', // Ensures vertical alignment
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        resizeMode: 'contain', // Ensures the image fits correctly
    },
    placeholderLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    placeholderText: {
        fontSize: 20,
        color: '#555',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center', // Center text vertically in Android
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    company: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    location: {
        fontSize: 12,
        color: '#999',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        color: '#555',
        marginBottom: 10,
        flexShrink: 1, // Prevents text from being cut off
    },
    applyButton: {
        fontSize: 14,
        color: '#1E90FF',
        fontWeight: 'bold',
    },
});
