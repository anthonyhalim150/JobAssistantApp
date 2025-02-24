import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343541',
    padding: 16,
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
    borderWidth: 0, // Ensure no border
    borderColor: 'transparent', // Make sure border is not visible
    outlineStyle: 'none', //Need this biar bordernya yng putih2 ga keluar
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
});
