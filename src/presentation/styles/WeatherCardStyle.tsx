import { StyleSheet } from "react-native";

const weatherCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    justifyContent: "flex-start",
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    minWidth: "60%",
  },
  cityName: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "200",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 8,
  },
  cardIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  cardToneWarm: { backgroundColor: "#fde4e0" },
  cardToneCool: { backgroundColor: "#e1f2ff" },
  cardToneNeutral: { backgroundColor: "#e8f5e9" },
});

export default weatherCardStyle;
