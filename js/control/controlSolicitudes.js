/**
 * Created by Carlos Mario on 2/12/2016.
 */
function cargarTablaPend(){

    $.ajax({
        url: "/dataPendientes",
        type: "GET",
        cache: "false",
        success: function (data) {
            if (data == "") {
                var n = '<h1>NO HAY SOLICITUDES PENDIENTES</h1>';
                $("#secTablaPendientes").append(n);
            } else {

                var table = '<table class="table table-advance table-hover" id="id-tablePend">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_id"></i> ID</th>'+
                    '<th><i class="icon_calendar"></i> Fecha</th>'+
                    '<th><i class="icon_building"></i> Dependencia</th>'+
                    '<th><i class="icon_tag"></i> Tipo solicitud</th>'+
                    '<th><i class="icon_cogs"></i> Acciones</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="tablePend">';


                data = JSON.parse(data);
                $.each(data, function (index, item) {

                    table += '<tr id="row' + item[0] + '">' +
                        '<td>'+ item[0] +'</td>' +
                        '<td>'+ item[3] +'</td>' +
                        '<td>'+ item[1] +'</td>' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ '<div>'+
                        '<a class="btn btn-success" onclick="activateModPend('+item[0]+')"><i class="icon_lock-open"></i></a>'+
                        '</div>' + '</td>' +
                        '</tr>';
                });
                table+= '</tbody>'+
                    '</table>';
                $("#secTablaPendientes").append(table);
            }
            $("#id-tablePend").DataTable({
                "language": {
                    "search": "<span>Filtrar:</span>",
                    "paginate": {'first': 'Primero', 'last': 'Ultimo', 'next': 'Siguiente', 'previous': 'Anterior'},
                    "lengthMenu": "Mostrando  _MENU_  Registros",
                    "zeroRecords": "No hay Informacion disponible",
                    "info": "Mostrando _PAGE_ de _PAGES_",
                    "infoEmpty": "No se encontraron datos",
                    "infoFiltered": "(Filtrado de un total de _MAX_ registros)"
                }
            });
        }
    });

}

function cargarTablaSolicitud(){
    $.ajax({
        url: "/dataSolicitudes",
        type: "GET",
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                var stade;
                var table = '<table class="table table-advance table-hover" id="id-tableSolicitudes">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_archive"></i> Estado</th>'+
                    '<th><i class="icon_id"></i> ID</th>'+
                    '<th><i class="icon_calendar"></i> Fecha</th>'+
                    '<th><i class="icon_calendar"></i> F. Entrega</th>'+
                    '<th><i class="icon_building"></i> Dependencia</th>'+
                    '<th><i class="icon_tag"></i> Tipo solicitud</th>'+
                    '<th><i class="icon_cogs"></i> Acciones</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="tablePend">';


                data = JSON.parse(data);
                $.each(data, function (index, item) {

                    switch(item[1]){
                        case "PENDIENTE":
                            stade = "btn btn-warning";
                            break;

                        case "DENEGADA":
                            stade = "btn btn-danger";
                            break;

                        case "COMPLETA":
                            stade = "btn btn-success";
                            break;
                    }

                    if(item[3]===null){
                        item[3] = "SIN REALIZAR";
                    }

                    table += '<tr id="row' + item[0] + '">' +
                        '<td>'+
                        '<a class="'+ stade +'" disabled>'+ item[1] +'</a>'+
                        '</td>' +
                        '<td>'+ item[0] +'</td>' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ item[3] +'</td>' +
                        '<td>'+ item[4] +'</td>' +
                        '<td>'+ item[5] +'</td>' +
                        '<td>'+ '<div>'+
                        '<a class="btn btn-success" onclick="activateModSol('+item[0]+')"><i class="icon_lock-open"></i></a>'+
                        '</div>' + '</td>' +
                        '</tr>';
                });
                table+= '</tbody>'+
                    '</table>';
                $("#secTablaSolicitudes").append(table);
            }

        }
    });
}

function activateModPend(id){
    $("#detallePend").modal();
    $("#secPenDetalle").empty();
    $("#idSolicitud").val(id);

    $.ajax({
        url: "/dataDetalleSol",
        type: "POST",
        data:{'id': id},
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                var table = '<table class="table table-advance table-hover" id="id-sumPend">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_id-2"></i> Referencia</th>'+
                    '<th><i class="icon_folder"></i> Nombre</th>'+
                    '<th><i class="icon_datareport"></i> Cantidad</th>'+
                    '<th><i class="icon_ribbon"></i> Tipo</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="sumPend">';

                data = JSON.parse(data);
                $("#descripcion-pend").val(data[0][6]);

                $.each(data, function (index, item) {

                    table += '<tr id="row' + item[1] + '">' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ item[3] +'</td>' +
                        '<td>'+ item[4] +'</td>' +
                        '<td>'+ item[5] +'</td>' +
                        '</tr>';
                });

                table+= '</tbody>'+
                        '</table>';
                $("#secPenDetalle").append(table);

            }
        }
    });

}

function activateModSol(id){
    $("#detalleSol").modal();
    $("#secSolicitud").empty();

    $.ajax({
        url: "/dataDetalleSol",
        type: "POST",
        data:{'id': id},
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                var table = '<table class="table table-advance table-hover" id="id-sumSol">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_id-2"></i> Referencia</th>'+
                    '<th><i class="icon_folder"></i> Nombre</th>'+
                    '<th><i class="icon_datareport"></i> Cantidad</th>'+
                    '<th><i class="icon_ribbon"></i> Tipo</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="sumSolicitud">';

                data = JSON.parse(data);
                $("#descripcion-sol").val(data[0][6]);

                $.each(data, function (index, item) {

                    table += '<tr id="row' + item[1] + '">' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ item[3] +'</td>' +
                        '<td>'+ item[4] +'</td>' +
                        '<td>'+ item[5] +'</td>' +
                        '</tr>';
                });

                table+= '</tbody>'+
                    '</table>';
                $("#secSolicitudes").append(table);

            }
        }
    });
}

function denegarSolicitud(){

    swal({
            title: "¿Desea rechazar la solicitud?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4cd964",
            cancelButtonText: "No",
            confirmButtonText: "Sí, deseo hacerlo",
            closeOnConfirm: false
        },
        function(){
            idSol=$("#idSolicitud").val();

            $.ajax({
                url: "/denSolicitud",
                type: "POST",
                data:{'id': idSol},
                cache: "false",
                success: function (data) {
                    if(data=="1"){
                        swal("¡HECHO!","¡Solicitud Rechazada!","success");
                        $("#secTablaSolicitudes").empty();
                        $("#secTablaPendientes").empty();
                        cargarTablaSolicitud();
                        cargarTablaPend();
                    }else{
                        swal("ERROR",data,"error");
                    }
                }
            });
        });

}

function aceptarSolicitud(){

    swal({
            title: "¿Desea Aceptar la solicitud?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4cd964",
            cancelButtonText: "No",
            confirmButtonText: "Sí, deseo hacerlo",
            closeOnConfirm: false
        },
        function(){
            idSol=$("#idSolicitud").val();

            $.ajax({
                url: "/confirmSolicitud",
                type: "POST",
                data:{'id': idSol},
                cache: "false",
                success: function (data) {
                    if(data=="1"){
                        swal("¡HECHO!","¡Solicitud Completa!","success");
                        $("#secTablaSolicitudes").empty();
                        $("#secTablaPendientes").empty();
                        cargarTablaSolicitud();
                        cargarTablaPend();
                    }else{
                        swal("ERROR",data,"error");
                    }

                    console.log(data);
                }
            });
        });
}

$(function () {
    cargarTablaPend();
    cargarTablaSolicitud();

});