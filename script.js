const form = document.createElement('form');
form.id = 'myForm';
form.style.padding = '30px';
form.style.width = '300px';
form.style.margin = '0 auto';
form.style.backgroundColor = '#f9f9f9';
form.style.borderRadius = '4px';
form.style.border = '1px solid #000';

const title = document.createElement('h2');
title.textContent = 'FORM KUIS';
form.appendChild(title);

//Nama
const nameLabel = document.createElement("label");
nameLabel.textContent = "Nama: ";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "nama";

//NIM
const nimLabel = document.createElement("label");
nimLabel.textContent = "NIM: ";
const nimInput = document.createElement("input");
nimInput.type = "text";
nimInput.id = "nim";

//Program studi
const prodiLabel = document.createElement('label');
prodiLabel.textContent = 'Program Studi: ';
const prodiSelect = document.createElement('select');
prodiSelect.id = 'prodi';
const prodiOptions = ['Sistem Informasi Kelautan', 'Logistik Kelautan', 'PGPAUD', 'PGSD'];
prodiOptions.forEach(optionText => {
    const option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;
    prodiSelect.appendChild(option);
});
form.appendChild(document.createElement("br")); // Add <br> element

//Jenis kelamin
const jkLabel = document.createElement('label');
jkLabel.textContent = 'Jenis Kelamin: ';
const jkContainer = document.createElement('div'); 

const jkOptions = ['Laki-Laki', 'Perempuan'];
jkOptions.forEach(optionText => {
    const optionContainer = document.createElement('div'); 
    const option = document.createElement('input');
    option.type = 'radio';
    option.name = 'jk'; 
    option.value = optionText; 
    option.id = optionText; 

    const optionLabel = document.createElement('label');
    optionLabel.textContent = optionText;
    optionLabel.setAttribute('for', optionText); 

    optionContainer.appendChild(option); 
    optionContainer.appendChild(optionLabel); 
    jkContainer.appendChild(optionContainer); 
});
form.appendChild(document.createElement("br"));

// Hobi
const hobiLabel = document.createElement('label');
hobiLabel.textContent = 'Hobi: ';
const hobiContainer = document.createElement('div'); 

const hobiOptions = ['Main Musik', 'Olahraga', 'Menulis', 'Main Game','Memasak'];
hobiOptions.forEach(optionText => {
    const optionContainer = document.createElement('div'); 
    const option = document.createElement('input');
    option.type = 'checkbox';
    option.value = optionText; 
    option.id = optionText; 

    const optionLabel = document.createElement('label');
    optionLabel.textContent = optionText;
    optionLabel.setAttribute('for', optionText); 

    optionContainer.appendChild(option); 
    optionContainer.appendChild(optionLabel); 
    hobiContainer.appendChild(optionContainer); 
});

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

const tombol = document.createElement('input')
tombol.setAttribute('type','submit')
tombol.setAttribute('value','simpan')

const previewTitle = document.createElement('h3');
previewTitle.textContent = 'Data Terikirim!';
const previewName = document.createElement('p');
previewName.id = 'preview-name';
const previewNim = document.createElement('p');
previewNim.id = 'preview-nim';
const previewProdi = document.createElement('p');
previewProdi.id = 'preview-prodi';
const previewJk = document.createElement('p');
previewJk.id = 'preview-jk';
const previewHobi = document.createElement('p');
previewHobi.id = 'preview-hobi';

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement('br'));
form.appendChild(nimLabel);
form.appendChild(nimInput);
form.appendChild(document.createElement('br'));
form.appendChild(prodiLabel);
form.appendChild(prodiSelect);
form.appendChild(document.createElement('br'));
form.appendChild(jkLabel);
form.appendChild(jkContainer); 
form.appendChild(document.createElement('br'));
form.appendChild(hobiLabel);
form.appendChild(hobiContainer); 
form.appendChild(document.createElement('br'));
form.appendChild(tombol);

tombol.addEventListener('click', function(e) {
  e.preventDefault(); 
  alert('Data telah dikirim!');
});

//Events
document.body.appendChild(form);
document.body.appendChild(previewTitle);
document.body.appendChild(previewName);
document.body.appendChild(previewNim);
document.body.appendChild(previewProdi);
document.body.appendChild(previewJk);
document.body.appendChild(previewHobi);

nameInput.addEventListener('input', function() {
    previewName.textContent = 'Nama: ' + nameInput.value;
});

nimInput.addEventListener('input', function() {
    previewNim.textContent = 'NIM: ' + nimInput.value;
});

prodiSelect.addEventListener('change', function() {
    previewProdi.textContent = 'Program Studi: ' + prodiSelect.value;
});

const jkInputs = document.querySelectorAll('input[name="jk"]');
jkInputs.forEach(input => {
    input.addEventListener('change', function() {
        const selectedJk = Array.from(jkInputs).find(checkbox => checkbox.checked)?.value || 'Tidak Dipilih';
        previewJk.textContent = 'Jenis Kelamin: ' + selectedJk;
    });
});
const hobiInputs = document.querySelectorAll('input[type="checkbox"]');
hobiInputs.forEach(input => {
    input.addEventListener('change', function() {
        const selectedHobi = Array.from(hobiInputs).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value).join(', ') || 'Tidak Dipilih';
        previewHobi.textContent = 'Hobi: ' + selectedHobi;
    });
});

tombol.addEventListener('click', function(e) {
    e.preventDefault(); 
    alert('Data telah dikirim!');
});

nameInput.addEventListener('focus', function() {
    nameInput.style.backgroundColor = 'red';
});

nameInput.addEventListener('blur', function() {
    nameInput.style.backgroundColor = 'grey';
});

tombol.addEventListener('mouseover', function() {
    tombol.style.backgroundColor = '#0056b3';
    tombol.style.color = '#fff';
});

tombol.addEventListener('mouseout', function() {
    tombol.style.backgroundColor = '';
    tombol.style.color = '';
});
