function add_product() {
    let name = $("#name").val();
    let sku = $("#sku").val();
    let sp = $("#sp").val();
    let fp = $("#fp").val();
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