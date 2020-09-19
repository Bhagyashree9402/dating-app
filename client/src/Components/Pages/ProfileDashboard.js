import Button from "@material-ui/core/Button";
import axios from "axios";
import React from "react";

// import UserContext from "../../context/UserContext";

const style = {
  background: "linear-gradient(45deg, #ED6570 30%, #F0CA77 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

class ProfileDashboard extends React.Component {
  // props = {
  //   first_name: this.props.first_name,
  //   last_name: this.props.last_name,
  //   mumble_email: this.props.mumble_email,
  //   age: this.props.age,
  //   body_type: this.props.body_type,
  //   diet: this.props.diet,
  //   drinks: this.props.drinks,
  //   drugs: this.props.drugs,
  //   education: this.props.education,
  //   ethnicity: this.props.ethnicity,
  //   height: this.props.height,
  //   income: this.props.income,
  //   job: this.props.job,
  //   location: this.props.location,
  //   offspring: this.props.offspring,
  //   orientation: this.props.orientation,
  //   pets: this.props.pets,
  //   religion: this.props.religion,
  //   sex: this.props.sex,
  //   smokes: this.props.smokes,
  //   status: this.props.status,
  //   profile_image: this.props.profile_image,
  // };
  componentDidMount = () => {
    console.log(this.props);
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  saveProfile = () => {
    // console.log(this.props);
    const profileRec = {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      mumble_email: this.props.mumble_email,
      age: this.props.age,
      body_type: this.props.body_type,
      diet: this.props.diet,
      drinks: this.props.drinks,
      drugs: this.props.drugs,
      education: this.props.education,
      ethnicity: this.props.ethnicity,
      height: this.props.height,
      income: this.props.income,
      job: this.props.job,
      location: this.props.location,
      offspring: this.props.offspring,
      orientation: this.props.orientation,
      pets: this.props.pets,
      religion: this.props.religion,
      sex: this.props.sex,
      smokes: this.props.smokes,
      status: this.props.status,
      profile_image: this.props.profile_image,
    };
    console.log(profileRec);

    const token = localStorage.getItem("auth-token");
    axios({
      method: "POST",
      url: "/profile/new",
      headers: { "x-auth-token": token },
      data: profileRec,
    }).then((saveRec) => {
      console.log(saveRec);
    });
  };

  render() {
    return (
      <div className="proDashMargin">
        <h1>Profile</h1>
        <form className="centerForm">
          <img
            onChange={this.handleChange}
            src={this.props.profile_image}
            alt="profile"
            style={{ marginBottom: "12px", borderRadius: "50px" }}
          />
          <br />
          <p>Name</p>
          <input
            name="first_name"
            onChange={this.handleChange}
            value={this.props.first_name}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <input
            name="last_name"
            onChange={this.handleChange}
            value={this.props.last_name}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />

          {/* Age, Orientation, Gender */}
          <p>Age</p>
          <input
            name="age"
            onChange={this.handleChange}
            value={this.props.age}
            size="2"
            maxLength="2"
            style={{ marginRight: "2px" }}
          />
          <p> Gender </p>
          <input
            name="sex"
            onChange={this.handleChange}
            value={this.props.sex}
            size="8"
          />
          <p>Height (in) </p>
          <input
            name="height"
            onChange={this.handleChange}
            value={this.props.height}
            size="2"
          />
          <p>Body Type</p>
          <input
            name="body_type"
            onChange={this.handleChange}
            value={this.props.body_type}
          />
          {/* <p>Number </p>
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.props.phone}
            style={{ width: "auto" }}
          /> */}
          <p>Location </p>
          <input
            name="location"
            onChange={this.handleChange}
            value={this.props.location}
          />
          <p>Orientation </p>
          <input
            name="orientation"
            onChange={this.handleChange}
            value={this.props.orientation}
          />
          <p>Ethnicity </p>
          <input
            name="ethnicity"
            onChange={this.handleChange}
            value={this.props.ethnicity}
          />
          <p>Children </p>
          <input
            name="offspring"
            onChange={this.handleChange}
            value={this.props.offspring}
          />
          {/* <p>Want Offspring </p>
          <input
            name="wantOffspring"
            onChange={this.handleChange}
            value={this.props.wantOffspring}
          /> */}
          <p>Pets</p>
          <input
            name="pets"
            onChange={this.handleChange}
            value={this.props.pets}
          />
          {/* <p>Want Pets </p> */}
          {/* <input
            name="wantPets"
            onChange={this.handleChange}
            value={this.props.wantPets}
          /> */}
          <p>Education </p>
          <input
            name="education"
            onChange={this.handleChange}
            value={this.props.education}
          />
          <p>Job</p>
          <input
            name="job"
            onChange={this.handleChange}
            value={this.props.job}
          />
          <p>Religion</p>
          <input
            name="religion"
            onChange={this.handleChange}
            value={this.props.religion}
          />
          <p>Diet</p>
          <input
            name="diet"
            onChange={this.handleChange}
            value={this.props.diet}
          />
          <p>Drinks</p>
          <input
            name="drinks"
            onChange={this.handleChange}
            value={this.props.drinks}
          />
          <p>Drugs</p>
          <input
            name="drugs"
            onChange={this.handleChange}
            value={this.props.drugs}
          />
          <p>Smokes</p>
          <input
            name="smokes"
            onChange={this.handleChange}
            value={this.props.smokes}
          />
          <p>Status</p>
          <input
            name="status"
            onChange={this.handleChange}
            value={this.props.status}
          />
        </form>

        <Button
          variant="contained"
          // color="primary"

          disableElevation
          onClick={this.saveProfile}
          style={({ textAlign: "center" }, style)}
        >
          Save Profile
        </Button>
      </div>
    );
  }
}

export default ProfileDashboard;
