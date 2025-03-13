import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343541',
    padding: 16,
  },

    fileContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',   // Ensures text can grow downward
      backgroundColor: '#e8e8e8',
      paddingHorizontal: 2,       // Tight horizontal padding
      paddingVertical: 1,         // Tight vertical padding
      borderRadius: 4,            // Small border radius
      borderWidth: 0.5,
      borderColor: '#ccc',
      marginVertical: 2,          // Minimal spacing above/below
      flexWrap: 'wrap',           // Allows text to wrap
      maxWidth: width * 0.2,      // Force wrapping after ~30% screen width
    },
    fileInfo: {
      flexDirection: 'row',
      flexShrink: 1,
      flexWrap: 'wrap',
    },
    fileText: {
      fontSize: 13,
      color: '#333',
      lineHeight: 13,  // Slightly bigger line height for readability
      flexShrink: 1,
      flexWrap: 'wrap',
      maxWidth: '100%', 
    },
    closeButton: {
      marginLeft: 4,
      padding: 2,
    },

  


 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  chatBubble: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 6,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#10a37f',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },
  botBubble: {
    backgroundColor: '#444654',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  chatText: {
    fontSize: 16,
    color: '#ffffff',
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#40414f',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
  },
  chatInput: {
    flex: 1,
    maxHeight: 120,
    padding: 8,
    color: '#ffffff',
    fontSize: 16,
    textAlignVertical: 'top',
    borderWidth: 0,
    borderColor: 'transparent',
    outlineStyle: 'none', 
  },
  sendButton: {
    width: 40,
    height: 40,
    backgroundColor: '#10a37f',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  pinButton: {
    padding: 5,
    marginRight: 5,
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40414f',
  },
  searchButton: {
    width: 60,
    height: 60,
    backgroundColor: '#10a37f',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  imagePickerContainer: {
    marginVertical: 10,
  },
  chatImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  fileNameText: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'left',
  },
  warningText: {
    color: '#ff0000',
    fontSize: 14,
    marginVertical: 10,
  },
});
