
  <section id="main-content">
    <section class="wrapper">
      <div class="row">
        <div class="col-lg-12">
            <h3 class="page-header"><i class="ion-document-text"></i> Lista de Compras</h3>
            <ol class="breadcrumb">
                <li><i class="ion-home"></i><a href="/user">Inicio</a></li>
                <li><i class="icon_cart"></i>Compras</li>
                <li><i class="icon_plus_alt2"><a href="/user/setCompra"></i>Registrar Nuevo</a></li>
            </ol>
        </div>
      </div>
      <div class="row">
          <div class="col-lg-12">
              <section class="panel" id="secTableCompras">
              </section>
          </div>
        </div>
    </section>
  </section>

  <div id="detalleCompra" class="modal fade" role="dialog">
      <div style="width:70%;"  class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
              <div class="modal-header" style="padding:35px 170px;">
                  <h4 style="text-align:center;" class="modal-title">Detalles de la Compra</h4>
              </div>
              <div class="modal-body">
                  <form class="form-validate form-horizontal">
                      <div class="form-group">
                          <div class="col-lg-12">
                              <section class="panel" id="secCompras">
                              </section>
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
