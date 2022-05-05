getBtn = document.querySelector("#get-btn");

getBtn.onclick = function(){
    //console.log("works")
    axios.get("http://localhost:2000/get-land").then((feedback) => {
        data = feedback.data
        console.log(feedback)
        


        tableCode = `<table>
                            <thead>
                                <th>First name</th>
                                <th>Other name</th>
                                <th>Email</th>
                            </thead>
                            <tbody>
                            `;
            for(let i = 0; i < result.length; i++){

                tableCode += `<tr>
                                    <td>${users[i]['firstname']}</td>
                                    <td>${users[i]['othername']}</td>
                                    <td>${users[i]['email']}</td>
                              </tr>`

            }


            tableCode += `</tbody></table>`;

            document.querySelector("#users-area").innerHTML = tableCode;
    })
}