let mongoose = require("mongoose");
let db = require("../models/profileModel");
require("dotenv").config();
const MONGODB_URI = "mongodb://localhost/profile";

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established.");
  }
);

let profileSeed = [
  {
    // userId: 1,
    first_name: "Steven",
    last_name: "Gibson",
    mumble_email: "steven.gibson@mumble.com",
    age: 22,
    body_type: "a little extra",
    diet: "strictly anything",
    drinks: "desperately",
    drugs: "never",
    education: "working on college/university",
    essay:
      "about me:<br />,  <br />,  i would love to think that i was some some kind of intellectual:,  either the dumbest smart guy, or the smartest dumb guy. cant say i,  can tell the difference. i love to talk about ideas and concepts. i,  forge odd metaphors instead of reciting cliches. like the,  simularities between a friend of mines house and an underwater,  salt mine. my favorite word is salt by the way (weird choice i,  know). to me most things in life are better as metaphors. i seek to,  make myself a little better everyday, in some productively lazy,  way. got tired of tying my shoes. considered hiring a five year,  old, but would probably have to tie both of our shoes... decided to,  only wear leather shoes dress shoes.<br />,  <br />,  about you:<br />,  <br />,  you love to have really serious, really deep conversations about,  really silly stuff. you have to be willing to snap me out of a,  light hearted rant with a kiss. you dont have to be funny, but you,  have to be able to make me laugh. you should be able to bend spoons,  with your mind, and telepathically make me smile while i am still,  at work. you should love life, and be cool with just letting the,  wind blow. extra points for reading all this and guessing my,  favorite video game (no hints given yet). and lastly you have a,  good attention span.",
    ethnicity: "asian, white",
    height: 75,
    income: -1,
    job: "transportation",
    location: "south san francisco, california",
    offspring: "doesnt have kids, but might want them",
    orientation: "straight",
    pets: "likes dogs and likes cats",
    religion: "agnosticism and very serious about it",
    sex: "men",
    sign: "gemini",
    smokes: "sometimes",
    speaks: "english",
    status: "single",
    profile_image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    // userId: 2,
    first_name: "Andrew",
    last_name: "Dyer",
    mumble_email: "andrew.dyer@mumble.com",
    age: 35,
    body_type: "average",
    diet: "mostly other",
    drinks: "desperately",
    drugs: "sometimes",
    education: "working on space camp",
    essay:
      "i am a chef: this is what that means.<br />,  1. i am a workaholic.<br />,  2. i love to cook regardless of whether i am at work.<br />,  3. i love to drink and eat foods that are probably really bad for,  me.<br />,  4. i love being around people that resemble line 1-3.<br />,  i love the outdoors and i am an avid skier. if its snowing i will,  be in tahoe at the very least. i am a very confident and friendly.,  im not interested in acting or being a typical guy. i have no time,  or patience for rediculous acts of territorial pissing. overall i,  am a very likable easygoing individual. i am very adventurous and,  always looking forward to doing new things and hopefully sharing it,  with the right person.",
    ethnicity: "white",
    height: 70,
    income: 80000,
    job: "hospitality / travel",
    location: "oakland, california",
    offspring: "doesnt have kids, but might want them",
    orientation: "straight",
    pets: "likes dogs and likes cats",
    religion: "agnosticism but not too serious about it",
    sex: "men",
    sign: "cancer",
    smokes: "no",
    speaks: "english (fluently), spanish (poorly), french (poorly)",
    status: "single",
    profile_image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    // userId: 3,
    first_name: "Ruth",
    last_name: "Coleman",
    mumble_email: "ruth.coleman@mumble.com",
    age: 31,
    body_type: "average",
    diet: "mostly anything",
    drinks: "desperately",
    drugs: "never",
    education: "graduated from college/university",
    essay: "",
    ethnicity: "white",
    height: 65,
    income: -1,
    job: "artistic / musical / writer",
    location: "san francisco, california",
    offspring: "doesnt have kids, but wants them",
    orientation: "straight",
    pets: "likes dogs and likes cats",
    religion: "christianity",
    sex: "women",
    sign: "sagittarius",
    smokes: "no",
    speaks: "english, spanish (okay)",
    status: "single",
    profile_image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    // userId: 4,
    first_name: "Olivia",
    last_name: "Robertson",
    mumble_email: "olivia.robertson@mumble.com",
    age: 29,
    body_type: "thin",
    diet: "mostly anything",
    drinks: "very often",
    drugs: "never",
    education: "working on college/university",
    essay: "",
    ethnicity: "hispanic / latin, white",
    height: 62,
    income: 50000,
    job: "other",
    location: "san leandro, california",
    offspring: "doesnt have kids, but wants them",
    orientation: "straight",
    pets: "likes dogs and has cats",
    religion: "catholicism",
    sex: "women",
    sign: "taurus",
    smokes: "no",
    speaks: "english",
    status: "single",
    profile_image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    // userId: 5,
    first_name: "Frank",
    last_name: "Terry",
    mumble_email: "frank.terry@mumble.com",
    age: 33,
    body_type: "athletic",
    diet: "mostly anything",
    drinks: "not at all",
    drugs: "never",
    education: "graduated from masters program",
    essay:
      "i relocated to san francisco half a year ago. that was an awesome,  few months that let me explore the diverse parts of the city, find,  a gorgeous victorian house to live in, meet my awesome roommates,  who became my best friends, find my first american emotional,  soul-mates, ride hot european wheels on the hilly streets of san,  francisco and the winding road to stinson beach, swim in the,  freezing waters of the bay, walk the ocean beach at full moon on,  warm, starry nights, experience the great outdoors hiking and,  cross-country skiing, fall in love with the local diversity and,  openness, abundance of cuisine, and embracement of active,  lifestyle.<br />,  <br />,  this is the most awesome city to live in, and one where you can,  loose yourself in a continuous chase of newelties and adventure.,  and the people around will only support you in that amazing run for,  new experiences. having been absorbing this atmosphere for the past,  six months, im finally revelling in the clamness that i find,  inside me once again. like you, maybe, and so many bright people,  here, ive come to embrace this city as home. and im beginning to,  stabilize and live a well paced life, with time for personal and,  professional growth, fun with close friends, sports that keep the,  balance of my body and mind, and with the time to ponder and,  reflect on my way through life.",
    ethnicity: "white",
    height: 72,
    income: -1,
    job: "science / tech / engineering",
    location: "san francisco, california",
    offspring: "doesnt have kids",
    orientation: "straight",
    pets: "likes dogs and likes cats",
    religion: "catholicism but not too serious about it",
    sex: "men",
    sign: "pisces and it&rsquo;s fun to think about",
    smokes: "no",
    speaks: "english (fluently)",
    status: "single",
    profile_image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

db.Profile.deleteMany({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
