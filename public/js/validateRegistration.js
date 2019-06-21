$('form.ajax button').click(function () {
    $('form.ajax').attr('action', $(this).prop('formAction'));
});

$('form.ajax').on('submit', (event) => {
    event.preventDefault();

    console.log($(location).attr('href'));

    let url = $('form.ajax').attr('action'),
        method = $('form.ajax').attr('method'),
        data = {};

    $("input").each((index, value) => {
        data[value.name] = value.value;
    });

    $.ajax({
        url: url,
        method: method,
        data: data,
        success: (response) => {

            const baseURL = $(location).attr('href').substr(0, $(location).attr('href').length - 1);
            const loginURL = (baseURL + $('#loginSubmit').attr('formAction')).toString();

            if (url === loginURL) {
                window.location.href = '/menu';
            } else {
                $('#registerModalText').text("Muito bem, você foi cadastrado com sucesso!");
                $('#registerModal').modal('show');
            }
        },
        error: (response) => {
            $('#registerModalText').text(response.responseJSON.error);
            $('#registerModal').modal('show');
        },
    }).done(() => {
        console.log("Informações enviadas.");
    }).fail(() => {
        console.log("Falha ao registrar-se.");
    });
});