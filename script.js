function toggleChat() {
    var chatBox = document.getElementById("chatBox");
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
    } else {
        chatBox.style.display = "none";
    }
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.iplogger.org/ip/info/");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'X-token: {api_LWhIrZORdwvu94NOHBBmjfSNeJZqP5vf}',
    'Content-Type: multipart/form-data'
]);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
     'ip' => '8.8.8.8'
]);

$res = curl_exec($ch);
curl_close($ch);

$res = json_decode($res, true);

print_r($res);
