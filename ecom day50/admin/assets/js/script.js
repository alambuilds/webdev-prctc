function add_product() {
    let name = $("#name").val();
    let sku = $("#sku").val();
    let sp = $("#sp").val();
    let fp = $("#fp").val();

    if ( name.length == 0 ) {
        alert('fill name');
        return null;
    }

    $.ajax({
        url : 'backend/add_product_process.php' ,
        method : 'POST' ,
        data : { name : name , sku : sku , fp : fp , sp : sp } ,
        success : function (data) {
            if ( data == 1 ) {
                $("#msg").html(`
                    <div class="alert alert-success">
                        data inserted
                    </div>
                `);
                $("#name").val('');
                $("#sku").val('');
                $("#sp").val('');
                $("#fp").val('');
                load_product();
            } else {
                $("#msg").html(`
                    <div class="alert alert-danger">
                        error !!!
                    </div>
                `);
            }
        }
    });
}

function load_product() {
    $.ajax({
        url : 'backend/load_product_process.php' ,
        method : 'GET' ,
        success : function (res) {
            $("#product_list").html(res);
        }
    });
}

function delete_product(id) {
    if(confirm("are you sure ?")) {
        $.ajax({
            url : 'backend/delete_product_process.php' ,
            method : 'POST' ,
            data : { id : id } ,
            success : function (res) {
                if( res == 1 ) {
                    load_product();
                    $("#msg").html(`
                        <div class="alert alert-warning">
                            data deleted
                        </div>
                    `);
                } else {
                    $("#msg").html(`
                        <div class="alert alert-danger">
                            error !!!
                        </div>
                    `);
                }
            }
        }); 
    }
}

function update_product() {
    let name = $("#name").val();
    let sp = $("#sp").val();
    let fp = $("#fp").val();
    let pid = $("#pid").val();
    $.ajax({
        url : 'backend/update_product_process.php' ,
        method : 'POST' ,
        data : { name : name , fp : fp , sp : sp , pid : pid } ,
        success : function (data) {
            if ( data == 1 ) {
                alert('product updated');
                location.href = "product.php";
            } else {
                $("#msg").html(`
                    <div class="alert alert-danger">
                        error !!!
                    </div>
                `);
            }
        }
    });
}

$("#select_vendor").on("change" , function (){
    let x = this.value;
    x = x.split('-');
    $("#mobile").val( x[1] );
    $("#address").val( x[2] );
    $("#vid").val( x[0] );
});

$("#select_product").on("change" , function (){
    $("#pid").val( this.value );
});




function calculate_total() {
    let cp = $("#cp").val();
    let pqty = $("#pqty").val();
    $("#total").html(`Total = ${cp*pqty} RS`);
}


function purchase() {

}