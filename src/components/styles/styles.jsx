import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
  },
  button: {
    backgroundColor: '#9494b8',
    border: 'none',
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: 16,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonCenter: {
    top: '40%',
  },
  buttonSmall: {
    marginHorizontal: '37%',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d1e0',
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 0,
  },
  cardPokemon: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    marginHorizontal: 0,
    marginVertical: 5,
  },
  modalContainer: {
    backgroundColor: 'white',
    height: 195,
    padding: 15,
    borderRadius: 6,
  },
  modalTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  modalDesc: {
    fontSize: 14,
    marginBottom: 10,
  },
  modalButton: {
    borderWidth: 0,
    borderRadius: 6,
    backgroundColor: '#9494b8',
    marginTop: 10,
    paddingVertical: 5,
    marginHorizontal: '37%',
    // alignItems: 'flex-end',
  },
  buttonText: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
  },

  white: {
    color: '#FFFFFF'
  },
  block: {
    overflow: 'hidden',
    margin: 0,
  },
  blockImg: {
    width: 75,
    height: 75,
    margin: 0,
  },
  artworkImg: {
    width: 200,
    height: 200,
    margin: 0,
  },
  textCenter: {
    textAlign: 'center'
  },
  textTitle: {
    fontWeight: 'bold',
  },
  loading: {
    top: '40%',
  },
  footerBlock: {
    // display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    marginLeft: '20%',
    marginRight: '30%',
  },
  border: {
    // shadowOffset: { width: 1, height: 1},
    // shadowColor: '#333',
    // shadowOpacity: 0.3,
    // backgroundColor: "#C0C0C0",
    // borderWidth: 0.3,
    padding:2,
  },
  round: {
    fontSize: 10,
    paddingLeft: 10,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 2,
    borderRadius: 9999,
    borderWidth: 2,
    opacity: 1,
  }
});