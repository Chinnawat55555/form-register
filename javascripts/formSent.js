function formSent(event) {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;
    const first_name = event.target.elements["first_name"].value;
    const last_name = event.target.elements["last_name"].value;
    const date_of_birth = event.target.elements["date_of_birth"].value;
    const gender = event.target.elements["gender"].value;
    const email = event.target.elements["email"].value;
    const height = event.target.elements["height"].value;
    const weight = event.target.elements["weight"].value;

    const data = {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        date_of_birth: date_of_birth,
        gender: gender,
        email: email,
        height: height,
        weight: weight,
    };
    console.log(data);
}