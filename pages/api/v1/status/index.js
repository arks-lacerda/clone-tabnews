function status(request, response) {
    response.status(200).json(
        {
            "student": "são acima da média",
            "curso": "curso.dev"
        }
    );
};

export default status;