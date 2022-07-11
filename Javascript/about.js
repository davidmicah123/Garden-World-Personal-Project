function gallery_all(){
    document.getElementById('fertilizer11').style.display="block";
    document.getElementById('fertilizer22').style.display="block";
    document.getElementById('fertilizer33').style.display="block";
    document.getElementById('fertilizer44').style.display="block";
    document.getElementById('equipment11').style.display="block";
    document.getElementById('equipment22').style.display="block";
    document.getElementById('equipment33').style.display="block";
    document.getElementById('equipment44').style.display="block";
    document.getElementById('soil11').style.display="block";
    document.getElementById('soil22').style.display="block";
    document.getElementById('soil33').style.display="block";
    document.getElementById('soil44').style.display="block";
}
function gallery_soil(){
    document.getElementById('fertilizer11').style.display="none";
    document.getElementById('fertilizer22').style.display="none";
    document.getElementById('fertilizer33').style.display="none";
    document.getElementById('fertilizer44').style.display="none";
    document.getElementById('equipment11').style.display="none";
    document.getElementById('equipment22').style.display="none";
    document.getElementById('equipment33').style.display="none";
    document.getElementById('equipment44').style.display="none";
    document.getElementById('soil11').style.display="block";
    document.getElementById('soil22').style.display="block";
    document.getElementById('soil33').style.display="block";
    document.getElementById('soil44').style.display="block";
    document.getElementById('gallery_soil').setAttribute('style', 'background: rgb(9, 196, 71);');
}
function gallery_fertilizer(){
    document.getElementById('fertilizer11').style.display="block";
    document.getElementById('fertilizer22').style.display="block";
    document.getElementById('fertilizer33').style.display="block";
    document.getElementById('fertilizer44').style.display="block";
    document.getElementById('equipment11').style.display="none";
    document.getElementById('equipment22').style.display="none";
    document.getElementById('equipment33').style.display="none";
    document.getElementById('equipment44').style.display="none";
    document.getElementById('soil11').style.display="none";
    document.getElementById('soil22').style.display="none";
    document.getElementById('soil33').style.display="none";
    document.getElementById('soil44').style.display="none";
    document.getElementById('gallery_fertilizer').setAttribute('style', 'background: rgb(9, 196, 71);');
}
function gallery_equipment(){
    document.getElementById('fertilizer11').style.display="none";
    document.getElementById('fertilizer22').style.display="none";
    document.getElementById('fertilizer33').style.display="none";
    document.getElementById('fertilizer44').style.display="none";
    document.getElementById('equipment11').style.display="block";
    document.getElementById('equipment22').style.display="block";
    document.getElementById('equipment33').style.display="block";
    document.getElementById('equipment44').style.display="block";
    document.getElementById('soil11').style.display="none";
    document.getElementById('soil22').style.display="none";
    document.getElementById('soil33').style.display="none";
    document.getElementById('soil44').style.display="none";
    document.getElementById('gallery_equipment').setAttribute('style', 'background: rgb(9, 196, 71);');
}