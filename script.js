document.addEventListener("DOMContentLoaded", function() {
    const getDataBtn = document.getElementById("getDataBtn");
    const dataContainer = document.getElementById("dataContainer");

    getDataBtn.addEventListener("click", function() {
        // URL de la API que deseas consumir
        const apiUrl = "https://rickandmortyapi.com/api";

        // Realiza la solicitud GET a la API utilizando fetch
        fetch(apiUrl)
            .then(response => {
                // Verifica si la solicitud fue exitosa
                if (!response.ok) {
                    throw new Error(`Error al obtener datos: ${response.statusText}`);
                }
                // Convierte la respuesta a formato JSON
                return response.json();
            })
            .then(data => {
                // Muestra los datos en la página HTML
                dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                // Maneja errores de solicitud
                console.error("Error al obtener datos:", error);
                dataContainer.innerHTML = `<p>Error al obtener datos. Por favor, inténtalo de nuevo más tarde.</p>`;
            });
    });
});
