import auth from "./auth";
import zingmp3 from "./zingmp3";

const initRoutes = (app) => {
    app.use("/api/v1/auth", auth);
    app.use("/api/v1/zingmp3", zingmp3);

    app.use("*", (req, res) => {
        return res.status(404).json({
            err: 1,
            mes: "This route hasnt definded!",
        });
    });
};

export default initRoutes;
