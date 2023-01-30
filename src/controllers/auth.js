import * as services from "../services";

export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password || !name)
            return res.status(400).json({
                err: 1,
                mes: "Missing payloads!",
            });
        const response = await services.register({ email, password, name });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: "Internal Server Error: " + error,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({
                err: 1,
                mes: "Missing payloads!",
            });
        const response = await services.login({ email, password });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: "Internal Server Error: " + error,
        });
    }
};
//CRUD (Create - Read - Update - Delete)
// POST
// GET
// PUT
// DELETE

// POST, PUT => req.body
// GET, DELETE => req.query
