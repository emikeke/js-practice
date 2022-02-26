import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  // will assume that there will always be images
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  //turn into arrow function
  handleIndexClick = (e) => {
    console.log(this);
    this.setState({
      // coercion
      active: +e.target.dataset.index,
    });
  };
  render() {
    // state is mutable, previously what we used hooks for
    const { active } = this.state;
    // data flowing down from parent (Pet component)
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              data-index={index}
              // this should be a button (in production)
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
