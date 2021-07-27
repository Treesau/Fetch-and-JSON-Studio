// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            json.sort((a, b) => (a.hoursInSpace > b.hoursInSpace) ? 1 : -1)
            const title = document.getElementById("numbered")
            title.innerHTML = json.length + " " + title.innerHTML;
            for (let astronaut of json) {
                const div = document.getElementById("container");
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <ul>
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li ${astronaut.active ? 'class="active"': ''}>Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills}</li>
                            </ul>
                        </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture}>
                </div>`
            }
        });
    });
});