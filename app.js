window.addEventListener("DOMContentLoaded", ()=> {
    const btn = document.getElementById("search-btn");
    const input = document.getElementById("superhero-input");
    const result = document.getElementById("result");

    btn.addEventListener("click", () => {
        let query = input.value.trim();
       
        let url="superheroes.php";
        if (query !== "") {
            url += `?name=${encodeURIComponent(query)}`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayResult(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                result.innerHTML = "<p>Error fetching data. Please try again later.</p>";
            });
    });

});
    

