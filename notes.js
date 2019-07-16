function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    //Stops the browser from interpretating special characters as HTML
}

function openForm() {
    document.getElementById("note_form").style.display = "block";
    document.getElementById("new_subject").focus();
}
function closeForm() {
    document.getElementById("note_form").style.display = "none";
}

function openLoginForm() {
    document.getElementById("login_modal").style.display = "block";
    document.getElementById("login_username").focus();
}
function closeLoginForm() {
    document.getElementById("login_modal").style.display = "none";
}

function openSignupForm() {
    document.getElementById("signup_modal").style.display = "block";
    document.getElementById("signup_username").focus();
}
function closeSignupForm() {
    document.getElementById("signup_modal").style.display = "none";
}

function addRow() {
    
    closeForm();
    var new_subject = htmlEntities(document.getElementById("new_subject").value);
    var new_note = htmlEntities(document.getElementById("new_note").value);

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var new_datetime = date+' '+time; 

    var table = document.getElementById("note_table");
  
    var row = table.insertRow(1);

    var subject_cell = row.insertCell(0);
    var note_cell = row.insertCell(1);
    var date_cell = row.insertCell(2);
    var edit_cell = row.insertCell(3);

    subject_cell.innerHTML = new_subject;
    note_cell.innerHTML = new_note;
    date_cell.innerHTML = new_datetime;

    //'this' is a javascript keyword which refers to the current object
    edit_cell.innerHTML = '<button type="button" onClick="Javacsript:editRow(this);">Edit</button><button type="button" onClick="Javacsript:viewRow(this);">View</button><button type="button" onClick="Javacsript:deleteRow(this);">X</button>';
}
function viewRow(object) {
    var index = object.parentNode.parentNode.rowIndex;
    var table = document.getElementById("note_table");
    var modal = document.getElementById("note_modal");

    var obj_cell = table.rows.item(index);

    var subject_data = obj_cell.children[0].innerHTML
    var note_data = obj_cell.children[1].innerHTML

    document.getElementById('view_note_subject').value = subject_data;
    document.getElementById('view_note').value = note_data;

    modal.style.display = "block";
    document.getElementById("view_note_subject").focus();

}

function closeViewRow() {

    document.getElementById("note_modal").style.display = "none";

}

function deleteRow(object) {
    var index = object.parentNode.parentNode.rowIndex;
    var table = document.getElementById("note_table");
    table.deleteRow(index);
}

function editRow(object) {
    var index = object.parentNode.parentNode.rowIndex;
    var table = document.getElementById("note_table");
    var obj_cell = table.rows.item(index);

    var subject_data = obj_cell.children[0].innerHTML
    var note_data = obj_cell.children[1].innerHTML

    document.getElementById('new_subject').value = subject_data;
    document.getElementById('new_note').value = note_data;

    openForm()
    table.deleteRow(index);
}   

function saveNotes() {
    alert("This would then save to the back end part of the system so it could be accessed multiple times.");
}

function login() {
    var username = htmlEntities(document.getElementById('login_username').value);
    var password = htmlEntities(document.getElementById('login_password').value);
    if (username == "admin" && password == "admin") {
        alert("This would then talk to the back end part of the system to confirm they are a user.");
        closeLoginForm();
        document.getElementById("main_page").style.display = 'block';
        document.getElementById("new_note_button").focus();
    }
    else {
        alert("Please enter the correct username and passwords.")
    }

}

function signUp() {
    var password = htmlEntities(document.getElementById('signup_password').value);
    var password2 = htmlEntities(document.getElementById('signup_password2').value);

    if (password != "admin") {
        alert("Enter Valid Password");
        return false;
    } else { 
        if (password == password2) {
            alert("This would then add the user to the back end part of the system and log them in.");
            closeSignupForm();
            document.getElementById("main_page").style.display = 'block';
        } else {
            alert("Please enter the same password.");
        }
    }
}
