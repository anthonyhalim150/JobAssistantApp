// ResumeUploaderStyles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#343541',
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  pinButton: {
    backgroundColor: '#10a37f',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fileName: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffffff',
  },
  warningText: {
    color: '#ff5555',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  webWarningContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444654',
    borderRadius: 8,
    margin: 10,
  },
  webWarningText: {
    color: '#ff5555',
    fontSize: 16,
    textAlign: 'center',
  },
});
