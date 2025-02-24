// JobCardStyles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        flexDirection: 'row',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
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
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    company: {
        fontSize: 14,
        color: '#666',
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
    },
    applyButton: {
        fontSize: 14,
        color: '#1E90FF',
        fontWeight: 'bold',
    },
});
