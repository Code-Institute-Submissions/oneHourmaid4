$(document).ready(function () {

    // SHOWS AND HIDES INFO ON MAPS API PAGE
    $(".open_close_info_button").click(openSideInfo);

    function openSideInfo() {
        $(".slide_info").animate({
            height: "85%",
        }, 200);
        $(".chosen_service_wrap").css("visibility", "visible");
        $(".tap_for_map").animate({
            opacity: "1",
        }, 2000);
        $(".open_close_info_button").fadeOut("fast");

    }

    $(".tap_for_map").click(closeSideInfo);

    function closeSideInfo() {
        $(".slide_info").animate({
            height: "5%",
        });
        $(".chosen_service_wrap").css("visibility", "hidden");
        $(".open_close_info_button").fadeIn("fast");


    }

    // DELAYS APPEARANCE IN DESKTOP VIEW

    function fadeInOnload() {
        $("#user_name_input,.cleaner_will_be_wrap, .moving_details_title, .basic_clean_wrap__desktop, .button_wrap__ipad, .next_prev_button_wrap, .how_many_rooms_title, .location_details_title, .counter_opacity1").animate({
            opacity: "1",
        }, 1000);
        $("#users_street_address, .your_service_wrap,.cleaning_location_title__movingform, .deep_clean_wrap__desktop, .cleaning_location_title, .counter_opacity2").animate({
            opacity: "1",
        }, 2000);
        $("#users_town_city, .your_service_rooms_wrap,#submit_button__movingform, .submit_form_button, .moving_in_out_wrap__desktop, .counter_opacity3").animate({
            opacity: "1",
        }, 3000);
        $("#users_booked_date").animate({
            opacity: "1",
        }, 4000);
        $("#users_booked_date,.bottom_wrap__desktop").animate({
            opacity: "1",
        }, 5000);
    }
    window.onload = fadeInOnload();

    function addBorders() {
        $(".left_border, .right_border").delay(500).animate({
            width: "50px",
        }, 1000);
        $("#chosen_cleaner, .cleaner_avatar__cib").animate({
            opacity: "1",
        }, 5000);
        $(".chosen_cleaner__wrap").animate({
            borderLeftWidth: "4px",
            borderRightWidth: "4px",
        }, 500);
    }
    window.onload = addBorders();


    // SHOWS AND HIDES POP UP ON MAPS API PAGE


    $(".cancel_cleaner_button").click(showPopUp);

    function showPopUp() {
        $(".cancel_cleaner_wrap").css("visibility", "visible");
        $(".cancel_cleaner_popup").animate({
            opacity: "1",
        });
        $(".slide_info").animate({
            height: "5%",
        });
        $(".chosen_service_wrap").css("visibility", "hidden");

    }

    $(".cancel_cleaner_no").click(closePopup);

    function closePopup() {
        $(".cancel_cleaner_popup").animate({
            opacity: "0",
        });

        $(".cancel_cleaner_wrap").delay(2000).css("visibility", "hidden");
    }

    $(".cancel_cleaner_yes").click(cancelCleaner);

    function cancelCleaner() {
        window.location.href = "index.html";
    }



    // INCREMENTS ROOMS BY 1

    $('#addBedroom').click(function () {
        $('#rooms_amount_bedroom').get(0).value++;
    });

    $('#subtractBedroom').click(function () {
        var currentValue = $('#rooms_amount_bedroom').get(0).value;
        if (currentValue == 0) return;
        $('#rooms_amount_bedroom').get(0).value--;
    });


    $('#addBathroom').click(function () {
        $('#rooms_amount_bathrooms').get(0).value++;
    });

    $('#subtractBathroom').click(function () {
        var currentValue = $('#rooms_amount_bathrooms').get(0).value;
        if (currentValue == 0) return;
        $('#rooms_amount_bathrooms').get(0).value--;
    });


    $('#addKitchen').click(function () {
        $('#rooms_amount_kitchens').get(0).value++;
    });

    $('#subtractKitchen').click(function () {
        var currentValue = $('#rooms_amount_kitchens').get(0).value;
        if (currentValue == 0) return;
        $('#rooms_amount_kitchens').get(0).value--;
    });


});

// grabs the type of service chosen on index page
// and displays in top slide down menu...maps.html
var value1 = localStorage.getItem('input1');
var value2 = localStorage.getItem('input2');
var value3 = localStorage.getItem('input3');
document.getElementById('chosen_service__room_types')
    .innerHTML = `Bedrooms: ${value1}<br>Bathrooms: ${value2}<br>Kitchens: ${value3}`;

var setBasicClean = localStorage.getItem("basicClean");
var setDeepClean = localStorage.getItem("deepClean");
var setMovingInOut = localStorage.getItem("movingInOut");
document.getElementById("chosen_service").innerHTML =
    `${setBasicClean}`;



// MAPS API WITH STYLES

var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: true, //DISABLES GOOGLE MAPS DEFAULT FUNCTIONS
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 18,
        disableDefaultUI: true, //DISABLES GOOGLE MAPS DEFAULT FUNCTIONS
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: 'transparent'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#000000',
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#98A139'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#228B22'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#EDC681'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#000000',
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#318DB4'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
        ]
    });
    infoWindow = new google.maps.InfoWindow;


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}