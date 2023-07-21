exports.getPosts = (req, res, next) => {
  res.json({
    posts: [{ title: "First Post", content: "This is the frist post!" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in db
  res.status(201).json({
    message: "post created",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
