
      <section id="main-content">
          <section class="wrapper">
          <div class="row">
                <div class="col-lg-12">
                    <h3 class="page-header"><i class="ion-document-text"></i> Lista de Solicitudes</h3>
                    <ol class="breadcrumb">
                        <li><i class="ion-home"></i><a href="/user">Inicio</a></li>
                    </ol>
                </div>
            </div>

              <div class="row">
                  <div class="col-lg-12">
                      <ul class="nav nav-tabs">
                          <li class="active"><a data-toggle="tab" href="#pendientes">Pendientes</a></li>
                          <li><a data-toggle="tab" href="#listaSol">Lista de solicitudes</a></li>
                      </ul>

                      <div class="tab-content">
                          <div id="pendientes" class="tab-pane fade in active">
                              <h3>PENDIENTES</h3>
                              <div class="row">
                                  <div class="col-lg-12">
                                      <section class="panel" id="secTablaPendientes">
                                      </section>
                                  </div>
                              </div>
                          </div>
                          <div id="listaSol" class="tab-pane fade">
                              <h3>LISTA DE SOLICITUDES</h3>
                              <div class="row">
                                  <div class="col-lg-12">
                                      <section class="panel" id="secTablaSolicitudes">
                                      </section>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


            </section>
      </section>

      <div id="detalleSol" class="modal fade" role="dialog">
          <div style="width:70%;"  class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content">
                  <div class="modal-header" style="padding:35px 170px;">
                      <h4 style="text-align:center;" class="modal-title">Detalles de Solicitud</h4>
                  </div>
                  <div class="modal-body">
                      <form class="form-validate form-horizontal">
                          <div class="form-group">
                              <label for="cemail" class="control-label col-lg-1">Descripción <span class="required"></span></label>
                              <div class="col-lg-4">
                                  <textarea style="resize:none;" rows="5" class="form-control" id="descripcion-pend" disabled ></textarea>
                              </div>
                          </div>
                          <div class="form-group">
                              <h5 for="cemail" class="control-label col-lg-1">Suministros</h5>
                              <div class="col-lg-8">
                                  <table class="table table-advance table-hover" id="id-sumPend">
                                      <thead>
                                      <tr>
                                          <th><i class="icon_id-2"></i> Referencia</th>
                                          <th><i class="icon_folder"></i> Nombre</th>
                                          <th><i class="icon_datareport"></i> Cantidad</th>
                                          <th><i class="icon_ribbon"></i> Tipo</th>
                                          </tr>
                                      </thead>
                                      <tbody id="sumPend">
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>
                  </div>
              </div>

          </div>
      </div>
