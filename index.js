
    // Select the school certificate link
    const certificate = document.getElementById("schoolCertificate");

    // Add click event
    certificate.addEventListener("click", function(event) {

        // Show confirmation alert
        const confirmView = confirm(
            "Do you want to view your HSC Certificate?"
        );

        // Stop opening if Cancel is clicked
        if (!confirmView) {
            event.preventDefault();
        }

    });





    
    function confirmCertificate(event, certificateName) {

        const result = confirm(
            "Do you want to view your " + certificateName + "?"
        );

        if (!result) {
            event.preventDefault();
            return false;
        }

        console.log(certificateName + " opened successfully!");

        return true;
    }
    