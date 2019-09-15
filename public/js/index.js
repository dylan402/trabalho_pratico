$(document).ready(function() {
  $('#FormUsuario button').click(function() {
    $('#FormUsuario').attr('action', $(this).prop('formAction'));
  });

  $('#FormUsuario').on('submit', function() {
    event.preventDefault();

    if (this.checkValidity() === false) {
      return false;
    }

    $.ajax({
      url: this.action,
      method: 'POST',
      data: $(this).serialize(),
      cache: false,
      dataType: 'html',
      success: response => {
        if (response === 'REGISTERED') {
          $.alert({
            title: 'Registrado com sucesso',
            content: 'Você será redirecionado para o menu inicial.',
            onClose: () => (window.location.href = '/menu'),
          });
        } else if (response === 'LOGIN') {
          window.location.href = '/menu';
        }
      },
      error: response => {
        $.alert(response.responseText, 'Erro');
      },
    });
  });
});
