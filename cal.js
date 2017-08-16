$(document).ready(function(){
  for (var o in swr_type_master){
    $("#swr_type").append("<option value='"+o+"'>"+swr_type_master[o]+"</option>");
  };
  
  for (var o in field_master){
    $("#map").append("<option value='"+o+"'>"+field_master[o]+"</option>");
  };
  
  $("#swr_type").change(function(){
    $("#swr_level").empty();
    $("#tar_swr_level").empty();
    var level = swr_level_master[$('#swr_type').val()];
    for (var o in level){
      $("#swr_level").append("<option value='"+level[o].split(",")[1]+"'>"+level[o].split(",")[0]+"</option>");
      $("#tar_swr_level").append("<option value='"+level[o].split(",")[1]+"'>"+level[o].split(",")[0]+"</option>");
    };
  });
  
  $("#swr_level").change(function(){
    var diff = $('#tar_swr_level').val() - $('#swr_level').val();
    $("#req_exp").text(toThousands(diff));
  });
  
  $("#tar_swr_level").change(function(){
    var diff = $('#tar_swr_level').val() - $('#swr_level').val();
    $("#req_exp").text(toThousands(diff));
  });
  
  $("#map").change(function(){
    var exp = exp_master[$('#map').val()];
    $("#nor_exp").text(exp.nor_exp);
    $("#ave_exp").text(exp.ave_exp);
    $("#boss_exp").text(exp.boss_exp);
    var base = $('#tar_swr_level').val() - $('#swr_level').val();
    $("#r1").text(Math.ceil( base / (exp.ave_exp*3.6)));
    $("#r2").text(Math.ceil( base / (exp.ave_exp*2.4)));
    $("#r3").text(Math.ceil( base / (exp.ave_exp*1.8)));
    $("#r4").text(Math.ceil( base / (exp.ave_exp*1.2)));
  });
});

function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
};