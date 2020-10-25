import cfgVar from "../configuration/Variables";

export default {
  list: async (req, res, next) => {
    res.status(200).send({ msg: "await" });
  },
};
