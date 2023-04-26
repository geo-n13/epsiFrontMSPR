import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F6",
    padding: 10,
  },
  linkStyle: {
    color: "#749857",
  },
  signInButton: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  signInButtonText: {
    height: 30,

    backgroundColor: "#749857",
    width: "70%",
    borderRadius: 10,
    color: "white",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    flexDirection: "row",
    display: "flex",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#749857",
  },
  checkboxContainer: {
    margin: 10,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    margin: 10,
    fontSize: 35,
    paddingTop: "20%",
    fontWeight: "500",
  },
  subTitle: { marginLeft: 10 },
  signUpText: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  label: {
    margin: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  lineStyleText: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
});
