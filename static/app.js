var cats = ["","cutiee","katty","kittie","jockiee","tin-pin"]
const catNo = cats.length;

count = [];
const list = `<tr class="row">
 <td class="col-md-12">
  <h3 class="cat_name">%%cat_Name%%</h3>
  <img class="img-responsive cats" src="static/%%cat_Name%%.jpg" alt="%%cat_Name%%" data-toggle="modal" data-target="#%%cat_Name%%">
 </td>
</tr>`;

const Modal = `<div class="modal fade" id="%%cat_Name%%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h3 class="modal-title cat_name" id="myModalLabel1">%%cat_Name%%</h4>
              </div>
              <div class="modal-body">
                  <img class="img-responsive" src="static/%%cat_Name%%.jpg" alt="%%cat_Name%%" onclick="meow(%%cat_Id%%)">
                  <h4 class="cat_name">%%cat_Name%% meowed <span id=%%cat_Name%% class="meows">0</span></h4>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
  </div>`;




for(var i = 1; i < catNo; i++) {
  count[i] = 0;
  let crntCat = list.replace(/%%cat_Name%%/g, cats[i]);
  $("table#list").append(crntCat);
  let cat_Id = Modal.replace("%%cat_Id%%", i)
  let crntCatModal = cat_Id.replace(/%%cat_Name%%/g, cats[i]);
  $("body").append(crntCatModal);

}


var meow = function(catId) {

  let cat = cats[catId];
  $(`span#${cat}`).html(++count[catId]);
}
