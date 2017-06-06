/**
 * Created by josejimenez on 6/06/17.
 */

function cargarTablaCompras(){
    $.ajax({
        url: "/dataCompras",
        type: "GET",
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                var table = '<table class="table table-advance table-hover" id="id-tableCompras">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_calendar"></i> Fecha</th>'+
                    '<th><i class="icon_building"></i> Proveedor</th>'+
                    '<th><i class="icon_tag"></i> Valor total ($)</th>'+
                    '<th><i class="icon_cogs"></i> Acciones</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="tableCompras">';


                data = JSON.parse(data);
                $.each(data, function (index, item) {

                    table += '<tr id="row' + item[0] + '">' +
                        '<td>'+ item[1] +'</td>' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ item[3] +'</td>' +
                        '<td>'+ '<div>'+
                        '<a class="btn btn-info" onclick="activateModCompra('+item[0]+')"><i class="icon_lock-open"></i></a>'+
                        '</div>' + '</td>' +
                        '</tr>';
                });
                table+= '</tbody>'+
                    '</table>';
                $("#secTableCompras").append(table);
            }
            $("#id-tableCompras").DataTable({
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

function activateModCompra(id){
    $("#detalleCompra").modal();
    $("#secCompras").empty();

    $.ajax({
        url: "/dataDetalleCompra",
        type: "POST",
        data:{'id': id},
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                var table = '<table class="table table-advance table-hover" id="id-sumCompra">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_id-2"></i> Referencia</th>'+
                    '<th><i class="icon_folder"></i> Nombre</th>'+
                    '<th><i class="icon_datareport"></i> Cantidad</th>'+
                    '<th><i class="icon_tag"></i> Valor unitario ($)</th>'+
                    '<th><i class="icon_ribbon"></i> Tipo</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="sumPend">';

                data = JSON.parse(data);

                $.each(data, function (index, item) {

                    table += '<tr id="row' + item[1] + '">' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ item[3] +'</td>' +
                        '<td>'+ item[4] +'</td>' +
                        '<td>'+ item[6] +'</td>' +
                        '<td>'+ item[5] +'</td>' +
                        '</tr>';
                });

                table+= '</tbody>'+
                    '</table>';
                $("#secCompras").append(table);

            }
        }
    });
}


$(function () {
    cargarTablaCompras();

});