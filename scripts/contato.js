document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var comment = document.getElementById("comment").value;

  console.log("Nome: " + name);
  console.log("Email: " + email);
  console.log("Telefone: " + phone);
  console.log("Comentário: " + comment);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("comment").value = "";
});

function formatarTelefone(input) {
  let cleaned = input.value.replace(/\D/g, '');

  if (cleaned.length === 11) {
    
      cleaned = `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7, 11)}`;
  }

  input.value = cleaned;
}

const inputTelefone = document.getElementById('phone');

inputTelefone.addEventListener('input', function () {
  formatarTelefone(inputTelefone);
});