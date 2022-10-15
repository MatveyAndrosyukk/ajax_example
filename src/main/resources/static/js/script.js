$('document').ready(showUsers)

function showUsers() {
    console.log("showUsers starts")
    $.get("/user", function (data) {
        data.map(user =>
            {
                let row =
                    "<tr id='"+user.id+"'>\n" +
                        "<td>\n" +
                            user.phone +
                        "</td>\n" +
                        "<td>\n" +
                            user.name +
                        "</td>\n" +
                        "<td>\n" +
                            "<input onclick='deleteUser("+user.id+")' type='button' value='Удалить'/>\n" +
                        "</td>\n" +
                    "</tr>\n"

                $("#user_table_body").append(row)
            }
        )
    })
}

function addUser() {
    $.ajax({
        url: "/user",
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            phone: $("#inp_phone").val(),
            name: $("#inp_name").val()
        }),
        success: function (user) {
            console.log(user)
            addUserToTable(user)
        }
    })
}

function addUserToTable(user){
    let line =
        "<tr id='"+user.id+"'>\n" +
        "<td>\n" +
        user.phone +
        "</td>\n" +
        "<td>\n" +
        user.name +
        "</td>\n" +
        "<td>\n" +
        "<input onclick='deleteUser("+user.id+")' type='button' value='Удалить'/>\n" +
        "</td>\n" +
        "</tr>\n"
    $("#user_table_body").append(line)

    $("#inp_phone").val("")
    $("#inp_name").val("")
}

function deleteUser(id) {
    $.ajax({
        url: "/user/" + id,
        type: "DELETE",
        success: function (id) {
            console.log(id)
            $("tr#" + id + "").remove()
        }
    })
}