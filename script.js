document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("KPm55EhJ4r9KYlQnF"); 
});

async function sendAppointmentEmail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("datepicker").value;
    const time = document.getElementById("time").value;

    const templateParams = {
        name: name,
        phone: phone,
        date: date,
        time: time,
        email_to: "info@navipromotions.in" 
    };

    try {
        const response = await emailjs.send("service_yjvv6ma", "template_ceehjxu", templateParams);
        alert("Appointment request sent successfully!");
    } catch (error) {
        console.error("EmailJS error:", error);
        alert("Failed to send appointment request. Please try again.");
    }
}

function downloadImage() {
    const imageUrl = "assets/images/main-img/scanner-img.png";

    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "scanner-img.png"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById("facebook-share").addEventListener("click", function() {
    var pageUrl = window.location.href; 
    var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl);
    window.open(facebookUrl, "_blank"); 
});

document.getElementById("instagram-share").addEventListener("click", function() {
    var pageUrl = window.location.href;
    var instagramUrl = "https://www.instagram.com/";
    window.open(instagramUrl, "_blank");
});

document.getElementById("whatsapp-share").addEventListener("click", function() {
    var pageUrl = window.location.href;
    var whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(pageUrl);
    window.open(whatsappUrl, "_blank");
});

document.getElementById("linkedin-share").addEventListener("click", function() {
    var pageUrl = window.location.href;
    var linkedinUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(pageUrl);
    window.open(linkedinUrl, "_blank");
});

document.getElementById("twitter-share").addEventListener("click", function() {
    var pageUrl = window.location.href;
    var twitterUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(pageUrl);
    window.open(twitterUrl, "_blank");
});

document.getElementById("telegram-share").addEventListener("click", function() {
    var pageUrl = window.location.href;
    var telegramUrl = "https://t.me/share/url?url=" + encodeURIComponent(pageUrl);
    window.open(telegramUrl, "_blank");
});

document.getElementById("pinterest-share").addEventListener("click", function() {
    var pageUrl = window.location.href;
    var pinterestUrl = "https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(pageUrl);
    window.open(pinterestUrl, "_blank");
});

document.getElementById("email-share").addEventListener("click", function() {
    var pageUrl = window.location.href;
    var emailUrl = "mailto:?subject=Check%20this%20out&body=" + encodeURIComponent(pageUrl);
    window.open(emailUrl, "_blank");
});
