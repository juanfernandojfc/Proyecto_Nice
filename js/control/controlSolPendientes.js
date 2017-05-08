/**
 * Created by Carlos Mario on 07/05/2017.
 */
/*function cargarTablaPendientes(){

    $.ajax({
        url: "/dataEmpleado",
        type: "GET",
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                var stade;
                var table = '<table class="table table-advance table-hover" id="id-tableEmp">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_archive"></i> Estado</th>'+
                    '<th><i class="icon_id-2"></i> Cédula</th>'+
                    '<th><i class="icon_profile"></i> Nombre completo</th>'+
                    '<th><i class="icon_mail_alt"></i> Correo</th>'+
                    '<th><i class="icon_cogs"></i> Acciones</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="tableEmpleado">';


                data = JSON.parse(data);
                $.each(data, function (index, item) {

                    if(item[6] == "ACTIVO"){
                        stade = "btn btn-success";
                    }else{
                        stade = "btn btn-warning";
                    }


                    table += '<tr id="row' + item[0] + '">' +
                        '<td>'+
                        '<a id="' + item[0] + '" class="'+ stade +'" onclick=estadoEmp('+item[1]+',"'+ item[6] +'")>'+ item[6] +'</a>'+
                        '</td>' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ item[3] +' '+ item[4] + '</td>' +
                        '<td>'+ item[5] +'</td>' +
                        '<td>'+ '<div>'+
                        '<a class="btn btn-primary" onclick="activateModEmp('+item[0]+')"><i class="icon_pencil-edit_alt"></i></a>'+
                        '</div>' + '</td>' +
                        '</tr>';
                });
                table+= '</tbody>'+
                    '</table>';
                $("#secTableEmp").append(table);
            }
            $("#id-tableEmp").DataTable({
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
    */