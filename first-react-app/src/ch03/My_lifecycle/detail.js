//酒店设施显示控制
if(data.facilities){
    var facArr = data.facilities.split(",");
}
if(data.generalAmenities){
    var genArr = data.generalAmenities.split(",");
}
if(facArr&&!genArr){
    var facgenArr = facArr;
}else if(!facArr&&genArr){
    var facgenArr = genArr;
}else if(facArr&&genArr){
    var facgenArr = facArr.concat(genArr);
}
if(facgenArr){
    var facilitiesHTML = "<div class='clearfix' id='facilities'><div class='tag'><img src='../../images/hotel/facilities.png'>基本设施</div><ul class='clearfix'>";
    $.each(facgenArr, function (index, value) {
        facilitiesHTML += ("<li>"+value+"</li>");
    });
    facilitiesHTML += "</ul></div>";
    $("#facility").append(facilitiesHTML);
    if(facgenArr.length > 20){
        $("#facilities").addClass('fold-info');
        var moreHTML = "<span class='more-info'>更多简介<img src='../../images/hotel/more_info.png'></span>";
        $("#facilities").after(moreHTML);
    }
}
$("#facility .more-info").click(function(){
    if($("#facilities").hasClass("fold-info")){
        $("#facilities").removeClass("fold-info");
        $("#facility .more-info").html("收起简介<img src='../../images/hotel/more_info_r.png'>");
    }else{
        $("#facilities").addClass("fold-info");
        $("#facility .more-info").html("更多简介<img src='../../images/hotel/more_info.png'>");
    }
});
if(data.recreationAmenities){
    var recreationAmenitiesHTML = "<div class='clearfix' id='recreationAmenities'><div class='tag'><img src='../../images/hotel/recreationAmenities.png'>休闲娱乐</div><ul>";
    var arr = data.recreationAmenities.split(",");
    $.each(arr, function (index, value) {
        recreationAmenitiesHTML += ("<li>"+value+"</li>");
    });
    recreationAmenitiesHTML += "</ul></div>";
    $("#facility").append(recreationAmenitiesHTML);
}
if(data.serviceAmenities){
    var serviceAmenitiesHTML = "<div class='clearfix' id='serviceAmenities'><div class='tag'><img src='../../images/hotel/serviceAmenities.png'>酒店服务</div><ul>";
    var arr = data.serviceAmenities.split(",");
    $.each(arr, function (index, value) {
        serviceAmenitiesHTML += ("<li>"+value+"</li>");
    });
    serviceAmenitiesHTML += "</ul></div>";
    $("#facility").append(serviceAmenitiesHTML);
}