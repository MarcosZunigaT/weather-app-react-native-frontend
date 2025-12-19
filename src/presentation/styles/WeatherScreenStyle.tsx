import { StyleSheet } from "react-native";

const defualtPrimaryColor = "#2d5c88";
const whiteColor = "#ffffff";
const backgroundColor = "#ebebff";

const weatherScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    justifyContent: "flex-start",
    backgroundColor: backgroundColor,
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "700",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: whiteColor,
  },
  inputFocused: {
    borderColor: defualtPrimaryColor,
    shadowColor: defualtPrimaryColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: defualtPrimaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: whiteColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  loader: {
    fontSize: 18,
    marginTop: 20,
    color: defualtPrimaryColor,
  },
});

export default weatherScreenStyles;
