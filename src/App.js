import React from "react";
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
import { Cards, Chart, CountryPicker } from "./components";
import classes from "./App.module.css";
import { fetchData } from "./api";
import image from "./img/image.png";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const data = await fetchData(country);
    console.log(data);
    // set the state
    this.setState({ data: data, country: country });
  };

  render() {
    const { data } = this.state;
    return (
      <div className={classes.container}>
        <img src={image} className={classes.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
