function gardening(){
    document.getElementById('container_col2_grid').style.display = "grid";
    document.getElementById('soil').style.display = "none";
    document.getElementById('pots').style.display = "none";
    document.getElementById('garden_toys').style.display = "none";
}
function soil(){
    document.getElementById('container_col2_grid').style.display = "none";
    document.getElementById('pots').style.display = "none";
    document.getElementById('garden_toys').style.display = "none";
    document.getElementById('soil').style.display = "grid";
}
function pots(){
    document.getElementById('container_col2_grid').style.display = "none";
    document.getElementById('pots').style.display = "grid";
    document.getElementById('garden_toys').style.display = "none";
    document.getElementById('soil').style.display = "none";
}
function garden_toys(){
    document.getElementById('container_col2_grid').style.display = "none";
    document.getElementById('pots').style.display = "none";
    document.getElementById('garden_toys').style.display = "grid";
    document.getElementById('soil').style.display = "none";
}

function gardening_tools(){
    document.getElementById('gardening_tools').style.display = "grid"
    document.getElementById('planting_tools').style.display = "none"
    document.getElementById('maintainance_tools').style.display = "none"
    document.getElementById('harvesting_tools').style.display = "none"
}
function planting_tools(){
    document.getElementById('gardening_tools').style.display = "none"
    document.getElementById('planting_tools').style.display = "grid"
    document.getElementById('maintainance_tools').style.display = "none"
    document.getElementById('harvesting_tools').style.display = "none"
}
function maintainance_tools(){
    document.getElementById('gardening_tools').style.display = "none"
    document.getElementById('planting_tools').style.display = "none"
    document.getElementById('maintainance_tools').style.display = "grid"
    document.getElementById('harvesting_tools').style.display = "none"
}
function harvesting_tools(){
    document.getElementById('gardening_tools').style.display = "none"
    document.getElementById('planting_tools').style.display = "none"
    document.getElementById('maintainance_tools').style.display = "none"
    document.getElementById('harvesting_tools').style.display = "grid"
}