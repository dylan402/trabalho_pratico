$('form.ajax button').click(function () {
    $('form.ajax').attr('action', $(this).prop('formAction'));
});

$('form.ajax').on('submit', (event) => {

    const form = $('form.ajax');

    if (form[0].checkValidity() === false) {
        return false;
    }

    event.preventDefault();

    const url = form.attr('action'),
        method = form.attr('method'),
        data = {};

    $("input").each((index, value) => {
        data[value.name] = value.value;
    });

    $.ajax({
        url,
        method,
        data,

        success: (res) => {

            const baseURL = $(location).attr('href').substr(0, $(location).attr('href').length - 1);
            const loginURL = (baseURL + $('#loginSubmit').attr('formAction')).toString();

            if (url === loginURL) {
                window.location.href = '/menu';
            } else {
                $('#registerModalText').text("Muito bem, você foi cadastrado com sucesso!");
                $('#registerModal').modal('show');
            }
        },

        error: (res) => {
            $('#registerModalText').text(res.responseJSON.error);
            $('#registerModal').modal('show');
        },
    });
});