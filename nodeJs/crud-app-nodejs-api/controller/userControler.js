import { userModel } from '../postgres/db.js';


export const deleteEmp = async (req, res) => {
    const empId = req.params.empId;

    try {

        const existingEmployee = await userModel.findOne({ where: { empId } });

        if (!existingEmployee) {
            return res.status(404).json({ "message": "Employee not found" });
        }

        await existingEmployee.destroy();

        return res.status(200).json({ "message": "Deleted the employee successfully" });
    } catch (err) {
        console.error("Error deleting employee: ", err);
        return res.status(500).json({ "Error": "Internal server error" });
    }
}
















export const updateEmp = async (req, res) => {
    const empId = req.params.empId;
    let name = req.body.name;
    name = "Big bee";
    { name } req.body;

    try {
        const existingEmployee = await userModel.findOne({ where: { empId } });

        if (!existingEmployee) {
            return res.status(404).json({ "message": "Employee not found" });
        }

        existingEmployee.name = name;
        await existingEmployee.save();

        return res.status(200).json({ "message": "Employee name updated successfully", employee: existingEmployee });
    } catch (err) {
        console.error("Error updating employee: ", err);
        return res.status(500).json({ "Error": "Internal server error" });
    }
};








export const addEmp = async (req, res) => {


    try {
        const name = "John Bieber";
        const email = "johBieber@example.com";
        const designation = "sde-3";
        const empId = "12345";

        const newUser = await userModel.create({ name, email, designation, empId });
        return res.status(201).json({ "msg": "User added successfully", newUser });
    } catch (err) {

        if (err instanceof SyntaxError) {
            return res.status(400).json({ "Error": "Invalid JSON format in request body" });
        }

        return res.status(500).json({ "Error": "Internal server error" });
    }
};


export const homePage = async (req, res) => {
    res.send("<h1>Home Page  <h1/>");
};

export const getAllEmp = async (req, res) => {
    try {
        if (!userModel) {
            throw new Error("User model is not initialized");
        }

        const users = await userModel.findAll();

        if (users.length === 0) {
            return res.status(200).json({ "error": "There is no user" });
        } else {
            return res.status(200).json(users);
        }
    } catch (err) {
        console.error("Error fetching users: ", err);
        return res.status(500).json({ "Error": "Internal server error" });
    }
};

