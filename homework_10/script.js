fetch("https://reqres.in/api/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        console.log("-----------");
        console.log("Пункт No1:");
        console.log("-----------");

        for (let token of data.data) {
            console.log(token);
        }

        let Data = data.data;

        console.log("-----------");
        console.log("Пункт No2:");
        console.log("-----------");
        for (let lastName of Data) {
            console.log(lastName.last_name);
        }

        console.log("-----------");
        console.log("Пункт No3:");
        console.log("-----------");
        for (let index of Data) {
            if (index.last_name[0] === "W") {
                console.log(index);
            }
        }

        const result = Data.reduce((accumulator, item, index, array) => {
            accumulator += item.first_name + " " + item.last_name + ", ";
            return accumulator;
        }, "");

        console.log("-----------");
        console.log("Пункт No4:");
        console.log("-----------");

        console.log(
            "Наша база данных содержит данные следующих пользователей: ",
            result
        );

        console.log("-----------");
        console.log("Пункт No5:");
        console.log("-----------");

        Object.entries(Data[0]).forEach(([key, value]) => {
            console.log("Ключ: ", key);
        });
    });
