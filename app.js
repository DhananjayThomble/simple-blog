require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 3000;
// ----------------------------------DB---------------------------------
main().catch((err) => console.log(err));

async function main() {
  mongoose.connect(process.env.DB_URL).then(
    () => {
      console.log("connected to the DB");
    },
    (err) => {
      console.error(err);
    }
  );
}

const blogSchema = mongoose.Schema({
  title: String,
  postBody: String,
});

const BlogModel = mongoose.model("post", blogSchema);

// ---------------------------------------DB----------------------------------
// for homepage
app.get("/api/home", cors(), (req, res) => {
  const postArray = [];
  BlogModel.find((err, results) => {
    for (let post of results) {
      postArray.push({
        id: post._id,
        title: post.title,
        postBody: post.postBody,
      });
    }
    res.json(postArray);
  });
});

app.get("/", function (req, res) {
  const homeStartingContent =
    "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
  const postArray = [];
  BlogModel.find((err, results) => {
    for (let post of results) {
      postArray.push({
        id: post._id,
        title: post.title,
        postBody: post.postBody,
      });
    }

    res.render("home", {
      homeStartingContent: homeStartingContent,
      post: postArray,
    });
  });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/about", function (req, res) {
  const aboutContent =
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";

  res.render("about", { content: aboutContent });
});

app.get("/contact", (req, res) => {
  const contactContent =
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

  res.render("contact", { content: contactContent });
});

// express routing:-
app.get("/posts/:id", function (req, res) {
  // checking url paramater with the post array
  // #1
  // const requestedTitle = lodash.lowerCase(req.params.titleName);
  const postId = req.params.id;

  BlogModel.findById(postId, (err, result) => {
    res.render("post", { title: result.title, postBody: result.postBody });
  });
});

// for getting the submited value from 'compose' page
app.post("/compose", (req, res) => {
  const postBody = req.body.post;
  const title = req.body.title;

  // object
  // const post = {
  //   title: title,
  //   post: postBody,
  // };

  const blog = new BlogModel({
    title: title,
    postBody: postBody,
  });
  blog.save();
  // postArray.push(post);
  res.redirect("/");
});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
