const express = require("express");
const path = require("path");
const BlogData = require("./blog.json");
const ejsMate = require("ejs-mate");
const { json } = require("express");

const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  data = BlogData;
  res.render("home", {data});
});
app.get("/about", (req, res) => {
  data = BlogData;
  res.render("about",{data});
});
app.get("/blogs", (req, res) => {
  data = BlogData;
  const n = Object.keys(BlogData).length;
  res.render("blogs",{ data, n });
});
app.get('/blogs/:id',(req,res)=>{
  const { id } = req.params;
  data=BlogData[id];
  res.render('view_blog',{data})
})

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
