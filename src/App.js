import React, { Component } from "react";
import "./style/style.css";

class App extends Component {
  state = {
    settings: [
      {
        title: "Roof",
        show: false,
        options: [
          { name: "colorRoof", isChecked: "", value: "Green" },
          { name: "colorRoof", isChecked: "checked", value: "Red" },
          { name: "colorRoof", isChecked: "", value: "Blue" },
        ],
      },
      {
        title: "Wall",
        show: false,
        options: [
          { name: "colorWall", isChecked: "checked", value: "Green" },
          { name: "colorWall", isChecked: "", value: "Red" },
          { name: "colorWall", isChecked: "", value: "Blue" },
        ],
      },
      {
        title: "Foundation",
        show: false,
        options: [
          { name: "colorFoundation", isChecked: "", value: "Green" },
          { name: "colorFoundation", isChecked: "", value: "Red" },
          { name: "colorFoundation", isChecked: "clecked", value: "Blue" },
        ],
      },
    ],
    colorRoof: "red",
    colorWall: "green",
    colorFoundation: "blue",
  };

  showSetting = e => {
    let newSettings = this.state.settings;
    if (newSettings[e.target.id].show) {
      newSettings.forEach(elem => {
        elem.show = false;
      });
    } else {
      newSettings.forEach((elem, index) => {
        index === Number(e.target.id) ? (elem.show = true) : (elem.show = false);
      }); 
    }
    this.setState({ settings: newSettings });
  };

  changeColor = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="sidebar">
            {this.state.settings.map((elem, index) => (
              <div className="setting-block" key={index}>
                <div className="title" id={index} onClick={this.showSetting}>
                  {elem.title}
                  <div
                    className="pointer"
                    id={index}
                    style={{ transform: elem.show ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ↓
                  </div>
                </div>
                <div className={elem.show ? "settings-wrapper-open" : "settings-wrapper-close"}>
                  {elem.options.map((elem, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={elem.name}
                        value={elem.value}
                        defaultChecked={elem.isChecked}
                        onChange={this.changeColor}
                      />
                      {elem.value}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <main>
            <header>
              <p>Color Home App</p>
            </header>
            <div className="placeHome">
              <div
                className="roof"
                style={{
                  opacity: this.state.settings[1].show || this.state.settings[2].show ? 0.3 : 1,
                  borderBottomColor: this.state.colorRoof,
                }}
              />
              <div
                className="wall"
                style={{
                  opacity: this.state.settings[0].show || this.state.settings[2].show ? 0.3 : 1,
                  backgroundColor: this.state.colorWall,
                }}
              />
              <div
                className="foundation"
                style={{
                  opacity: this.state.settings[0].show || this.state.settings[1].show ? 0.3 : 1,
                  backgroundColor: this.state.colorFoundation,
                }}
              />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
