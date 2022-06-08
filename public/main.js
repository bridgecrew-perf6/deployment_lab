writeRandomCharacter = function () {
  let characters = new Array();
  characters[0] = "Prabaker";
  characters[1] = "Abdel Khader Khan";
  characters[2] = "Linbaba";
  characters[3] = "Karla";
  characters[4] = "Raheem";
  characters[5] = "Hassan Obikwa";
  characters[6] = "Habib Adbur Rahman";
  let rand = Math.floor(Math.random() * characters.length);
  document.write(characters[rand]);
};
writeRandomCharacter();
