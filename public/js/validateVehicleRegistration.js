$('form.ajax').on('submit', (event) => {

    const form = $('form.ajax');

    if (form[0].checkValidity() === false) {
        return false;
    }

    event.preventDefault();

    const url = form.attr('action'),
        method = form.attr('method'),
        data = {};

    $('input:text, input:checked, select').each((index, value) => {
        data[value.name] = value.value;
    });

    $.ajax({
        url: url,
        method: method,
        data: data,

        success: (res) => {
            $('#registerModalText').text("Muito bem, veículo cadastrado com sucesso!");
            $('#registerModal').modal('show');
        },

        error: (res) => {
            $('#registerModalText').text(res.responseJSON.error);
            $('#registerModal').modal('show');
        }
    });
});

$('#registerModal').on('hidden.bs.modal', function () {
    window.location.reload();
});