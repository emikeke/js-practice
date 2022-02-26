import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

// class components have life cycle methods
// componentDidMount gets called when the component is rendered for the first time and then it will not get called again. we want to fetch the pet data we just tried to render
class Details extends Component {
  constructor() {
    super();

    // default is true
    this.state = { loading: true, showModal: false };
  }
  async componentDidMount() {
    const res = await fetch(
      // this refers to detailed component we are working on. props is what is passed down from the parent. match and params comes from react-router route path. match is the matched path and the params is the parameters we're getting from the user. id refers to id of pet we are searching
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => {
    // opposite of what showModal is
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => {
    window.location = "http://bit.ly/pet-adopt";
  };

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }
    // pulling out of state
    const { animal, images, breed, city, state, description, name, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.adopt}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// Higher order component are things that dont display
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
