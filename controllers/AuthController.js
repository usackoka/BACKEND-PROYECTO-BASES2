export default {
  auth: async (req, res, next) => {
    const pass = req.body.pass;
    const user = req.body.user;

    const valid = pass === "admin" && user === "admin";

    res.status(valid ? 200 : 401).send({ valid });
  },
};
