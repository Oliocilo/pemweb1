function auth(){
    const username = "rijal"
    const password = "123456789"

    // tankap input
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    if(username == userInput && password == passwordInput) {
        alert("Login Berhasil Bre!")
        document.location = "home.html"
    } else {
        alert("Login Gagal!")
    }
}