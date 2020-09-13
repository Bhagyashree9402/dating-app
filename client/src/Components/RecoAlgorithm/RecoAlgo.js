const axios = require("axios");
const checkDrinkCompatibility = require("./checkDrinkCompatibility");
const checkDrugCompatibility = require("./checkDrugCompatibility");
const checkBodyCompatibility = require("./checkBodyCompatibility");
const checkHeightCompatibility = require("./checkHeightCompatibility");
const checkSexualPreference = require("./checkSexualPreference");
const checkSmokesCompatibility = require("./checkSmokesCompatibility");
const checkStatusCompatibility = require("./checkStatusCompatibility");
const checkDietCompatibility = require("./checkDietCompatibility");

const getUserProfile = () => {
  axios.get("http://localhost:3000/users/user_data").then(({ data }) => data);
};

const myProfile = {
  _id: 2243,
  first_name: "Ella",
  last_name: "Manning",
  mumble_email: "ella.manning@mumble.com",
  age: 22,
  body_type: "a little extra",
  diet: "strictly kosher",
  drinks: "never",
  drugs: "never",
  education: "graduated from college/university",
  essay: "",
  ethnicity: "white",
  height: 75,
  income: -1,
  job: "sales / marketing / biz dev",
  location: "san francisco, california",
  offspring: "doesnt have kids",
  orientation: "straight",
  pets: "likes dogs and likes cats",
  religion: "agnosticism",
  sex: "women",
  sign: "cancer and it&rsquo;s fun to think about",
  smokes: "sometimes",
  speaks: "english (fluently), spanish (poorly)",
  status: "single",
  profile_image: "https://randomuser.me/api/portraits/women/60.jpg",
};

const recoAlgo = (myProfile) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/profile/all")
      .then(({ data }) => {
        let sexualPreference = checkSexualPreference(myProfile);
        data.map((userProfile) => {
          userProfile.loveFactor = 0;
          if (
            sexualPreference[0] === userProfile.sex ||
            (sexualPreference[1] === userProfile.sex &&
              userProfile.age > myProfile.age - 10 &&
              userProfile.age < myProfile.age + 10)
          ) {
            checkDrinkCompatibility(myProfile, userProfile);
            checkDrugCompatibility(myProfile, userProfile);
            checkBodyCompatibility(myProfile, userProfile);
            checkHeightCompatibility(myProfile, userProfile);
            checkSmokesCompatibility(myProfile, userProfile);
            checkStatusCompatibility(myProfile, userProfile);
            checkDietCompatibility(myProfile, userProfile);
          }
          return userProfile;
        });
        return data;
      })
      .then((recommendedProfiles) =>
        resolve(
          recommendedProfiles
            .sort((a, b) => b.loveFactor - a.loveFactor)
            .slice(0, 1)
        )
      );
  });
};

recoAlgo(myProfile).then((res) => setTimeout(() => console.log(res), 000));