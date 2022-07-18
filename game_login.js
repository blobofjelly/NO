function oatmeal(){
    player1_name = document.getElementById("burger").value;
    palyer2_name = document.getElementById("milkshake").value;
    localStorage.setItem("belgian_fries", player1_name);
    localStorage.setItem("hoagie", palyer2_name);
    window.location.replace("game_page.html");
}