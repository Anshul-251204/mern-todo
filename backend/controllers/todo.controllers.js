import Todo from "../models/Todo.js";

export const addTodo = async (req, res) => {
	const { todo } = req.body;

	await Todo.create({
		todo,
	});

	res.status(200).json({
		success: true,
		message: "added successfully",
		todo,
	});
};

export const getTodo = async (req, res) => {
	const todo = await Todo.find();

	res.status(200).json({
		success: true,
		message: "all todo",
		todo,
	});
};

export const isDone = async (req, res) => {
	const { _id } = req.params;
	
	await Todo.findByIdAndUpdate(_id, { completed : "yes"});

	res.status(200).json({
		success: true,
		message: "update successfully",
	});
};

export const deleteTodo = async (req, res) => {
	const { _id } = req.params;

	await Todo.findByIdAndDelete({ _id });

	res.status(200).json({
		success: true,
		message: "delete successfully",
	});
};
