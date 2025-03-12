import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    cardContainer: {
        width: screenWidth * 0.9,
        maxWidth: '100%', 
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignSelf: 'center',
    },    
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        resizeMode: 'contain',
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
        justifyContent: 'center',
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    title: {
        fontSize: screenWidth < 360 ? 14 : 16, 
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
        flexShrink: 1,
    },
    company: {
        fontSize: screenWidth < 360 ? 12 : 14, 
        color: '#666',
        marginBottom: 2,
        flexShrink: 1,
    },
    location: {
        fontSize: screenWidth < 360 ? 10 : 12, 
        color: '#999',
        marginBottom: 5,
        flexShrink: 1,
    },
    description: {
        fontSize: screenWidth < 360 ? 10 : 12,
        color: '#555',
        marginBottom: 10,
        flexShrink: 1,
    },
    applyButton: {
        fontSize: screenWidth < 360 ? 12 : 14, 
        color: '#1E90FF',
        fontWeight: 'bold',
        flexShrink: 1,
    },
});
