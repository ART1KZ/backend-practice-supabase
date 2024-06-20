import express from "express";

const app = new express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  "/login",
  (req, res, next) => {
    const credential = req.body.data;

    if (!credential?.password) {
      res.status(403).json({
        data: {
          error: {
            message: "password is not found",
            code: 403,
          },
        },
      });

      return;
    }

    next();
  },
  (req, res) => {
    res.send("хорош!");
  }
);

app.listen(port, () => {
  console.log(`server started on port: http://localhost:${port}`);
});
