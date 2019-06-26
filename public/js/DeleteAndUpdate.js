// DELETE FORM

$('form.delete').on('submit', function (event) {
    event.preventDefault();

    $.post({
        url: this.action,

        success: (res) => {
            $('#deleteModalText').text("Você deletou um veículo com sucesso.");
            $('#deleteModal').modal('show');
        },

        error: (res) => {
            $('#deleteModalText').text(res.responseJSON.error);
            $('#deleteModal').modal('show');
        },
    });
});

$('#deleteModal').on('hidden.bs.modal', function () {
    window.location.reload();
});

// UPDATE FORM

$('form.update').on('submit', function (event) {
    event.preventDefault();

    const data = {};

    $('input:text, input:checked, select').each((index, value) => {
        data[value.name] = value.value;
    });

    $.post({
        url: this.action,
        data,

        success: (res) => {
            $('#updateModalText').text("Você atualizou um veículo com sucesso.");
            $('#updateModal').modal('show');
        },

        error: (res) => {
            $('#updateModalText').text(res.responseJSON.error);
            $('#updateModal').modal('show');
        },
    });
});

$('#updateModal').on('hidden.bs.modal', function () {
    window.location.href = '/menu';
});