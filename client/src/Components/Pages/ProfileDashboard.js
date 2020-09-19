import Button from "@material-ui/core/Button";
import axios from "axios";
import React from "react";

// import UserContext from "../../context/UserContext";

class ProfileDashboard extends React.Component {
  // state = {
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
    // console.log(this.state);
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
          <img src={this.props.profile_image} alt="" />
          <span>Name</span>
          <br />
          <input
            name="firstName"
            onChange={this.handleChange}
            value={this.props.first_name}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
          <input
            name="lastName"
            onChange={this.handleChange}
            value={this.props.last_name}
            size="8"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />

          {/* Age, Orientation, Gender */}
          <br />
          <span style={{ marginRight: "-5px" }}>I am a &nbsp;</span>
          <input
            name="age"
            onChange={this.handleChange}
            value={this.props.age}
            size="2"
            maxlength="2"
            style={{ marginRight: "2px" }}
          />
          <span> year young &nbsp; </span>
          {/* <input
            name="orientation"
            onChange={this.handleChange}
            value={this.state.orientation}
            size="8"
          /> */}
          <input
            name="gender"
            onChange={this.handleChange}
            value={this.props.gender}
            size="8"
          />
          <br />
          <p>Height</p>
          {/* <input
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
            size="2"
          /> */}
          <p>Number </p>
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.props.phone}
            style={{ width: "auto" }}
          />
          <p>Location </p>
          <input
            name="location"
            onChange={this.handleChange}
            value={this.props.location}
          />
          <br />
          <span>Orientation </span>
          <input
            name="orientation"
            onChange={this.handleChange}
            value={this.props.orientation}
          />
          <br />
          <span>Ethnicity </span>
          <input
            name="ethnicity"
            onChange={this.handleChange}
            value={this.props.ethnicity}
          />
          <br />
          <span>Height </span>
          <input
            name="height"
            onChange={this.handleChange}
            value={this.props.height}
            size="2"
          />
          <br />
          <span>Current Offspring </span>
          <input
            name="offspring"
            onChange={this.handleChange}
            value={this.props.offspring}
          />
          <p>Want Offspring </p>
          <input
            name="wantOffspring"
            onChange={this.handleChange}
            value={this.props.wantOffspring}
          />
          <p>Have Pets </p>
          <input
            name="havePets"
            onChange={this.handleChange}
            value={this.props.havePets}
          />
          <p>Want Pets </p>
          <input
            name="wantPets"
            onChange={this.handleChange}
            value={this.props.wantPets}
          />
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
        </form>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.saveProfile}
          style={{ textAlign: "center" }}
        >
          Save Profile
        </Button>
      </div>
    );
  }
}

export default ProfileDashboard;
